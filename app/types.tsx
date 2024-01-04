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
  icon: () => JSX.Element;
  iconBackground: string;
  title: string;
};

export type WhyChooseUsPoint = {
  id: number,
  icon: () => JSX.Element,
  point: string,
  description: string
}