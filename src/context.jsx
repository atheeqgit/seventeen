import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Context = createContext();

export function GlobalProvider({ children }) {
  const [login, setLogin] = useState(null);
  const [tok, setTok] = useState("");
  const [allServices, setAllServices] = useState(null);
  const [sheduledServices, setSheduledServices] = useState([]);
  const [mechanicalRepairs, setMechanicalRepairs] = useState([]);
  const [valueAddedServices, setValueAddedServices] = useState([]);

  const getLocalStorage = () => {
    const data = localStorage.getItem("profile");
    return data ? JSON.parse(data) : null;
  };
  useEffect(() => {
    const lsData = getLocalStorage();
    if (lsData) {
      setLogin(lsData);
      setTok(lsData.token);
    }
  }, []);

  useEffect(() => {
    fetchAllServices();
  }, [tok]);

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
        //CONSOLING!!!!!!!!!!!!!!!!!! ===================
        // console.log(import.meta.env.VITE_SERVER_PORT + url, {
        //   headers: {
        //     "Content-Type": "application/json",
        //     Accept: "application/json",
        //     Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwMDAiLCJpYXQiOjE3MjIzNTgwODUsImV4cCI6MTcyNDk1MDA4NX0.6RNtRfFHaTqP2vS9egbM9J1dsTNunJuLeI15XG1biys`, // Bearer token for authentication
        //   },
        // });
        const response = await axios.get(
          import.meta.env.VITE_SERVER_PORT + url,
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${tok}`, // Bearer token for authentication
            },
          }
        );

        // console.log(response);
        return response;
      } catch (err) {
        //console
        console.log(err);
        notify(err.message, false);
        return err;
      }
    } else if (method == "post") {
      try {
        const response = await axios.post(
          import.meta.env.VITE_SERVER_PORT + url,
          body,
          {
            headers,
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

  const fetchAllServices = async () => {
    if (tok) {
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

  // const fetchServices = () => {
  //   try {
  //     const response = axios.get("localhost:8000/getServices");
  //     if (response.statusCode == 200) {
  //       setServices(response.data);
  //     }
  //   } catch (err) {
  //     // console.log(err);
  //   }
  // };

  // const fetchmechanicalRepairs = () => {
  //   try {
  //     const response = axios.get("localhost:8000/getmechanicalRepairs");
  //     if (response.statusCode == 200) {
  //       setmechanicalRepairs(response.data);
  //     }
  //   } catch (err) {
  //     // console.log(err);
  //   }
  // };

  // const fetchGetIssues = () => {
  //   try {
  //     const response = axios.get("localhost:8000/getIssues");
  //     if (response.statusCode == 200) {
  //       setIssues(response.data);
  //     }
  //   } catch (err) {
  //     // console.log(err);
  //   }
  // };

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
        tok,
        setTok,
        notify,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(Context);
};
