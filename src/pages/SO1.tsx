import PageLayout from '@/components/PageLayout';
import ParallaxHero from '@/components/ParallaxHero';
import Section from '@/components/Section';
import ContentCard from '@/components/ContentCard';
import ReflectionBox from '@/components/ReflectionBox';
import heroSolve from '@/assets/hero-solve.jpg';

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
          images={[
            '/placeholder.svg',
            '/placeholder.svg',
            '/placeholder.svg',
          ]}
        >
          <p>
            In Chemistry Applications Engineering, I demonstrated my ability to apply 
            chemical principles to solve engineering problems. The course challenged me 
            to think critically about chemical processes and their applications in 
            real-world engineering scenarios.
          </p>
          <ReflectionBox
            text="This course taught me the importance of bridging theoretical chemistry knowledge with practical engineering applications. I learned to approach problems systematically, breaking them down into manageable components and applying relevant chemical principles to find solutions. The experience enhanced my analytical thinking and problem-solving abilities."
          />
        </ContentCard>
      </Section>

      <section className="py-16 md:py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="section-title mb-12">Calculus 1</h2>
          <ContentCard
            title="Mathematical Problem Solving"
            images={[
              '/placeholder.svg',
              '/placeholder.svg',
              '/placeholder.svg',
            ]}
          >
            <p>
              Calculus 1 provided me with the mathematical foundation essential for 
              engineering analysis. Through rigorous practice and problem-solving, 
              I developed proficiency in differential calculus and its applications.
            </p>
            <ReflectionBox
              text="Mathematics is the language of engineering, and Calculus 1 was my introduction to this powerful tool. The course pushed me to think abstractly and develop patience in solving complex mathematical problems. I realized that persistence and practice are key to mastering mathematical concepts that are fundamental to engineering."
            />
          </ContentCard>
        </div>
      </section>

      <Section title="Other Subjects">
        <ContentCard title="Additional Coursework">
          <p>
            Beyond Chemistry and Calculus, I have engaged with various subjects that 
            contribute to my ability to solve complex engineering problems. These include 
            physics, computer programming, and other foundational courses that together 
            build a comprehensive skill set for engineering problem-solving.
          </p>
          <ReflectionBox
            text="Each subject I have studied contributes to my overall engineering toolkit. The interconnected nature of engineering disciplines means that knowledge from one area often illuminates problems in another. I have learned to appreciate this holistic approach to learning, understanding that true problem-solving ability comes from integrating knowledge across multiple domains."
          />
        </ContentCard>
      </Section>
    </PageLayout>
  );
};

export default SO1;
