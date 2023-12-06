import React from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Main from "../components/Main"

const HomePage = () => {
  return (
    <div className="all__wrapper">
     <Header/>
     <Main/>
     <Footer/>
    </div>
  )
}

export default React.memo(HomePage)
