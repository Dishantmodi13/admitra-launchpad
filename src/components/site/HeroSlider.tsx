import heroHome from "@/assets/hero-home.jpg";
import { heroNavLinks } from "@/data/primary-nav";
import { StripeHero } from "./StripeHero";

export function HeroSlider() {
  return (
    <StripeHero
      image={heroHome}
      imageAlt="Young woman studying outdoors on a park bench"
      imagePosition="object-[center_35%]"
      quoteEyebrow="Welcome to KAREER Studio"
      quote="Plan Your Education - Shape Your Career - Build Your Global Future."
      stripeHeading="KAREER Studio"
      stripeTagline="Through personalized Education & Career Counselling, Education Planning, Career Focused Study Abroad Consulting, Psychometric Assessments, and Live Scholastic & Language Coaching, we guide students toward academic choices that connect with their potential, interests, skills, and long-term employable Career."
      ctaEyebrow="Get Started"
      ctaTitle="Book a Discovery Session"
      ctaTo="/enquiry"
      navLinks={heroNavLinks(["home"])}
    />
  );
}
