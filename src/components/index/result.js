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

      <div className="container">

          <div className="calc">


            <div className="text">
               {/* <p>{t("COMPARE HEALTH INSURANCE")}</p> */}
               <h5>{t("head phrase one")}</h5>
               <h5>{t("head phrase two")}</h5>

            </div>


             <div className="form">
                 <span className="title">{t("Result")}</span>
                <p>90.00 {t("CHF / month")}</p>
                <p>1219.20 {t("CHF / Year")}</p>

                <div className="input-field button">
                     <input onClick={() => {  navigate("/") }} type="button" value={t("page home")} />
                </div>
          </div>
      </div>
       



        <div className="image">
          <img src="imgs/landing-image.png" alt="" />
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
