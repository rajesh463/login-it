import * as types from "./actionTypes";

import RoleBaseAuth from '../api/rolebaseAuth'
import {auth} from '../firebase';

const registerStart = () =>({
    type:types.REGISTER_START,
});

const registerSuccess = (user) =>({
    type:types.REGISTER_SUCCESS,
    payload:user
});

const registerFail = (error) =>({
    type:types.REGISTER_FAIL,
    payload:error
});
//login
const loginStart = () =>({
    type:types.LOGIN_START,
});

const loginSuccess = (user) =>({
    type:types.LOGIN_SUCCESS,
    payload:user
});

const loginFail = (error) =>({
    type:types.LOGIN_FAIL,
    payload:error
});
//logout
const logoutStart = () =>({
    type:types.LOGOUT_START,
});

const logoutSuccess = () =>({
    type:types.LOGOUT_SUCCESS,
});

const logoutFail = (error) =>({
    type:types.LOGOUT_FAIL,
    payload:error
});

export const setUser = (user) =>({
    type:types.SET_USER,
    payload:user,
})


export const  registerInitiate = (email,password,displayName)=>{
    return function(dispatch){
        dispatch(registerStart());
        auth.createUserWithEmailAndPassword(email,password).then(({user})=>{
            user.updateProfile({
                displayName
            });
            dispatch(registerSuccess(user));
        }).catch((error)=>dispatch(registerFail(error.message)));
    }
}

export const  loginInitiate = (email,password)=>{
    return function(dispatch){
        dispatch(loginStart());
        var userA=null ;
        auth.signInWithEmailAndPassword(email,password).then(({user})=>{
            const role = {
                uid: user.uid,
                email: user.email,
              };
              userA = user;
            const promis = RoleBaseAuth.post("/role", role);
            return promis;
            
        }).then((res,error)=>{
            
                const New = {
                    authUser:userA,
                    role:res.role
                }
                dispatch(loginSuccess(New));
          
    }).catch((error)=>dispatch(loginFail(error.message)));
    }
}

export const  logoutInitiate = ()=>{
    return function(dispatch){
        dispatch(logoutStart());
        auth.signOut().then((res)=>{
            dispatch(logoutSuccess());
        }).catch((error)=>dispatch(logoutFail(error.message)));
    }
}
