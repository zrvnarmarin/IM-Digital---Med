import { TestSVG } from "@/app/(home-sections)/WhyPeopleChooseUs";
import SectionWrapper from "@/app/components/wrappers/SectionWrapper";

export default function RecoveryTimeSection ({
    recoveryTime,
  }: {
    recoveryTime: string;
  }) {
    return (
      <SectionWrapper>
        <div id="recovery-time" className="flex flex-row items-center gap-6">
          <TestSVG />
          <h2 className="text-start text-2xl xs:text-4xl font-medium text-slate-600 underline-offset-8 decoration-1 underline decoration-[#babaff]">
            Recovery Time
          </h2>
        </div>
  
        <p className="text-start w-full text-base xl:text-lg font-light text-slate-500 pt-2">
          {recoveryTime}
        </p>
      </SectionWrapper>
    );
  };