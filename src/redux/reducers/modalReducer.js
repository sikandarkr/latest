import {chat_request} from '../constant/constants'
const initialState = {
    show: false,
    data:null
};
export default function openModal(state = initialState, action) {
    // let users = action.data;
    switch (action.type) {
        case chat_request.OPEN_MODEL:
            return {...action.data, show:true}
        case chat_request.HIDE_MODEL:
                return { ...action.data, show:false };
      default:
        return state;
    }
  }

