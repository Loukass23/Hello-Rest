import React, { Component } from 'react'
import Notfications from './Notifications'
import ProjectList from '../Project/ProjectList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import ImgMediaCard from '../mediaCard/ImgMediaCard'

class Dashboard extends Component {
    render() {
        // console.log(this.props)
        const { projects, auth, notifications } = this.props;
        if (!auth.uid) return <Redirect to='/signin' />
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={projects} />
                    </div>

                    <div className="col sm8 offset-m1">
                        <Notfications notifications={notifications} />
                    </div>

                </div>
                <div className="dashboard container">

                </div>

            </div>

        )
    }
}
const mapStatetoProps = (state) => {
    console.log(state)
    return {
        //projects: state.project.projects
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth,
        notifications: state.firestore.ordered.notifications
    }
}
export default compose(
    connect(mapStatetoProps),
    firestoreConnect([
        { collection: 'projects', orderBy: ['createdAt', 'desc'] },
        { collection: 'notifications', limit: 3, orderBy: ['time', 'desc'] }
    ])
)(Dashboard)