import React, { useEffect } from 'react';
import { useResultContext } from './contex/resultcontextprovider'; 
import { useLocation } from 'react-router-dom';
import Navbar from './navbar';

const Result = () => {
  const { results, getResults, loading ,setResults } = useResultContext();
  const loaction = useLocation()
 

 switch (loaction.pathname) {
  case '/search':
    return (
     results?.results?.map((item, index) => (
          <div key={index}>
            <a href={item.url} target="_blank" rel="noreferrer">
              {item.title}
            </a>
            <p>{item.description}</p>
          </div>))
    );

 
  default:
    return <p>Invalid path</p>;
}

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        results?.results?.map((item, index) => (
          <div key={index}>
            <a href={item.url} target="_blank" rel="noreferrer">
              {item.title}
            </a>
            <p>{item.description}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Result;
