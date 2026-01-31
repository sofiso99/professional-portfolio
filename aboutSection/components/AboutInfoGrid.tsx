import { Globe, Heart, MapPin } from "lucide-react";
import content from "../../content/aboutInfoCardsData.json";
import AboutInfoCard from "./AboutInfoCard";
import { JSX } from "react";

const AboutInfoGrid = () => {
  const icons: Record<string, JSX.Element> = {
    Heart: <Heart size={25} />,
    Globe: <Globe size={25} />,
    Map: <MapPin size={25} />,
  };

  return (
    <div className="flex flex-row gap-6 mt-10">
      {content.cards.map((card) => (
        <div key={card.id}>
          <AboutInfoCard
            icon={icons[card.icon]}
            title={card.title}
            description={card.description}
          />
        </div>
      ))}
    </div>
  );
};

export default AboutInfoGrid;
