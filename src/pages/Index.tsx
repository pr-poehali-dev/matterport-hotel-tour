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
      <div id="problems">
        <ProblemSolution />
      </div>
      <DemoTour />
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="results">
        <Results />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="process">
        <WorkProcess />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <div id="calculator">
        <Calculator />
      </div>
      <div id="contacts">
        <FinalCTA />
      </div>
      <MessengerButtons />
    </div>
  );
};

export default Index;
