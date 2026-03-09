"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [showAbout, setShowAbout] = useState(false);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY > 0) {
        setShowAbout(true);
      } else {
        setShowAbout(false);
      }
    };

    window.addEventListener("wheel", handleWheel);

    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <main className="container">

      {/* HERO PAGE */}
      <section className="hero">

        <div className="hero-image">
          <Image
            src="/images/hero.jpg"
            alt="Hero Image"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="hero-text">
          <h1></h1>
          <p></p>
        </div>

      </section>


      {/* ABOUT PAGE */}
      <section className={`about ${showAbout ? "active" : ""}`}>

        <div className="big-letter">D</div>

        <div className="nav-links">

         <Link href="/about">About me</Link>

         <Link href="/skills">Skills</Link>

         <Link href="/experience">Experience</Link>

         <Link href="/work">Work</Link>

         <Link href="/contact">Contact me</Link>

        </div>

      </section>

    </main>
  );
}





