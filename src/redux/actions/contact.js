
import { SHOW_ERROR_MESSAGE, CLEAR_MESSAGE, SHOW_SUCCESS_MESSAGE } from "../constans/message"
import { START_LOADING, STOP_LOADING } from "../constans/loading"
import {  Create } from "../../services/contact"


const create_contact = (values, type) => async dispatch => {
    dispatch({ type: START_LOADING })

    Create(values).then(({ data }) => {

        if (!data.err) {
            dispatch({ type: STOP_LOADING })
            dispatch({
                type: "CREATE"
            })
            dispatch({ type: CLEAR_MESSAGE})
            dispatch({ type: SHOW_SUCCESS_MESSAGE, payload : type })
        } else {
            
            dispatch({ type: STOP_LOADING })
            dispatch({ type: SHOW_ERROR_MESSAGE, payload: data.msg })
        }

    }).catch(err => {
        console.log("get orders api err ", err);
        dispatch({ type: STOP_LOADING })
        dispatch({ type: SHOW_ERROR_MESSAGE, payload: "something went wrong please try again" })

    })
}


export {
  create_contact ,
}

