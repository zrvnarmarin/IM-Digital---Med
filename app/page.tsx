import Navbar from "./(home-sections)/Navbar";
import HeroSection from "./(home-sections)/HeroSection";
import WhyPeopleChooseUs from "./(home-sections)/WhyPeopleChooseUs";
import MeetOurDoctors from "./(home-sections)/MeetOurDoctors";
import FAQSection from "./(home-sections)/FAQSection";
import Footer from "./components/Footer";
import ListSection from "./(home-sections)/ListSection";
import ServicesSection from "./(home-sections)/ServicesSection";
import TestimonialsSection from "./(home-sections)/TestimonialsSection";
import StatsSection from "./(home-sections)/StatsSection";
import NewsSection from "./(home-sections)/NewsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#FFFFFF]">
      <Navbar />
      <HeroSection />
      <WhyPeopleChooseUs />
      <ListSection />
      <ServicesSection />
      <StatsSection />
      <MeetOurDoctors />
      <TestimonialsSection />
      <NewsSection />
      <FAQSection />
      <section className="w-full flex flex-col gap-8 pt-10 sm:pt-12 md:pt-16 lg:pt-28 px-7 md:px-10 lg:px-24 xl:px-28 2xl:px-32 bg-white">
        <h1 className="font-bold text-start text-xl lg:text-3xl text-slate-600 leading-2">
          Get in touch with us
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Heading and description */}
          <div className="flex gap-4 items-center">
            <div className="h-full flex items-center border-[1px] border-slate-200"></div>
            <div className="flex flex-col gap-2">
              <p className="text-start w-full text-md md:text-lg font-normal text-slate-600">
                Tell us all about your project right here, or send us an email
                at
                <span className="font-semibold text-[#babaff]">
                  {" "}
                  info@clinicname.com
                </span>
              </p>
            </div>
          </div>

          {/* Delete section */}
          <div className="flex gap-4 items-center bg-[#babaff]/10">
            <div className="h-full flex items-center border-[1px] border-slate-200"></div>
            <div className="flex flex-col gap-2 py-4">
              <p className="text-start w-full text-md md:text-lg font-normal text-slate-600">
                By filling out this form, our call center will contact you
                within 24 hours to arrange your appointment.
                <span className="font-semibold text-[#babaff]">
                  {" "}
                  info@clinicname.com
                </span>
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="flex gap-4 items-center rounded bg-[#babaff]/10 pr-5 pt-6 pb-6">
            <div className="h-full flex items-center"></div>
            <form className="flex flex-col gap-2 w-full">
              <label
                htmlFor="name"
                className="flex flex-col text-md md:text-lg gap-3 font-semibold text-slate-600 leading-2"
              >
                Name
                <input
                  type="text"
                  id="name"
                  className="border-none text-md md:text-lg font-normal text-slate-600 px-6 py-3"
                />
              </label>
              <label
                htmlFor="email"
                className="flex flex-col text-md md:text-lg gap-3 font-semibold text-slate-600 leading-2"
              >
                Email
                <input
                  type="text"
                  id="email"
                  className="border-none text-md md:text-lg font-normal text-slate-600 px-6 py-3"
                />
              </label>
              <label
                htmlFor="phone-number"
                className="flex flex-col text-md md:text-lg gap-3 font-semibold text-slate-600 leading-2"
              >
                Phone Number
                <input
                  type="text"
                  id="phone-number"
                  className="border-none text-md md:text-lg font-normal text-slate-600 px-6 py-3"
                />
              </label>
              <label
                htmlFor="phone-number"
                className="flex flex-col text-md md:text-lg gap-3 font-semibold text-slate-600 leading-2"
              >
                I{`'`}m interested in
                <input
                  type="text"
                  id="phone-number"
                  className="border-none text-md md:text-lg font-normal text-slate-600 px-6 py-3"
                />
              </label>
              <label
                htmlFor="phone-number"
                className="flex flex-col text-md md:text-lg gap-3 font-semibold text-slate-600 leading-2"
              >
                I{`'`}m interested in
                <textarea
                  name="user-request"
                  rows={5}
                  className="border-none text-md md:text-lg font-normal text-slate-600 px-6 py-3"
                />
              </label>
              <div className="flex justify-center pt-8 px-6">
                <button className="bg-[#babaff]/50 text-white font-semibold px-6 py-3 uppercase">
                  Send
                </button>
              </div>
            </form>
          </div>

          {/* Company data */}
          <div className="flex gap-4 items-center bg-[#babaff]/10">
            <div className="flex flex-col gap-2 p-4">
              <p>Company data</p>
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center"></div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
