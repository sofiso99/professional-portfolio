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
    <div className="flex flex-col place-items-center max-lg:px-4">
      <div className="flex gap-3 pt-8 text-[45px] font-bold max-lg:flex-col max-lg:items-center max-lg:gap-1 max-lg:text-center max-lg:text-[clamp(1.75rem,5vw,2.75rem)]">
        <h1>{title}</h1>
        <h1 className="text-[#4C5564]">{highlight}</h1>
      </div>
      <p className="px-85 py-8 text-center text-[23px] font-light text-[#737373] max-lg:max-w-4xl max-lg:px-4 max-lg:py-8 max-lg:text-lg sm:max-lg:text-xl">
        {paragraphs}
      </p>
    </div>
  );
};

export default AboutIntro;
