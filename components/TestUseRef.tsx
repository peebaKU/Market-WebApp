import { useRef } from "react";

const TestUseRef = () =>{
    const data = useRef(0)
    
    const randomData = () => {
        const random = Math.round(Math.random()*10)
        data.current = random
        alert(data.current)
    }
    return(
        <div className="flex flex-col justify-start items-center p-10 sm:w-8/12">
            <div className="flex justify-between items-start lg:w-1/2 xl:w-1/3 text-white">
                <button className="bg-gray-500 py-2 px-4 rounded-sm mx-2" onClick={randomData}></button>
            </div>
        </div>
    )
}

export default TestUseRef;