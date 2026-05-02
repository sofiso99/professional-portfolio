import AboutIntro from "@/aboutSection/components/AboutIntro";
import content from "../../content/contactIntroData.json";
import ContactButtons from "./ContactButtons";
import ContactCards from "./ContactCards";

const ContactIntroSection = () => {
  return (
    <div className="flex flex-col place-items-center pt-40 max-lg:px-4 max-lg:pt-24">
      <AboutIntro
        title={content.contactIntroData.title}
        highlight={content.contactIntroData.highlight}
        paragraphs={content.contactIntroData.paragraphs}
      />
      <ContactButtons />
      <ContactCards />
    </div>
  );
};

export default ContactIntroSection;
