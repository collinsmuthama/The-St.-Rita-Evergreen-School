import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users } from "lucide-react";
import director from "@/assets/staff/director.jpg";
import Ht from "@/assets/staff/HT.jpg";
import deputy from "@/assets/staff/Deputy.jpg";
import accounts from "@/assets/staff/Accounts.jpg";
import Ahaz from "@/assets/staff/Ahaz.jpg";
import mary from "@/assets/staff/Mary.jpg";
import pen from "@/assets/staff/Pen.jpg";
import rose from "@/assets/staff/Rose.jpg";
import sam from "@/assets/staff/Sam.jpg";
import waithera from "@/assets/staff/Waithera.jpg";
import wangu from "@/assets/staff/Wangu.jpg";
import wesongs from "@/assets/staff/wesonga.jpg";

const staff = [
{ 
    name: "DR Phyllis Njoki", 
    role: "Founder & Director", 
    subjects: "Administration & Leadership",
    bio: "Leads with visionary administration and leadership, ensuring every student's holistic development and empowerment.",
    img: director
},
{ 
     name: "MD Grace Macharia",
     role: "Principal",
     subjects: "English & Literature", 
     bio: "Specializes in English and Literature, inspiring students with language, creativity, and critical thinking skills.",
     img: Ht
},
{ 
     name: "MS Wachira Charity",
     role: "Head Teacher",
     subjects: "Mathematics & Business Studies", 
     bio: "Masters Mathematics and Business Studies, building strong analytical, problem-solving, and entrepreneurial abilities.",
     img: deputy
},
{ 
    name: "Mr Wambugu Samuel", 
    role: "Dean/Accountant", 
    subjects: "Agriculture", 
    bio: "Expert in Agriculture, promoting sustainable farming practices and environmental stewardship.",
    img: accounts
},
{ 
    name: "Wesonga Elisha", 
    role: "Head Humanitarians & Languages", 
    subjects: "Game & Sports", 
    bio: "Champions Game and Sports, fostering physical health, teamwork, and competitive spirit.",
    img: wesongs 
},
{ 
    name: "Ms Riitho Mary", 
    role: "Head of Clubs & Societies", 
    subjects: "Biology", 
    bio: "Passionate about Biology, teaching life sciences and encouraging scientific curiosity.",
    img: mary 
},

{ 
    name: "Ms Fridah Wangu", 
    role: "Dormitory Matron/Guidance & Counselling", 
    subjects: "Geography", 
    bio: "Expert in Geography, exploring world cultures, environments, and global awareness.",
    img: wangu 
},
{ 
    name: "Mr Ahaz Zawadi", 
    role: "Patron Maths & Science", 
    subjects: "Chemistry & Physics", 
    bio: "Specializes in Chemistry and Physics, unlocking the mysteries of matter, energy, and the universe.",
    img: Ahaz 
},
{ 
    name: "Mrs Mungai Rose", 
    role: "Chief Chef", 
    subjects: "Geography", 
    bio: "Integrates Geography into culinary arts, teaching about food origins and cultural cuisines.",
    img: rose 
},
{ 
    name: "Mary Waithera", 
    role: "Matron", 
    subjects: "Geography", 
    bio: "Equipping students with practical skills for self-reliance.",
    img: waithera 
},
{ 
    name: "Mr Mutema Samuel", 
    role: "Security Officer", 
    subjects: "Security Officer", 
    bio: "Equipping students with practical skills for self-reliance.",
    img: sam 
},
{ 
    name: "Peninah Wanjiru", 
    role: "Assistant Chef", 
    subjects: "Assistant Chef", 
    bio: "Equipping students with practical skills for self-reliance.",
    img: pen 
},
];

const Staff = () => (
  <div className="min-h-screen">
    <Navbar />

    {/* Hero */}
    <section className="pt-28 pb-16 bg-secondary">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">Our Staff</h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Meet the dedicated team behind St. Rita Evergreen School, committed to empowering every girl through education, support, and care.
        </p>
      </div>
    </section>

    {/* Staff Team */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl font-bold text-foreground mb-12 text-center">Meet Our Team</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {staff.map((m) => (
            <div key={m.name} className="bg-card rounded-xl p-6 border border-border text-center shadow-sm">
              <div className="w-30 h-30 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                <img src={m.img} alt={m.name} />
              </div>
              <h4 className="font-display text-lg font-semibold text-foreground">{m.name}</h4>
              <p className="text-sm font-medium text-primary mb-2">{m.role}</p>
              <p className="text-sm text-muted-foreground mb-2"><strong>Subjects:</strong> {m.subjects}</p>
              <p className="text-sm text-muted-foreground">{m.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default Staff;