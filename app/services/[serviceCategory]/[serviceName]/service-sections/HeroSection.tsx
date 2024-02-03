import { generateFullNameFromUrl } from "@/app/utils";
import Image from "next/image";
import Link from "next/link";
import HeroImage from "../../../../../public/DoctorSmiling.jpg";

export default function HeroSection({ serviceName }: { serviceName: string }) {
    return (
      <section className="w-full grid grid-cols-1 md:grid-cols-2 bg-[#babaff]/10">
        <div className="bg-[#babaff]/10 py-8 px-6 lg:bottom-4 left-0 right-0 w-full flex flex-col gap-2 text-white text-center">
          <Link
            href={`/services`}
            className="text-start w-full text-slate-500 font-normal text-lg xl:text-xl uppercase py-4"
          >
            {`<<`} Services
          </Link>
  
          <h1 className="text-start w-full text-2xl xs:text-4xl font-medium text-slate-500">
            {generateFullNameFromUrl(serviceName)}
          </h1>
  
          <h1 className="text-start w-full text-slate-500 font-normal text-lg xl:text-xl">
            service deskripcija hehe Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Sint maiores in odio vero quaerat itaque error,
            facere ipsam officiis, repellat sunt incidunt vitae vel? Ex
            consequatur nihil rerum qui laboriosam. Tenetur pariatur expedita
            mollitia enim tempore distinctio impedit recusandae reprehenderit
            sapiente voluptates iusto
          </h1>
        </div>
  
        <div className="bg-[#babaff]/10 p-4">
          <div className="flex flex-col gap-4">
            <Image
              width={0}
              height={250}
              src={HeroImage}
              alt="Hero Image"
              className="object-cover w-full h-32 md:h-auto opacity-60 bg-black rounded-md"
            />
          </div>
        </div>
      </section>
    );
  }