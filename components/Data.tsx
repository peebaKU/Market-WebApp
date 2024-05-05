import React, {useState, useEffect} from 'react'

const Data = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        setTimeout(()=>{
            const newData = [
                {id: '1', name: 'Car A101', price: 59.000},
                {id: '2', name: 'Car B710', price: 62.000},
                {id: '3', name: 'Car AC300', price: 73.000}
            ]
            setData(newData)
        }, 2000)        
    },);
    
    return(
        <div className='flex flex-col justify-between items-start w-2/4'>
            <div className='flex justify-center items-center mt-2 p-2 w-full text-2xl text-gray-600 mx-1uto'>
                Product List
            </div>
            {(data.length === 0)?
            <div className='flex justify-center items-center mt-2 p-2 w-full text-xl text-blue-600 mx-auto min-h-screen'>
                Loading...
            </div>:
            data.map((car, index)=>{
                return(
                    <div key={index} className='flex justify-between items-center border-2 mt-2 p-2 border-400 w-full'>
                        <div>{car.id}</div>
                        <div>{car.name}</div>
                        <div>{car.price}</div>
                    </div>
                )   
            })
            }
        </div>
    )
}

export default Data;