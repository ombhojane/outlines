"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const TrueCaptionsHero = () => {
  return (
    <div className="text-white font-bold py-36 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>Validate Your Content with</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          <TypewriterComponent
            options={{
              strings: [
                "Text Validation.",
                "Image Insights.",
                "News Verification.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="text-sm md:text-xl font-light text-zinc-400">
        Ensure the accuracy of your content before sharing it with the world.
      </div>
      <div>
        <Link href="/sign-in">
          <Button variant="premium" className="md:text-lg p-4 md:p-6 rounded-full font-semibold">
            Get Started with True Captions
          </Button>
        </Link>
      </div>
      <div className="text-zinc-400 text-xs md:text-sm font-normal">
        Explore Dynamic Features to validate your content
      </div>
    </div>
  );
};
