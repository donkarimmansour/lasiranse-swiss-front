import React, {lazy, Suspense, useEffect } from "react"
import { BrowserRouter , Route , Routes } from "react-router-dom"
import "../styles/app.css"
import Footer from "./index/footer"
import Header from "./index/header"

import IndexPage from "./index/indexPage.js"
const Index = lazy(() => import("./index/index"))
const Result = lazy(() => import("./index/result"))


const setTitle = () => {
  document.title = "Comparer votre prime gratuitement"
}

const App = () => {
  useEffect(()=> {
    setTitle()
  },[])
 
  return (

    <div className="app">

      <BrowserRouter>
        <Header/>
        <Routes>

          <Route index path="/*" element={
            <Suspense fallback={<IndexPage />}>
              <Index />
            </Suspense>
          } />

          <Route path="/thanks" element={
            <Suspense fallback={<IndexPage />}>
              <Result />
            </Suspense>
          } />

        </Routes>
        <Footer/>
      </BrowserRouter>

      
      
    </div>

  );
}

export default App;
