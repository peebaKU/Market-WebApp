"use client"
import React from 'react'
import Product, { Data } from '@/components/Product';

interface CountAction {
    type: string;
    payload: Data;
  }

interface State{
    id:string,
    productName:string,
    price:number
}

const reducer = (state:State[], action:CountAction) => {
    switch(action.type){
        case "DELETE":
            const productId = action.payload.id;
            const index = state.findIndex(item => item.id === productId)
            if(index != -1){
                let newState = [...state];
                newState.splice(index,1);//delete 
                return newState
            }
        case 'ADD':
            
            return [
                    ...state,{
                        id:action.payload.id,
                        productName:action.payload.productName,
                        price:action.payload.price
                        }
                    ]
        case 'EDIT':
                const editId = action.payload.id
                const editIndex = state.findIndex((item)=>{return item.id === editId})
                if(editIndex != -1){
                    let newState = [...state]
                    newState[editIndex] = {
                        id:action.payload.id,
                        productName:action.payload.productName,
                        price:action.payload.price
                    }
                    return newState
                }                
                return state
    }
}

export default reducer