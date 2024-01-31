import Link from "next/link";
import SectionWrapper from "@/app/components/wrappers/SectionWrapper";

export default function GetAppointmentSection() {
  return (
    <SectionWrapper>
      <div className=" bg-[#babaff]/10 p-8 rounded-md">
        <h1 className="text-center w-full text-2xl xs:text-4xl font-medium text-slate-500">
          Želite se naručiti kod ovog liječnika?
        </h1>
        <div className="flex justify-center text-center pt-8 px-6">
          <Link
            href="/our-team"
            className="bg-[#babaff]/50 text-white font-semibold px-6 py-3 uppercase"
          >
            Send enquery
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}
