export const ADD_TUTOR = "ADD_TUTOR";
export const EDIT_TUTOR = "EDIT_TUTOR";
export const GET_TUTOR = "GET_TUTOR";
export const DELETE_TUTOR = "DELETE_TUTOR";

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

export function deleteTutor(id) {
    return {
        type: DELETE_TUTOR,
        data: id
    }
}