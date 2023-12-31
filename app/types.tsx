export type DoctorType = {
  id: number;
  imageSrc: string;
  href: string;
  name: string;
  specialisation: string;
  shortDescription: string;
  description: string;
  achievements: string[];
  education: string;
  fieldOfInterests: string[]
};

export type ServiceType = {
  id: number;
  href: string;
  icon: () => JSX.Element;
  serviceTitle: string;
  shortDescription: string;
  includes: string[];
  recovery: string;
  examination: string;
  complications: string;
};

export type WhyChooseUsPoint = {
  id: number,
  icon: () => JSX.Element,
  point: string,
  description: string
}

export type ListItemType = {
  id: number;
  // icon: () => JSX.Element;
  title: string;
  description: string;
};

export type FAQType = {
  id: number;
  question: string;
  answer: string
}