'use client'
import { useRef, useState } from "react"

const Form = () =>{
    const inputRef = useRef("")
    const [style, setStyle] = useState('')
    
    const changeHandler = () =>{
        const lengthOfPassword = inputRef.current.value.length
        if(lengthOfPassword >= 8){
            setStyle('ring-2 ring-green-500')
        }
        else{
            setStyle('ring-2 ring-red-500')
        }
    }
    return(
    <div className="flex flex-col justify-start items-center p-10 w-full">
        <div className="flex w-1/3 my/3">
            <label htmlFor="password" className="w-1/3">
                Password
            </label>
            <input name="password" className={`border border-gray-500 mx-2 rounded-sm px-2 focus:outline-none focus:shadow-outline ${style}`} type="password" name="password" ref={inputRef} onChange={changeHandler}/>
        </div>
    </div>
    )
}

export default Form;