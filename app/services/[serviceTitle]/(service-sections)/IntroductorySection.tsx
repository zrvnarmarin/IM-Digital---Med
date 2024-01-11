import React from "react";

export default function IntroductorySection({ serviceShortDescription } : { serviceShortDescription: string }) {
  return (
    <section className="flex gap-2 h-full flex-col md:flex-col py-12 px-6 md:px-8 lg:px-24 bg-[#FFFFFF]">
      <p className="text-start text-md md:text-lg lg:text-xl text-black font-semibold">
        {serviceShortDescription}
      </p>
      <p className="text-start w-full text-sm md:text-md font-normal bg-slate-100 p-4 border border-slate-200 rounded-md mt-4">
        Parodontoza je podmukla bolest desni koju je na početku lako ignorirati
        jer ne uzrokuje bol, ali zato vrlo brzo zbog izostanka odgovarajućeg
        parodontološkog tretmana preraste u Vaš problem br.1 jer dolazi do
        nezaustavljivog gubitka tkiva koje podržava zube.
      </p>
      <p className="text-sm md:text-md font-normal pt-1">
        Pravom ste mjestu: naš specijalist parodontologije detaljno će
        pregledati Vaše zubno meso te u skladu s time dati preporuku za
        odgovarajući tretman. Uz redovite kontrole i našu specijalističku obradu
        parodontološke situacije.
      </p>
    </section>
  );
}
