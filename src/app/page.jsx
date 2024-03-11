'use client'
import React from "react";
import ExamplePage from "@/components/ExamplePage";
import PrestamoCard from "@/components/PrestamoCard";
import { useSession } from "next-auth/react";
function HomePage({children}) {
  const {data:session,status} = useSession();
  console.log(session);
  if(status==="loading"){
    return(<p>loading....</p>)
  }
  return (
    <div className="h-56 grid grid-cols-3 gap-4 content-stretch">
      <PrestamoCard></PrestamoCard>
      {/* <pre>
        <code>{JSON.stringify(session, null, 2)}</code>
      </pre> */}
    </div>
  );
}

export default HomePage;
