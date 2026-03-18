import content from "../../content/aboutIntroData.json";

const AboutIntro = ({
  title,
  highlight,
  paragraphs,
}: {
  title: string;
  highlight: string;
  paragraphs: string;
}) => {
  return (
    <div className="flex flex-col place-items-center">
      <div className="flex gap-3 font-bold text-[45px] pt-8">
        <h1>{title}</h1>
        <h1 className="text-[#4C5564]">{highlight}</h1>
      </div>
      <p className="font-light text-[23px] text-[#737373] py-8 px-85 text-center">
        {paragraphs}
      </p>
    </div>
  );
};

export default AboutIntro;
