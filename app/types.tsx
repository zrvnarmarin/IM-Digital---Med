import { StaticImageData } from "next/image";

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

export type WhyChooseUsPointType = {
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

export type TestimonialType = {
  id: number;
  testimonial: string;
  personFullName: string;
  personOccupation: string;
  date?: string; 
};


export type StatType = {
  id: number,
  statNumber: number,
  statText: string
}

export type CoreValueType = {
  id: number;
  icon: () => JSX.Element; 
  value: string;
  description: string;
}

export type MissionItemType = {
  id: number;
  icon: () => JSX.Element;
  value: string;
  description: string;
}

export type AdvantageType = {
  id: number;
  icon: () => JSX.Element;
  value: string;
  description: string;
}

export type NewsCardType = {
  id: number;
  href: string;
  title: string;
  imageSrc: StaticImageData;
  date: string;
}

export type ServiceCategoryType = {
  id: number,
  name: string,
  description: string;
  href: string;
  services: string[];
}

export type ServiceObjectType = {
  id: number;
  serviceCategory: string;
  name: string;
  introDescription?: string;
  aboutTheProcedure?: string;
  howToPrepare?: string;
  duringTheProcedure?: string;
  recoveryTime?: string;
  precaution?: string;
}