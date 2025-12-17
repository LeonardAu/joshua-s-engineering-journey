import PageLayout from "@/components/PageLayout";
import ParallaxHero from "@/components/ParallaxHero";
import Section from "@/components/Section";
import ContentCard from "@/components/ContentCard";
import ReflectionBox from "@/components/ReflectionBox";
import heroSolve from "@/assets/hero-solve.jpg";
import so1CHEM1 from "@/mats/so1_CHEM1.jpg";
import so1CHEM2 from "@/mats/so1_CHEM2.jpg";
import so1CHEM3 from "@/mats/so1_CHEM3.jpg";
import so1CALC1 from "@/mats/so1_CALC1.jpg";
import so1CALC2 from "@/mats/so1_CALC2.jpg";
import so1CALC3 from "@/mats/so1_CALC3.jpg";

const SO1 = () => {
  return (
    <PageLayout>
      <ParallaxHero
        title="SOLVE"
        subtitle="SO1"
        description="An ability to identify, formulate, and solve complex engineering problems by applying principles of engineering, science, and mathematics"
        imageUrl={heroSolve}
      />

      <Section title="Chemistry Applications Engineering">
        <ContentCard
          title="Course Performance & Test Papers"
          images={[so1CHEM1, so1CHEM2, so1CHEM3]}
        >
          <p>
            In Chemistry Applications Engineering, I demonstrated my ability to
            apply chemical principles to solve engineering problems. The course
            challenged me to think critically about chemical processes and their
            applications in real-world engineering scenarios.
          </p>
          <ReflectionBox text="This course taught me the importance of bridging theoretical chemistry knowledge with practical engineering applications. I learned to approach problems systematically, breaking them down into manageable components and applying relevant chemical principles to find solutions. The experience enhanced my analytical thinking and problem-solving abilities." />
        </ContentCard>
      </Section>

      <section className="py-16 md:py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="section-title mb-12">Calculus 1</h2>
          <ContentCard
            title="Mathematical Problem Solving"
            images={[so1CALC1, so1CALC2, so1CALC3]}
          >
            <p>
              Calculus 1 provided me with the mathematical foundation essential
              for engineering analysis. Through rigorous practice and
              problem-solving, I developed proficiency in differential calculus
              and its applications.
            </p>
            <ReflectionBox text="Mathematics is the language of engineering, and Calculus 1 was my introduction to this powerful tool. The course pushed me to think abstractly and develop patience in solving complex mathematical problems. I realized that persistence and practice are key to mastering mathematical concepts that are fundamental to engineering." />
          </ContentCard>
        </div>
      </section>

      <Section title="Other Subjects">
        <ContentCard title="Additional Coursework">
          <p>
            In Math in the Modern World, we explored the nature of mathematics and its connection to real life through topics such as statistics, logic, and other foundational concepts. It felt nostalgic because it brought back many lessons I learned in high school, but this time with a deeper understanding of why they matter. Similarly, Fundamental Mathematics covered familiar high school topics as a quick but helpful recall—such as set theory, business math, sequences and series, analytic geometry, and trigonometry. Overall, these subjects were similar in content, but they strengthened my foundation and helped lay the groundwork for broader knowledge and improved problem-solving skills.
          </p>
          <ReflectionBox text="Each subject I studied added something to my overall learning toolkit. The topics were mostly familiar, and in many ways it felt nostalgic because it brought back lessons from high school. At the same time, it wasn’t just a repeat—it worked as a quick recall and a stronger foundation. Even if the subjects were kind of similar, they still helped pave the road for my knowledge and understanding, and they reminded me that revisiting the basics can make future learning easier and more meaningful." />
        </ContentCard>
      </Section>
    </PageLayout>
  );
};

export default SO1;

