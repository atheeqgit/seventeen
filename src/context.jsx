import { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

export const Context = createContext();

export function GlobalProvider({ children }) {
  const [login, setLogin] = useState(false);
  const [services, setServices] = useState(null);
  const [AdditionalIssues, setAdditionalIssues] = useState(null);
  const [Issues, setIssues] = useState(null);

  useEffect(() => {
    fetchServices();
    fetchAdditionalIssues();
    fetchGetIssues();
  }, []);

  const fetchServices = () => {
    try {
      const response = axios.get("localhost:8000/getServices");
      if (response.statusCode == 200) {
        setServices(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fetchAdditionalIssues = () => {
    try {
      const response = axios.get("localhost:8000/getAdditionalIssues");
      if (response.statusCode == 200) {
        setAdditionalIssues(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fetchGetIssues = () => {
    try {
      const response = axios.get("localhost:8000/getIssues");
      if (response.statusCode == 200) {
        setIssues(response.data);
      }
    } catch (err) {
      console.log(err);
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
      }}
    >
      {children}
    </Context.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(Context);
};
