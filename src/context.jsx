import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { staticAllData } from "./utils/data";
import { latLng } from "leaflet";

export const Context = createContext();

export function GlobalProvider({ children }) {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [loading, setLoading] = useState(true);
  const [login, setLogin] = useState(null);
  const [bookings, setBookings] = useState(null);
  const [sheduledServices, setSheduledServices] = useState([]);
  const [mechanicalRepairs, setMechanicalRepairs] = useState([]);
  const [valueAddedServices, setValueAddedServices] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [currentModel, setCurrentModel] = useState(null);

  const setLocalStorage = (data) => {
    localStorage.setItem("profile", JSON.stringify(data));
  };

  const getLocalStorage = () => {
    const data = localStorage.getItem("profile");
    return data ? JSON.parse(data) : null;
  };

  const getLocalStorageCart = () => {
    const data = localStorage.getItem("cartData");
    return data ? JSON.parse(data) : [];
  };

  const upLocationFunc = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });

          updateLocation(position.coords.latitude, position.coords.longitude);
          console.log("Fetched location");
        },

        (err) => {
          setError(err.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };

  const getFrmLS = () => {
    const lsData = getLocalStorage();
    if (lsData) {
      setLogin({ ...lsData, userLatLng: null });
    }
  };

  useEffect(() => {
    getFrmLS();
  }, []);

  useEffect(() => {
    const lsCart = getLocalStorageCart();
    setCartData(lsCart);
    fetchAllServices();
  }, [login?.mobile]);

  useEffect(() => {
    upLocationFunc();
    getBookings();
  }, [login?.mobile]);

  const notify = (msg, success) => {
    if (success) {
      toast.success(msg);
    } else {
      toast.error(msg);
    }
  };

  const fetchFunc = async (method, url, body) => {
    setLoading(true);
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    };

    if (method == "get") {
      try {
        const response = await axios.get(
          // import.meta.env.VITE_SERVER_PROXY + url,
          "https://todo-proxy-setup.vercel.app/api" + url,
          // "http://82.112.226.128:8099" + url,
          {
            headers: url.includes("/ac")
              ? headers
              : {
                  ...headers,
                  Authorization: `Bearer ${login.token}`,
                },
          }
        );
        setLoading(false);
        return response;
      } catch (err) {
        console.log(err);
        setLoading(false);
        notify(err.message, false);
        return err;
      }
    } else if (method == "post") {
      try {
        const response = await axios.post(
          // import.meta.env.VITE_SERVER_PROXY + url,
          "https://todo-proxy-setup.vercel.app/api" + url,
          // "http://82.112.226.128:8099" + url,
          body,
          {
            headers: url.includes("/ac")
              ? headers
              : {
                  ...headers,
                  Authorization: `Bearer ${login.token}`,
                },
          }
        );
        setLoading(false);
        // notify(response.data.message, true);
        return response;
      } catch (err) {
        notify(err.message, false);
        setLoading(false);
        return err;
      }
    }
  };

  const getMRdata = async (serviceName) => {
    if (serviceName) {
      try {
        const response = await fetchFunc(
          "get",
          `/gc/getServicesForCategory?category=${serviceName}`,
          {}
        );
        if (response?.status === 200) {
          return response.data;
        } else {
          console.warn("Unexpected response status:", response.status);
        }
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    } else {
      console.warn("No serviceName provided");
    }
  };

  const getMRDetails = async (serviceDetailsName) => {
    if (serviceDetailsName) {
      try {
        const response = await fetchFunc(
          "get",
          `/gc/getServiceDetails?model=Ntorq&serviceName=${serviceDetailsName}`,
          {}
        );
        if (response?.status === 200) {
          return response.data;
        } else {
          console.warn("Unexpected response status:", response.status);
        }
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    } else {
      console.warn("No serviceDetailsName provided");
    }
  };

  const fetchAllServices = async () => {
    if (login) {
      try {
        const REresponse = await fetchFunc("get", "/gc/getAllServices", {});
        const response = staticAllData;
        // if (response.status === 200) {
        if (response) {
          const scheduledServices = [];
          const mechanicalRepairs = [];
          const valueAddedServices = [];
          // response.data?.forEach((service) => {
          response.forEach((service) => {
            const updatedService = { ...service };

            if (service.type === "ScheduledService") {
              scheduledServices.push(updatedService);
            } else if (service.type === "MechanicalRepairs") {
              mechanicalRepairs.push(updatedService);
            } else if (service.type === "ValueAddedServices") {
              valueAddedServices.push(updatedService);
            }
          });

          setSheduledServices(scheduledServices);
          setMechanicalRepairs(mechanicalRepairs);
          setValueAddedServices(valueAddedServices);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const addToCart = (data) => {
    const present = cartData.find((item) => {
      return data.id == item.id; // Use strict equality to compare IDs
    });

    if (!present) {
      setCartData([...cartData, data]);
      localStorage.setItem("cartData", JSON.stringify([...cartData, data]));
    } else {
      // notify("Item Already Present in Cart", false);
    }
  };

  const removeFromCart = (data) => {
    const updatedCart = cartData.filter((item) => item.id !== data.id);
    localStorage.setItem("cartData", JSON.stringify(updatedCart));
    setCartData(updatedCart);
  };

  const postBooking = async (preferred) => {
    if (!preferred.time || !preferred.date) {
      notify("Please select preferred Date and Time", false);
      return false;
    }
    if (!login.userLatLng) {
      notify("Please Set your current location", false);
      return false;
    }

    if (cartData.length > 0) {
      let bod = cartData.map((item) => {
        return item.id;
      });

      // console.log({
      //   mobile: login.mobile,
      //   model: login.model_name,
      //   preferredDate: preferred.date,
      //   preferredTime: preferred.time,
      //   cart: bod,
      //   bookingPoint: login.userLatLng,
      // });

      // return false;
      try {
        const response = await fetchFunc("post", "/gc/bookService", {
          mobile: login.mobile,
          model: login.model_name,
          preferredDate: preferred.date,
          preferredTime: preferred.time,
          cart: bod,
          bookingPoint: login.userLatLng,
        });
        if (response.status === 200) {
          // notify(response.data, true);
          getBookings();
          setCartData([]);
          localStorage.removeItem("cartData");
          return true;
        } else {
          notify("Something went wrong while booking", false);
        }
      } catch (err) {
        console.log(err);
        return false;
      }
    } else {
      notify("The Cart Has No items...", false);
      return false;
    }
  };

  const getBookings = async () => {
    try {
      const response = await fetchFunc(
        "get",
        `/gc/getBookingsForUser?userId=${login.mobile}`
      );
      if (response.status === 200) {
        if (response.data.length > 0) {
          setBookings(response.data);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  const cancelBookings = async (num) => {
    try {
      const response = await fetchFunc("get", `/gc/cancelBooking?id=${num}`);
      if (response.status === 200) {
        //  notify("you booking has cancelled", true);
        getBookings();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const logoutFunc = () => {
    setLocation({ latitude: null, longitude: null });
    setLogin(null);
    setCartData([]);
    setBookings(null);
    localStorage.removeItem("cartData");
    localStorage.removeItem("profile");
    toast.success("logged out successfully");
    return true;
  };
  const totalPrice = (data) => {
    data.reduce((total, product) => {
      return total + product.price;
    }, 0);
  };

  const getImgUrl = (str) => {
    if (str != "") {
      const result = str
        .trim() // Remove leading or trailing whitespace
        .split(" ") // Split the string into an array by spaces
        .join("_"); // Join the array with underscores

      return result + ".png"; // Append .png to the result
    } else {
      return "/icon-not-found.png";
    }
  };

  const getCamelImgUrl = (str) => {
    if (str != "") {
      const camel = str
        .trim() // Remove leading or trailing whitespace
        .split(" ") // Split the string into an array by spaces
        .map(
          (word, index) =>
            index === 0
              ? word.toLowerCase() // Lowercase the first word
              : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() // Capitalize the first letter of the rest
        )
        .join(""); // Join the array back into a single string

      const joined =
        "https://justtodo.in/services/" +
        camel.charAt(0).toUpperCase() +
        camel.slice(1) +
        ".png";
      // Capitalize the first letter of the entire camel case string
      return joined;
    } else {
      return "/icon-not-found.png";
    }
  };

  const updateModel = async (body) => {
    try {
      const response = await fetchFunc("post", `/gc/addVehicleToUser`, body);
      if (response.status === 200) {
        // notify("your Model has added", true);
        setLogin({
          ...login,
          model_Name: body.model,
          models: [...login.models, body.model],
        });
        setLocalStorage({
          ...login,
          model_Name: body.model,
          models: [...login.models, body.model],
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  const updateLocation = async (lat, long) => {
    if (lat) {
      try {
        const response = await fetchFunc("post", `/gc/changeAddress`, {
          mobile: login.mobile,
          latlng: lat + "|" + long,
        });
        if (response.status === 200) {
          setLogin({
            ...login,
            userLatLng: lat + "|" + long,
          });
          setLocalStorage({
            ...login,
            userLatLng: lat + "|" + long,
          });

          return true;
        }
      } catch (err) {
        console.log(err);
        return false;
      }
    } else {
      notify("Please Ture ON your GPS or Allow Location Access", false);
      return false;
    }
  };

  return (
    <Context.Provider
      value={{
        updateLocation,
        updateModel,
        currentModel,
        setCurrentModel,
        location,
        setLocation,
        getCamelImgUrl,
        getImgUrl,
        totalPrice,
        cancelBookings,
        getLocalStorage,
        fetchAllServices,
        login,
        setLogin,
        mechanicalRepairs,
        valueAddedServices,
        sheduledServices,
        fetchFunc,
        notify,
        getMRdata,
        getMRDetails,
        cartData,
        setCartData,
        addToCart,
        removeFromCart,
        postBooking,
        bookings,
        setBookings,
        loading,
        getBookings,
        setLoading,
        logoutFunc,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(Context);
};
