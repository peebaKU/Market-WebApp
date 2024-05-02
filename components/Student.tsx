import React from "react";
interface Props {
    id: string;
    name:string;
    age:string;
  }
    const Student = (props:Props) => {
    return(
        <div className="border-2 border-gray-400 rounded-md shadow w-1/2 p-4 m-2">
            <div className="min-w-full text-center px-2 py-4 text-lg text-blue-500">
                Student Id: {props.id}, Student Name: {props.name}, Age: {props.age}
            </div>
        </div>
    );
}

export default Student;