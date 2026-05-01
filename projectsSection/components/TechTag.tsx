export const TechTag = ({ label }: { label: string }) => {
  return (
    <span className="rounded-md border border-[#E7E8EB] bg-white px-2.5 py-1 text-xs text-gray-700">
      {label}
    </span>
  );
};
