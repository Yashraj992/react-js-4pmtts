import React from "react";
import Employee from "./EmpData";

const EmployeeData=()=>{
    return(
        <>
        <h1>Employee Data</h1>

        {Employee && Employee.map((item)=>{
            return(
                <>
                <div className="details">
                    <div className="box">
                        <p>Id is: {item.id}</p>
                        <p>Name is: {item.name}</p>
                        <p>Age is: {item.age}</p>
                        <p>Salary is: {item.salary}</p>
                    </div>
                </div>
                </>
            )
        })}
        </>
    )
}

export default EmployeeData