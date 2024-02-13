import React from "react";
import Testimonials from "../components/Testimonials";
import TestimonialsWrapper from "../components/wrappers/TestimonialsWrapper";

export default function TestimonialsSection() {
  return (
    <TestimonialsWrapper>
      <Testimonials showReadMoreButton={false} />
    </TestimonialsWrapper>
  );
}
