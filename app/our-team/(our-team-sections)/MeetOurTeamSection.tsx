import React from 'react'
import Link from 'next/link';

export default function MeetOurTeamSection() {
  return (
    <section className='flex gap-8 h-full flex-col md:flex-col py-12 px-8'>
      <p>Your health is our Concern</p>
      <h1>
        Meet Our dedicated team of medical professionals who will guide you on your journey to health and well-being.
        Discover the expertise and compassion that defines our best doctors
      </h1>
      <div className='border-2 border-black flex items-center justify-center'>
        Place fot the team of doctors image
      </div>
      <div className='flex flex-col gap-8'>
        {doctors.map(doctor =>
          <Link href={`/our-team/${doctor.href}`} key={doctor.name} className='flex flex-row gap-4 p-2 border-2 border-black rounded-md'>
            <div className='flex border-2 border-black items-center justify-center'>
              Image of the doctor
            </div>
            <div>
              <h2>{doctor.name}</h2>
              <p>{doctor.title}</p>
              <p>{doctor.shortDescription}</p>
              <p>Read More</p>
            </div>
          </Link>  
        )}
      </div>
    </section>
  )
}

const doctors = [
  {
    imageSrc: 'path/to/johan_smith_image.jpg',
    href: '/dr-johan-smith',
    name: 'Dr. Johan Smith',
    title: 'Cardiologist',
    shortDescription: 'Renowned for groundbreaking cardiac procedures and pioneering research, Dr. Smith is committed to ensuring your heart health with precision and innovation.',
    description: 'Dr. Johan Smith, our esteemed Cardiologist, embarked on his medical journey driven by a personal experience that ignited a passion for cardiovascular health. Witnessing the profound impact of preventive cardiology on his own family, Dr. Smith dedicated himself to understanding and advancing heart care. With four years of hands-on experience, Dr. Smith has not only saved lives through intricate cardiac procedures but has also been a vocal advocate for community education on heart health. His commitment to continuous learning and innovative approaches has earned him a reputable 4.5-star rating among his peers and patients alike.',
    achievements: [
      'Pioneered a minimally invasive cardiac procedure that reduced recovery times by 30%, improving the quality of life for countless patients.',
      'Published a groundbreaking research paper on the correlation between lifestyle choices and cardiovascular health, contributing to the field of preventive cardiology.',
      'Recognized as "Cardiologist of the Year" by the National Healthcare Excellence Awards for two consecutive years.',
      'Established a community-driven heart health awareness program, reaching over 10,000 individuals through seminars and workshops.',
    ],
  },
  {
    imageSrc: 'path/to/patrice_harris_image.jpg',
    href: 'dr-patrice-harris',
    name: 'Dr. Patrice Harris',
    title: 'Pediatrician',
    shortDescription: 'With a passion for nurturing young lives, Dr. Harris goes beyond traditional pediatric care. Her commitment to community outreach and advocacy makes her a trusted ally for families.',
    description: "Dr. Patrice Harris, our Pediatrician extraordinaire, found her calling in the laughter and resilience of children. Five years into her practice, Dr. Harris has become a beacon of comfort for both little patients and their worried parents. Her commitment to pediatrics extends beyond the clinic walls. Dr. Harris actively participates in community outreach programs, ensuring that every child receives not just medical care but a warm and nurturing environment. Her stellar 4.8-star rating reflects the joy and health she brings to the lives of countless families.",
    achievements: [
      'Implemented a specialized pediatric telemedicine program, expanding access to healthcare for children in remote areas.',
      'Led a medical mission to provide healthcare to underprivileged children in developing countries, treating over 500 patients in a single mission.',
      'Received the "Young Leader in Pediatrics" award for outstanding contributions to pediatric medicine and advocacy for children\'s rights.',
      'Developed a comprehensive pediatric wellness program, reducing the incidence of childhood obesity in the local community by 20%.',
    ],
  },
  {
    imageSrc: 'path/to/shaun_murphy_image.jpg',
    href: '/dr-shaun-murphy',
    name: 'Dr. Shaun Murphy',
    title: 'Dermatologist',
    shortDescription: 'Dr. Murphy combines medical expertise with an artistic touch in dermatology. Experience innovative skincare solutions and a personalized approach to your skin health.',
    description: "Dr. Shaun Murphy, our Dermatologist with a keen eye for skin health, embarked on his journey inspired by the powerful connection between skin and self-esteem. Over three years, Dr. Murphy has established himself as a trusted expert in dermatology, combining medical expertise with a compassionate approach. His pursuit of holistic skin care has led him to integrate innovative technologies, ensuring that his patients not only receive treatment but also a renewed sense of confidence. Dr. Murphy's 4.7-star rating is a testament to his dedication to both the science and art of dermatology.",
    achievements: [
      'Introduced a state-of-the-art laser therapy technique for scar reduction, gaining recognition as a regional expert in dermatological aesthetics.',
      'Spearheaded a dermatology outreach initiative, offering free skin cancer screenings to over 1,000 individuals in underserved communities.',
      'Published a series of educational skincare articles in leading health magazines, reaching a broad audience and promoting skin health awareness.',
      'Collaborated with renowned skincare brands to develop a dermatologist-approved skincare line for various skin conditions.',
    ],
  },
  {
    imageSrc: 'path/to/john_bell_image.jpg',
    href: 'dr-john-bell',
    name: 'Dr. John Bell',
    title: 'Orthopedic Specialist',
    shortDescription: 'Specializing in orthopedic care, Dr. Bell brings seven years of expertise to the table. His commitment to restoring mobility and transforming lives sets him apart.',
    description: "Dr. John Bell, our Orthopedic Specialist, brings seven years of expertise in mending bones and restoring mobility. Driven by a personal sports injury, Dr. Bell understands the profound impact of orthopedic care on one's quality of life. Beyond his surgical precision, Dr. Bell actively engages in research, contributing to advancements in orthopedic treatments. His commitment to patient-centric care and comprehensive rehabilitation has earned him a solid 4.5-star rating, making him a trusted ally in the journey to musculoskeletal well-being.",
    achievements: [
      'Successfully performed a groundbreaking joint replacement surgery, restoring mobility to a patient who had been wheelchair-bound for over a decade.',
      'Contributed to the development of a cutting-edge orthopedic implant, improving the longevity and effectiveness of joint replacements.',
      'Received the "Orthopedic Surgeon of Excellence" award for consistently achieving exceptional patient outcomes and satisfaction rates.',
      'Established an orthopedic mentorship program, guiding and inspiring the next generation of orthopedic surgeons.',
    ],
  },
];

