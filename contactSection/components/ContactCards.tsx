import content from "../../content/contactCardsData.json";
import ContactCard from "./ContactCard";

const ContactCards = () => {
  return (
    <div className="flex justify-center gap-12 pb-20 flex-wrap">
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