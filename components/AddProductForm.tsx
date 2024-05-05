import React, { useRef, useState } from 'react'

const AddProductForm = ({dispatch}) => {

    const productNameInput = useRef(null)
    const priceInput = useRef(null)

    const [form, setForm] = useState({
        id:"",
        productName:"N/A",
        price:""
    })
  
    const clearForm = () =>{
        productNameInput.current.value = null
        priceInput.current.value = null
        setForm({
            id:"",
            productName:"N/A",
            price:""
        })
    }

    const onIpnutChange = (event: { target: { name: string ; value: string } }) => {
        const newProduct = {...form}
        newProduct[event.target.name] = event.target.value
        setForm(newProduct)
        
    }
    
    const addHandler = () =>{
        if(Number.isInteger(Number(form.price))){
            const id = Math.random().toString() + Date.now().toString
            const productName = form.productName
            const price = Number(form.price)
            const isShowing = false
            dispatch({type: "ADD",payload:{id, productName, price, isShowing}})
            clearForm()
        }
        else{
            alert("กรอกชนิดข้อมูลไม่ถูกต้อง")
        }
    }
  
    return (
    <div className='flex justify-center w-full sm:w-11/12 md:w-8/12 lg:w-6/12 items-senter mx-auto p-3 border-blue-400 bg-blue-100 rounded-sm shadow-sm'>
        <div className='flex flex-col w-6/12 self-end mx-1'>
            <label className='pr-2' htmlFor='productName'>Prooduct</label>
            <input 
                className='w-full pl-2'
                ref={productNameInput}
                type="text"
                name='productName'
                onChange={onIpnutChange}
            />
        </div>
        <div className='flex flex-col w-6/12 self-end mx-1'>
            <label className='pr-2' htmlFor='price'>Price</label>
            <input 
                className='w-full pl-2'
                ref={priceInput}
                type="text"
                name='price'
                onChange={onIpnutChange}
            />
        </div>
        <div className='w-2/12 self-end mx-1'>
            <button
                onClick={addHandler}
                className='bg-blue-500 hover:bg-blue-600 text-white rounded-sm px-4 w-full'>
                Add
            </button>
        </div>
    </div>
  )
}

export default AddProductForm