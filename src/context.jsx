import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Context = createContext();

export function GlobalProvider({ children }) {
  const [login, setLogin] = useState(null);
  const [bookings, setBookings] = useState(null);
  const [sheduledServices, setSheduledServices] = useState([]);
  const [mechanicalRepairs, setMechanicalRepairs] = useState([]);
  const [valueAddedServices, setValueAddedServices] = useState([]);
  const [cartData, setCartData] = useState([]);

  const getLocalStorage = () => {
    const data = localStorage.getItem("profile");
    return data ? JSON.parse(data) : null;
  };

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
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    };

    if (method == "get") {
      try {
        if (url.includes("/ac")) {
          const response = await axios.get(
            import.meta.env.VITE_SERVER_PORT + url,
            {
              headers,
            }
          );
          return response;
        } else {
          const response = await axios.get(
            import.meta.env.VITE_SERVER_PORT + url,
            {
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${login.token}`,
              },
            }
          );
          return response;
        }
      } catch (err) {
        console.log(err);
        notify(err.message, false);
        return err;
      }
    } else if (method == "post") {
      try {
        if (url.includes("/ac")) {
          const response = await axios.post(
            import.meta.env.VITE_SERVER_PORT + url,
            body,
            {
              headers,
            }
          );
          notify(response.data.message, true);
          return response;
        } else {
          const response = await axios.post(
            import.meta.env.VITE_SERVER_PORT + url,
            body,
            {
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${login.token}`,
              },
            }
          );
          notify(response.data.message, true);
          return response;
        }
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
        const response = await fetchFunc("get", "/gc/getAllServices", {});
        if (response.status === 200) {
          const scheduledServices = [];
          const mechanicalRepairs = [];
          const valueAddedServices = [];

          response.data?.forEach((service) => {
            const updatedService = { ...service, icon: "icon-not-found.png" };

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
    notify("item added to cart", true);
    console.log(cartData);
  };

  const removeFromCart = (data) => {
    const updatedCart = cartData.filter((item) => item.id !== data.id);
    setCartData(updatedCart);
    notify("item Removed From cart", true);
  };

  const postBooking = async () => {
    if (cartData.length > 0) {
      let bod = cartData.map((item) => {
        return item.id;
      });
      try {
        const response = await fetchFunc("post", "/gc/bookService", {
          mobile: login.mobile,
          model: login.model_name,
          cart: bod,
        });
        if (response.status === 200) {
          notify(response.data, true);
          getBookings();
        } else {
          notify("Something went wrong while booking", false);
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      notify("The Cart Has No items...", false);
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
  const cancelBookings = async (num) => {};

  return (
    <Context.Provider
      value={{
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
      }}
    >
      {children}
    </Context.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(Context);
};
