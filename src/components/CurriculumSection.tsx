import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const CurriculumSection = () => {
  const curricula = [
    {
      title: "CBE (Competency-Based Education)",
      description: "A modern educational approach focused on developing skills and competencies through practical, real-world learning experiences.",
    },
    {
      title: "8:4:4 System",
      description: "The traditional Kenyan education system with 8 years of primary, 4 years of secondary, and 4 years of university education.",
    },
    {
      title: "Technical Education",
      description: "Vocational and technical training programs designed to prepare students for careers in various technical fields.",
    },
  ];

  return (
    <section className="py-16 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Our Curriculum</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive curriculum tailored to meet the diverse needs of our students, preparing them for success in various educational paths.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {curricula.map((curriculum, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{curriculum.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {curriculum.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;