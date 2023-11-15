import React from 'react'

export default function WhatSetUsApartSection() {
  return (
    <section className='flex gap-8 h-full flex-col lg:flex-row py-12 px-8'>
      <h1>
        What Set Us Appart
      </h1>
      <ul>
        <li>
            <h2>
                Patient-Centric Approach
            </h2>
            <p>
                Your health is at the heart of everything we do. We prioritize your needs, ensuring a personalized and 
                empathetic experience at every step.
            </p>
        </li>
        <li>
            <h2>
                Innovation in Healthcare
            </h2>
            <p>
                We leverage the latest technologies and medical advancements to provide you with the best possible care. 
                Our commitment to innovation ensures that you have access to state-of-the-art solutions.
            </p>
        </li>
        <li>
            <h2>
                Qualified Professionals
            </h2>
            <p>
                Our team comprises experienced healthcare professionals, from skilled doctors to
                compassionate support staff. Rest assured, you're in capable hands.
            </p>
        </li>
      </ul>
    </section>
  )
}
