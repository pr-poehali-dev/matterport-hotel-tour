import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import DemoTour from "@/components/DemoTour";
import Results from "@/components/Results";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProblemSolution />
      <DemoTour />
      <Results />
      <Testimonials />
    </div>
  );
};

export default Index;
