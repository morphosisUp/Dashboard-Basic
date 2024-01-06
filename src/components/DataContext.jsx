// DataContext.js
import React, { createContext, useState, useContext } from "react";
import axios from "axios";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://gist.githubusercontent.com/mariosalembe23/eb6a0467f305c7a8b50feb022c719af7/raw/users.json"
      );
      setData(response.data.users);
    } catch (error) {
      console.error(`Ocorreu um erro ao buscar os dados: ${error.message}`);
    } finally{
      setLoading(false)
    }
  };

  const filterDataById = (id) => {
    if (data) {
      return data.filter((item) => item.id === id);
    }
    return [];
  };

  return (
    <DataContext.Provider value={{ data, fetchData, filterDataById, loading }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData deve ser utilizado dentro de um DataProvider");
  }
  return context;
};
