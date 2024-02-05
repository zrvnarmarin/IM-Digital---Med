import Image from "next/image";
import Link from "next/link";
import SectionWrapper from "../components/wrappers/SectionWrapper";
import HeroImage from "../../public/HospitalImage.jpg";
import Footer from "../components/Footer";
import { Testimonial } from "../components/Testimonials";
import { testimonials } from "../data";

export default function AboutUs() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#FFFFFF]">
      <HeroSection />
      <SearchTestimonialsSection />
      <TestimoniaslCardsSection />
      <Footer />
    </main>
  );
}

export const HeroSection = () => {
  return (
    <section className="relative w-full h-screen">
      <Image
        src={HeroImage}
        alt="Hero Image"
        className="object-cover w-full h-full"
      />

      <div className="absolute bottom-4 lg:bottom-4 left-0 right-0 w-full flex flex-col items-center justify-center text-white text-center">
        <p className="text-xs italic pb-4 px-4 text-start w-full">
          Testimonials
        </p>
        <div className="bg-slate-700/90 text-3xl text-start font-bold mb-4 px-4 w-full py-3 border-slate-500 border-y-[1px]">
          <h1>Testimonials</h1>
        </div>
      </div>
    </section>
  );
};

export const SearchTestimonialsSection = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col gap-4 md:flex-row justify-between items-start md:items-center">
        <h2 className="text-start text-2xl xs:text-4xl font-medium text-slate-600 underline-offset-8 decoration-1 underline decoration-[#babaff]">
          Search testimonials
        </h2>
        <input
          type="text"
          id="email"
          placeholder="Select Service"
          className="rounded-md text-md md:text-lg border border-[#babaff] w-full md:w-fit text-base xl:text-lg font-light text-slate-500 px-6 py-3"
        />
      </div>
    </SectionWrapper>
  );
};

export const TestimoniaslCardsSection = () => {
    return (
        <SectionWrapper>
            <div className="flex flex-col gap-6">
                {testimonials.map(testimonial =>
                   <Testimonial key={testimonial.id} testimonialData={testimonial} />   
                )}
            </div>
        </SectionWrapper>
    )
}