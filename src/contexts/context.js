import React, {useState, useEffect, useContext, createContext} from 'react'
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`
const AppContext = createContext()
console.log(API_ENDPOINT)

const AppProvider = ({children})=> {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState({show: false, msg:''})
  const [movies, setMovies] = useState([])
  const [query, setQuery] = useState('batman')

  return (
    <AppContext.Provider value={{title: "Dark"}}>
      {children}
    </AppContext.Provider>
  )
}


export {AppProvider, AppContext}