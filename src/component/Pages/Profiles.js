import React,{Component} from 'react';
import {connect} from 'react-redux'
import { useMediaQuery } from 'react-responsive'
import {getProfiles} from '../../redux/actions/profile'
class Profiles extends Component{
    
    render(){
        const Desktop = ({ children }) => {
            const isDesktop = useMediaQuery({ minWidth: 992 })
            return isDesktop ? children : null
          }
          const Tablet = ({ children }) => {
            const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
            return isTablet ? children : null
          }
          const Mobile = ({ children }) => {
            const isMobile = useMediaQuery({ maxWidth: 767 })
            return isMobile ? children : null
          }
          const Default = ({ children }) => {
            const isNotMobile = useMediaQuery({ minWidth: 768 })
            return isNotMobile ? children : null
          }
        return(
            <div>
            <Desktop>Desktop or laptop</Desktop>
            <Tablet>Tablet</Tablet>
            <Mobile>Mobile</Mobile>
            <Default>Not mobile (desktop or laptop or tablet)</Default>
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
            Register: (data) => {dispatch(getProfiles(data))}
        })
    }
export default connect(mapStateToProps, mapDispatchToProps)(Profiles);
