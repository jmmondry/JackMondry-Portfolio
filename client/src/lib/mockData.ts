import { LucideIcon, Activity, Brain, Award, Globe, Cpu, Microscope } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
}

export interface Accomplishment {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  year: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "NeuroPulse Implant",
    description: "Lead engineer for a Class III implantable pulse generator for chronic pain management. Reduced power consumption by 40% using novel circuit design.",
    tags: ["Implantable", "Low Power Electronics", "FDA PMA"],
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "2",
    title: "Smart Insulin Pump",
    description: "Designed the fluid delivery mechanism for a next-gen insulin pump. Achieved <1% flow rate error variance across operating temperatures.",
    tags: ["Fluid Dynamics", "Mechanical Design", "IEC 60601"],
    image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "3",
    title: "Robotic Surgical Arm",
    description: "Developed haptic feedback algorithms for a robotic surgical assistant, improving surgeon precision in microsurgery procedures.",
    tags: ["Robotics", "Haptics", "C++", "Control Theory"],
    image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: "4",
    title: "Portable Ultrasound",
    description: "Co-designed the thermal management system for a handheld ultrasound device, ensuring safe skin contact temperatures during prolonged use.",
    tags: ["Thermal Analysis", "Product Design", "Ultrasound"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000",
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Bio-Electronics",
    excerpt: "Exploring the intersection of biology and electronics, and how new materials are enabling seamless interfaces with the human nervous system.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    date: "Dec 12, 2024",
    readTime: "5 min read",
    image: "/attached_assets/generated_images/abstract_tech_particles_for_blog.png", // Use generated image
    tags: ["Bio-Electronics", "Future Tech"],
  },
  {
    id: "2",
    title: "Navigating FDA 510(k) Submissions",
    excerpt: "A practical guide for engineers on preparing technical documentation for regulatory clearance, based on my experience with 3 successful submissions.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    date: "Nov 28, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1576091160550-217358c7db81?auto=format&fit=crop&q=80&w=1000",
    tags: ["Regulatory", "FDA", "Career"],
  },
  {
    id: "3",
    title: "Design for Manufacturing in MedTech",
    excerpt: "Why early DFM involvement saves millions in the long run. Case studies from recent projects involving injection molding and micro-machining.",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "Oct 15, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000",
    tags: ["Manufacturing", "Engineering"],
  }
];

export const accomplishments: Accomplishment[] = [
  {
    id: "1",
    title: "3 Patents Granted",
    description: "Awarded patents for novel bio-sensing mechanisms and implantable antenna designs.",
    icon: Award,
    year: "2020-2023"
  },
  {
    id: "2",
    title: "5+ Successful FDA Clearances",
    description: "Led technical teams through successful 510(k) and PMA regulatory submissions.",
    icon: Activity,
    year: "2018-Present"
  },
  {
    id: "3",
    title: "IEEE Senior Member",
    description: "Recognized for significant contributions to the field of biomedical engineering.",
    icon: Globe,
    year: "2022"
  }
];
