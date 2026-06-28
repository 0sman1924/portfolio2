"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FileText, FolderGit2, Download } from "lucide-react";
import { SocialLinks } from "./SocialLinks";

/**
 * Multilingual name variants for the typing animation.
 * PRD requires "Animated multilingual name" in the Hero.
 */
const nameVariants = [
  "Your Name",
  "あなたの名前",
  "اسمك",
  "Votre Nom",
  "你的名字",
  "Tu Nombre",
];

const TYPING_SPEED = 80;
const DELETING_SPEED = 50;
const PAUSE_DURATION = 2000;

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentName = nameVariants[currentIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          if (displayText.length < currentName.length) {
            setDisplayText(currentName.slice(0, displayText.length + 1));
          } else {
            // Finished typing — pause then start deleting
            setTimeout(() => setIsDeleting(true), PAUSE_DURATION);
          }
        } else {
          // Deleting
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            // Finished deleting — move to next name
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % nameVariants.length);
          }
        }
      },
      isDeleting ? DELETING_SPEED : TYPING_SPEED
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex]);

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-4">
        <div className="max-w-2xl">
          {/* Multilingual animated name */}
          <div className="mb-4 h-12 md:h-14 flex items-center">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              {displayText}
              <span className="animate-pulse text-accent">|</span>
            </h1>
          </div>

          {/* Title */}
          <p className="text-lg md:text-xl text-accent font-medium mb-4">
            Security Analyst | DevOps Engineer
          </p>

          {/* Introduction */}
          <p className="text-foreground-secondary leading-relaxed mb-8 max-w-xl">
            Focused on security analysis, incident response, and building
            resilient infrastructure. Sharing reports, projects, and technical
            knowledge.
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3 mb-8">
            <Link
              href="/reports"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-accent-foreground text-sm font-medium hover:bg-accent-hover transition-colors"
            >
              <FileText size={16} />
              View Reports
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground text-sm font-medium hover:bg-card-hover transition-colors"
            >
              <FolderGit2 size={16} />
              View Projects
            </Link>
            <a
              href="/resume/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground text-sm font-medium hover:bg-card-hover transition-colors"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>

          {/* Social icons */}
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}
