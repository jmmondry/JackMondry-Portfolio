import { LucideIcon, Activity, Brain, Award, Globe, Cpu, Microscope, Settings, ShieldCheck, Users } from "lucide-react";
import dentalRobotImg from "@assets/perceptive_dental_robot.jpg";
import neuroImg from "@assets/monteris_mri_guided_ablation.jpg";
import filtrationImg from "@assets/generated_images/cerebral_spinal_fluid_filtration_device.png";
import miniRobotImg from "@assets/generated_images/miniature_surgical_robot.png";

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  role?: string;
  company?: string;
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
    title: "Dental Surgical Robot",
    role: "Principal Systems Engineer",
    company: "Perceptive Technologies",
    description: "Owned full system architecture for a revolutionary dental surgical robot. Achieved sub-millimeter accuracy and successful First-In-Human (FIH) trials. Managed requirements, risk management (ISO 14971), and usability engineering files.",
    tags: ["Robotics", "System Architecture", "FDA Submission", "FIH Trials"],
    image: dentalRobotImg,
  },
  {
    id: "2",
    title: "MRI-Guided Laser Ablation",
    role: "Senior Systems Engineer",
    company: "Monteris Medical",
    description: "Led development of a novel ceramic cranial access port for neurosurgery to eliminate MR image artifacts. Collaborated with surgeons to define user needs and prioritize new product concepts for oncology and epilepsy treatments.",
    tags: ["Neurosurgery", "MRI-Guided", "Product Development", "Clinical Collaboration"],
    image: neuroImg,
  },
  {
    id: "3",
    title: "CSF Filtration System",
    role: "Senior R&D Engineer",
    company: "Minnetronix Medical",
    description: "Developed hardware for an extracorporeal cerebral spinal fluid filtration device. Successfully led the project to an IDE submission and functioned as field clinical engineer for the first-in-human trial.",
    tags: ["Class III Device", "R&D", "Clinical Trials", "IDE Submission"],
    image: filtrationImg,
  },
  {
    id: "4",
    title: "Miniature Surgical Robot",
    role: "Graduate Research Assistant",
    company: "University of Nebraska Surgical Robotics Lab",
    description: "Designed and built a miniature surgical robot for single-port surgery. Led to a successful pre-clinical study, with the technology currently licensed by Virtual Incision ($146M raised).",
    tags: ["Surgical Robotics", "Mechanical Design", "Pre-clinical Study"],
    image: miniRobotImg,
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Navigating FDA Early Feasibility Studies",
    excerpt: "Insights from recent interactions with the FDA regarding submission strategies for novel robotic surgical platforms.",
    content: "Navigating the regulatory landscape for novel medical devices is a complex challenge. In my recent experience with dental surgical robotics, engaging with the FDA early through the Pre-Submission process was critical. <br/><br/> We focused on defining the scope of our Early Feasibility Studies (EFS) to demonstrate safety without the burden of a full pivotal trial immediately. Key takeaways include: <br/> 1. Clear definition of the device's mechanism of action. <br/> 2. robust risk management files (ISO 14971) that directly map to testing evidence. <br/> 3. Human factors considerations early in the design phase.",
    date: "Dec 12, 2024",
    readTime: "5 min read",
    image: "/attached_assets/generated_images/abstract_tech_particles_for_blog.png",
    tags: ["Regulatory", "FDA", "Robotics"],
  },
  {
    id: "2",
    title: "System Architecture for Medical Robotics",
    excerpt: "Balancing sub-millimeter precision requirements with usability and safety in a clinical environment.",
    content: "When designing system architecture for surgical robots, precision is often the headline metric. However, the real challenge lies in integrating that precision with the chaotic reality of an operating room. <br/><br/> At Perceptive Technologies, we had to ensure our dental robot could maintain sub-millimeter accuracy while the patient was awake and moving. This required a tight loop between the vision system, the robotic control algorithms, and the user interface. We utilized a requirements management database (MatrixALM) to trace every clinical user need down to the specific software requirement.",
    date: "Nov 28, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1576091160550-217358c7db81?auto=format&fit=crop&q=80&w=1000",
    tags: ["Systems Engineering", "Architecture", "Design Control"],
  },
  {
    id: "3",
    title: "From Engineer to Clinical Field Support",
    excerpt: "Why every engineer should attend clinical cases: Lessons learned from the OR floor.",
    content: "One of the most valuable experiences of my career was functioning as a field clinical engineer for a First-In-Human trial. Seeing your design used in a live procedure is humbling. <br/><br/> I learned that 'user-friendly' in a lab is very different from 'user-friendly' when a surgeon is wearing three layers of gloves and the patient's vitals are fluctuating. This experience directly influenced how I now approach requirements definition—prioritizing robust, forgiving interfaces over feature density.",
    date: "Oct 15, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000",
    tags: ["Clinical", "Career", "Human Factors"],
  }
];

export const accomplishments: Accomplishment[] = [
  {
    id: "1",
    title: "10+ US Patents",
    description: "Named inventor on over 10 US patents issued or filed in the field of medical robotics and devices.",
    icon: Award,
    year: "Ongoing"
  },
  {
    id: "2",
    title: "FIH Trial Success",
    description: "Key stakeholder in successful First-In-Human trials for novel dental robotics and neuro-filtration devices.",
    icon: Activity,
    year: "Multiple"
  },
  {
    id: "3",
    title: "Systems Leadership",
    description: "Principal Systems Engineer leading cross-functional teams and defining architecture for complex robotic platforms.",
    icon: Users,
    year: "12+ Years"
  }
];
