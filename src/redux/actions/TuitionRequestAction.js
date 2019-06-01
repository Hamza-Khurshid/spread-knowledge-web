export const ADD_TUITION_REQ = "ADD_TUITION_REQ";
export const EDIT_TUITION_REQ = "EDIT_TUITION_REQ";
export const GET_TUITION_REQ = "GET_TUITION_REQ";
export const DELETE_TUITION_REQ = "DELETE_TUITION_REQ";

export function addTuitionRequest(data) {
    return {
        type: ADD_TUITION_REQ,
        data: data
    }
}

export function editTuitionRequest(data) {
    return {
        type: EDIT_TUITION_REQ,
        data: data
    }
}

export function getTuitionRequest(id) {
    return {
        type: GET_TUITION_REQ,
        data: id
    }
}

export function deleteTuitionRequest(id) {
    return {
        type: DELETE_TUITION_REQ,
        data: id
    }
}