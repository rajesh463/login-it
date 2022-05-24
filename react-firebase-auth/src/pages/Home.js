import React from 'react'
import {useDispatch,useSelector} from "react-redux";
import AdminNavigation from '../components/AdminNavigation';
import ClassTeacherNavigation from '../components/ClassTeacherNavigation';
import HodNavigation from '../components/HodNavigation';
import SubjectTeacherNavigatation from '../components/SubjectTeacherNavigatation';
import { logoutInitiate } from '../redux/actions';

const Home = () => {

  const {currentUser} = useSelector((state)=>state.user);
  const dispatch = useDispatch();

  // console.log(currentUser)
  const handleAuth =()=>{
    if(currentUser){
      console.log("current user ------------------");
      console.log(currentUser)
        dispatch(logoutInitiate());
    }
  }
  
  const NavigationHelper = ()=>{
    if(currentUser){
      const role = currentUser.role;
      if(role === "subject-teacher"){
        return <SubjectTeacherNavigatation/>
      }else if(role === "class-teacher"){
        return <ClassTeacherNavigation/>
      }else if (role==="hod"){
        return <HodNavigation/>
      }else if(role === "admin"){
        return <AdminNavigation/>
      }
    }
  }
 
  return (
    <div>
      <button style={{alignContent:"center"}} onClick={handleAuth}>Logout</button>
      {NavigationHelper()}
    </div>
  )
}

export default Home