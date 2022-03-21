import React, { useEffect } from "react"

const setTitle = () => {
  document.title = "Comparer votre prime gratuitement"
}

const Footer = () => {
  useEffect(()=> {
    setTitle()
  },[])
 
  return (

   
    // {/* <!-- Start Footer --> */}
    <div className="footer">
      <div className="container">
        <div className="box">
          <h3>Compare Prime</h3>
        
          {/* <p className="text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus nulla rem, dignissimos iste aspernatur
          </p> */}
        </div>
        
        <div className="box">
          {/* <div className="line">
            <i className="fas fa-map-marker-alt fa-fw"></i>
            <div className="info">Egypt, Giza, Inside The Sphinx, Room Number 220</div>
          </div>
          <div className="line">
            <i className="far fa-clock fa-fw"></i>
            <div className="info">Business Hours: From 10:00 To 18:00</div>
          </div> */}
          <div className="line">
            <i className="fas fa-phone-volume fa-fw"></i>
            <div className="info">
              <span>Whatsapp</span>
              <span><a className="lienWhatsapp" className="lienWhatsapp" href="https://wa.me/+33748636215" target="_blank">+33 748636215</a></span>
            </div>
          </div>
        </div> 
       
      </div>
      <p className="copyright">By Compare Prime</p>
    </div>
    // {/* <!-- End Footer --> */}


  );
}

export default Footer;
