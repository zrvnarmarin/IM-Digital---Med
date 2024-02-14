import Image from "next/image";
import SectionWrapper from "../components/wrappers/SectionWrapper";
import HeroImage from "../../public/HospitalImage.jpg";
import Footer from "../components/Footer";
import TestImage from "../../public/HospitalImage.jpg";
import { news, testimonials } from "../data";
import { MagnifierIcon } from "@/public/Icons";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#FFFFFF]">
      <HeroSection />
      {/* <SearchTestimonialsSection /> */}
      <NewsCards />
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
        <p className="text-xs italic pb-4 px-4 text-start w-full">News</p>
        <div className="bg-slate-700/90 text-3xl text-start font-bold mb-4 px-4 w-full py-3 border-slate-500 border-y-[1px]">
          <h1>News</h1>
        </div>
      </div>
    </section>
  );
};

export const SearchTestimonialsSection = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col gap-4 md:flex-row justify-between items-start md:items-center">
        <h1 className="text-center text-4xl font-bold text-slate-600">News</h1>
        <div className="flex flex-row shadow-lg">
          <div className="bg-[#02aeef]/50 shadow-lg duration-100 text-white font-semibold px-8 py-3 rounded-l-md">
            <MagnifierIcon width="30px" height="30px" />
          </div>
          <input
            type="text"
            id="email"
            placeholder="Search News"
            className="text-md md:text-lg border border-[#80d6f7] rounded-r-md w-full md:w-fit text-base xl:text-lg font-light text-slate-500 px-6 py-3"
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export const NewsCards = () => {
  return (
    <SectionWrapper>
      <div className="grid grid-cols-1 2 gap-8">
        {news.map((newInfo) => (
          <div key={newInfo.id} className="grid grid-cols-3 gap-8">
              <div className="items-center justify-center rounded-t bg-primary lg:w-2/5 lg:rounded-l lg:rounded-tr-none">
                <div className="flex col-span-1 w-full items-center">
                    <Image
                      src={TestImage}
                      alt="Community Image"
                      className="rounded-3xl "
                    />
                </div>
              </div>
              <div className="col-span-2 flex flex-col items-center justify-center gap-2 py-4">
                <p className="text-end text-4xl font-bold text-slate-600">
                  {newInfo.title}
                </p>
                <p className="text-slate-500 font-medium text-lg xl:text-xl">
                  {newInfo.shortDescription}
                </p>
                <div className="flex space-x-3 gap-4 items-center">
                  <div>
                    <p className="w-full text-slate-500 font-medium text-sm lg:text-md xl:text-lg">
                      {newInfo.date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
        ))}
      </div>
      <div className="flex justify-center pt-8 px-6">
        <button className="bg-[#02aeef]/50 hover:bg-[#02aeef]/70 duration-100 rounded-md shadow-2xl text-white font-medium px-6 py-3">
          Load More
        </button>
      </div>
    </SectionWrapper>
  );
};
