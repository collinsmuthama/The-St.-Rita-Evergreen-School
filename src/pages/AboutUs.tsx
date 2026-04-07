import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, BookOpen, Users, Shield, Target, CheckCircle } from "lucide-react";

const values = [
  { icon: Heart, title: "Compassion", desc: "We meet every student with empathy, understanding, and unconditional support." },
  { icon: BookOpen, title: "Education", desc: "We believe education is the most powerful tool for transformation and healing." },
  { icon: Users, title: "Community", desc: "We build a family where every girl feels valued, safe, and empowered." },
  { icon: Shield, title: "Protection", desc: "We advocate for the rights and safety of every child and young mother." },
];

const AboutUs = () => (
  <div className="min-h-screen">
    <Navbar />

    {/* Hero */}
    <section className="pt-28 pb-16 bg-secondary">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">About Us</h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          The St. Rita Evergreen School is a haven for <strong>teen mothers</strong> and survivors of <strong>gender-based violence</strong> and <strong>FGM</strong>. We provide quality education, trauma counseling, and vocational training to help every girl reclaim her future.
        </p>
      </div>
    </section>

    {/* Our Story */}
    <section id="story" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-display text-3xl font-bold text-foreground mb-6 text-center">Our Story</h2>
        <div className="text-muted-foreground text-lg leading-relaxed">
          <p>
            The St. Rita Evergreen Schools is a new school started on 13th January 2025 to address a dire need to put teen including pregnant teenagers,those bringing up young babies 0 to 3 years,girls under threat of early marriages,rape.incest,gender based violence(GVB) ,total orphans and other vulnerable girls to school.
            There is a home inside the school where the girls stay with their babies and attend the classes. The teen mums school together with other girls who do not have babies. The girls attend senior high school from form two to form four
          </p>

          <p>
          According to a survey done by Forum for African Women Educationalists Kenya (FAWE) in partnership with Mastercard Foundation titled Situational analysis Report on Teen pregnancies in Kenya done in late 2022 and early 2023, <strong>1,030 participants</strong> were interviewed. A significant number of the study participants, <strong>42%</strong> were those aged 18-25 years, those between 15 -18 years formed <strong>36%</strong>, and those aged below 14 years were <strong>22%</strong>. The findings established <strong>19.9%</strong> teenage pregnancy rates in twenty counties during the 2020-21 period, at the peak of COVID-19. The twenty counties had significantly higher teenage pregnancy rates than the national average of <strong>15%</strong>, as reported by the Kenya Demographic Health Survey (2022). The situational analysis further established that teenage pregnancy was prevalent among girls aged 15-18 years at <strong>27.4%</strong>, followed by 19-25 years (<strong>23.7%</strong>).
          </p>

          <p>
          The report further established that <strong>18.6%</strong> of those aged between 15-18 were in child marriages, signifying a reduction from <strong>23%</strong> (KDHS:2014). On the contrary, only <strong>3%</strong> of boys in Kenya were married before the age of 18 years. The study established that out-of-school girls, refugee girls, Asylum seekers, absentees, girls from specific geographical areas (poor rural, poor urban, and ASAL), and girls with disabilities were at risk of teenage pregnancy compared to other girls of the same age group despite the relevant laws and policies, including strategies such as age-appropriate family health Education, Youth Friendly Service, and Youth clubs/Tuseme implemented in schools, communities, and government health centers. Factors leading to teenage pregnancy and child marriage remained drug and substance abuse, poverty, gender-based violence, child marriage, culture and traditions, lack of Sexual reproduction Health(SRH) information and services, lack of parental supervision, social media influence, and early sexual debut. Overall, different practices are in place, ranging from Comprehensive Sexuality Education to the Provision of Adolescent Youth-Friendly Services, Engagement of boys in pregnancy prevention, Law and policy enforcement, promotion of school club activities, and provision of Menstrual Hygiene products, which has been put in place by communities, parents, CBOs, and the government to reduce girls' exposure to teenage pregnancies and child marriages.
          </p>

          <p>
          Cases of teenage pregnancies and child marriages remain high in Kenya, and specific counties, continue to battle the ever-rising cases of teenage pregnancies. The COVID-19 pandemic, along with other crises like the prolonged drought in 2022, floods in late 2023 and 2024 further spiked teenage pregnancies despite relevant laws, policies, and strategies in schools and communities. The five factors associated with teenage pregnancies are Early Sexual debut, social media influence, lack of parental supervision, Inadequate access to family life information, Inadequate access to education and Culture and tradition are closely interlinked, and a comprehensive approach to reducing and eliminating is likely to be the most effective. Teenage pregnancy is a major challenge that deprives schoolgirls of the opportunity to further their education and attain their career goals. It further exposes young girls and their children to major health risks, leading causes of death, mental health problems such as depression, poor performance in school, and social problems such as stigma and discrimination.
          </p>

          <p>
          From the study, absenteeism from school was associated with factors like lack of school fees, lack of menstrual products, and teenage pregnancies. According to that study low school attendance was attributed to among others teenage pregnancies at <strong>thirty nine percent (39.2%)</strong> The St. Rita Evergreen Schools were started to address the big dropout of girls as a result of teenage pregnancy as demonstrated by the above numbers.
          </p>

          <p>
          According to the Basic Education Statistical Booklet (2020), some of the ASAL counties and informal settlements are likely to have a lower gender parity index, implying gender disparity in favor of boys. However, some counties such as Isiolo, although being an ASAL county, have had gender disparity in favor of girls, and this may continue. In terms of County analysis, counties with the lowest GPI at the primary education level were Mandera (<strong>0.60</strong>), Garissa (<strong>0.73</strong>), Wajir (<strong>0.77</strong>), Turkana (<strong>0.89</strong>), and Samburu (<strong>0.90</strong>). Some of these counties are also the least populous counties. According to the Kenya Population Census (KNBS, 2019), the least populous counties have many factors that put girls at risk. The census further identified the most populous counties: Nairobi, Kakamega, Bungoma, Nakuru, and Kiambu. (KNBS: 2019). These counties have informal settlements, which put girls at risk. Moreover, more girls in the rural poor are at risk of teenage pregnancy than girls from the urban centers. Another study shows that girls living in rural areas are more likely to be married in childhood than girls in urban areas. In 2022, for instance, <strong>16%</strong> of teenagers (ages 15-19 years) had been pregnant in rural areas, while the prevalence was lower, with <strong>12.3%</strong> of teenagers in urban areas.12. According to UNFPA, poverty, whether in rural or urban areas, puts girls at risk of teenage pregnancy. The UNFPA report indicated that adolescent pregnancies are more likely to occur among poor communities (<strong>21%</strong>) of women aged 15-19 in the lowest wealth quantile reported to have been pregnant, as compared (<strong>8%</strong>) in the highest wealth quantile
          </p>

          <p>
          Furthermore, some of the girls got pregnant after traumatizing, life-threatening rape episodes. Some of the rape episodes could be by persons of authority who could harm the victim if the matter is reported or prosecuted in a court of law and therefore the girls could be in danger. Furthermore, some of the pregnancies could be as a result of incest which could be embarrassing or in some situations be life threatening to the girl. The cases and the dangers to both the teenage mother or the born or unborn baby are endless
          </p>
          <p>
            What started as a single classroom with <strong>12 students</strong> has grown into a full boarding school serving <strong>over 150 girls across 12 counties</strong>. We provide not just education, but a complete support system: daycare for their babies, trauma counseling, health services, and vocational training.
          </p>
          <p>
            Every girl who walks through our gates carries a story of resilience. We are here to ensure that story continues — with hope, dignity, and opportunity.
          </p>
      </div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section id="mission" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 max-w-5xl grid md:grid-cols-3 gap-6">
        <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <BookOpen className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Mission</h3>
          <p className="text-muted-foreground leading-relaxed">
            To provide a safe, nurturing, and empowering educational environment for <strong>teen mothers</strong> and survivors of <strong>GBV/FGM</strong>, enabling them to complete their education, heal from trauma, and build self-sufficient futures.
          </p>
        </div>
        <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
          <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
            <Heart className="w-6 h-6 text-accent" />
          </div>
          <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Vision</h3>
          <p className="text-muted-foreground leading-relaxed">
            A world where every girl, regardless of her past, has access to quality education and the support she needs to thrive — where no dream is abandoned because of circumstance.
          </p>
        </div>
        <div className="bg-card rounded-xl p-8 shadow-sm border border-border">
          <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
            <Target className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Objective</h3>
          <p className="text-muted-foreground leading-relaxed">
            To empower vulnerable girls through comprehensive education and support, breaking cycles of poverty, violence, and early marriage to foster self-reliance and community leadership.
          </p>
        </div>
      </div>
    </section>

    {/* Student Categories */}
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-display text-3xl font-bold text-foreground mb-12 text-center">Our Student Models</h2>
        <div className="space-y-12">
          <div className="flex items-start space-x-6">
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-3">Vulnerable Poor Teenager</h3>
              <p className="text-muted-foreground leading-relaxed">The vulnerable poor teenager who could be pregnant or has already given birth who requires 100% support to be in school. This is that teenager who cannot afford to pay anything if left on their own. The teenager needs 100% scholarship.</p>
            </div>
          </div>
          <div className="flex items-start space-x-6">
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-3">Poor Teenager with Partial Support</h3>
              <p className="text-muted-foreground leading-relaxed">The poor teenager who however has a support system that can offer part payment to keep the girl in school.</p>
            </div>
          </div>
          <div className="flex items-start space-x-6">
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-3">Teenager with Full Support</h3>
              <p className="text-muted-foreground leading-relaxed">Those teenagers with a support system that can afford 100% fees to keep the girl in school.</p>
            </div>
          </div>
          <div className="flex items-start space-x-6">
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-3">Sisters Keeper</h3>
              <p className="text-muted-foreground leading-relaxed">This is a teenager whose support system can afford not only to pay her full fees but can also uplift the poor and vulnerable by supporting to pay full or partial fees for them. We refer to them as sisters keeper because they do not just join the school for their own education but are able to support and keep fellow teenagers in school too.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl font-bold text-foreground mb-12 text-center">Our Values</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {values.map((v) => (
            <div key={v.title} className="bg-card rounded-xl p-6 border border-border text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <v.icon className="w-7 h-7 text-primary" />
              </div>
              <h4 className="font-display text-lg font-semibold text-foreground mb-2">{v.title}</h4>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default AboutUs;
