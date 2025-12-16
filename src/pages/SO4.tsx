import PageLayout from "@/components/PageLayout";
import ParallaxHero from "@/components/ParallaxHero";
import Section from "@/components/Section";
import ContentCard from "@/components/ContentCard";
import ReflectionBox from "@/components/ReflectionBox";
import heroProfessionalism from "@/assets/hero-professionalism.jpg";
import minsMeetPdf from "@/mats/so4_MINSMEET.pdf";
import { ExternalLink } from "lucide-react";
import so4ENGSTU1 from "@/mats/so4_ENGSTU1.jpg";
import so4ENGSTU2 from "@/mats/so4_ENGSTU2.jpg";
import so4ENGSTU3 from "@/mats/so4_ENGSTU3.jpg";

const SO4 = () => {
  return (
    <PageLayout>
      <ParallaxHero
        title="PROFESSIONALISM"
        subtitle="SO4"
        description="An ability to recognize ethical and professional responsibilities in engineering situations and make informed judgments, which must consider the impact of engineering solutions in global, economic, environmental, and societal contexts"
        imageUrl={heroProfessionalism}
      />

      <Section title="Purposive Communication">
        <ContentCard title="Minutes of the Meeting">
          <p>
            As part of our Purposive Communication course, I was responsible for
            documenting meeting minutes. This task required attention to detail,
            accurate representation of discussions, and professional
            documentation practices.
          </p>
          <div className="mt-4 rounded-lg overflow-hidden border border-border">
            <iframe
              src={minsMeetPdf}
              className="w-full h-[600px]"
              title="Minutes of the Meeting PDF"
            />
          </div>
          <div className="mt-3 flex justify-center">
            <a
              href={minsMeetPdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Open PDF in New Tab
            </a>
          </div>
          <ReflectionBox text="Taking meeting minutes taught me the importance of accurate documentation in professional settings. Engineers must often record decisions, discussions, and actions for future reference and accountability. This experience reinforced the value of professionalism in even seemingly minor tasks, as proper documentation can have significant implications for project success and organizational memory." />
        </ContentCard>
      </Section>

      <section className="py-16 md:py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="section-title mb-12">Engineering Student Council</h2>
          <ContentCard
            title="Leadership & Professional Duties"
            images={[so4ENGSTU1, so4ENGSTU2, so4ENGSTU3]}
          >
            <p>
              As a member of the UST Engineering Student Council, I have taken
              on various responsibilities that have developed my leadership and
              professional skills. These experiences have taught me about
              organizational management, teamwork, and serving the engineering
              student community.
            </p>
            <ReflectionBox text="My involvement in the Engineering Student Council has been transformative in developing my understanding of professional responsibility. I learned that leadership is about service—putting the needs of the community before personal interests. The experience taught me to make ethical decisions, consider diverse perspectives, and take responsibility for my actions. These are qualities that will define my practice as a future engineer." />
          </ContentCard>
        </div>
      </section>
    </PageLayout>
  );
};

export default SO4;
