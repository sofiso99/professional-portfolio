export const SkillsBox = ({ title }: { title: string }) => {
  return (
    <div className="w-40 rounded-lg border border-[#E7E8EB] p-3 text-center max-lg:min-w-0 max-lg:w-full max-lg:p-2 max-lg:text-sm">
      <p>{title}</p>
    </div>
  );
};
