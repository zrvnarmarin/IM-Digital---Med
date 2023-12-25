import React from 'react'
import { IconsEightTestIcon } from "@/public/Icons";

export default function CoreValuesSection() {
  return (
    <section className="w-full flex flex-col gap-8 py-16 px-8 bg-white pt-12">
        <div className="flex flex-col items-center gap-2 relative">
          <p className="text-9xl text-slate-200 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
            01
          </p>
          <div className="relative z-10 text-xl uppercase font-bold">
            Our Values
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
          {coreValues.map((value) => (
            <div className="flex flex-col items-start gap-1">
              {value.icon()}
              <h2 className="text-center text-md md:text-lg lg:text-xl font-semibold pt-2">
                {value.value}
              </h2>
              <p className="text-sm text-slate-500 pt-1">
                {value.description}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center gap-2 relative pt-16">
          <p className="text-9xl text-slate-200 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
            02
          </p>
          <div className="relative z-10 text-xl uppercase font-bold">
            Our Mission
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
          {coreValues.map((value) => (
            <div className="flex flex-col items-start gap-1">
              {value.icon()}
              <h2 className="text-center text-md md:text-lg lg:text-xl font-semibold pt-2">
                {value.value}
              </h2>
              <p className="text-sm text-slate-500 pt-1">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>
  )
}

const coreValues = [
    {
      icon: IconsEightTestIcon,
      value: "Transparency",
      description:
        "Lorem ipsu, dolor sit amet consectur apkilitis elit. Libero, tone lota.",
    },
    {
      icon: IconsEightTestIcon,
      value: "Transparency",
      description:
        "Lorem ipsu, dolor sit amet consectur apkilitis elit. Libero, tone lota.",
    },
    {
      icon: IconsEightTestIcon,
      value: "Transparency",
      description:
        "Lorem ipsu, dolor sit amet consectur apkilitis elit. Libero, tone lota.",
    },
    {
      icon: IconsEightTestIcon,
      value: "Transparency",
      description:
        "Lorem ipsu, dolor sit amet consectur apkilitis elit. Libero, tone lota.",
    },
  ];