import React,{Component} from 'react';
import { Redirect,withRouter } from 'react-router-dom';
import first from '../../img/first.gif';
import {Bootstrap, Grid, Row, Col,Container,Button,Form,FormControl,Dropdown,Navbar, Nav, NavItem, NavDropdown, Glyphicon} from 'react-bootstrap';
import {Link, Router, Route} from "react-router";
import {connect} from 'react-redux'
import {loginUser} from '../../redux/actions/loginUser';
import NavDesktop from '../../component/common/Navbar/PrivateNav/NavDesktop';
import NavMobile from '../../component/common/Navbar/PrivateNav/NavMobile';
import NavTablet from '../../component/common/Navbar/PrivateNav/NavTablet';
import {Desktop, Mobile, Tablet} from '../../component/common/Devices';
import NavNoAuth from '../../component/common/Nav';
import logo from '../../img/appiness-logo.png';
import _ from 'loadsh';
class TopNavbar extends Component{
    state = {
        email:"",
        password:""
    }
    onChangeHandler = (e) =>{
        this.setState({
           [e.target.id] :e.target.value
        })
    }
    
    submitHandler =() =>{
        const data = this.state;
        this.props.Login(data, this.props.history);
        console.log(' LOGING ', this.props);
        // this.props.history.push(`/u`)
        // return <Redirect to='/profile' />
    }
    render(){

        return(
           <div className="navbar-top">       
              {
                   localStorage.getItem("Authorization")?(
                       <div>
                            <Desktop>
                                <NavDesktop/>
                            </Desktop>
                            <Mobile>
                                <NavMobile/>
                            </Mobile>
                            <Tablet>
                                <NavTablet/>
                            </Tablet>
                        </div>
                    //    <AuthNav {...this.props} />
                    // <AuthNav />
                   ):(
                        <NavNoAuth
                            onChangeHandler={this.onChangeHandler}
                            submitHandler={this.submitHandler}
                        /> 
                   )
              }  
                 {this.props.children}
           </div>
                
        )
    }
}
const mapStateToProps = state => ({
    data: state.login  
});
const mapDispatchToProps = function(dispatch) {
  return ({
    Login: (data, browserHistory) => {dispatch(loginUser(data, browserHistory))}
  })
};
export default connect(mapStateToProps,mapDispatchToProps)(TopNavbar);
