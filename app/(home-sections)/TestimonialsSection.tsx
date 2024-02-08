import React from "react";
import Testimonials from "../components/Testimonials";
import SectionWrapper from "../components/wrappers/SectionWrapper";

export default function TestimonialsSection() {
  return (
    <SectionWrapper>
      <Testimonials showReadMoreButton={false} />
    </SectionWrapper>
  );
}
