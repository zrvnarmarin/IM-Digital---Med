import { IconsEightTestIcon } from "@/public/Icons";
import TestImage from "../public/HospitalImage.jpg";

export const doctors = [
  {
    id: 1,
    imageSrc: "path/to/johan_smith_image.jpg",
    href: "johan-smith",
    name: "Johan Smith",
    specialisation: "Cardiologist",
    shortDescription:
      "Renowned for groundbreaking cardiac procedures and pioneering research, Dr. Smith is committed to ensuring your heart health with precision and innovation.",
    description:
      "Dr. Johan Smith, our esteemed Cardiologist, embarked on his medical journey driven by a personal experience that ignited a passion for cardiovascular health. Witnessing the profound impact of preventive cardiology on his own family, Dr. Smith dedicated himself to understanding and advancing heart care. With four years of hands-on experience, Dr. Smith has not only saved lives through intricate cardiac procedures but has also been a vocal advocate for community education on heart health. His commitment to continuous learning and innovative approaches has earned him a reputable 4.5-star rating among his peers and patients alike.",
    achievements: [
      "Pioneered a minimally invasive cardiac procedure that reduced recovery times by 30%, improving the quality of life for countless patients.",
      "Published a groundbreaking research paper on the correlation between lifestyle choices and cardiovascular health, contributing to the field of preventive cardiology.",
      'Recognized as "Cardiologist of the Year" by the National Healthcare Excellence Awards for two consecutive years.',
      "Established a community-driven heart health awareness program, reaching over 10,000 individuals through seminars and workshops.",
    ],
    fieldOfInterests: ["Cardiology", "Preventive Medicine"],
    education: "Doctor of Medicine (MD), Cardiology Fellowship",
  },
  {
    id: 2,
    imageSrc: "path/to/patrice_harris_image.jpg",
    href: "patrice-harris",
    name: "Patrice Harris",
    specialisation: "Pediatrician",
    shortDescription:
      "With a passion for nurturing young lives, Dr. Harris goes beyond traditional pediatric care. Her commitment to community outreach and advocacy makes her a trusted ally for families.",
    description:
      "Dr. Patrice Harris, our Pediatrician extraordinaire, found her calling in the laughter and resilience of children. Five years into her practice, Dr. Harris has become a beacon of comfort for both little patients and their worried parents. Her commitment to pediatrics extends beyond the clinic walls. Dr. Harris actively participates in community outreach programs, ensuring that every child receives not just medical care but a warm and nurturing environment. Her stellar 4.8-star rating reflects the joy and health she brings to the lives of countless families.",
    achievements: [
      "Implemented a specialized pediatric telemedicine program, expanding access to healthcare for children in remote areas.",
      "Led a medical mission to provide healthcare to underprivileged children in developing countries, treating over 500 patients in a single mission.",
      'Received the "Young Leader in Pediatrics" award for outstanding contributions to pediatric medicine and advocacy for children\'s rights.',
      "Developed a comprehensive pediatric wellness program, reducing the incidence of childhood obesity in the local community by 20%.",
    ],
    fieldOfInterests: ["Pediatrics", "Community Outreach"],
    education: "Doctor of Medicine (MD), Pediatrics Residency",
  },
  {
    id: 3,
    imageSrc: "path/to/shaun_murphy_image.jpg",
    href: "shaun-murphy",
    name: "Shaun Murphy",
    specialisation: "Dermatologist",
    shortDescription:
      "Dr. Murphy combines medical expertise with an artistic touch in dermatology. Experience innovative skincare solutions and a personalized approach to your skin health.",
    description:
      "Dr. Shaun Murphy, our Dermatologist with a keen eye for skin health, embarked on his journey inspired by the powerful connection between skin and self-esteem. Over three years, Dr. Murphy has established himself as a trusted expert in dermatology, combining medical expertise with a compassionate approach. His pursuit of holistic skin care has led him to integrate innovative technologies, ensuring that his patients not only receive treatment but also a renewed sense of confidence. Dr. Murphy's 4.7-star rating is a testament to his dedication to both the science and art of dermatology.",
    achievements: [
      "Introduced a state-of-the-art laser therapy technique for scar reduction, gaining recognition as a regional expert in dermatological aesthetics.",
      "Spearheaded a dermatology outreach initiative, offering free skin cancer screenings to over 1,000 individuals in underserved communities.",
      "Published a series of educational skincare articles in leading health magazines, reaching a broad audience and promoting skin health awareness.",
      "Collaborated with renowned skincare brands to develop a dermatologist-approved skincare line for various skin conditions.",
    ],
    fieldOfInterests: ["Dermatology", "Aesthetic Medicine"],
    education: "Doctor of Medicine (MD), Dermatology Residency",
  },
  {
    id: 4,
    imageSrc: "path/to/john_bell_image.jpg",
    href: "john-bell",
    name: "John Bell",
    specialisation: "Orthopedian",
    shortDescription:
      "Specializing in orthopedic care, Dr. Bell brings seven years of expertise to the table. His commitment to restoring mobility and transforming lives sets him apart.",
    description:
      "Dr. John Bell, our Orthopedic Specialist, brings seven years of expertise in mending bones and restoring mobility. Driven by a personal sports injury, Dr. Bell understands the profound impact of orthopedic care on one's quality of life. Beyond his surgical precision, Dr. Bell actively engages in research, contributing to advancements in orthopedic treatments. His commitment to patient-centric care and comprehensive rehabilitation has earned him a solid 4.5-star rating, making him a trusted ally in the journey to musculoskeletal well-being.",
    achievements: [
      "Successfully performed a groundbreaking joint replacement surgery, restoring mobility to a patient who had been wheelchair-bound for over a decade.",
      "Contributed to the development of a cutting-edge orthopedic implant, improving the longevity and effectiveness of joint replacements.",
      'Received the "Orthopedic Surgeon of Excellence" award for consistently achieving exceptional patient outcomes and satisfaction rates.',
      "Established an orthopedic mentorship program, guiding and inspiring the next generation of orthopedic surgeons.",
    ],
    fieldOfInterests: ["Orthopedics", "Rehabilitation"],
    education: "Doctor of Medicine (MD), Orthopedic Surgery Residency",
  },
];

