import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { staticAllData } from "./utils/data";

export const Context = createContext();

export function GlobalProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [login, setLogin] = useState(null);
  const [bookings, setBookings] = useState(null);
  const [sheduledServices, setSheduledServices] = useState([]);
  const [mechanicalRepairs, setMechanicalRepairs] = useState([]);
  const [valueAddedServices, setValueAddedServices] = useState([]);
  const [cartData, setCartData] = useState([]);

  //import.meta.env.VITE_REACT_APP_SERVER_PROXY
  const getLocalStorage = () => {
    const data = localStorage.getItem("profile");
    return data ? JSON.parse(data) : null;
  };

  const getLocalStorageCart = () => {
    const data = localStorage.getItem("cartData");
    return data ? JSON.parse(data) : [];
  };

  // const visibleTodos = useMemo(() => {
  //   filterTodos(todos, tab);
  // }, [todos, tab]);

  const getFrmLS = () => {
    const lsData = getLocalStorage();
    if (lsData) {
      setLogin(lsData);
    }
  };

  useEffect(() => {
    getFrmLS();
  }, []);

  useEffect(() => {
    const lsCart = getLocalStorageCart();
    setCartData(lsCart);
    fetchAllServices();
    getBookings();
  }, [login]);

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
          import.meta.env.VITE_SERVER_PROXY + url,
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
        notify(err.message, false);
        return err;
      }
    } else if (method == "post") {
      try {
        const response = await axios.post(
          import.meta.env.VITE_SERVER_PROXY + url,
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
        notify(response.data.message, true);
        return response;
      } catch (err) {
        notify(err.message, false);
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
        // const response = await fetchFunc("get", "/gc/getAllServices", {});
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
    setCartData([...cartData, data]);
    localStorage.setItem("cartData", JSON.stringify([...cartData, data]));
    notify("item added to cart", true);
  };

  const removeFromCart = (data) => {
    const updatedCart = cartData.filter((item) => item.id !== data.id);
    localStorage.setItem("cartData", JSON.stringify(updatedCart));
    setCartData(updatedCart);
    notify("item Removed From cart", true);
  };

  const postBooking = async (preferred) => {
    if (!preferred.time || !preferred.date) {
      notify("Please select preferred Date and Time", false);
      return false;
    }
    if (cartData.length > 0) {
      let bod = cartData.map((item) => {
        return item.id;
      });

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
          notify(response.data, true);
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
        notify("you booking has cancelled", true);
        getBookings();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const logoutFunc = () => {
    setLogin(null);
    setCartData([]);
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
        "http://82.112.226.128:8000/" +
        camel.charAt(0).toUpperCase() +
        camel.slice(1) +
        ".png";
      // Capitalize the first letter of the entire camel case string
      return joined;
    } else {
      return "/icon-not-found.png";
    }
  };

  return (
    <Context.Provider
      value={{
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
