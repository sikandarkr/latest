import React,{Component} from 'react';
import {Bootstrap, Grid, Row,Container,Col} from 'react-bootstrap';
import {connect} from 'react-redux'
import {getProfiles} from '../../redux/actions/profile'
import {showWindow, hideWindow} from '../../redux/actions/showModal';
import User from '../card/User';
import Chatbox from '../card/Chatbox';
import trim from 'trim';
class Profiles extends Component{
  constructor(){
    super();
    this.state = {
        searchData: [],

    }
}
async componentDidMount(){
   await this.props.Profiles();
      await this.setState({
        searchData:this.props.profiles
      })
  }
  showModal= (object) =>{
    let obj = {"userName":object.name, "profilePic":object.url}
   console.log("the value is ##########", object.name);
    this.props.showWindow(obj);
  }
  hideModal = () =>{
    let  data ={isOpen:false};
    console.log("hide window clicked $$$$$$$$$");
    this.props.hideWindow(data);
  }
    render(){
      console.log("users ########", this.props.profiles.users);
      let {searchData}= this.state;
      console.log("your data ", searchData.users);
        return(
            <Container>
              <Row>
                <Col xs={1}/>
                <Col xs={8}>
                  <Container>
                     {
                       this.props.profiles.users?<Row>
                         {this.props.profiles.users.data.map((i,j)=>{
                           return <Col xs={6}> 
                                      <User
                                        upvote={i.upvote}
                                        downvote={i.downvote}
                                        profileUrl={i.profileUrl}
                                        name={i.name}
                                        startChat= {() => this.showModal({"name":i.name,"url":i.profileUrl})}
                                      />
                                  </Col>
                         })}
                       </Row>:<p>no</p>
                     }
                  </Container>
                </Col>
                <Col xs={1}/>
              </Row>
              {this.props.modal.show?<Chatbox closeChat ={this.hideModal} />:null}
              {/* <Chatbox/> */}
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      data:state.searchData,
      login:state.login,
      profiles:state.profiles,
      modal:state.modal
    }
  }
    function mapDispatchToProps(dispatch) {
        return({
            Profiles: (data) => {dispatch(getProfiles(data))},
            showWindow:(data) =>{dispatch(showWindow(data))},
            hideWindow:(data) =>{dispatch(hideWindow(data))}
        })
    }
export default connect(mapStateToProps, mapDispatchToProps)(Profiles);
