import {chat_request} from '../constant/constants'
import axios from 'axios';
export const showWindow = (data) => dispatch => {
    console.log("modal data ##########", data);
  dispatch({
    type: chat_request.OPEN_MODEL,
    data,
  });
}

export const hideWindow = (data) => dispatch => {
    console.log("actions from hide window ##########");
  dispatch({
    type: chat_request.HIDE_MODEL,
    data
  });
}