import React from 'react'

const ProjectSummary = ({ project }) => {
    //console.log(project)
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darlen-3">
                <span className="card-title">{project.title}</span>
                <p>Posted By</p>
                <p className="gery-text">24 Feb</p>
            </div>
        </div>
    )
}
export default ProjectSummary