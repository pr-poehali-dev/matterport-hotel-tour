import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import DemoTour from "@/components/DemoTour";
import Portfolio from "@/components/Portfolio";
import Results from "@/components/Results";
import Testimonials from "@/components/Testimonials";
import WorkProcess from "@/components/WorkProcess";
import Pricing from "@/components/Pricing";
import Calculator from "@/components/Calculator";
import FinalCTA from "@/components/FinalCTA";
import MessengerButtons from "@/components/MessengerButtons";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProblemSolution />
      <DemoTour />
      <Portfolio />
      <Results />
      <Testimonials />
      <WorkProcess />
      <Pricing />
      <Calculator />
      <FinalCTA />
      <MessengerButtons />
    </div>
  );
};

export default Index;
