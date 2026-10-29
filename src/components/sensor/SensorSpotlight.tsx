import { Link } from "react-router-dom";
import spotlightImage from "@/assets/spotlight-ventilation.webp.asset.json";

// Ventilation & gas spotlight for Sensor Integration (Figma 407:1560). The photo is the
// exported design image; the map on the monitor is part of the picture, so nothing inside
// it can be mistaken for a live product control.
export function SensorSpotlight() {
  return (
    <section className="bg-paper px-3 pb-3 md:px-6 md:pb-6">
      <div className="spotlight-card">
        <div className="spotlight-text">
          <h2 className="spotlight-title">
            Know the air is safe. <span>Before anyone goes in.</span>
          </h2>
          <p className="spotlight-body">
            View sensor alarms alongside the live positions of people and vehicles to support faster,
            better-informed decisions during emergencies.
          </p>
          <Link to="/emergency-support" className="spotlight-link">
            See Emergency Support
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M2.667 8H12.667M8.667 12L12.667 8L8.667 4" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </Link>
        </div>
        <div className="spotlight-visual">
          <img
            className="spotlight-visual__img"
            src={spotlightImage.url}
            alt="A ventilation fan detail panel with carbon monoxide, nitrogen dioxide, oxygen and air flow readings next to a mine map showing the fan's location"
            loading="lazy"
            width={403}
            height={475}
          />
        </div>
      </div>
    </section>
  );
}
