import React, { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import '../../i18n'
import "../../styles/index.css"

const setTitle = () => {
  document.title = "Comparer votre prime gratuitement"
}

const Header = () => {
    const {  i18n } = useTranslation();

  useEffect(()=> {
    setTitle()
  },[])
 
  return (

    //  {/* <!-- Start Header --> */}
     <div className="header" id="header">

     <div className="container">

       <Link to="/" className="logo"><img src="imgs/logo4.png"/></Link>

       <div className="nav-links">

         {/* <div className="drop-down-lang" >
           <img  src={i18n.language == "en" ? "imgs/united-states.png" : i18n.language == "fr" ? "imgs/france.png" : "imgs/germany.png"} alt="" /> <i  className="fa-solid fa-chevron-down"></i>
         </div> */}

         <div className="drop-down-lang" onClick={(e) => {e.target.classList.toggle("active")}}>
         
       <img onClick={(e) => { e.target.parentElement.classList.toggle("active") }}
         src={i18n.language == "en" ? "imgs/united-states.png" : i18n.language == "fr" ? "imgs/france.png"
           : i18n.language == "de" ? "imgs/germany.png" : i18n.language == "it" ? "imgs/italy.png"
             : "imgs/france.png"}
         alt="" /> <i onClick={(e) => { e.target.parentElement.classList.toggle("active") }} className="fa-solid fa-chevron-down"></i>


         </div>
         <ul>
           <li className="nav-icon" onClick={() => {i18n.changeLanguage("en")}}><img src="imgs/united-states.png" alt="" /></li>
           <li className="nav-icon" onClick={() => {i18n.changeLanguage("fr")}}><img src="imgs/france.png" alt="" /></li>
           <li className="nav-icon" onClick={() => {i18n.changeLanguage("de")}}><img src="imgs/germany.png" alt="" /></li>
           <li className="nav-icon" onClick={() => {i18n.changeLanguage("it")}}><img src="imgs/italy.png" alt="" /></li> 
         </ul>
       </div>

     

     </div>
   </div>
//    {/* <!-- End Header --> */}


  );
}

export default Header;