export const medicalServices = [
  {
    id: 1,
    icon: IconsEightTestIcon,
    href: "cardiac-proccedures",
    serviceTitle: "Cardiac Things For Heart",
    shortDescription:
      "Experience cutting-edge cardiac procedures with minimal incisions",
    includes: [
      "Cardiac catheterization for precise diagnosis.",
      "Angioplasty to open narrowed or blocked vessels.",
      "Stent placement to support arterial blood flow.",
    ],
    recovery:
      "After the minimally invasive cardiac procedure, recovery involves a comprehensive care plan. Patients are advised to follow prescribed medications, rest adequately, and attend regular follow-up appointments. This approach aims to ensure a smooth recovery and improved heart health.",
    examination:
      "Diagnostic tests, including Electrocardiogram (ECG) and stress tests, assess heart function before the procedure. Results guide the customization of the minimally invasive cardiac procedure to each patient's unique needs.",
    surgicalProcess:
      "Performed in a specialized cardiac catheterization lab, the procedure involves inserting a catheter through a small incision. This minimizes trauma to surrounding tissues. The expertise of the medical team ensures precision and safety throughout the process.",
    complications:
      "While generally safe, potential complications such as bleeding or infection are discussed with patients. Thorough pre-procedure consultations provide comprehensive information for informed decision-making.",
  },
  {
    id: 2,
    icon: IconsEightTestIcon,
    href: "pediactric-telemedicine-consultations",
    serviceTitle: "Pediatric Telemedicine",
    shortDescription:
      "Access remote healthcare services for your child with virtual consultations",
    includes: [
      "Video consultations for face-to-face communication.",
      "Prescription services for necessary medications.",
      "Parental guidance and support for managing your child's health at home.",
    ],
    recovery:
      "Recovery involves diligent adherence to prescribed treatments. Parents play a crucial role in monitoring their child's progress, with additional virtual check-ins as needed. This approach ensures continuous support and care from the pediatrician.",
    examination:
      "Virtual assessments of symptoms and medical history form the foundation of telemedicine consultations. Advanced technologies allow for thorough examinations, ensuring accurate diagnoses and personalized recommendations.",
    surgicalProcess:
      "As a non-surgical service, telemedicine consultations focus on virtual assessments and guidance. The pediatrician utilizes expertise to address various pediatric health concerns through remote consultations, emphasizing preventive care and timely interventions.",
    complications:
      "Pediatric telemedicine consultations pose minimal risks, primarily associated with remote diagnosis. The pediatrician prioritizes safety, ensuring that parents are well-informed about potential complications, even though they are rare.",
  },
  {
    id: 3,
    icon: IconsEightTestIcon,
    href: "laser-therapy-for-scar-reduction",
    serviceTitle: "Laser Therapy for Scar Reduction",
    shortDescription:
      "Benefit from advanced laser treatments designed to reduce and improve",
    includes: [
      "Fractional laser therapy for targeted scar treatment.",
      "Scar revision techniques to optimize results.",
      "Post-treatment care guidance for optimal healing.",
    ],
    recovery:
      "Post-treatment recovery involves a comprehensive skincare regimen. Patients receive detailed instructions on skincare practices, including the use of specialized products and protection from sun exposure. The dermatologist emphasizes diligent adherence to these guidelines for optimal healing and lasting results.",
    examination:
      "Before undergoing laser therapy, patients undergo a thorough examination of their skin type, scar characteristics, and overall health. Diagnostic tools and assessments tailor the laser treatment plan, ensuring alignment with each patient's unique needs and goals.",
    surgicalProcess:
      "State-of-the-art laser therapy is a non-surgical dermatological procedure. The dermatologist applies focused laser energy to targeted areas of the skin, promoting collagen production and minimizing the appearance of scars. Expertise ensures precision and safety throughout the process.",
    complications:
      "While generally considered safe, patients are informed about potential complications such as temporary redness, swelling, or changes in pigmentation. The dermatologist discusses these risks during pre-treatment consultations, ensuring patients are well-prepared and confident in their decision.",
  },
  {
    id: 4,
    icon: IconsEightTestIcon,
    href: "joint-replacement-surgeries",
    serviceTitle: "Joint Replacement Surgeries",
    shortDescription:
      "Experience life-changing joint replacement surgeries designed to restore mobility ",
    includes: [
      "Total joint replacement for severely damaged joints.",
      "Revision joint replacement for addressing previous implant issues.",
      "Comprehensive pre-operative and post-operative care.",
    ],
    recovery:
      "Post-operative recovery involves a structured rehabilitation program, personalized for each patient. Physical therapy, pain management, and follow-up appointments contribute to optimal recovery, allowing individuals to regain mobility and improve their quality of life.",
    examination:
      "Pre-operative assessments include imaging studies, such as X-rays and MRI scans, to evaluate joint condition. The orthopedic specialist conducts a thorough examination of the patient's medical history and lifestyle to tailor the joint replacement surgery.",
    surgicalProcess:
      "The joint replacement surgery is performed in a specialized operating room equipped with advanced technology. The orthopedic specialist utilizes expertise to ensure precision and safety throughout the surgical process, emphasizing optimal functionality and long-term joint health.",
    complications:
      "While joint replacement surgeries are generally safe, potential complications such as infection or implant issues are discussed with patients. Thorough pre-operative consultations provide comprehensive information for informed decision-making.",
  },
];

