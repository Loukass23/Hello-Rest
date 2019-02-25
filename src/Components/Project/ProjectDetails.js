import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">
                        Project {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores provident labore ullam ipsum tempora ea, cumque fugit eum repellendus consectetur. Corporis nulla rerum officia quibusdam odio deserunt ad sit inventore!</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted By</div>
                    <div>24 Feb</div>
                </div>
            </div>
        </div>

    )
}


export default ProjectDetails
