import React, {lazy, Suspense, useEffect } from "react"
import "../styles/app.css"

import IndexPage from "./indexPage.js"
const Index = lazy(() => import("./index/index"))


const setTitle = () => {
  document.title = "Comparer votre prime gratuitement"
}

const App = () => {
  useEffect(()=> {
    setTitle()
  },[])
 
  return (

    <div className="app">

      <Suspense fallback={<IndexPage />}>
        <Index />
      </Suspense>
      
    </div>

  );
}

export default App;
