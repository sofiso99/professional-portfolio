import { Code } from "lucide-react";

const Logo = () => {
  return (
    <a
      href="#home"
      className="flex gap-2 cursor-pointer transition items-center"
    >
      <Code strokeWidth={2} absoluteStrokeWidth />
      <h1>
        <strong>Sofia Rodas</strong>
      </h1>
    </a>
  );
};

export default Logo;
