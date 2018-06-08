import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

function Nav(props) {
    return (
        <div>
            <p>
                NAV COMPONENT
            </p>
            <p>USERNAME:{props.username}</p>
            <img src={props.profile_pic} alt=''/>
            <Link to='/dashboard'>
                <button>HOME</button>
            </Link>
            <Link to='/new'>
                <button>NEW POST</button>
            </Link>
            <Link to='/'>
                <button>LOGOUT</button>
            </Link>
        </div>
    )
}

function mapStateToProps(state){
    return {
        username: state.username,
        profile_pic: state.profile_pic
    }
}

export default connect(mapStateToProps)(Nav)