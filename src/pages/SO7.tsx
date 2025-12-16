import PageLayout from "@/components/PageLayout";
import ParallaxHero from "@/components/ParallaxHero";
import Section from "@/components/Section";
import ContentCard from "@/components/ContentCard";
import ReflectionBox from "@/components/ReflectionBox";
import heroLearn from "@/assets/hero-learn.jpg";
import so7ROTC1 from "@/mats/so7_ROTC1.jpg";
import so7ROTC2 from "@/mats/so7_ROTC2.jpg";
import so7ACADS1 from "@/mats/ACADS1.jpeg";
import so7ACADS2 from "@/mats/ACADS2.jpeg";
import so7ACADS3 from "@/mats/ACADS3.jpeg";

const SO7 = () => {
  return (
    <PageLayout>
      <ParallaxHero
        title="LEARN NEW KNOWLEDGE"
        subtitle="SO7"
        description="An ability to acquire and apply new knowledge as needed, using appropriate learning strategies"
        imageUrl={heroLearn}
      />

      <Section title="ROTC Lectures">
        <ContentCard
          title="Continuous Learning in ROTC"
          images={[so7ROTC1, so7ROTC2]}
        >
          <p>
            The ROTC program includes various lectures on topics ranging from
            national defense to leadership principles. These sessions required
            me to absorb and apply new knowledge in areas outside my primary
            engineering focus.
          </p>
          <ReflectionBox text="ROTC lectures demonstrated that learning extends far beyond the classroom and one's primary field of study. I learned to approach unfamiliar topics with openness and to find connections between seemingly unrelated subjects. The discipline and focus required in ROTC translated to better study habits and a more structured approach to acquiring new knowledge in all areas of my life." />
        </ContentCard>
      </Section>

      <section className="py-16 md:py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="section-title mb-12">
            Engineering Student Council - ACADS Team
          </h2>
          <ContentCard
            title="Reviewers and Mock Exams"
            images={[so7ACADS1, so7ACADS2, so7ACADS3]}
          >
            <p>
              As part of the ACADS (Academics) team in the Engineering Student
              Council, I contributed to creating reviewers and mock exams for
              fellow engineering students. This required me to deeply understand
              course materials and present them in accessible formats.
            </p>
            <ReflectionBox text="Creating study materials for others is one of the most effective ways to solidify one's own understanding. Through this work, I learned that teaching is a powerful learning strategy. I had to anticipate questions, identify key concepts, and present information clearly. This experience taught me that the best way to learn something is to prepare to teach it to others. As an engineer, I will continuously need to learn new technologies and methods throughout my career, and this experience has equipped me with effective strategies for lifelong learning." />
          </ContentCard>
        </div>
      </section>

      {/* Lifelong Learning Section */}
      <Section title="Commitment to Lifelong Learning">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Engineering is a rapidly evolving field, and the ability to learn
            continuously is essential for success. Throughout my academic
            journey, I have developed strategies for effective learning that
            will serve me throughout my career.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Active Learning",
                desc: "Engaging with material through practice, discussion, and application",
              },
              {
                title: "Peer Learning",
                desc: "Learning from and teaching fellow students",
              },
              {
                title: "Resource Utilization",
                desc: "Leveraging diverse resources for comprehensive understanding",
              },
              {
                title: "Reflection",
                desc: "Regular assessment of learning progress and strategies",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-card p-6 rounded-lg border border-border"
              >
                <h4 className="font-serif text-lg font-semibold text-primary mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </PageLayout>
  );
};

export default SO7;