export const whyChooseUsPoints = [
  {
    id: 1,
    icon: IconsEightTestIcon,
    point: "Vrhunski stručni tim",
    description: "Medical team with over 20 doctors takes care of your smile",
  },
  {
    id: 2,
    icon: IconsEightTestIcon,
    point: "Experienced medical team",
    description: "Medical team with over 20 doctors takes care of your smile",
  },
  {
    id: 3,
    icon: IconsEightTestIcon,
    point: "Experienced medical team",
    description: "Medical team with over 20 doctors takes care of your smile",
  },
  {
    id: 4,
    icon: IconsEightTestIcon,
    point: "Experienced medical team",
    description: "Medical team with over 20 doctors takes care of your smile",
  },
];

export const listItems = [
  {
    id: 1,
    // icon: ElectricityIcon,
    title: "Elastic Scalability",
    description:
      "Our experts and consultants are highly experienced medical translators, largely with healthcare, life sciences or scientific backgrounds and proprietary networks of clinicians.",
  },
  {
    id: 2,
    // icon: ElectricityIcon,
    title: "Elastic Scalability",
    description:
      "Our experts and consultants are highly experienced medical translators, largely with healthcare, life sciences or scientific backgrounds and proprietary networks of clinicians.",
  },
];

export const listItemsTwo = [
  {
    id: 1,
    // icon: ElectricityIcon,
    title: "Elastic Scalability",
    description:
      "Our experts and consultants are highly experienced medical translators, largely with healthcare, life sciences or scientific backgrounds and proprietary networks of clinicians.",
  },
  {
    id: 2,
    // icon: ElectricityIcon,
    title: "Elastic Scalability",
    description:
      "Our experts and consultants are highly experienced medical translators, largely with healthcare, life sciences or scientific backgrounds and proprietary networks of clinicians.",
  },
];

