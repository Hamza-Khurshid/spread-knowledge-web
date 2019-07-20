export const ADD_STUDENT = "ADD_STUDENT";
export const ADD_STUDENT_ERR = "ADD_STUDENT_ERR";
export const EDIT_STUDENT = "EDIT_STUDENT";
export const EDIT_STUDENT_ERR = "EDIT_STUDENT_ERR";
export const GET_STUDENT = "GET_STUDENT";
export const GET_STUDENT_ERR = "GET_STUDENT_ERR";
export const DELETE_STUDENT = "DELETE_STUDENT";
export const DELETE_STUDENT_ERR = "DELETE_STUDENT_ERR";
export const UPDATE_STUDENT = "UPDATE_STUDENT";
export const UPDATE_STUDENT_ERR = "UPDATE_STUDENT_ERR";

export function addStudent(data) {
    alert('Student created successfully!');
    return {
        type: ADD_STUDENT,
        data: data
    }
}

export function getStudent(id) {
    return {
        type: GET_STUDENT,
        data: id
    }
}

export function updateStudent(data) {
    localStorage.setItem('authUser', JSON.stringify(data));
    alert('STUDENT updated!');
    return {
        type: UPDATE_STUDENT,
        data
    }
}

export function deleteStudent(id) {
    return {
        type: DELETE_STUDENT,
        data: id
    }
}