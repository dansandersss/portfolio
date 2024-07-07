import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <>
      <section className="cta">
        <p className="cta-text">
          Are you interested in collaborating?{" "}
          <br className="sm:block hidden " /> Let's get in touch!
        </p>
        <Link to="/contact" className="btn">
          Contact
        </Link>
      </section>
    </>
  );
}
