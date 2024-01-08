import Image from "next/image";
import ElectricityIcon from "../../public/ElectricityIcon.png";

export default function ListSection() {
  return (
    <section className="flex flex-col gap-8 pb-16 px-7 bg-white">
      <h1 className="font-bold text-start text-lg lg:text-3xl text-[#2a2f31] leading-10">
        Lorem Ipsum Dolor Sit Garum
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <ul className="flex flex-col gap-4">
          <li className="flex gap-4 items-center text-sm">
            <div className="h-full flex items-center border-[1px] border-slate-200"></div>
            <div className="flex flex-col gap-2 py-4">
              <div className="flex items-center gap-2">
                <Image src={ElectricityIcon} alt="icon" width={15} height={15} />
                <p className="text-xs font-medium">Elastic Scalability</p>
              </div>
              Our experts and consultants are highly experienced medical
              translators, largely with healthcare, life sciences' or scientific
              backgrounds and proprietary networks of clinicians.
            </div>
          </li>
          <li className="flex gap-4 items-center text-sm">
            <div className="h-full flex items-center border-[1px] border-slate-200"></div>
            <div className="flex flex-col gap-2 py-4">
              <div className="flex items-center gap-2">
                <Image src={ElectricityIcon} alt="icon" width={15} height={15} />
                <p className="text-xs font-medium">Elastic Scalability</p>
              </div>
              Our experts and consultants are highly experienced medical
              translators, largely with healthcare, life sciences' or scientific
              backgrounds and proprietary networks of clinicians.
            </div>
          </li>
          <li className="flex gap-4 items-center text-sm">
            <div className="h-full flex items-center border-[1px] border-slate-200"></div>
            <div className="flex flex-col gap-2 py-4">
              <div className="flex items-center gap-2">
                <Image src={ElectricityIcon} alt="icon" width={15} height={15} />
                <p className="text-xs font-medium">Elastic Scalability</p>
              </div>
              Our experts and consultants are highly experienced medical
              translators, largely with healthcare, life sciences' or scientific
              backgrounds and proprietary networks of clinicians.
            </div>
          </li>
          <li className="flex gap-4 items-center text-sm">
            <div className="h-full flex items-center border-[1px] border-slate-200"></div>
            <div className="flex flex-col gap-2 py-4">
              <div className="flex items-center gap-2">
                <Image src={ElectricityIcon} alt="icon" width={15} height={15} />
                <p className="text-xs font-medium">Elastic Scalability</p>
              </div>
              Our experts and consultants are highly experienced medical
              translators, largely with healthcare, life sciences' or scientific
              backgrounds and proprietary networks of clinicians.
            </div>
          </li>
          <li className="flex gap-4 items-center text-sm">
            <div className="h-full flex items-center border-[1px] border-slate-200"></div>
            <div className="flex flex-col gap-2 py-4">
              <div className="flex items-center gap-2">
                <Image src={ElectricityIcon} alt="icon" width={15} height={15} />
                <p className="text-xs font-medium">Elastic Scalability</p>
              </div>
              Our experts and consultants are highly experienced medical
              translators, largely with healthcare, life sciences' or scientific
              backgrounds and proprietary networks of clinicians.
            </div>
          </li>
        </ul>
        {/* tu ide animacija sa akrticama koje se rotiraju */}
        <div className="flex flex-col gap-2 items-center">
          <button className="bg-slate-700/90 text-white px-6 py-3 rounded border-slate-500 border">
            Our Services
          </button>
        </div>
      </div>
      
    </section>
  );
}
