import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import { SearchForm } from './components/SearchForm'
import './App.css'
import { SearchView } from './views/SearchView'

export const App = () => {
  

  return (
    <>
      <SearchForm/>
      <Routes>
        <Route path ='/:topic/:id' element={<SearchView/>}/>
      </Routes>
    </>
  )
}

