import MeetOurTeamSection from "../../our-team/(our-team-sections)/MeetOurTeamSection";

export default function OurFoundingStorySection() {
  return (
    <section>
      <div className="flex flex-col gap-10 pt-10 sm:pt-12 md:pt-16 lg:pt-28 px-7 md:px-10 lg:px-24 xl:px-28 2xl:px-32 bg-white">
        <div className="bg-[#babaff]/50 flex flex-row items-center justify-between px-8 py-8 uppercase">
          <h2 className="font-bold text-center text-8xl text-white">4</h2>
          <h2 className="font-bold text-center text-8xl text-white">
            Meet Our Team
          </h2>
        </div>
      </div>
      <MeetOurTeamSection />
    </section>
  );
}
