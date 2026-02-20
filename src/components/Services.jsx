import "../Styles/services.css";

const services = [
  {
    id: "web",
    title: "Web Development",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "ui",
    title: "UI / UX Design",
    image:
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "portfolio",
    title: "Brand Websites",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
  }
];

export default function ShuffleCards({ onCardClick }) {

  const handleClick = (id) => {
    if (onCardClick) {
      onCardClick(id);
    }
  };

  return (
    <section className="shuffle-section">

      {/* SECTION TEXT */}
      <div className="shuffle-header">
        <p className="shuffle-eyebrow">OUR SERVICES</p>
        <h2>Services We Provide</h2>
        <p>
          We design, develop and scale modern digital products tailored for
          startups, growing businesses and ambitious brands.
        </p>
      </div>

      {/* CARDS */}
      <div className="shuffle-wrapper">
        <div className="shuffle-row">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="shuffle-card"
              style={{
                transform: `rotate(-12deg) translateX(${index * -40}px)`
              }}
              onClick={() => handleClick(service.id)}
            >
              <img src={service.image} alt={service.title} />

              <div className="shuffle-title">
                {service.title}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}