import Image from "next/image";

export default function Home() {
  return (
    <main className="hero">

      <div className="hero-image">
        <Image
          src="/images/hero.jpg"
          alt="Hero"
          fill
        />
      </div>

      <div className="hero-text">
        <h1>Dhwani Patel</h1>
        <p>The Code Behind the Aesthetic.</p>
      </div>

    </main>
  );
}