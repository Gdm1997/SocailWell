const Hero: React.FC<{ title: string }> = ({ title }) => {
  return (
    <section id="hero-section">
      <h1>{title}</h1>
    </section>
  );
};

export default Hero;
