import AllProducts from "@/components/AllProducts";
import Custom from "@/components/Custom";
import Student from "@/components/Student";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen min-w-full mx-auto">
      <div className="text-3xl text-blue-500 p-3 m-3">
        All Products List
      </div>
      <AllProducts/>
    </div>
  );
}
