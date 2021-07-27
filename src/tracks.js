import imgSrc from "./assets/SceneThumbs/ForestCabin.svg";
import imgSrc2 from "./assets/SceneThumbs/AbandonedApartment1.svg";
import imgSrc3 from "./assets/SceneThumbs/DystopianSlums.svg";
import ForestAmbi from "./assets/Ambi/ForestAmbi.mp3";
import StormAmbi from "./assets/Ambi/StormAmbi.mp3";
import CabinAmbi from "./assets/Ambi/CabinAmbi.mp3";

//---------------------------------------------------------------- Scene/Track Export
export default [
  {
    title: "Forest Cabin",
    description: "Ambience of the forest",
    audioSrc: CabinAmbi,
    image: imgSrc,
    color: "#7F9099"
  },
  {
    title: "Abandoned Apartment",
    description: "Ambience of an another time",
    audioSrc: ForestAmbi,
    image: imgSrc2,
    color: "#5C6A1C"
  },
  {
    title: "Dystopian Slums",
    artist: "Ambience of an Concrete Jungle",
    audioSrc: StormAmbi,
    image: imgSrc3,
    color: "#383A43"
  }
];
