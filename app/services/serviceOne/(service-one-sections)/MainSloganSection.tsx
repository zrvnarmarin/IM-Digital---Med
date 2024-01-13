import React from "react";

export default function MainSloganSection() {
  return (
    <section className="w-full flex flex-col gap-4 mt-4 mb-12 py-4 px-7 md:px-16 lg:px-20 bg-slate-100 border border-slate-200">
      <p className="text-center w-full text-sm md:text-md font-normal px-16 md:px-32 lg:px-64">
        <span className="font-bold">Your health is</span> our main priority
        Lorem ipsum <span className="font-bold">dolor</span> sit amet
        consectetur adipisicing elit. Illum, quidem. Lorem ipsum,{" "}
        <span className="font-bold">
          dolor sit amet consectetur adipisicing
        </span>{" "}
        elit. Facere ex consectetur esse dolor sint architecto.
      </p>
    </section>
  );
}
