import { useEffect } from "react";

import Header from "../components/Header";

import Moon from "../assets/destination/image-moon.png";
import MoonWebp from "../assets/destination/image-moon.webp";

import Europa from "../assets/destination/image-europa.png";
import EuropaWebp from "../assets/destination/image-europa.webp";

import Mars from "../assets/destination/image-mars.png";
import MarsWebp from "../assets/destination/image-mars.webp";

import Titan from "../assets/destination/image-titan.png";
import TitanWebp from "../assets/destination/image-titan.webp";

import Data from "../data/data.json";

function Destination() {
  useEffect(() => {
    const tabList = document.querySelector('[role="tablist"]');
    const tabs = document.querySelectorAll('[role="tab"]');

    let tabFocus = 0;

    // Picture
    const picture = document.getElementById("picture");
    const pictureAlt = picture.nextElementSibling;

    // Text content
    const heading = document.getElementById("heading");
    const description = document.getElementById("description");
    const distance = document.getElementById("distance");
    const travelTime = document.getElementById("travelTime");

    // JSON data
    const data = Data;

    tabList.addEventListener("keydown", changeTabFocus);

    tabs.forEach((tab) => {
      tab.addEventListener("click", changeTabPanel);
    });

    function changeTabPanel(e) {
      const targetTab = e.target;
      const targetPanel = targetTab.getAttribute("destination");

      const tabContainer = targetTab.parentNode;
      const mainContainer = tabContainer.parentNode;

      tabContainer
        .querySelector('[aria-selected="true"]')
        .setAttribute("aria-selected", false);

      targetTab.setAttribute("aria-selected", true);

      hideContent(mainContainer, '[role="tabpanel"]');

      if (targetPanel === "Moon") {
        changeImage(MoonWebp, Moon, "Moon");

        changeTexts(0);
      } else if (targetPanel === "Mars") {
        changeImage(MarsWebp, Mars, "Mars");

        changeTexts(1);
      } else if (targetPanel === "Europa") {
        changeImage(EuropaWebp, Europa, "Europa");

        changeTexts(2);
      } else if (targetPanel === "Titan") {
        changeImage(TitanWebp, Titan, "Titan");

        changeTexts(3);
      }
    }

    function hideContent(parent, content) {
      parent
        .querySelectorAll(content)
        .forEach((item) => item.setAttribute("hidden", true));
    }

    function showContent() {}

    function changeTexts(index) {
      heading.innerHTML = data.destinations[index].name;
      description.innerHTML = data.destinations[index].description;
      distance.innerHTML = data.destinations[index].distance;
      travelTime.innerHTML = data.destinations[index].travel;
    }

    function changeImage(img, altImg, altTxt) {
      picture.srcset = img;
      pictureAlt.src = altImg;
      pictureAlt.alt = altTxt;
    }

    function changeTabFocus(e) {
      const keydownLeft = 37;
      const keydownRight = 39;

      if (e.keyCode === keydownLeft || e.keyCode === keydownRight) {
        tabs[tabFocus].setAttribute("tabindex", -1);
      }

      if (e.keyCode === keydownRight) {
        tabFocus++;
        if (tabFocus >= tabs.length) {
          tabFocus = 0;
        }
      }

      if (e.keyCode === keydownLeft) {
        tabFocus--;
        if (tabFocus < 0) {
          tabFocus = tabs.length - 1;
        }
      }

      tabs[tabFocus].setAttribute("tabindex", 0);
      tabs[tabFocus].focus();
    }
  });

  return (
    <>
      <Header />
      <main
        id="main"
        className="grid-container grid-container--destination flow"
      >
        <h1 className="numbered-title">
          <span aria-hidden="true">01</span> Pick your destination
        </h1>

        <picture>
          <source id="picture" srcSet={MoonWebp} type="image/webp" />
          <img src={Moon} alt="Moon" />
        </picture>

        <div className="tab-list underline-indicators flex" role={"tablist"}>
          <button
            aria-selected="true"
            className="uppercase txt-white ff-sans-cond text-accent letter-spacing-2"
            role={"tab"}
            aria-controls="moon-tab"
            destination="Moon"
          >
            Moon
          </button>
          <button
            aria-selected="false"
            className="uppercase txt-white ff-sans-cond text-accent letter-spacing-2"
            role={"tab"}
            aria-controls="mars-tab"
            destination="Mars"
          >
            Mars
          </button>
          <button
            aria-selected="false"
            className="uppercase txt-white ff-sans-cond text-accent letter-spacing-2"
            role={"tab"}
            aria-controls="europa-tab"
            destination="Europa"
          >
            Europa
          </button>
          <button
            aria-selected="false"
            className="uppercase txt-white ff-sans-cond text-accent letter-spacing-2"
            role={"tab"}
            aria-controls="titan-tab"
            destination="Titan"
          >
            Titan
          </button>
        </div>
        <article className="destination-info flow">
          <h2
            id="heading"
            className="fs-800 uppercase letter-spacing-1 ff-serif"
          >
            Moon
          </h2>
          <p id="description" className="txt-light">
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>
          <div className="flex destination-meta">
            <div>
              <h3 className="uppercase txt-light fs-300 letter-spacing-1">
                Avg. distance
              </h3>
              <p id="distance" className="ff-serif text-white uppercase fs-500">
                384,400 km
              </p>
            </div>
            <div>
              <h3 className="uppercase txt-light fs-300 letter-spacing-1">
                Est. travel time
              </h3>
              <p
                id="travelTime"
                className="ff-serif text-white uppercase fs-500"
              >
                3 days
              </p>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}

export default Destination;
