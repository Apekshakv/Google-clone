import React, { createContext, useState, useContext } from "react";


const ResultContext = createContext(); //creating parentnode which can be shared across
const baseurl = `https://google-search74.p.rapidapi.com`;
export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  //const [searchTerm, getsearchTerm] = useState('')

  const getResults = async (type) => {
    setLoading(true);
    try {
      const response = await fetch(
  `${baseurl}${type}`,
        {
          method: 'GET',
          headers: {
            'x-rapidapi-key': '8fd4cc5935msh55369f10316779ap1845e9jsneaa2d2f9d6f8',
            'x-rapidapi-host': 'google-search74.p.rapidapi.com'
          }
        }
      );

      const data = await response.json();
      console.log(data)
      setResults(data);
      setLoading(false);
    } 
    catch (error) {
      console.error("Error fetching results:", error);
    } 
  };

  return (
    <ResultContext.Provider value={{ results, getResults, loading ,setResults}}>
      {children}
    </ResultContext.Provider>
  );
};


export const useResultContext = () => useContext(ResultContext);





