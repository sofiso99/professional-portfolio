import content from "../../content/contactCardsData.json";
import ContactCard from "./ContactCard";

const ContactCards = () => {
  return (
    <div className="flex flex-wrap justify-center gap-12 pb-20 max-lg:gap-8 max-lg:px-4 max-lg:pb-16">
      {content.cards.map((card, i) => (
        <ContactCard
          key={i}
          icon={card.icon}
          title={card.title}
          value={card.value}
          href={card.href}
        />
      ))}
    </div>
  );
};

export default ContactCards;
