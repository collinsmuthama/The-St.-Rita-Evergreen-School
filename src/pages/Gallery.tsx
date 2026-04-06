import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { X } from "lucide-react";
import heroImage from "@/assets/hero-classroom.jpg";
import first from "@/assets/prayers/fath.jpg";
import second from "@/assets/prayers/father.jpg";
import third from "@/assets/prayers/fifth.jpg";
import fourth from "@/assets/prayers/fourth.jpg";
import fifth from "@/assets/prayers/third.jpg"; 
import sixth from "@/assets/prayers/mass.jpg";
import seventh from "@/assets/school/DSC_0014.jpg";
import ninth from "@/assets/school/DSC_0016.jpg";
import tenth from "@/assets/school/DSC_0017.jpg";
import twelfth from "@/assets/school/DSC_0019.jpg";  
import thirteenth from "@/assets/school/DSC_0020.jpg";

import eighteenth from "@/assets/school/DSC_0025.jpg"; 
import nineteenth from "@/assets/school/DSC_0026.jpg";
import twentieth from "@/assets/school/DSC_0027.jpg";
import twentyfirst from "@/assets/school/DSC_0028.jpg";
import twentysecond from "@/assets/school/DSC_0029.jpg";
import twentythird from "@/assets/school/DSC_0030.jpg";
import twentyfourth from "@/assets/school/DSC_0031.jpg"; 
import twentyfifth from "@/assets/school/DSC_0032.jpg";
import twentysixth from "@/assets/school/DSC_0033.jpg";
import twentyseventh from "@/assets/school/DSC_0034.jpg";
import twentyeighth from "@/assets/school/DSC_0035.jpg";
import twentyninth from "@/assets/school/DSC_0036.jpg";
import thirtieth from "@/assets/school/DSC_0037.jpg";
import thirtyfirst from "@/assets/school/DSC_0038.jpg";
import thirtysecond from "@/assets/school/DSC_0039.jpg";
import thirtythird from "@/assets/school/DSC_0040.jpg";
import thirtyfourth from "@/assets/school/DSC_0041.jpg";
import thirtyfifth from "@/assets/school/DSC_0042.jpg";
import seventhfifty from "@/assets/school/DSC_0043.jpg";
import seventhfiftyOne from "@/assets/school/fam1.jpeg";
import seventhfiftyTwo from "@/assets/school/fam2.jpeg";
import seventhfiftyThree from "@/assets/school/fam3.jpeg";
import seventhfiftyFour from "@/assets/school/fam4.jpeg";
import seventhfiftyFive from "@/assets/school/fam5.jpeg"; 
import seventhfiftySix from "@/assets/school/fam6.jpeg";
import seventhfiftySeven from "@/assets/school/fam7.jpeg";
import seventhfiftyEight from "@/assets/school/fam8.jpeg";
import seventhfiftyNine from "@/assets/school/fam9.jpeg";
import seventhfiftyTen from "@/assets/school/fam10.jpeg";
import seventhfiftyEleven from "@/assets/school/fam11.jpeg";
import seventhfiftyTwelve from "@/assets/school/fam12.jpeg";
import seventhfiftyThirteen from "@/assets/school/fam13.jpeg";
import seventhfiftyFourteen from "@/assets/school/fam14.jpeg";
import seventhfiftyFifteen from "@/assets/school/fam15.jpeg";
import seventhfiftySixteen from "@/assets/school/home.jpeg";
import seventhfiftySeventeen from "@/assets/school/toddlers.jpeg";
import seventhfiftyEighteen from "@/assets/school/director (10).jpeg";
import seventhfiftyNineteen from "@/assets/school/director (11).jpeg";
import seventhfiftyTwenty from "@/assets/school/director (9).jpeg";  
import seventhfiftyTwentyOne from "@/assets/school/director (7).jpeg"; 
import seventhfiftyTwentyTwo from "@/assets/school/director (6).jpeg";
import seventhfiftyTwentyThree from "@/assets/school/director (4).jpeg";
import seventhfiftyTwentyFour from "@/assets/school/1.jpeg";  
import seventhfiftyTwentyFive from "@/assets/school/2.jpeg";  
import seventhfiftyTwentySix from "@/assets/school/3.jpeg";  
import thirtysixth from "@/assets/enviroment/DSC_0048.jpg";
import thirdtySeventh from "@/assets/enviroment/DSC_0049.jpg";  
import thirtyEighth from "@/assets/enviroment/DSC_0050.jpg";
import thirtyNinth from "@/assets/enviroment/DSC_0051.jpg";
import fortieth from "@/assets/enviroment/DSC_0052.jpg";
import fortyFirst from "@/assets/enviroment/DSC_0058.jpg";
import fortySecond from "@/assets/enviroment/DSC_0059.jpg"; 
import fortyThird from "@/assets/enviroment/DSC_0060.jpg";
import fortyFourth from "@/assets/enviroment/DSC_0061.jpg";
import fortyFifth from "@/assets/enviroment/DSC_0064.jpg";  
import fortySixth from "@/assets/enviroment/DSC_0065.jpg";
import fortySeventh from "@/assets/enviroment/DSC_0080.jpg";
import fortyEighth from "@/assets/enviroment/DSC_0081.jpg";
import fortyNinth from "@/assets/enviroment/DSC_0082.jpg";
import fiftieth from "@/assets/enviroment/DSC_0083.jpg";
import fiftyFirst from "@/assets/enviroment/DSC_0084.jpg";
import fiftySecond from "@/assets/enviroment/DSC_0085.jpg";
import fiftyThird from "@/assets/enviroment/DSC_0086.jpg";  
import fiftyFourth from "@/assets/enviroment/DSC_0087.jpg";
import fiftyFifth from "@/assets/enviroment/DSC_0088.jpg";
import fiftySixth from "@/assets/enviroment/DSC_0089.jpg";    
import fiftySeventh from "@/assets/enviroment/DSC_0090.jpg";
import fiftyEighth from "@/assets/enviroment/DSC_0091.jpg";
import fiftyNinth from "@/assets/enviroment/DSC_0092.jpg";  
import sixtieth from "@/assets/enviroment/DSC_0095.jpg";
import sixtyFirst from "@/assets/enviroment/DSC_0096.jpg";
import sixtySecond from "@/assets/enviroment/DSC_0097.jpg";
import sixtyThird from "@/assets/enviroment/DSC_0098.jpg";    
import sixtyFourth from "@/assets/enviroment/DSC_0099.jpg";
import sixtyFifth from "@/assets/enviroment/DSC_0100.jpg";
import sixtySixth from "@/assets/enviroment/DSC_0101.jpg";  
import sixtySeventh from "@/assets/enviroment/DSC_0102.jpg";
import sixtyEighth from "@/assets/enviroment/DSC_0103.jpg";
import sixtyNinth from "@/assets/enviroment/DSC_0104.jpg";    
import seventieth from "@/assets/enviroment/DSC_0105.jpg";
import  seventyFirst from "@/assets/enviroment/DSC_0106.jpg";
import seventySecond from "@/assets/enviroment/DSC_0107.jpg";
import seventyThird from "@/assets/enviroment/DSC_0108.jpg";  
import seventyFourth from "@/assets/enviroment/DSC_0109.jpg";


