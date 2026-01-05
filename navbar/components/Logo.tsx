import { Code } from "lucide-react";
const Logo = () => {
  return (
    <div className="flex gap-2 cursor-pointer transition">
      <Code strokeWidth={2} absoluteStrokeWidth />
      <h1>
        <strong>Sofia Rodas</strong>
      </h1>
    </div>
  );
};

export default Logo;
