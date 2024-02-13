import Image from "next/image";
import Link from "next/link";
import SectionWrapper from "../components/wrappers/SectionWrapper";
import HeroImage from "../../public/HospitalImage.jpg";
import Footer from "../components/Footer";
import { Testimonial } from "../components/Testimonials";
import { testimonials } from "../data";
import { MagnifierIcon } from "@/public/Icons";

export default function AboutUs() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#FFFFFF]">
      <HeroSection />
      <SearchTestimonialsSection />
      <TestimonialCards />
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
        <h1 className="text-center text-4xl font-bold text-slate-600">
          Testimonials
        </h1>
        <div className="flex flex-row shadow-lg">
          <div className="bg-[#02aeef]/50 shadow-lg duration-100 text-white font-semibold px-8 py-3 rounded-l-md">
            <MagnifierIcon width="30px" height="30px" />
          </div>
          <input
            type="text"
            id="email"
            placeholder="Search testimonials"
            className="text-md md:text-lg border border-[#80d6f7] rounded-r-md w-full md:w-fit text-base xl:text-lg font-light text-slate-500 px-6 py-3"
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export const TestimonialCards = () => {
  return (
    <SectionWrapper>
      <div className="grid grid-cols-1 2 gap-8">
        {testimonials.map((testimonial) => (
          <Testimonial testimonialData={testimonial} key={testimonial.id} />
        ))}
      </div>
      <div className="flex justify-center pt-8 px-6">
        <button
          className="bg-[#02aeef]/50 hover:bg-[#02aeef]/70 duration-100 rounded-md shadow-2xl text-white font-medium px-6 py-3"
        >
          Load More
        </button>
      </div>
    </SectionWrapper>
  )
}