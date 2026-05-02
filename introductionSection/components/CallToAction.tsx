import { Button } from "@/components/Button";
import { Download, Mail } from "lucide-react";

const CallToAction = () => {
  return (
    <div className="flex gap-4 max-lg:w-full max-lg:max-w-md max-lg:flex-col max-lg:items-center max-lg:justify-center max-lg:gap-3">
      <a href="/Resume.pdf" download className="max-lg:flex max-lg:justify-center">
        <Button
          icon={<Download strokeWidth={1.75} className="w-5" />}
          text="Download CV"
          variant="black"
        />
      </a>
      <a href="mailto:sofrodasg@example.com" className="max-lg:flex max-lg:justify-center">
        <Button
          icon={<Mail strokeWidth={1.75} className="w-5" />}
          text="Contact Me"
          variant=""
          style="hover:-translate-y-1"
        />
      </a>
    </div>
  );
};

export default CallToAction;
