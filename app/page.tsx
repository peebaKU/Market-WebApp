'use client';
import AllProducts from "@/components/AllProducts";
import Custom from "@/components/Custom";
import Data from "@/components/Data";
import Form from "@/components/Form";
import MyReaducer from "@/components/MyReaducer";
import Student from "@/components/Student";
import TestUseRef from "@/components/TestUseRef";



const data = [
  {id:'1', productName:'Pro A', price: 199},
  {id:'2', productName:'Pro B', price: 299},
  {id:'3', productName:'Pro C', price: 399},
  {id:'4', productName:'Pro D', price: 499},
  {id:'5', productName:'Pro E', price: 599},
  {id:'6', productName:'Pro F', price: 699},
]

export default function Home() {
  const clickHandler = (data:number)=>{
    alert(`your number is ${data}`)
  }
  return (
    <div className="flex flex-col items-center justify-start min-h-screen min-w-full mx-auto">
      <AllProducts data={data}/>
    </div>
  );
}
