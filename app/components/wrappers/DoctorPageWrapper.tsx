import React, { ReactNode } from 'react';

type DoctorPageWrapperProps = {
  children: ReactNode;
};

export default function DoctorPageWrapper({ children }: DoctorPageWrapperProps) {
  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 py-10 sm:pt-12 md:pt-16 lg:pt-28 px-8 md:px-14 lg:px-28 xl:px-42 2xl:px-48 bg-white">
      {children}
    </section>
  );
}