export const homePageFAQ = [
  {
    id: 1,
    question: "What are common pediatric cardiovascular conditions?",
    answer:
      "Common pediatric cardiovascular conditions include congenital heart defects, arrhythmias, and heart murmurs.",
  },
  {
    id: 2,
    question: "How are pediatric cardiovascular conditions diagnosed?",
    answer:
      "Pediatric cardiovascular conditions are often diagnosed through physical examinations, imaging tests like echocardiograms, and electrocardiograms (ECGs).",
  },
  {
    id: 3,
    question: "What is the treatment for pediatric cardiovascular conditions?",
    answer:
      "Treatment for pediatric cardiovascular conditions may involve medications, surgical procedures, or interventions such as catheterization.",
  },
  {
    id: 4,
    question: "What are common dermatological conditions in children?",
    answer:
      "Common dermatological conditions in children include eczema, acne, impetigo, and fungal infections.",
  },
  {
    id: 5,
    question: "How can pediatric dermatological conditions be managed?",
    answer:
      "Management of pediatric dermatological conditions may involve topical medications, oral medications, and lifestyle modifications.",
  },
  {
    id: 6,
    question: "Zasto je metallica najbolji bend?",
    answer: "Zato sto je to stvarno zaista tako.",
  },
];

export const coreValues = [
  {
    id: 1,
    icon: IconsEightTestIcon,
    description:
      "Lorem ipsu, dolor sit amet consectur apkilitis elit. Libero, tone lota.",
  },
  {
    id: 2,
    icon: IconsEightTestIcon,
    description:
      "Lorem ipsu, dolor sit amet consectur apkilitis elit. Libero, tone lota.",
  },
  {
    id: 3,
    icon: IconsEightTestIcon,
    description:
      "Lorem ipsu, dolor sit amet consectur apkilitis elit. Libero, tone lota.",
  },
  {
    id: 4,
    icon: IconsEightTestIcon,
    description:
      "Lorem ipsu, dolor sit amet consectur apkilitis elit. Libero, tone lota.",
  },
];

export const aboutUsThirdSectionArray = [
  {
    id: 1,
    text: "lorem ipsum dolor igorrrrrrrrrrnmfvbkf vxr",
  },
  {
    id: 2,
    text: "lorem ipsum dolor igor igor igor gorfjgniudfobf",
  },
  {
    id: 3,
    text: "lorem ipsum dolor igorrrrrrrrrrrrrrrr",
  },
  {
    id: 4,
    text: "lorem ipsum dolor igo sojdhvui josdvosdb sdvb r",
  },
];

export const aboutUsFifthSectionArray = [
  {
    id: 1,
    title: "Title neki 1",
    text: "bok svim,a ja sam neki opis 1",
  },
  {
    id: 2,
    title: "Title neki 2",
    text: "bok svim,a ja sam neki opis 2",
  },
  {
    id: 3,
    title: "Title neki 3",
    text: "bok svim,a ja sam neki opis 3",
  },
  {
    id: 4,
    title: "Title neki 4",
    text: "bok svima, ja sam neki opis 4",
  },
];

export const missionItems = [
  {
    id: 1,
    icon: IconsEightTestIcon,
    value: "Transparency",
    description:
      "Lorem ipsu, dolor sit amet consectur apkilitis elit. Libero, tone lota.",
  },
  {
    id: 2,
    icon: IconsEightTestIcon,
    value: "Transparency",
    description:
      "Lorem ipsu, dolor sit amet consectur apkilitis elit. Libero, tone lota.",
  },
  {
    id: 3,
    icon: IconsEightTestIcon,
    value: "Transparency",
    description:
      "Lorem ipsu, dolor sit amet consectur apkilitis elit. Libero, tone lota.",
  },
  {
    id: 4,
    icon: IconsEightTestIcon,
    value: "Transparency",
    description:
      "Lorem ipsu, dolor sit amet consectur apkilitis elit. Libero, tone lota.",
  },
];

