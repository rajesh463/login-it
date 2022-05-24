import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {useHistory,Link} from 'react-router-dom';
import {loginInitiate } from '../redux/actions';

import "./Login.css"

const Login = () => {
    // const [msg ,SetMsg] = useState("");
    const [state,setState] = useState({
        email:"",
        password:"",
    });

    const {currentUser} = useSelector((state)=>state.user);
    const history = useHistory();

    useEffect(()=>{
        if(currentUser){
            console.log("Heello thisis is not -------------------------");
            console.log(currentUser.authUser.uid)
            history.push("/");
        }
    },[currentUser,history]);

    const dispatch = useDispatch();

    const {email ,password} = state;
    

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!email || !password){
            return;
        }
        dispatch(loginInitiate(email,password));
        // SetMsg(currentUser)
        setState({email:"",password:""});
    }

    const handleChange =(e)=>{
        let {name ,value} = e.target;
        setState({...state,[name]:value});
    }
  return (
    <div>
        {/* {msg} */}
        <div id="logreg-forms">
            <form className="form-signin" onSubmit ={handleSubmit}>
                <h1 className="h3 mb-3 font-weight-normal" style ={{textAlign:"center"}}>
                    Sign in
                </h1>
                <input 
                    type = "email"
                    id ="inputEmail"
                    className = "form-control"
                    placeholder="Email Address"
                    name ="email"
                    onChange ={handleChange}
                    value ={email}
                    required
                />
                <input 
                    type = "password"
                    id ="inputPassword"
                    className = "form-control"
                    placeholder="Password"
                    name ="password"
                    onChange ={handleChange}
                    value ={password}
                    required
                />
                <button className ="btn btn-secondary btn-block" type="submit">
                    <i className = "fas fa-sign-in-alt"></i> Sign In
                </button>        
            </form>
        </div>
    </div>
  )
}

export default Login