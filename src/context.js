// import axios from 'axios'
import React, { useState, useContext, useEffect } from 'react'



const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const[value,setValue] = useState(0)

  return <AppContext.Provider value={{value}}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
