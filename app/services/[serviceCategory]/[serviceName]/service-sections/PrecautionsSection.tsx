import { TestSVG } from "@/app/(home-sections)/WhyPeopleChooseUs";
import SectionWrapper from "@/app/components/wrappers/SectionWrapper";

export default function PrecautionsSection ({
    precautions,
  }: {
    precautions: string;
  }) {
    return (
      <SectionWrapper>
        <div id="precautions" className="flex flex-row items-center gap-6">
          <TestSVG />
          <h2 className="text-start text-2xl xs:text-4xl font-medium text-slate-600 underline-offset-8 decoration-1 underline decoration-[#babaff]">
            Precautions
          </h2>
        </div>
  
        <div>
          <p className="text-start w-full text-base xl:text-lg font-light text-slate-500 pt-2">
            {precautions}
          </p>
        </div>
      </SectionWrapper>
    );
  };