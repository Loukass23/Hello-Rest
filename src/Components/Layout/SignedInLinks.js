import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../Store/Actions/authActions'

const SignedInLinks = (props) => {
   return (

      <ul className="right">
         <li><NavLink to='/create'>New project</NavLink></li>
         <li><a onClick={props.signOut}>Log Out</a></li>
         <li><NavLink to='/' className='btn btn-floating pink lightrn-1'>LD</NavLink></li>
      </ul>




   )
}
const mapDispatchToprops = (dispatch) => {
   return {
      signOut: () => dispatch(signOut())
   }
}

export default connect(null, mapDispatchToprops)(SignedInLinks)