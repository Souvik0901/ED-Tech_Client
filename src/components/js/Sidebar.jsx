import React, { useState } from 'react';
import "../css/sidebar.css";
import { Link } from 'react-router-dom';
import { FaPlus } from "react-icons/fa";
import Createcourse from './Createcourse';

const Sidebar = () => {
  const [hidshow, sethidshow] = useState(false);
  const opencreatebox = ()=>{
    sethidshow(true);
  }
  return (
    <div className='sidebar'>
      <div className="items">
         <button className='createcourse' onClick={()=>{opencreatebox()}}>
          <FaPlus className='plusicon'/>
          Create Courses
         </button>
         <p>Home</p>
         <Link to="/" className='links'><p>Logout</p></Link>
      </div>
      <div className={(hidshow)?"createcourcont":"createcourcont hidden"}>
        <Createcourse/>
      </div>
    </div>
  )
}

export default Sidebar