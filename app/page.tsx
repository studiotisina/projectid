import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    <>
      <section id="hero" className="h-screen">
        <video
          className="object-cover w-full h-full"
          autoPlay muted loop playsInline
        >
          <source src="/assets/Project_ID_Animation_10_3.mp4" type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
      </section>
      <AboutSection/>
    </>
  );
}