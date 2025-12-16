import PageLayout from "@/components/PageLayout";
import ParallaxHero from "@/components/ParallaxHero";
import Section from "@/components/Section";
import ContentCard from "@/components/ContentCard";
import ReflectionBox from "@/components/ReflectionBox";
import heroDesign from "@/assets/hero-design.jpg";
import fndMathPdf from "@/mats/so2_FNDMATH.pdf";
import { ExternalLink } from "lucide-react";
import so2INTRO1 from "@/mats/so2_INTRO1.jpeg";
import so2INTRO2 from "@/mats/so2_INTRO2.jpg";
import so2ROBOTICS from "@/mats/so2_ROBOTICS.jpg";

const SO2 = () => {
  return (
    <PageLayout>
      <ParallaxHero
        title="DESIGN"
        subtitle="SO2"
        description="An ability to apply engineering design to produce solutions that meet specified needs with consideration of public health, safety, and welfare, as well as global, cultural, social, environmental, and economic factors"
        imageUrl={heroDesign}
      />

      <Section title="Foundation Math Final Project">
        <ContentCard title="Designing a Mathematical Function">
          <p>
            For our Foundation Math Final Project, I designed a mathematical
            function that addressed a specific engineering problem. This project
            required me to apply mathematical principles creatively while
            considering practical constraints and real-world applications.
          </p>
          <div className="mt-4 rounded-lg overflow-hidden border border-border">
            <iframe
              src={fndMathPdf}
              className="w-full h-[600px]"
              title="Foundation Math Final Project PDF"
            />
          </div>
          <div className="mt-3 flex justify-center">
            <a
              href={`/pdf-viewer?file=${encodeURIComponent(fndMathPdf)}&title=${encodeURIComponent("Foundation Math Final Project")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Open PDF in New Tab
            </a>
          </div>
          <ReflectionBox text="This project was my first significant experience in engineering design. I learned that design is not just about finding a solution but finding the best solution given multiple constraints. The process of iterating through different approaches, testing them, and refining based on results taught me the importance of systematic design thinking." />
        </ContentCard>
      </Section>

      <section className="py-16 md:py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="section-title mb-12">Introduction to Engineering</h2>
          <ContentCard
            title="Design Thinking Prototypes"
            images={[so2INTRO1, so2INTRO2]}
          >
            <p>
              In Introduction to Engineering, I engaged with design thinking
              methodologies and created prototypes as part of our coursework.
              This hands-on experience allowed me to understand the iterative
              nature of engineering design.
            </p>
          </ContentCard>

          <div className="mt-8">
            <ContentCard
              title="What Engineers Do - Robotics Design"
              images={[so2ROBOTICS]}
            >
              <p>
                As part of our presentation on "What Engineers Do," I designed
                and presented a robotics concept. This project highlighted the
                multidisciplinary nature of engineering and the importance of
                considering user needs in the design process.
              </p>
              <ReflectionBox text="The Introduction to Engineering course opened my eyes to the breadth of engineering practice. Design thinking, in particular, taught me to empathize with users and stakeholders, define problems clearly, ideate without constraints, and prototype rapidly. These skills are invaluable not just in engineering but in approaching any complex challenge." />
            </ContentCard>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default SO2;
