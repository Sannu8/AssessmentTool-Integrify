


export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const RESET_STATE = "RESET_STATE";
export const USER_IN = "USER_INTO_STATE";



export const logIn = user => ({ type: LOG_IN, payload: user});
export const logOut = () => ({ type: LOG_OUT });
export const userState = (users) => ({ type: USER_IN, payload:users});
export const resetState = () => ({ type: RESET_STATE, payload:[{flag: "error"}]});
export const GET_CLASSES = "GET_CLASSES";
export const getClasses = payload => ({ type: GET_CLASSES, payload });

