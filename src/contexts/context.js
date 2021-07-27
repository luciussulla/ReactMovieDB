import React, {useState, useEffect, useContext, createContext} from 'react'
// use https 
export const API_ENDPOINT = 'https://www.omdbapi.com/?apikey='
const AppContext = createContext()

const AppProvider = ({children})=> {

  return (
    <AppContext.Provider value={{title: "Dark"}}>
      {children}
    </AppContext.Provider>
  )
}


export {AppProvider, AppContext}