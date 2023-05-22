import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import { studentUpdated } from "../feature/StudentSlice";

function EditDetails(){
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const data=useLocation();
    const dataid=data.state.id;
    const stdDetail=useSelector((state)=>state.student.filter((item)=>item.id===dataid))

    const stdName=stdDetail[0].Name;
    const stdAge=stdDetail[0].Age;
    const stdCourse=stdDetail[0].Course;
    const stdBatch=stdDetail[0].Batch;

    const [Name,setName]=useState(stdName);
    const [Age,setAge]=useState(stdAge);
    const [Course,setCourse]=useState(stdCourse);
    const  [Batch,setBatch]=useState(stdBatch);

    const SubmitHandler=()=>{
        if(Name && Age && Course && Batch){
            dispatch(studentUpdated({
                "id":dataid,
                "Name":Name,
                "Course":Course,
                "Batch":Batch
            }));
            navigate('/Student');
        }
    }

    return (
        <div>
      <form>
        <div className='box'>
            <div className='input-box'>
            <input name='name' type='text' value={Name} placeholder='Name' onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className="input-box">
            <input name='age' type='number' value={Age} placeholder= 'Age'  onChange={(e)=>setAge(e.target.value)}/>
            </div>
        </div>
        <div className="box">
            <div className="input-box">
            <input name='course' type='text' value={Course} placeholder='course' onChange={(e)=>setCourse(e.target.value)}/>
            </div>
            <div className="input-box">
            <input name='batch' type='text' value={Batch} placeholder='batch' onChange={(e)=>setBatch(e.target.value)}/>
            </div>
        </div>
        <br/>
        <Link to="/Student"><button style={{ margin: '30px' }} className='cancel'>Cancel</button></Link>
        <Link to="/Student"><button onClick={SubmitHandler} style={{ margin: '30px' }}>Add Student</button></Link>     
        </form>
    </div>
    )

}

export default EditDetails;