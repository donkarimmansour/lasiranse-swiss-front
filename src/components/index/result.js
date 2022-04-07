import React, { Fragment, useEffect } from "react"
import "../../styles/index.css"
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { CLEAR_MESSAGE } from "../../redux/constans/message";
import { useDispatch } from "react-redux";

const Result = () => {
    const { t} = useTranslation();
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({ type: CLEAR_MESSAGE })
    }, [dispatch])

   return (

    <Fragment>
  

    {/* <!-- Start Landing --> */}
    <div className="landing res">

    <div className="anim-elements">
          <div className="anim-element"><i className="fas fa-thumbs-up"></i></div>
          <div className="anim-element"><i className="fas fa-comments"></i></div>
          <div className="anim-element"><i className="fas fa-heart"></i></div>
          <div className="anim-element"><i className="fas fa-users"></i></div>
          <div className="anim-element"><i className="fas fa-grin-beam"></i></div>
      </div>

      
      <div className="container">

          <div className="calc">


             <div className="form">
                 <span className="title">{t("Result")}</span>
                <p>90.00 {t("CHF / month")}</p>
                <p>1219.20 {t("CHF / Year")}</p>

                <div className="input-field button">
                     <input onClick={() => {  navigate("/") }} type="button" value={t("page home")} />
                </div>
          </div>
      </div>
       



        {/* <div className="image">
          <img src="imgs/landing-image.png" alt="" />
        </div> */}

             <div className="text">
              {/* <p>{t("COMPARE HEALTH INSURANCE")}</p> */}
              <p>{t("head phrase one")}</p>
              <br/>
              <p>{t("head phrase two")}</p>

            </div>





      </div>
      <a href="#articles" className="go-down">
        <i className="fas fa-angle-double-down fa-2x"></i>
      </a>
    </div>
    {/* <!-- End Landing --> */}

    </Fragment>


);
}

export default Result;
