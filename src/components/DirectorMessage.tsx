import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const DirectorMessage = () => {
  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-none bg-gradient-to-r from-primary/10 to-accent/10">
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                <Quote className="w-12 h-12 text-primary mx-auto mb-6" />
                <blockquote className="text-xl md:text-2xl font-medium text-foreground mb-6 leading-relaxed">
                  "At St. Rita Evergreen School, we believe in nurturing not just minds, but hearts and spirits.
                  Every child has the potential to create a brighter future for themselves and their community.
                  Through dedication, compassion, and excellence in education, we are building a foundation
                  for hope, innovation, and lasting positive change. Together, we can transform dreams into reality."
                </blockquote>
                <div className="border-t border-border pt-6">
                  <p className="text-lg font-semibold text-primary">Director's Message</p>
                  <p className="text-muted-foreground">St. Rita Evergreen School</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DirectorMessage;