import Link from "next/link";
import SectionWrapper from "@/app/components/wrappers/SectionWrapper";

export default function GetAppointmentSection() {
  return (
    <SectionWrapper>
      <div className="bg-[#02aeef]/5 py-8 px-8 lg:py-16 lg:px-24 rounded-md">
        <h1 className="text-center w-full text-2xl xs:text-4xl font-medium text-slate-500">
          Želite se naručiti kod ovog liječnika?
        </h1>
        <div className="flex justify-center text-center pt-8 px-6">
          <Link
            href="/our-team"
            className="bg-[#02aeef]/50 hover:bg-[#02aeef]/70 duration-100 rounded-md shadow-lg text-white font-medium px-6 py-3"
          >
            Send enquery
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
