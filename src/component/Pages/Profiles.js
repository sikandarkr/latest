import React,{Component} from 'react';
import {connect} from 'react-redux'
import {getProfiles} from '../../redux/actions/profile'
class Profiles extends Component{
  componentDidMount(){
    this.props.Profiles();
  }
    
    render(){
        return(
            <div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      data:state.searchData,
      login:state.login
    }
  }
    function mapDispatchToProps(dispatch) {
        return({
            Profiles: (data) => {dispatch(getProfiles(data))}
        })
    }
export default connect(mapStateToProps, mapDispatchToProps)(Profiles);
