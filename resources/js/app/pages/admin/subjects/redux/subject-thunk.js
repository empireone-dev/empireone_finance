import { store_subject_service, delete_subject_service, update_subject_service, get_subject_by_id_service, get_subject_service } from "@/app/services/subject-service";
import {subjectSlice} from "./subject-slice";



export function get_subject_thunk() {
  return async function (dispatch, getState) {
    const res = await get_subject_service()
    console.log('res.data.response',res.data.response)
    dispatch(subjectSlice.actions.setSubjects(res.data.response));
    return res
  };
}

export function get_subject_by_id_thunk(id) {
  return async function (dispatch, getState) {
    const res = get_subject_by_id_service(id)
    return res
  };
}

export function store_subject_thunk(data) {
  return async function (dispatch, getState) {
    const res = store_subject_service(data)
    return res
  };
}

export function update_subject_thunk(data) {
  return async function (dispatch, getState) {
    const res = update_subject_service(data)
    return res
  };
}

export function delete_subject_thunk(id) {
  return async function (dispatch, getState) {
    const res = delete_subject_service(id)
    return res
  };
}
