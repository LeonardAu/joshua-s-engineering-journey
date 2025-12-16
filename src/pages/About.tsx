import { motion } from "framer-motion";
import { GraduationCap, Users } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import ParallaxHero from "@/components/ParallaxHero";
import Section from "@/components/Section";
import heroAbout from "@/assets/hero-about.jpg";
import aboutMe from "@/mats/about_ME.jpg";
import aboutRHS from "@/mats/about_RHS.jpg";
import aboutUST from "@/mats/about_UST.png";

const About = () => {
  return (
    <PageLayout>
      <ParallaxHero
        title="About Me"
        subtitle="Get to Know"
        imageUrl={heroAbout}
      />

      {/* Personal Info Section */}
      <Section title="Who Am I?">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="aspect-[3/4] rounded-xl overflow-hidden bg-muted shadow-lg"
          >
            <img
              src={aboutMe}
              alt="My Photo"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-serif text-2xl font-semibold text-primary mb-4">
              Leonard Joshua Bulawan
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I am a passionate and driven Chemical Engineering student at the
              University of Santo Tomas, dedicated to applying scientific
              principles to solve real-world problems. My journey in engineering
              has been shaped by curiosity, perseverance, and a commitment to
              excellence.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Through my academic experiences and extracurricular involvement, I
              have developed strong analytical skills, leadership abilities, and
              a deep appreciation for collaborative work. I believe that
              engineering is not just about technical knowledge but also about
              making meaningful contributions to society.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Educational Background */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="section-title mb-12 flex items-center gap-3">
            <GraduationCap className="w-10 h-10 text-secondary" />
            Educational Background
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Rizal High School */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-8 shadow-sm border border-border"
            >
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                  <img
                    src={aboutRHS}
                    alt="RHS logo"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-primary mb-1">
                    Rizal High School
                  </h3>
                  <p className="text-secondary font-medium">
                    Senior High School
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Completed my senior high school education with a focus on
                    STEM strand, building a strong foundation in mathematics and
                    sciences.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* University of Santo Tomas */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card rounded-xl p-8 shadow-sm border border-border"
            >
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                  <img
                    src={aboutUST}
                    alt="UST logo"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-primary mb-1">
                    University of Santo Tomas
                  </h3>
                  <p className="text-secondary font-medium">
                    B.S. Chemical Engineering
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Currently pursuing my degree in Chemical Engineering,
                    developing expertise in chemical processes, materials
                    science, and engineering design.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Organizations */}
      <Section title="Organizations">
        <div className="flex items-center gap-3 mb-8 -mt-8">
          <Users className="w-8 h-8 text-secondary" />
          <p className="text-muted-foreground">
            Active member of various academic and professional organizations
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: "UST Engineering Student Council",
              description:
                "Contributing to student governance and engineering community initiatives",
            },
            {
              name: "UST Chemical Engineering Society",
              description:
                "Engaging with fellow ChE students in academic and social activities",
            },
            {
              name: "Operations Research Society of the Philippines – UST Chapter",
              description:
                "Exploring optimization and decision-making methodologies",
            },
          ].map((org, index) => (
            <motion.div
              key={org.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <h3 className="font-serif text-lg font-semibold text-primary mb-2">
                {org.name}
              </h3>
              <p className="text-sm text-muted-foreground">{org.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>
    </PageLayout>
  );
};

export default About;
