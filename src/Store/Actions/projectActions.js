export const createProject = (project) => {
    //WHITHOUT THUNK
    // return {
    //     type: 'ADD_PROJECT',
    //     project: project
    // }

    return (dispatch, getState, {
        getFirebase,
        getFirestore
    }) => {
        // Asc DB call
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Lucas',
            authorLastName: 'Dupias',
            authorID: '123',
            createdAt: new Date()
        }).then(() => {
            console.log(project)
            dispatch({
                type: 'CREATE_PROJECT',
                project
            });
        }).catch((err) => {
            dispatch({
                type: 'CREATE_PROJECT_ERROR',
                err
            })
        })

    }
}