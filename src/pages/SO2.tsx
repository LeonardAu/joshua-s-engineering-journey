import PageLayout from '@/components/PageLayout';
import ParallaxHero from '@/components/ParallaxHero';
import Section from '@/components/Section';
import ContentCard from '@/components/ContentCard';
import ReflectionBox from '@/components/ReflectionBox';
import heroDesign from '@/assets/hero-design.jpg';

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
            For our Foundation Math Final Project, I designed a mathematical function 
            that addressed a specific engineering problem. This project required me to 
            apply mathematical principles creatively while considering practical 
            constraints and real-world applications.
          </p>
          <div className="mt-4 p-4 bg-muted rounded-lg">
            <p className="text-sm text-muted-foreground italic">
              📄 PDF document will be embedded here
            </p>
          </div>
          <ReflectionBox
            text="This project was my first significant experience in engineering design. I learned that design is not just about finding a solution but finding the best solution given multiple constraints. The process of iterating through different approaches, testing them, and refining based on results taught me the importance of systematic design thinking."
          />
        </ContentCard>
      </Section>

      <section className="py-16 md:py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="section-title mb-12">Introduction to Engineering</h2>
          <ContentCard
            title="Design Thinking Prototypes"
            images={[
              '/placeholder.svg',
              '/placeholder.svg',
            ]}
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
              images={['/placeholder.svg']}
            >
              <p>
                As part of our presentation on "What Engineers Do," I designed and 
                presented a robotics concept. This project highlighted the 
                multidisciplinary nature of engineering and the importance of 
                considering user needs in the design process.
              </p>
              <ReflectionBox
                text="The Introduction to Engineering course opened my eyes to the breadth of engineering practice. Design thinking, in particular, taught me to empathize with users and stakeholders, define problems clearly, ideate without constraints, and prototype rapidly. These skills are invaluable not just in engineering but in approaching any complex challenge."
              />
            </ContentCard>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default SO2;
