import content from "../../content/aboutIntroData.json";

const AboutIntroContent = () => {
    return (
      <div className="flex flex-col place-items-center">
        <div className="flex gap-3 font-bold text-[45px]">
          <h1>{content.aboutIntroData.title}</h1>
          <h1 className="text-[#4C5564]">{content.aboutIntroData.highlight}</h1>
        </div>
        <p className="font-light text-[23px] text-[#737373] py-10 px-85 text-center">
          {content.aboutIntroData.paragraphs[0]}
        </p>
      </div>
    );
}

export default AboutIntroContent;
