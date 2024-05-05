'use client'
import React, { useReducer } from 'react'

interface CountAction {
    type: string;
    payload: number;
  }

const MyReaducer = () => {
    
    const reducer = (state:string, action:CountAction) => {
        switch(action.type){
            case 'FOOTBALL':
                return 'Chanathip'
            case 'GOLF':
                return 'Tiger Wood'
            case 'TAEKWONDO':
                return 'Tennis Panipak'
            default:
                return state
        }
    }

    const clickHandler = (action) => {
        dispatch({type:action})
    }

    const [state, dispatch] = useReducer(reducer,"")


    return (
        <div className='flex flex-col justify-start items-center mx-auto h-screen'>
            <div className='flex justify-between items-center h-20'>
                <button className='bg-blue-400 hover:bg-blue-600 text-white px-4 py-2 mx-2 rounded-sm' onClick={()=>{clickHandler('FOOTBALL')}}>
                    Action foodball
                </button>
            </div>
            <div className='flex justify-between items-center h-20'>
                <button className='bg-blue-400 hover:bg-blue-600 text-white px-4 py-2 mx-2 rounded-sm' onClick={()=>{clickHandler('GOLF')}}>
                    Action golf
                </button>
            </div>
            <div className='flex justify-between items-center h-20'>
                <button className='bg-blue-400 hover:bg-blue-600 text-white px-4 py-2 mx-2 rounded-sm' onClick={()=>{clickHandler('TAEKWONDO')}}>
                    Action taekwondo
                </button>
            </div>
            <div className='text-2xl text-gray-500 flex justify-center'>
                {state}
            </div>
        </div>
  )
}

export default MyReaducer