export const advantages = [
  {
    id: 1,
    icon: IconsEightTestIcon,
    value: "Transparency",
    description:
      "Lorem ipsu, dolor sit amet consectur apkilitis elit. Libero, tone lota.",
  },
  {
    id: 2,
    icon: IconsEightTestIcon,
    value: "Transparency",
    description:
      "Lorem ipsu, dolor sit amet consectur apkilitis elit. Libero, tone lota.",
  },
  {
    id: 3,
    icon: IconsEightTestIcon,
    value: "Transparency",
    description:
      "Lorem ipsu, dolor sit amet consectur apkilitis elit. Libero, tone lota.",
  },
  {
    id: 4,
    icon: IconsEightTestIcon,
    value: "Transparency",
    description:
      "Lorem ipsu, dolor sit amet consectur apkilitis elit. Libero, tone lota.",
  },
];

export const testimonials = [
  {
    id: 1,
    testimonial: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    personFullName: "John D.",
    personOccupation: "Software Engineer",
    date: "September 24, 2023",
  },
  {
    id: 2,
    testimonial:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    personFullName: "Jane S.",
    personOccupation: "Marketing Specialist",
    date: "September 24, 2023",
  },
  {
    id: 3,
    testimonial:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    personFullName: "Alex J.",
    personOccupation: "Graphic Designer",
    date: "September 24, 2023",
  },
  {
    id: 4,
    testimonial:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    personFullName: "Alex J.",
    personOccupation: "Graphic Designer",
    date: "September 24, 2023",
  },
  {
    id: 5,
    testimonial:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    personFullName: "Alex J.",
    personOccupation: "Graphic Designer",
    date: "September 24, 2023",
  },
  {
    id: 6,
    testimonial:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    personFullName: "Alex J.",
    personOccupation: "Graphic Designer",
    date: "September 24, 2023",
  },
];

export const stats = [
  {
    id: 1,
    statNumber: 245,
    statText: "Usluga",
  },
  {
    id: 2,
    statNumber: 5644,
    statText: "Zadovoljnih klijenata",
  },
  {
    id: 3,
    statNumber: 3,
    statText: "Nečega",
  },
  {
    id: 4,
    statNumber: 398,
    statText: "Ljudi nekakvih tamo",
  },
];

export const news = [
  {
    id: 1,
    href: "first-news",
    title: "News Number One",
    imageSrc: TestImage,
    date: "12. prosinca 2023.",
    shortDescription: "Some short description",
  },
  {
    id: 2,
    href: "first-news",
    title: "News Number One",
    imageSrc: TestImage,
    date: "12. prosinca 2023.",
    shortDescription: " Some short description Some short description Some short description Some short description Some short description Some short description",
  },
  {
    id: 3,
    href: "first-news",
    title: "News Number One",
    imageSrc: TestImage,
    shortDescription: "Some short description",
    date: "12. prosinca 2023.",
  },
  {
    id: 4,
    href: "first-news",
    title: "News Number One",
    imageSrc: TestImage,
    shortDescription: "Some short description",
    date: "12. prosinca 2023.",
  },
  // {
  //   id: 5,
  //   href: "first-news",
  //   title: "News Number One",
  //   imageSrc: TestImage,
  //   date: "12. prosinca 2023.",
  // },
  // {
  //   id: 6,
  //   href: "first-news",
  //   title: "News Number One",
  //   imageSrc: TestImage,
  //   date: "12. prosinca 2023.",
  // },
  // {
  //   id: 7,
  //   href: "first-news",
  //   title: "News Number One",
  //   imageSrc: TestImage,
  //   date: "12. prosinca 2023.",
  // },
  // {
  //   id: 8,
  //   href: "first-news",
  //   title: "News Number One",
  //   imageSrc: TestImage,
  //   date: "12. prosinca 2023.",
  // }
];

