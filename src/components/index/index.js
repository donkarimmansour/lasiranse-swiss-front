import React, { Fragment, useEffect, useRef, useState } from "react"
import * as yup from 'yup'
import { Field, Formik, Form } from "formik"
import { loader } from "../../shared/elements"
import myLocations from "../../shared/locations"
import { useDispatch, useSelector } from "react-redux";
import { CLEAR_MESSAGE } from "../../redux/constans/message"
import "../../styles/index.css"
import { create_contact } from "../../redux/actions/contact";
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router"

const Index = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const FormikRef = useRef()
  const { t } = useTranslation();

  const [Franchise, setFranchise] = useState({ touch: false, sub: false })
  const [Addresses, setAddresses] = useState([])

  const { loading } = useSelector(state => state.loading)
  const { errorMsg, successMsg } = useSelector(state => state.message)

  useEffect(() => {
    dispatch({ type: CLEAR_MESSAGE })
  }, [dispatch])

  useEffect(() => {
    if (successMsg == "created") {
      navigate("/thanks")
    }
  }, [successMsg])

  const initialValues = {
    email: "",
    fullname: "",
    phone: "",
    npa: "",
    naissance: "",
    franchise: ""
  }

  const onSubmit = values => {
    dispatch(create_contact(values))

  }

  const LoginValidator = yup.object().shape({
    email: yup.string().required(t("email field is required")).email(t("email must be email")),
    fullname: yup.string().required(t("fullname field is required")),
    phone: yup.string().required(t("phone field is required"))
      //.test('start', t('phone number must start with +41'), val =>  val && val.startsWith("+41") )
      .test('length', t('phone number must be 9 digits'), val => val && val.length === 9),
    npa: yup.string().required(t("postcode or home address")),
    naissance: yup.string().required(t("year of birth field is required")),
  })

  const closeAlert = () => {
    dispatch({ type: CLEAR_MESSAGE })
  }

  const handleSelectBox = () => {
    document.querySelector(".input-wrapper p").parentElement.classList.toggle("active");
  }

  const options = document.querySelectorAll(".input-wrapper .select-field li");
  const selectedOption = document.querySelector(".input-wrapper p")


  options.forEach((option) => {
    option.addEventListener("click", () => {
      setTimeout(() => {
        selectedOption.innerHTML = option.innerHTML;
        setFranchise({ ...Franchise, touch: true })
        FormikRef.current.setFieldValue("franchise", option.innerHTML)
      }, 300);

      selectedOption.parentElement.classList.remove("active");
    });
  });

  // const Done = () => <Fragment>
  //   {console.log("e")}
  //   <div className="index-pupup" style={{ display: "block" }} >
  //     <h5>{t("CONGRATULATIONS")}!</h5>
  //     <p>90.00 {t("CHF / month")}</p>
  //     <p>1219.20 {t("CHF / Year")}</p>
  //     <button onClick={() => {
  //       dispatch({ type: CLEAR_MESSAGE })
  //     }
  //     } >{t("OK")}</button>
  //   </div></Fragment>

  const handleAddress = (e) => {
    const npa = parseInt(e.target.value)

    let adds = []

    for (const locs in myLocations) {
      if (adds.length >= 10) break

      for (const loc of myLocations[locs]["stateCities"]) {

        if (adds.length >= 10) break
        if (loc.npa.toString().startsWith(npa)) adds.push(loc)
      }
    }

    setAddresses(adds)

  }


  
  return (

    <Fragment>



      {/* <!-- Start Landing --> */}
      <div className="landing" >
 
        {loading && loader()}


        <div className="container">

          <div className="calc">

            <div className="form">
              <span className="title">{t("calculate")}</span>




              {errorMsg && <div className="alert">
                <i className="fa-solid fa-info"></i>
                <span>{typeof errorMsg == "string" ? t(errorMsg) : t(errorMsg[0])}</span>
                <div className="close">
                  <i className="fa-solid fa-close" onClick={closeAlert}></i>
                </div>
              </div>}




              {
                <Formik
                  initialValues={initialValues}
                  onSubmit={onSubmit}
                  validationSchema={LoginValidator}
                  innerRef={FormikRef}
                  validateOnMount={true}
                  validateOnChange={true}
                >

                  {
                    ({ touched, errors, isValid, dirty }) => (

                      <Form>




                        <div className="input-wrapper">
                          <div className="input-field">
                            <label htmlFor="">{t("Fullname")}*</label>
                            <div>
                              <Field autoComplete="new-fullname" type="text" name="fullname" placeholder={t("Enter your fullname")} />
                              <i className="fa-solid fa-user"></i>
                            </div>
                            <small className="input-error" style={{ color: "tomato", display: errors.fullname ? "block" : "none" }} >{touched.fullname && errors.fullname}</small>
                          </div>
                        </div>

                        <div className="input-wrapper">
                          <div className="input-field">
                            <label htmlFor="">{t("Email Address")}*</label>
                            <div>
                              <Field autoComplete="new-email" type="text" name="email" placeholder={t("Enter your email")} required="" />
                              <i className="fa-solid fa-envelope"></i>                            </div>
                            <small className="input-error" style={{ color: "tomato", display: errors.email ? "block" : "none" }} >{touched.email && errors.email}</small>
                          </div>
                        </div>


                        <div className="input-wrapper">
                          <div className="input-field">
                            <label htmlFor="">{t("Phone Number")}*</label>
                            <div className="tele">
                              <Field autoComplete="new-tell" type="text" name="phone" placeholder={t("Enter your phone number")} required="" />
                              <i className="fa-solid fa-phone"></i>
                            </div>
                            <small className="input-error" style={{ color: "tomato", display: errors.phone ? "block" : "none" }} >{touched.phone && errors.phone}</small>
                          </div>
                        </div>




                        <div className="input-wrapper">
                          <span>{t("Franchise")}*</span>

                          <p className="selected-option" onClick={() => { handleSelectBox() }}>{t("Franchise")}</p>

                          <ul className="select-field">
                            <li>300</li>
                            <li>500</li>
                            <li>1000</li>
                            <li>1500</li>
                            <li>2000</li>
                            <li>2500</li>
                          </ul>
                          <small className="input-error" style={{ color: "tomato", display: (!Franchise.touch && Franchise.sub) ? "block" : "none" }}>{t("Franchise field is required")}</small>

                        </div>



                        <div className="input-wrapper">
                          <div className="input-field">
                            <label htmlFor="">{t("postcode or home address")}*</label>
                            <div>
                              <Field onKeyUp={(e) => { handleAddress(e) }} list="addresses" autoComplete="new-npa" type="tel" name="npa" placeholder={t("Enter your postcode or home address")} required="" />
                              <i className="fa-solid fa-envelopes-bulk"></i>                           </div>
                            <small className="input-error" style={{ color: "tomato", display: errors.npa ? "block" : "none" }} >{touched.npa && errors.npa}</small>
                          </div>
                        </div>


                        <datalist id="addresses">
                          {
                            Addresses.map((address, adi) => {
                              return (
                                <option key={adi}>{`${address.label}`}</option>
                              )
                            })
                          }
                        </datalist>

                        <div className="input-wrapper">
                          <div className="input-field">
                            <label htmlFor="">{t("year of birth")}*</label>
                            <div>
                              <Field autoComplete="new-date" type="date" name="naissance" placeholder={t("Enter your year of birth")} required="" />
                              <i className="fa-solid fa-cake-candles"></i>                            </div>
                            <small className="input-error" style={{ color: "tomato", display: errors.naissance ? "block" : "none" }} >{touched.naissance && errors.naissance}</small>
                          </div>
                        </div>


                        <div className="input-field button">
                          <input onClick={() => { setFranchise({ ...Franchise, sub: true }) }} type="submit" value={t("calculate")} />
                        </div>


                        {/* disabled={(!dirty || !isValid || loading)} */}
                      </Form>


                    )

                  }</Formik>}




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
        <a href="#services" className="go-down">
          <i className="fas fa-angle-double-down fa-2x"></i>
        </a>
      </div>
      {/* <!-- End Landing --> */}



      {/* <!-- Start Services --> */}
      <div className="services" id="services">
        <h2 className="main-title">{t("services title")}</h2>
        <div className="container">

          <div className="box">
            <h3>{t("services name one")}</h3>
            <div className="info">
              <a href="#">{t("services desk one")}</a>
            </div>
          </div>

          <div className="box">
            <h3>{t("services name two")}</h3>
            <div className="info">
              <a href="#">{t("services desk two")}</a>
            </div>
          </div>

          <div className="box">
            <h3>{t("services name three")}</h3>
            <div className="info">
              <a href="#">{t("services desk three")}</a>
            </div>
          </div>


        </div>
      </div>
      {/* <!-- End Services --> */}

      {/* <!-- Start Work Steps --> */}
      <div className="work-steps" id="work-steps">
        <h2 className="main-title">{t("works title")}</h2>
        <div className="container">
          <img src="imgs/work-steps.png" alt="" className="image" />
          <div className="info">

            <div className="box">
              <img src="imgs/work-steps-1.png" alt="" />
              <div className="text">
                <h3>{t("works name one")}</h3>
                <p>{t("works desk one")}</p>
              </div>
            </div>

            <div className="box">
              <img src="imgs/work-steps-2.png" alt="" />
              <div className="text">
                <h3>{t("works name two")}</h3>
                <p>{t("works desk two")}</p>
              </div>
            </div>

            <div className="box">
              <img src="imgs/work-steps-3.png" alt="" />
              <div className="text">
                <h3>{t("works name three")}</h3>
                <p>{t("works desk three")}</p>
              </div>
            </div>

            <div className="box">
              <img src="imgs/work-steps-4.png" alt="" />
              <div className="text">
                <h3>{t("works name four")}</h3>
                <p>{t("works desk four")}</p>
              </div>
            </div>


          </div>
        </div>
      </div>
      {/* <!-- End Work Steps --> */}









    </Fragment>


  );
}

export default Index;
