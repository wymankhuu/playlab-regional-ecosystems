import Image from "next/image";
import { ColorBar } from "./ui/color-bar";

export function Footer() {
  return (
    <footer className="bg-playlab-blue text-cream">
      <div className="mx-auto w-full max-w-7xl px-4 pt-12 pb-10 sm:px-8 lg:px-12">
        <ColorBar />
        <div className="mt-8 flex flex-col items-start gap-3">
          <Image
            src="/playlab-logo.png"
            alt="Playlab"
            width={167}
            height={57}
            className="h-8 w-auto"
          />
          <p className="max-w-xs text-sm text-cream/80">
            Brought to you by Playlab Education Inc., a 501(c)3 nonprofit.
          </p>
          <p className="text-sm text-cream/80">
            © {new Date().getFullYear()} Playlab Education Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
