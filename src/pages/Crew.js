import Header from "../components/Header";

import Hurley from "../assets/crew/image-douglas-hurley.png";
import HurleyWebp from "../assets/crew/image-douglas-hurley.webp";

function Crew() {
  return (
    <>
      <Header />
      <main id="main" className="grid-container grid-container--crew flow">
        <h1 className="numbered-title">
          <span aria-hidden="true">02</span> Meet your crew
        </h1>
        <div className="dot-indicators flex">
          <button aria-selected="true">
            <span className="sr-only">Slide title</span>
          </button>
          <button aria-selected="true">
            <span className="sr-only">Slide title</span>
          </button>
          <button aria-selected="true">
            <span className="sr-only">Slide title</span>
          </button>
        </div>
        <article className="crew-details flow">
          <header className="flow flow--space-small">
            <h2 className="fs-600 ff-serif uppercase">Commander</h2>
            <p className="fs-700 uppercase ff-serif">Douglas Hurley</p>
          </header>
          <p>
            Douglas Gerald Hurley is an American engineer, former Marine Corps
            pilot and former NASA astronaut. He launched into space for the
            third time as commander of Crew Dragon Demo-2.
          </p>
        </article>

        <picture>
          <source srcSet={HurleyWebp} type="image/webp" />
          <img src={Hurley} alt="Hurley" />
        </picture>
      </main>
    </>
  );
}

export default Crew;
