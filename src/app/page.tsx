import React from "react";
import grain from "@/../public/grain.jpg";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className="">
      <div
        className="fixed inset-0 z-0 opacity-5"
        style={{
          backgroundImage: `url(${grain.src})`,
        }}
      />
      <Hero/>
      
    </div>
  );
}
