import { Button } from "@/components/Button";
import { Download, Mail } from "lucide-react";

const CallToAction = () => {
  return (
    <div className="flex gap-4">
      <a href="/Resume.pdf" download>
        <Button
          icon={<Download strokeWidth={1.75} className="w-5" />}
          text="Download CV"
          variant="black"
        />
      </a>
      <a href="mailto:sofrodasg@example.com">
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
