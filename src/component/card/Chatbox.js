import React,{Component} from 'react';
import profile from '../../img/profile.png';
import {Bootstrap, Grid, Row} from 'react-bootstrap';
import {FaTimes,FaWindowMinimize, FaTelegramPlane,FaPaperclip} from 'react-icons/fa';
import {connect} from 'react-redux';
class Chatbox extends Component{
    render(){
        return(
            <div className="chatbox">
               <div className="chat-head">
                    <div className="chat-header">
                        {this.props.modal.userName?<div><img src={this.props.modal.profilePic} height="60px" width="50px" className="chat-image"/><span className="chatbox-user-name">&nbsp;&nbsp;{this.props.modal.userName} </span></div>:null}
                            <div className="chat-window-header-right">
                                <FaWindowMinimize />&nbsp;&nbsp;&nbsp;&nbsp;
                                <FaTimes onClick={this.props.closeChat} className="close-chat-box-icon"/>
                            </div>
                    </div>
               </div>
               <div className="chat-message-box">
                   <div className="auth-user-message">
                        {this.props.message.message}
                        {this.props.message.chatId}}
                    </div>
                    <div className="guest-user-message">
                        guest user
                    </div>
                </div>
               <div className="chat-head">
                    <div className="chat-footer">
                        <div className="chat-input-container">
                                <input type="text" className="chat-input-field" placeholder="Type here..."/>
                        </div>
                        <div className="chat-message-send-icon-container">
                                <FaPaperclip className="chat-attachment-icon"/>
                                <FaTelegramPlane className="chat-send-icon"/>
                        </div>
                    </div>
               </div>  
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
      login:state.login,
      modal:state.modal
    }
  }

export default connect(mapStateToProps, null)(Chatbox);

// <div className="header-content">
//                         <div className="header-left">
//                             <img src="" className="chat-profile"/>AAA
//                         </div>
//                         <div className="header-right">
//                             <span className="close-chat"><FaTimes /></span>
//                         </div>  
//                   </div>