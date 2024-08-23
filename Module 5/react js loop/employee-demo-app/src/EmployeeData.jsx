import React from "react";
import Employee from "./Data";

const EmployeeData = () => {
    return (
        <>
            <h1>Employer Data</h1>
            {Employee && Employee.map((item) => {
                return (
                    <>
                        <div className="main">
                            <div className="box">
                                <p><img src={item.image} alt="image" style={{height:"120px",width:"150px"}}/></p>
                                <p>Id is :{item.id}</p>
                                <p>Name is :{item.name}</p>
                                <p>Age is :{item.age}</p>
                                <p>Salary is :{item.salary}</p>
                            </div>
                        </div>
                    </>
                )
            })}
        </>
    )
}

export default EmployeeData