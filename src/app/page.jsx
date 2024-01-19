import React from "react";
import ExamplePage from "@/components/ExamplePage";
import PrestamoCard from "@/components/PrestamoCard";
function HomePage({children}) {
  return (
    <div className="h-56 grid grid-cols-3 gap-4 content-stretch">
      {/* <PrestamoCard/>
      <PrestamoCard/>
      <PrestamoCard/>
      <PrestamoCard/>
      <PrestamoCard/> */}
      <h1 className=" text-slate-900 text-4xl">Home Page</h1>
    </div>
  );
}

export default HomePage;
