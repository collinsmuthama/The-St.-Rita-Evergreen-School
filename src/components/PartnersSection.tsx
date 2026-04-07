import GDP from "@/assets/GDP.jpeg";

const partners = [
  {
    name: "GDP Kenya",
    logo: GDP, // Placeholder - replace with actual logo
  },
 
];

const PartnersSection = () => (
  <section className="py-16 bg-muted/30">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-4">Our Partners</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We are proud to collaborate with these organizations to provide the best education and support for our students.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
        {partners.map((partner, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="w-30 h-30 bg-secondary rounded-lg flex items-center justify-center mb-4">
              {/* Placeholder for logo */}
              <span className="text-2xl font-bold text-muted-foreground">
                <img src={partner.logo} alt={partner.name.charAt(0)} />
              </span>
            </div>
            <h3 className="font-semibold text-foreground">{partner.name}</h3>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PartnersSection;