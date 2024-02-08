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
        <TestSVG iconFill="#ffffff" backgroundFill= "#80d6f7" />
          <h2 className="text-start text-xl xs:text-2xl font-semibold text-slate-600">
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