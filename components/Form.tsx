'use client'
import { useState } from "react"

const Form = () =>{
    const [username, setUsername] = useState('')

    const changeHandler = (event) =>{
        setUsername(event.target.value)
    }

    return(
    <div className="flex flex-col justify-start items-center p-10 w-full">
        <div className="flex w-1/3 my/3">
            <label htmlFor="username" className="w-1/3">
                Username
            </label>
            <input name="username" className="w-2/3 py-1 px-2 border border-gray-400" onChange={changeHandler}/>
        </div>
        <div className="flex justify-center items-center my-3 w-1/2 text-3xl text-red-500">
            {username}
        </div>
    </div>
    )
}

export default Form;