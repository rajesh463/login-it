//import React, { useContext } from "react";
import "./Navigatation.css";
import {Link} from 'react-router-dom';
// import BodheSirImg from "../../assets/img/BodheSirImg.jpg"
//import { AuthContext } from "../../functions/Auth"
//import firebaseConfig from "../../functions/fire"

import {useDispatch,useSelector} from "react-redux";
import { logoutInitiate } from '../redux/actions';

function eventHandle() {
  
  let arrow = document.querySelectorAll(".arrow");
  for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e) => {
      let arrowParent = e.target.parentElement.parentElement; //selecting main parent of arrow
      arrowParent.classList.toggle("showMenu");
    });
  }
  let sidebar = document.querySelector(".sidebar");
  let sidebarBtn = document.querySelector(".bx-menu");
  console.log(sidebarBtn);
  sidebarBtn.addEventListener("click", () => {
    sidebar.classList.toggle("close");
  });
}

function SubjectTeacherNavigatation() {
    
  const {currentUser} = useSelector((state)=>state.user);
  const dispatch = useDispatch();

  const handleAuth =()=>{
    if(currentUser){
        dispatch(logoutInitiate());
    }
  }
  
  return (
    <div>
      <div className="sidebar close">
        <div className="logo-details">
          <img alt=""
            className="gpa_logo" 
            src="https://www.gpawasari.ac.in/Images/logo.PNG"
          />
          <span className="logo_name">GPA</span>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/subject-teacher-dashboard">
              <i className="bx bx-home-alt"></i>
              <span className="link_name">Dashboard</span>
            </Link>
            <ul className="sub-menu blank">
              <li>
                <Link className="link_name" to="/subject-teacher-dashboard">
                  Dashboard
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <div className="iocn-link">
              <Link to="">
                <i className="bx bx-user"></i>
                <span className="link_name">Students</span>
              </Link>
              <i  onClick={eventHandle} className="bx bxs-chevron-down arrow"></i>
            </div>
            <ul className="sub-menu">
              <li>
                <Link to="" className="link_name">
                Students
                </Link>
              </li>
              <li>
                <Link to="/student-details">First Year</Link>
              </li>
              <li>
                <Link to="/student-details">Second Year</Link>
              </li>
              <li>
                <Link to="/student-details">Third Year</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/course">
              <i className="bx bx-book"></i>
              <span className="link_name">Course</span>
            </Link>
            <ul className="sub-menu blank">
              <li>
                <Link className="link_name" to="/course">
                Course
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <a rel="noreferrer" target='_blank' href="https://docs.google.com/spreadsheets/d/1JdKMJ7M-X0fMoIhBd1Dcl7ul_2csuosdVWpwTOEERFc/edit#gid=0" >
              <i className="bx bx-file-find"></i>
              <span className="link_name">CPP Project</span>
            </a>
            <ul className="sub-menu blank">
              <li>
                <Link className="link_name" to="https://docs.google.com/spreadsheets/d/1JdKMJ7M-X0fMoIhBd1Dcl7ul_2csuosdVWpwTOEERFc/edit#gid=0">
                CPP Project
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <div className="iocn-link">
              <Link to="#">
              <i className="bx bxs-book-content"></i>
                <span className="link_name">Time Table</span>
              </Link>
              <i onClick={eventHandle} className="bx bxs-chevron-down arrow"></i>
            </div>
            <ul className="sub-menu">
              <li>
                <Link className="link_name" to="#">
                Time Table
                </Link>
              </li>
              <li>
                <Link to="#">First Year</Link>
              </li>
              <li>
                <Link to="#">Second Year</Link>
              </li>
              <li>
                <Link to="#">Third Year</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="#">
              <i className="bx bx-food-menu"></i>
              <span className="link_name">Teaching / Lab Plan</span>
            </Link>
            <ul className="sub-menu blank">
              <li>
                <Link className="link_name" to="#">
                 Teaching / Lab Plan
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="#">
              <i className="bx bx-spreadsheet"></i>
              <span className="link_name">MSBTE Result</span>
            </Link>
            <ul className="sub-menu blank">
              <li>
                <Link className="link_name" to="#">
                MSBTE Result
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <div className="iocn-link">
              <Link to="#">
              <i className="bx bxs-user"></i>
                <span className="link_name">My Details</span>
              </Link>
              <i onClick={eventHandle} className="bx bxs-chevron-down arrow"></i>
            </div>
            <ul className="sub-menu">
              <li>
                <Link className="link_name" to="#">
                My Details
                </Link>
              </li>
              <li>
                <Link to="#">CR</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/leave">
              <i className="bx bxs-comment-detail"></i>
              <span className="link_name">Leaves</span>
            </Link>
            <ul className="sub-menu blank">
              <li>
                <Link className="link_name" to="/leave">
                Leaves
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/">
              <i className="bx bx-log-out"></i>
              <span className="link_name"   ><button onClick ={handleAuth}>Logout</button></span>
            </Link>
            <ul className="sub-menu blank">
              <li>
                <Link className="link_name" to="/">
                  Logout
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <div className="profile-details">
              <div className="profile-content">
                {/* <img alt="" src={BodheSirImg} /> */}
              </div>
              <div className="name-job">
                <div className="profile_name">Mr. Yogesh U. Bodhe</div>
                <div className="job">Lecturer in IT</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="home-section">
        <div className="home-content">
          <i className="bx bx-menu" onClick={eventHandle}></i>
          <span className="text">Subject Teacher Dashboard</span>
          <br />
        </div>
      </div>
    </div>
  );
}

export default  SubjectTeacherNavigatation