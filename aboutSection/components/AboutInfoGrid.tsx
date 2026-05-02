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
    <div className="mt-10 flex flex-row gap-6 max-lg:flex-col max-lg:items-center max-lg:gap-10 max-lg:px-2">
      {content.cards.map((card) => (
        <div key={card.id} className="max-lg:w-full max-lg:max-w-xs">
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
