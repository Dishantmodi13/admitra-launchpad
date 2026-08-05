import heroHome from "@/assets/hero-home.jpg";
import { heroNavLinks } from "@/data/primary-nav";
import { StripeHero } from "./StripeHero";

export function HeroSlider() {
  return (
    <StripeHero
      image={heroHome}
      imageAlt="College student planning education and career pathways in a bright study space with laptop, assessment report, and academic plan notebook"
      imagePosition="object-[62%_22%]"
      quoteEyebrow="Welcome to KAREER Studio"
      quote="Plan Your Education - Shape Your Career - Build Your Global Future."
      stripeHeading="KAREER Studio"
      stripeSubheading="Powered by ADMITra"
      stripeTagline="Through personalized Education & Career Counselling, Education Planning, Career Focused Study Abroad Consulting, Psychometric Assessments, and Live Scholastic & Language Coaching, we guide students toward academic choices that connect with their potential, interests, skills, and long-term employable Career."
      stripeTaglineMobile="Personalized education planning, study abroad consulting, assessments & live coaching for your global career."
      ctaEyebrow="Get Started"
      ctaTitle="Book a Discovery Session"
      ctaTo="/enquiry"
      navLinks={heroNavLinks(["home"])}
    />
  );
}
