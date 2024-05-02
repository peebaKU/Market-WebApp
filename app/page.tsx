'use client';
import AllProducts from "@/components/AllProducts";
import Custom from "@/components/Custom";
import Student from "@/components/Student";

const ButtonWrapper = ({children})=>{
  return(
    <div className="w-32 h-8 mx-2 text-center text-while bg-blue-500 hover:bg-blue-600 hover:cursor-pointer active:bg-red-500 rounded-md">
      {children}
    </div>
  )
}

export default function Home() {
  const clickHandler = (data:number)=>{
    alert(`your number is ${data}`)
  }
  return (
    <div className="flex flex-col items-center justify-start min-h-screen min-w-full mx-auto">
      <AllProducts/>
    </div>
  );
}
