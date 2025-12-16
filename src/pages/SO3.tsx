import PageLayout from '@/components/PageLayout';
import ParallaxHero from '@/components/ParallaxHero';
import Section from '@/components/Section';
import ContentCard from '@/components/ContentCard';
import ReflectionBox from '@/components/ReflectionBox';
import heroCommunicate from '@/assets/hero-communicate.jpg';
import advoPlanPdf from '@/mats/so3_ADVOPLAN.pdf';
import { ExternalLink } from 'lucide-react';

const SO3 = () => {
  return (
    <PageLayout>
      <ParallaxHero
        title="COMMUNICATE"
        subtitle="SO3"
        description="An ability to communicate effectively with a range of audiences"
        imageUrl={heroCommunicate}
      />

      <Section title="Purposive Communication">
        <ContentCard
          title="Position Paper"
          images={['/placeholder.svg']}
        >
          <p>
            In Purposive Communication, I developed a position paper on a relevant 
            topic that required me to research, analyze, and articulate my stance 
            clearly and persuasively. This exercise enhanced my written communication 
            skills and ability to construct logical arguments.
          </p>
          <ReflectionBox
            text="Writing the position paper taught me the importance of clear, structured argumentation. I learned to support my claims with evidence, anticipate counterarguments, and present my ideas in a way that is accessible to diverse audiences. Effective communication is not just about expressing ideas but about ensuring those ideas are understood and considered."
          />
        </ContentCard>
      </Section>

      <section className="py-16 md:py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="section-title mb-12">Advocacy Plan</h2>
          <ContentCard title="Presentation & Communication Strategy">
            <p>
              The Advocacy Plan project required me to develop a comprehensive 
              communication strategy for a cause I believe in. This included 
              creating presentation materials and developing key messages for 
              different audiences.
            </p>
            <div className="mt-4 rounded-lg overflow-hidden border border-border">
              <iframe
                src={advoPlanPdf}
                className="w-full h-[600px]"
                title="Advocacy Plan PDF"
              />
            </div>
            <div className="mt-3 flex justify-center">
              <a 
                href={advoPlanPdf} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Open PDF in New Tab
              </a>
            </div>
            <ReflectionBox
              text="Creating the advocacy plan showed me that communication is strategic. Different audiences require different approaches, and effective communicators tailor their messages accordingly. I learned to think about my audience first, then craft messages that would resonate with their values and concerns. This skill is essential for engineers who must often explain technical concepts to non-technical stakeholders."
            />
          </ContentCard>
        </div>
      </section>
    </PageLayout>
  );
};

export default SO3;