export const serviceCategories = [
  {
    id: 1,
    name: "Stomatologija",
    description: "Ovo je neka deksirpcija za stomatologiju",
    href: "stomatologija",
    services: [
      "Stavljanje dentalnih implantata",
      "Izbjeljivanje zuba",
      "Popravak zubnih plombi",
      "Ortodoncija",
    ],
  },
  {
    id: 2,
    name: "Pulmologija",
    description: "Ovo je neka deksirpcija za pulomologiju",
    href: "pulmologija",
    services: ["Spirometrija", "Bronhoskopija"],
  },
  {
    id: 3,
    name: "Kardiologija",
    description: "Ovo je neka deksirpcija za kardiologiju",
    href: "kardiologija",
    services: ["EKG", "Ehokardiografija"],
  },
  {
    id: 4,
    name: "Dermatologija",
    description: "Ovo je neka deksirpcija za dermatologiju",
    href: "dermatologija",
    services: ["Dermatoskopija"],
  },

  {
    id: 5,
    name: "Fizikalna medicina i rehabilitacija",
    description: "Ovo je neka deksirpcija za stomatologiju",
    href: "fizikalna-medicina-i-rehabilitacija",
    services: [
      "Stavljanje dentalnih implantata",
      "Izbjeljivanje zuba",
      "Popravak zubnih plombi",
      "Ortodoncija",
    ],
  },
  {
    id: 2,
    name: "Urologija",
    description: "Ovo je neka deksirpcija za pulomologiju",
    href: "urologija",
    services: ["Spirometrija", "Bronhoskopija"],
  },
  {
    id: 3,
    name: "Gastroenterologija",
    description: "Ovo je neka deksirpcija za kardiologiju",
    href: "gastroenterologija",
    services: ["EKG", "Ehokardiografija"],
  },
  {
    id: 4,
    name: "Ginekologija",
    description: "Ovo je neka deksirpcija za dermatologiju",
    href: "ginekologija",
    services: ["Dermatoskopija"],
  },
];