const categories = ["All", "Our School", "Prayer", "Graduation", "Environment"];

const images = [
  { src: first, alt: "Mass day", category: "Prayer" },
  { src: second, alt: "Mass day", category: "Prayer" },
  { src: third, alt: "Mass day", category: "Prayer" },
  { src: fourth, alt: "Mass day", category: "Prayer" },
  { src: fifth, alt: "Mass day", category: "Prayer" },
  { src: sixth, alt: "Mass day", category: "Prayer" },
  { src: seventh, alt: "Our school", category: "Our School" },
  { src: ninth, alt: "Our school", category: "Our School" },
  { src: tenth, alt: "Our school", category: "Our School" },  
  { src: twelfth, alt: "Our school", category: "Our School" },
  { src: thirteenth, alt: "Our School", category: "Our School" },
  { src: eighteenth, alt: "Our School", category: "Our School" }, 
  { src: nineteenth, alt: "Our School", category: "Our School" }, 
  { src: twentieth, alt: "Our School", category: "Our School" },
  { src: twentyfirst, alt: "Our School", category: "Our School" },
  { src: twentysecond, alt: "Our School", category: "Our School" }, 
  { src: twentythird, alt: "Our School", category: "Our School" },
  { src: twentyfourth, alt: "Our School", category: "Our School" },  
  { src: twentyfifth, alt: "Our School", category: "Our School" },    
  { src: twentysixth, alt: "Our School", category: "Our School" },  
  { src: twentyseventh, alt: "Our School", category: "Our School" },
  { src: twentyeighth, alt: "Our School", category: "Our School" },
  { src: twentyninth, alt: "Our School", category: "Our School" },
  { src: thirtieth, alt: "Our School", category: "Our School" },
  { src: thirtyfirst, alt: "Our School", category: "Our School" },
  { src: thirtysecond, alt: "Our School", category: "Our School" },
  { src: thirtythird, alt: "Our School", category: "Our School" },
  { src: thirtyfourth, alt: "Our School", category: "Our School" },
  { src: thirtyfifth, alt: "Our School", category: "Our School" },
  { src: thirtysixth, alt: "Our School", category: "Our School" },
  { src : seventhfifty, alt: "Our School", category: "Our School" },
  { src : seventhfiftyOne, alt: "Our School", category: "Our School" },
  { src : seventhfiftyTwo, alt: "Our School", category: "Our School" }, 
  { src : seventhfiftyThree, alt: "Our School", category: "Our School" },
  { src : seventhfiftyFour, alt: "Our School", category: "Our School" },
  { src : seventhfiftyFive, alt: "Our School", category: "Our School" },  
  { src : seventhfiftySix, alt: "Our School", category: "Our School" },
  { src : seventhfiftySeven, alt: "Our School", category: "Our School" },
  { src : seventhfiftyEight, alt: "Our School", category: "Our School" },
  { src : seventhfiftyNine, alt: "Our School", category: "Our School" },
  { src : seventhfiftyTen, alt: "Our School", category: "Our School" },
  { src : seventhfiftyEleven, alt: "Our School", category: "Our School" },
  { src : seventhfiftyTwelve, alt: "Our School", category: "Our School" },
  { src : seventhfiftyThirteen, alt: "Our School", category: "Our School" },
  { src : seventhfiftyFourteen, alt: "Our School", category: "Our School" },
  { src : seventhfiftyFifteen, alt: "Our School", category: "Our School" },
  { src : seventhfiftySixteen, alt: "Our School", category: "Our School" },
  { src : seventhfiftySeventeen, alt: "Our School", category: "Our School" },
  { src : seventhfiftyEighteen, alt: "Our School", category: "Our School" },
  { src : seventhfiftyNineteen, alt: "Our School", category: "Our School" },
  { src : seventhfiftyTwenty, alt: "Our School", category: "Our School" },
  { src : seventhfiftyTwentyOne, alt: "Our School", category: "Our School" },
  { src : seventhfiftyTwentyTwo, alt: "Our School", category: "Our School" },
  { src : seventhfiftyTwentyThree, alt: "Our School", category: "Our School" },
  { src: seventhfiftyTwentyFour, alt : "Our School", category: "Our School"},
    { src: seventhfiftyTwentyFive,alt:"Our School", category: "Our School"},
      { src: seventhfiftyTwentySix , alt:"Our school", category:"Our School"},


  
  { src: thirdtySeventh, alt: "Environment", category: "Environment" },
  { src: thirtyEighth, alt: "Environment", category: "Environment" },
  { src: thirtyNinth, alt: "Environment", category: "Environment" },  
  { src: fortieth, alt: "Environment", category: "Environment" },
  { src: fortyFirst, alt: "Environment", category: "Environment" },
  { src: fortySecond, alt: "Environment", category: "Environment" },  
  { src: fortyThird, alt: "Environment", category: "Environment" }, 
  { src: fortyFourth, alt: "Environment", category: "Environment" },  
  { src: fortyFifth, alt: "Environment", category: "Environment" },
  { src: fortySixth, alt: "Environment", category: "Environment" }, 
  { src: fortySeventh, alt: "Environment", category: "Environment" },
  { src: fortyEighth, alt: "Environment", category: "Environment" },
  { src: fortyNinth, alt: "Environment", category: "Environment" },
  { src: fiftieth, alt: "Environment", category: "Environment" }, 
  { src: fiftyFirst, alt: "Environment", category: "Environment" },
  { src: fiftySecond, alt: "Environment", category: "Environment" },

  { src: fiftyThird, alt: "Environment", category: "Environment" },
  { src: fiftyFourth, alt: "Environment", category: "Environment" },
  { src: fiftyFifth, alt: "Environment", category: "Environment" },
  { src: fiftySixth, alt: "Environment", category: "Environment" },   
  { src: fiftySeventh, alt: "Environment", category: "Environment" },
  { src: fiftyEighth, alt: "Environment", category: "Environment" },




  { src: fiftyNinth, alt: "Environment", category: "Environment" },
  { src: sixtieth, alt: "Environment", category: "Environment" },
  { src: sixtyFirst, alt: "Environment", category: "Environment" },
  { src: sixtySecond, alt: "Environment", category: "Environment" },  
  { src: sixtyThird, alt: "Environment", category: "Environment" },
  { src: sixtyFourth, alt: "Environment", category: "Environment" },
  { src: sixtyFifth, alt: "Environment", category: "Environment" }, 
  { src: sixtySixth, alt: "Environment", category: "Environment" },
  { src: sixtySeventh, alt: "Environment", category: "Environment" },
  { src: sixtyEighth, alt: "Environment", category: "Environment" },  
  { src: sixtyNinth, alt: "Environment", category: "Environment" },
  { src: seventieth, alt: "Environment", category: "Environment" },
  { src: seventyFirst, alt: "Environment", category: "Environment" }, 
  { src: seventySecond, alt: "Environment", category: "Environment" },
  { src: seventyThird, alt: "Environment", category: "Environment" },
  { src: seventyFourth, alt: "Environment", category: "Environment" },  


];

const Gallery = () => {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = active === "All" ? images : images.filter((img) => img.category === active);

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-28 pb-16 bg-secondary">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">Gallery</h1>
          <p className="text-muted-foreground text-lg">Impact in pictures — see the transformation happening at Esther's School.</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  active === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 max-w-5xl mx-auto">
            {filtered.map((img, i) => (
              <button
                key={i}
                onClick={() => setLightbox(i)}
                className="block mb-4 w-full rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow group"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="p-3 bg-card">
                  <p className="text-sm text-muted-foreground">{img.alt}</p>
                  <span className="text-xs text-primary font-medium">{img.category}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/80 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-12 right-0 text-primary-foreground hover:text-accent transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={filtered[lightbox]?.src}
              alt={filtered[lightbox]?.alt}
              className="w-full rounded-xl shadow-2xl"
            />
            <p className="text-center text-primary-foreground mt-4 text-sm">{filtered[lightbox]?.alt}</p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
