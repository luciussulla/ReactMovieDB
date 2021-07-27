import React, {useContext} from 'react'
import {AppContext} from '../contexts/context'

export default function Form() {
  const {query, setQuery, error} = useContext(AppContext)

  return (
    <form onSubmit={(e)=>e.preventDefault()} className="search-form">
      <h2>Search Movies</h2>
      <input type="text" className="form-input" 
            value={query}
             onChange={(e)=> {
              setQuery(e.target.value)
             }} 
      />
      {error.show && <div className="error">{error.msg}</div>}      
    </form>
  )
}
