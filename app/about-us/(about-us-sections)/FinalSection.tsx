import React from "react";

export default function FinalSection() {
  return (
    <section className="w-full flex flex-col gap-4 mt-4 mb-12 py-4 px-7 md:px-16 lg:px-20 bg-slate-100 border border-slate-200">
      <div className="flex flex-col gap-2 pt-8">
        <p className="text-center text-md md:text-lg lg:text-xl text-black font-semibold">
          Your health is our main priority
        </p>
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl text-[#000000] font-semibold leading-2">
          Place your trust in our experts
        </h2>
      </div>
      <div className="flex justify-center py-4">
        <button className="bg-slate-700/90 text-white px-6 py-3 rounded border-slate-500 border">
          Contact Us 
        </button>
      </div>
    </section>
  );
}
