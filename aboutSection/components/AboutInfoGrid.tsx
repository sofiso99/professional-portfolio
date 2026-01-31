import { Globe, Heart, MapPin } from "lucide-react";
import content from "../../content/aboutInfoCardsData.json";
import AboutInfoCard from "./AboutInfoCard";
import { JSX } from "react";

const ICON_SIZE = 25;

const AboutInfoGrid = () => {
  const icons: Record<string, JSX.Element> = {
    Heart: <Heart size={ICON_SIZE} />,
    Globe: <Globe size={ICON_SIZE} />,
    Map: <MapPin size={ICON_SIZE} />,
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
