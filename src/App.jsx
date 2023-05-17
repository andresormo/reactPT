import { useEffect } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Main from './pages/Main/Main'
import { getComments, getPosts } from './redux/post/post.action'

function App() {
  //Aquí el uso de useEffect, para ejecutar solo una vez '[]', la llamada a la funcion getPosts y a la funcion de getComments
  useEffect(()=>{
    getPosts();
    getComments();
  },[])
  return (
    <>
    <Routes>
      <Route path='/' element={<Main/>}></Route>
    </Routes>
    </>
  )
}

export default App
