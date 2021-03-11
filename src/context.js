// import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react'



const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const[leagues,setLeagues] = useState([]);
  const [loading,setLoading] = useState(true)

  const url = 'https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=';
  

  const fetchLeagues = async(url)=>{
    setLoading(true)
    const response = await fetch(url);
    const data = await response.json()
    setLoading(false)
    const leagues = data.leagues
    setLeagues(leagues)
  }
  const handleClick =(id)=>{
    const main_url = `${url}${id}`;
    fetchLeagues(main_url)
  }

  return <AppContext.Provider value={{leagues,loading,handleClick}}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
