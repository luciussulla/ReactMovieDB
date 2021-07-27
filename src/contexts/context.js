import React, {useState, useEffect, useContext, createContext} from 'react'
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`
const AppContext = createContext()


const AppProvider = ({children})=> {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState({show: false, msg:''})
  const [movies, setMovies] = useState([])
  const [query, setQuery] = useState('batman')

  const fetchMovies = async (url)=> {
    setIsLoading(true)
    try {
      const res = await fetch(url)
      const data = await res.json()
      if(data.Response === 'True') {
        setMovies(data.Search)
        setError({show:false, msg: ''})
      } else {
        setError({show:true, msg: data.Error})
      }
      console.log(data)
      setIsLoading(false)
      
    } catch(e) {
      console.log(e)
    }
  }

  useEffect(()=> {
    fetchMovies(`${API_ENDPOINT}&s=${query}`)
  },[query])

  return (
    <AppContext.Provider value={
      {
        isLoading, 
        error,
        movies,
        query, 
        setQuery,
      } 
      }>
      {children}
    </AppContext.Provider>
  )
}


export {AppProvider, AppContext}