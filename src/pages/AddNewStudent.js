import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { StudentAdded } from '../feature/StudentSlice';

function AddNewStudent() {
  const navi = useNavigate();
  const dispatch=useDispatch();
  const data=useSelector((state)=>state.student);

  const [Name,setName]=useState("");
  const [age,setAge]=useState("");
  const [course,setCourse]=useState("");
  const [batch,setBatch]=useState("");

  const handleClick = (e) => {
    e.preventDefault();
    if(Name && age && course && batch){
      dispatch(StudentAdded({
            "id":data.length,
            "Name":Name,
            "Course":course,
            "Batch":batch,
            "Age":age
      }));
      navi('/student');
    }
    // console.log("hiiii");
  }
  return (
    <div>
      <form>
        <div className='box'>
            <div className='input-box'>
            <input name='name' type='text'  placeholder='Enter Name' onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className="input-box">
            <input name='age' type='number' value={age} placeholder='Enter Age'  onChange={(e)=>setAge(e.target.value)}/>
            </div>
        </div>
        <div className="box">
            <div className="input-box">
            <input name='course' type='text' value={course} placeholder='Enter course' onChange={(e)=>setCourse(e.target.value)}/>
            </div>
            <div className="input-box">
            <input name='batch' type='text' value={batch} placeholder='Enter batch' onChange={(e)=>setBatch(e.target.value)}/>
            </div>
        </div>
        <br/>
        <Link to="/Student"><button style={{ margin: '30px' }} className='cancel'>Cancel</button></Link>
        <button onClick={handleClick} style={{ margin: '30px' }}>Add Student</button>
        </form>
    </div>
  )
}
export default AddNewStudent;