export const ADD_TUTOR = "ADD_TUTOR";
export const ADD_TUTOR_ERR = "ADD_TUTOR_ERR";
export const EDIT_TUTOR = "EDIT_TUTOR";
export const EDIT_TUTOR_ERR = "EDIT_TUTOR_ERR";
export const GET_TUTOR = "GET_TUTOR";
export const GET_TUTOR_ERR = "GET_TUTOR_ERR";
export const DELETE_TUTOR = "DELETE_TUTOR";
export const DELETE_TUTOR_ERR = "DELETE_TUTOR_ERR";
export const UPDATE_TUTOR = "UPDATE_TUTOR";
export const UPDATE_TUTOR_ERR = "UPDATE_TUTOR_ERR";

export function addTutor(data) {
    return {
        type: ADD_TUTOR,
        data: data
    }
}

export function getTutor(id) {
    return {
        type: GET_TUTOR,
        data: id
    }
}

export function updateTutor(data) {
    localStorage.setItem('authUser', JSON.stringify(data));
    alert('Tutor updated!');
    return {
        type: UPDATE_TUTOR,
        data
    }
}

export function deleteTutor(id) {
    return {
        type: DELETE_TUTOR,
        data: id
    }
}