export const services = [
  {
    id: 1,
    serviceCategory: "Stomatologija",
    name: "Stavljanje dentalnih implantata",
    href: "stavljanje-dentalnih-implantata",
    introDescription: "Neki intro description",
    aboutTheProcedure:
      "Ovo je neki long description tog servicea. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut dui ut justo cursus dignissim. Nulla facilisi. Integer convallis, libero ut suscipit dignissim, tortor nunc bibendum turpis, vel fringilla odio justo vel justo.",
    howToPrepare:
      "Pripremite se za postavljanje dentalnih implantata slijedeći ove korake...",
    duringTheProcedure:
      "Tijekom postupka postavljanja dentalnih implantata, zubar će...",
    recoveryTime:
      "Vrijeme oporavka od postavljanja dentalnih implantata varira, ali općenito pacijenti mogu očekivati...",
    precaution:
      "Nakon postupka postavljanja dentalnih implantata važno je poduzeti određene mjere opreza...",
  },
  {
    id: 2,
    serviceCategory: "Stomatologija",
    href: "izbjeljivanje-zuba",
    name: "Izbeljivanje zuba",
    introDescription: "Neki intro description za izbeljivanje zuba",
    aboutTheProcedure:
      "Ovo je neki long description za uslugu izbeljivanja zuba. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut dui ut justo cursus dignissim. Nulla facilisi. Integer convallis, libero ut suscipit dignissim, tortor nunc bibendum turpis, vel fringilla odio justo vel justo.",
    howToPrepare: "Pripremite se za izbjeljivanje zuba slijedeći ove korake...",
    duringTheProcedure: "Tijekom postupka izbjeljivanja zuba, zubar će...",
    recoveryTime:
      "Vrijeme oporavka od izbjeljivanja zuba varira, ali općenito pacijenti mogu očekivati...",
    precaution:
      "Nakon postupka izbjeljivanja zuba važno je poduzeti određene mjere opreza...",
  },
  {
    id: 3,
    serviceCategory: "Stomatologija",
    name: "Popravka zubnih plombi",
    href: "popravak-zubnih-plombi",
    introDescription: "Neki intro description za popravku zubnih plombi",
    aboutTheProcedure:
      "Ovo je neki long description za uslugu popravke zubnih plombi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut dui ut justo cursus dignissim. Nulla facilisi. Integer convallis, libero ut suscipit dignissim, tortor nunc bibendum turpis, vel fringilla odio justo vel justo.",
    howToPrepare:
      "Pripremite se za popravak zubnih plombi slijedeći ove korake...",
    duringTheProcedure: "Tijekom postupka popravke zubnih plombi, zubar će...",
    recoveryTime:
      "Vrijeme oporavka od popravke zubnih plombi varira, ali općenito pacijenti mogu očekivati...",
    precaution:
      "Nakon postupka popravke zubnih plombi važno je poduzeti određene mjere opreza...",
  },
  {
    id: 4,
    serviceCategory: "Stomatologija",
    name: "Ortodoncija",
    href: "ortodoncija",
    introDescription: "Neki intro description za ortodonciju",
    aboutTheProcedure:
      "Ovo je neki long description za uslugu ortodoncije. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut dui ut justo cursus dignissim. Nulla facilisi. Integer convallis, libero ut suscipit dignissim, tortor nunc bibendum turpis, vel fringilla odio justo vel justo.",
    howToPrepare:
      "Pripremite se za ortodontski postupak slijedeći ove korake...",
    duringTheProcedure: "Tijekom ortodontskog postupka, ortodont će...",
    recoveryTime:
      "Vrijeme oporavka od ortodontskog postupka varira, ali općenito pacijenti mogu očekivati...",
    precaution:
      "Nakon ortodontskog postupka važno je poduzeti određene mjere opreza...",
  },
  {
    id: 5,
    serviceCategory: "Pulmologija",
    name: "Spirometrija",
    href: "spirometrija",
    introDescription: "Neki intro description za spirometriju",
    aboutTheProcedure:
      "Ovo je neki long description za uslugu spirometrije. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut dui ut justo cursus dignissim. Nulla facilisi. Integer convallis, libero ut suscipit dignissim, tortor nunc bibendum turpis, vel fringilla odio justo vel justo.",
    howToPrepare: "Pripremite se za spirometriju slijedeći ove korake...",
    duringTheProcedure: "Tijekom spirometrije, medicinski tehničar će...",
    recoveryTime:
      "Vrijeme oporavka od spirometrije varira, ali općenito pacijenti mogu očekivati...",
    precaution: "Nakon spirometrije važno je poduzeti određene mjere opreza...",
  },
  {
    id: 6,
    serviceCategory: "Pulmologija",
    href: "bronhoskopija",
    name: "Bronhoskopija",
    introDescription: "Neki intro description za bronhoskopiju",
    aboutTheProcedure:
      "Ovo je neki long description za uslugu bronhoskopije. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut dui ut justo cursus dignissim. Nulla facilisi. Integer convallis, libero ut suscipit dignissim, tortor nunc bibendum turpis, vel fringilla odio justo vel justo.",
    howToPrepare: "Pripremite se za bronhoskopiju slijedeći ove korake...",
    duringTheProcedure: "Tijekom bronhoskopije, liječnik će...",
    recoveryTime:
      "Vrijeme oporavka od bronhoskopije varira, ali općenito pacijenti mogu očekivati...",
    precaution:
      "Nakon bronhoskopije važno je poduzeti određene mjere opreza...",
  },
  {
    id: 7,
    serviceCategory: "Kardiologija",
    href: "ekg",
    name: "EKG",
    introDescription: "Neki intro description za EKG",
    aboutTheProcedure:
      "Ovo je neki long description za uslugu EKG-a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut dui ut justo cursus dignissim. Nulla facilisi. Integer convallis, libero ut suscipit dignissim, tortor nunc bibendum turpis, vel fringilla odio justo vel justo.",
    howToPrepare: "Pripremite se za EKG slijedeći ove korake...",
    duringTheProcedure:
      "Tijekom EKG-a, medicinska sestra će postaviti elektrode na vaše tijelo...",
    recoveryTime:
      "Vrijeme oporavka od EKG-a varira, ali općenito pacijenti mogu očekivati...",
    precaution: "Nakon EKG-a važno je poduzeti određene mjere opreza...",
  },
  {
    id: 8,
    serviceCategory: "Kardiologija",
    href: "ehokardiografija",
    name: "Ehokardiografija",
    introDescription: "Neki intro description za ehokardiografiju",
    aboutTheProcedure:
      "Ovo je neki long description za uslugu ehokardiografije. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut dui ut justo cursus dignissim. Nulla facilisi. Integer convallis, libero ut suscipit dignissim, tortor nunc bibendum turpis, vel fringilla odio justo vel justo.",
    howToPrepare: "Pripremite se za ehokardiografiju slijedeći ove korake...",
    duringTheProcedure:
      "Tijekom ehokardiografije, liječnik će koristiti ultrazvučnu sondu...",
    recoveryTime:
      "Vrijeme oporavka od ehokardiografije varira, ali općenito pacijenti mogu očekivati...",
    precaution:
      "Nakon ehokardiografije važno je poduzeti određene mjere opreza...",
  },
];
