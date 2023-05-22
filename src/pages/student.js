import React from "react";
import { useSelector } from "react-redux";
import TableRow from "../component/TableRow";
import { useNavigate } from "react-router-dom";

function Students(){
    const navigate=useNavigate();
    const data=useSelector((state)=>state.student);
    const AddNew=()=>{
        navigate('/AddNewStudent');
    }

    return (
        <>
        <header>
            <h2>Student Details</h2>
            <button className="newstd" onClick={AddNew}>Add New Student</button>
        </header>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Course</th>
                    <th>Batch</th>
                    <th>Change</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((student)=>{
                        return(
                            <tr key={student.id}>
                                <TableRow student={student}/>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        </>
    )
}

export default Students;