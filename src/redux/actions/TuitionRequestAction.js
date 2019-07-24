import axios from 'axios';
import { EndPoint } from '../../EndPoint/EndPoint';

export const ADD_TUITION_REQ = "ADD_TUITION_REQ";
export const EDIT_TUITION_REQ = "EDIT_TUITION_REQ";
export const GET_TUITION_REQ = "GET_TUITION_REQ";
export const DELETE_TUITION_REQ = "DELETE_TUITION_REQ";
export const GET_ALL_TUITIONS = 'GET_ALL_TUITIONS';
export const GET_ALL_TUITIONS_ERR = 'GET_ALL_TUITIONS_ERR';

const getAllTuitionsSuc = (data) => {
    return {
        type: GET_ALL_TUITIONS,
        data
    }
}

const getAllTuitionsFal = () => {
    alert('Error occoured while fetching tuition requests!');
    return {
        type: GET_ALL_TUITIONS_ERR
    }
} 

export function getAllTuitions() {
    return(dispatch) => {
        axios.get(EndPoint + "/tuition/getAllTuitions")
          .then(res => dispatch(getAllTuitionsSuc(res.data)))
          .catch(err => dispatch(getAllTuitionsFal()))
      };
}

export function addTuitionRequest(data) {
    alert('Tuition request sent successfully!')
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