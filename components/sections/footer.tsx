import React from "react";
import Link from "next/link";
import {  Instagram, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-bold tracking-tighter">
              Next.
            </Link>
            <p className="mt-4 text-muted-foreground max-w-xs">
              Creating memorable digital experiences that inspire and engage.
            </p>
            <div className="flex space-x-4 mt-6">
              <Button variant="outline" size="icon" className="rounded-full">
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:col-span-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
                Links
              </h3>
              <ul className="space-y-3">
                {["Home", "Services", "Projects", "About", "Contact"].map((item) => (
                  <li key={item}>
                    <Link
                      href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
                Services
              </h3>
              <ul className="space-y-3">
                {[
                  "Web Design",
                  "Development",
                  "Branding",
                  "UI/UX Design",
                  "Digital Marketing"
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href="/services"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 mt-12 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Next. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-sm">
            <Link
              href="/privacy"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Cookies Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}