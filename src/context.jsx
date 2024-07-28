import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Context = createContext();

export function GlobalProvider({ children }) {
  //const [login, setLogin] = useState(null);
  const [login, setLogin] = useState({
    name: "xxxxxxxx",
    mobile: 95663324,
    model_name: "some bike",
    token: "dummytoken",
  });

  const [services, setServices] = useState(null);
  const [AdditionalIssues, setAdditionalIssues] = useState(null);
  const [Issues, setIssues] = useState(null);

  useEffect(() => {
    fetchServices();
    fetchAdditionalIssues();
    fetchGetIssues();
  }, []);

  const notify = (msg, success) => {
    if (success) {
      toast.success(msg);
    } else {
      toast.error(msg);
    }
  };

  const fetchFunc = async (method, url, body) => {
    if (method == "get") {
      try {
        const response = await axios.get(
          import.meta.env.VITE_SERVER_PORT + url,
          body,
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Headers": "Content-Type, Authorization",
            },
          }
        );

        // console.log(response);
        notify(response.message, true);
        return response;
      } catch (err) {
        notify(err.message, false);
        return err;
      }
    } else if (method == "post") {
      try {
        const response = await axios.post(
          import.meta.env.VITE_SERVER_PORT + url,
          body,
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Headers": "Content-Type, Authorization",
            },
          }
        );

        // console.log(response);
        notify(response.data.message, true);
        return response;
      } catch (err) {
        notify(err.message, false);
        return err;
      }
    }
  };

  const fetchServices = () => {
    try {
      const response = axios.get("localhost:8000/getServices");
      if (response.statusCode == 200) {
        setServices(response.data);
      }
    } catch (err) {
      // console.log(err);
    }
  };

  const fetchAdditionalIssues = () => {
    try {
      const response = axios.get("localhost:8000/getAdditionalIssues");
      if (response.statusCode == 200) {
        setAdditionalIssues(response.data);
      }
    } catch (err) {
      // console.log(err);
    }
  };

  const fetchGetIssues = () => {
    try {
      const response = axios.get("localhost:8000/getIssues");
      if (response.statusCode == 200) {
        setIssues(response.data);
      }
    } catch (err) {
      // console.log(err);
    }
  };

  return (
    <Context.Provider
      value={{
        login,
        setLogin,
        services,
        AdditionalIssues,
        Issues,
        setIssues,
        fetchFunc,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(Context);
};
