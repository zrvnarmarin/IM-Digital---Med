import React from "react";

export default function StatsSection() {
  return (
    <section className="w-full flex flex-col gap-8 pt-10 sm:pt-12 md:pt-16 lg:pt-28  bg-white">
      <div className="bg-[#babaff]/50 grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-4 gap-10 place-items-center px-8 py-8">
        <div>
          <h2 className="font-bold text-center text-8xl text-white">1</h2>
          <p className="font-semibold text-2xl text-white">STRUCNJAKA</p>
        </div>

        <div>
          <h2 className="font-bold text-center text-8xl text-white">1</h2>
          <p className="font-semibold text-2xl text-white">STRUCNJAKA</p>
        </div>

        <div>
          <h2 className="font-bold text-center text-8xl text-white">1</h2>
          <p className="font-semibold text-2xl text-white">STRUCNJAKA</p>
        </div>

        <div>
          <h2 className="font-bold text-center text-8xl text-white">1</h2>
          <p className="font-semibold text-2xl text-white">STRUCNJAKA</p>
        </div>
      </div>
    </section>
  );
}
