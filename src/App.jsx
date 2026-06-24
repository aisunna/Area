import { useEffect, useState } from 'react'
import './App.css'

import { Outlet, Link } from 'react-router'

import Header from './assets/components/header/Header'
import Main from './assets/components/main/Main'
import Footer from './assets/components/footer/Footer'

function App() {

  const [vision, setVision] = useState(false)

  useEffect(() => {

    const handleScroll = () => {
      setVision(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)

  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>

      <Header />

      <Outlet />

      {!!vision ? <button className="scrollBtn" onClick={scrollToTop}>↑</button> : ''}

      <Footer />

    </>
  )
}

export default App
