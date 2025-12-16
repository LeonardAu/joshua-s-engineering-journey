import PageLayout from "@/components/PageLayout";
import ParallaxHero from "@/components/ParallaxHero";
import Section from "@/components/Section";
import ContentCard from "@/components/ContentCard";
import ReflectionBox from "@/components/ReflectionBox";
import heroExperiment from "@/assets/hero-experiment.jpg";
import so6LAB1 from "@/mats/so6_LAB1.png";
import so6LAB2 from "@/mats/so6_LAB2.jpg";
import so6LAB3 from "@/mats/so6_LAB3.jpg";
import so6LAB4 from "@/mats/so6_LAB4.jpg";

const SO6 = () => {
  return (
    <PageLayout>
      <ParallaxHero
        title="EXPERIMENT"
        subtitle="SO6"
        description="An ability to develop and conduct appropriate experimentation, analyze and interpret data, and use engineering judgment to draw conclusions"
        imageUrl={heroExperiment}
      />

      <Section title="Chemistry for Engineers Laboratory">
        <ContentCard
          title="Laboratory Activities"
          images={[so6LAB1, so6LAB2, so6LAB3, so6LAB4]}
        >
          <p>
            In the Chemistry for Engineers Laboratory, I conducted various
            experiments that required careful planning, precise execution, and
            thorough data analysis. These hands-on experiences reinforced
            theoretical concepts and developed my experimental skills.
          </p>
          <p className="mt-4">
            The laboratory notebook documents my experimental procedures,
            observations, and analyses. Additionally, the lab reports
            demonstrate my ability to communicate experimental findings in a
            professional format.
          </p>
          <ReflectionBox text="Laboratory work taught me the importance of precision, patience, and systematic approach in experimentation. I learned that good data comes from careful methodology, and that unexpected results often lead to the most valuable insights. The experience of analyzing data and drawing conclusions based on evidence has strengthened my scientific reasoning abilities. I now appreciate that experimentation is not just about following procedures but about understanding why each step matters." />
        </ContentCard>
      </Section>

      <section className="py-16 md:py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="section-title mb-12">Foundation Math Final Project</h2>
          <ContentCard
            title="Testing the Potentiometer's Resistance"
            images={["/placeholder.svg", "/placeholder.svg"]}
          >
            <p>
              As part of our Foundation Math Final Project, I conducted
              experimental testing of a potentiometer's resistance. This
              involved designing the experiment, collecting data, and analyzing
              the results to develop a mathematical function.
            </p>
            <ReflectionBox text="This project combined mathematical modeling with hands-on experimentation. Testing the potentiometer required me to design a rigorous experimental procedure, minimize sources of error, and validate my mathematical model against real data. The experience reinforced the connection between theoretical predictions and experimental reality—a fundamental aspect of engineering practice." />
          </ContentCard>
        </div>
      </section>
    </PageLayout>
  );
};

export default SO6;

