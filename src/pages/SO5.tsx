import PageLayout from "@/components/PageLayout";
import ParallaxHero from "@/components/ParallaxHero";
import Section from "@/components/Section";
import ContentCard from "@/components/ContentCard";
import ReflectionBox from "@/components/ReflectionBox";
import heroTeamwork from "@/assets/hero-teamwork.jpg";
import so5ROTC1 from "@/mats/so5_ROTC1.jpeg";
import so5ROTC2 from "@/mats/so5_ROTC2.jpeg";
import so5ROTC3 from "@/mats/so5_ROTC3.jpeg";

const SO5 = () => {
  return (
    <PageLayout>
      <ParallaxHero
        title="TEAMWORK"
        subtitle="SO5"
        description="An ability to function effectively on a team whose members together provide leadership, create a collaborative and inclusive environment, establish goals, plan tasks, and meet objectives"
        imageUrl={heroTeamwork}
      />

      <Section title="ROTC Final Exam">
        <ContentCard
          title="Team-Based Assessment"
          images={[so5ROTC1, so5ROTC2, so5ROTC3]}
        >
          <p>
            The ROTC (Reserve Officers' Training Corps) program emphasized
            teamwork and leadership through various activities and assessments.
            The final exam component included team-based challenges that
            required coordination, communication, and collective
            problem-solving.
          </p>
          <ReflectionBox text="ROTC was a powerful lesson in teamwork under pressure. Unlike academic group work, ROTC demanded physical and mental coordination with teammates in challenging situations. I learned that effective teams are built on trust, clear communication, and a shared commitment to the mission. Each member has a role, and success depends on everyone fulfilling their responsibilities while supporting each other. These lessons in teamwork are directly applicable to engineering projects where diverse specialists must collaborate to achieve complex objectives." />
        </ContentCard>
      </Section>

      {/* Additional content can be added here */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-serif text-2xl font-semibold text-primary mb-4">
              Key Teamwork Lessons
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {[
                {
                  title: "Communication",
                  desc: "Clear and timely information sharing",
                },
                { title: "Trust", desc: "Reliability and mutual support" },
                {
                  title: "Coordination",
                  desc: "Synchronized effort toward goals",
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
        </div>
      </section>
    </PageLayout>
  );
};

export default SO5;

