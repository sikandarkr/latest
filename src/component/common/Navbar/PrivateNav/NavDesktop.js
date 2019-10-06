import React,{Component} from 'react';
import logo from '../../../../../src/img/appiness-logo.png';
import {FaSistrix,FaAngleDown} from 'react-icons/fa';
import {Bootstrap, Grid, Row, Col,Container,Button,Form,FormControl,Dropdown,Navbar, Nav, NavItem, NavDropdown, Glyphicon} from 'react-bootstrap';
class NavDesktop extends Component{
    render(){
        return(
            <div>
            <Row>
            <Col xs={3}>Logo</Col>
            <Col xs={5}>
                <div className="search-div">
                <input className="input-search" type="text" placeholder="Enter your search"/>
                <FaSistrix className="search-icon"/>
                </div>
            </Col>
            <Col xs={4}>
                <div>
                    <div className="nav-profile">
                        <div><img src={logo} height="30px" width="30px"/>Image</div>
                        <div className="nav-dropdown"><FaAngleDown/></div>
                    </div>
                </div>
            </Col>
        </Row>
                
            </div>
        )
    }
}
export default NavDesktop;