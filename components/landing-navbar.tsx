"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image"
import Link from "next/link"
import { useAuth } from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const font = Montserrat({ weight: '600', subsets: ['latin'] });

// Define LandingNavbar component
export const LandingNavbar = () => {
  // Check if the user is signed in
  const { isSignedIn } = useAuth();

  // Render the navbar
  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      {/* Logo and Brand Name */}
      <Link href="/" className="flex items-center">
        <div className="relative h-8 w-8 mr-4">
          <Image fill alt="Logo" src="/logo.png" />
        </div>
        <h1 className={cn("text-2xl font-bold text-white", font.className)}>
          True Captions
        </h1>
      </Link>

      {/* Get Started Button */}
      <div className="flex items-center gap-x-2">
        <Link href={isSignedIn ? "/dashboard" : "/sign-in"}>
          <Button variant="outline" className="rounded-full">
            LOGIN Here
          </Button>
        </Link>
      </div>
    </nav>
  );
};
