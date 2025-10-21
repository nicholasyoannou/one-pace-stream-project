import { Libre_Franklin, Open_Sans, Lato, Josefin_Sans } from "next/font/google";

// USED BEFORE V2 NAVBAR
export const belowlogo = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export const headinglanding = Libre_Franklin({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});
export const startwatchingbutton = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});
// END USED BEFORE V2 NAVBAR

// FOR V2 NAVBAR
export const navBarDestsLeft = Lato({
  subsets: ["latin"],
  weight: ["400", "300", "400", "700", "900"],
});
// END FOR V2 NAVBAR

// Used for footer
export function year() {
  const date = new Date();
  const year = date.getFullYear();
  return <>{year}</>;
}

export const apiRootURL = "http://localhost:3000";

// Used for landing page
export const arcImages = [
  "01RomanceDawngabingus.png",
  "02OrangeTownGK.jpg",
  "03SyrupVillagegabingus.png",
  "04GaimonGK.jpg",
  "05Baratiegabingus.png",
  "06ArlongParkGK.jpg",
  "08LogueTowngabingus.png",
  "09ReverseMountaingabingus.png",
  "10WhiskyPeakgabingus.png",
  "12LittleGardenPP.PNG",
  "13DrumIslandPP.png",
  "14Arabastagabingus.png",
  "15JayaPP.png",
  "16SkypieaPP.png",
  "17LongRingLongLandPP.PNG",
  "18WaterSevenPP.PNG",
];

export const arcData = [
  {
    arcTitle: "Romance Dawn",
    arcDescription: "NA",
    arcCover: "01RomanceDawngabingus.png",
    altCover: "01RomanceDawn.png",
    arcSlug: "romance-dawn",
  },
  {
    arcTitle: "Orange Town",
    arcDescription: "NA",
    arcCover: "02OrangeTownGK.jpg",
    altCover: "02OrangeTown.png",
    arcSlug: "orange-town",
  },
  {
    arcTitle: "Syrup Village",
    arcDescription: "NA",
    arcCover: "03SyrupVillagegabingus.png",
    altCover: "03SyrupVillage.png",
    arcSlug: "syrup-village",
  },
  {
    arcTitle: "Gaimon",
    arcDescription: "NA",
    arcCover: "04GaimonGK.jpg",
    altCover: "04Gaimon.png",
    arcSlug: "gaimon",
  },
  {
    arcTitle: "Baratie",
    arcDescription: "NA",
    arcCover: "05Baratiegabingus.png",
    altCover: "05Baratie.png",
    arcSlug: "baratie",
  },
  {
    arcTitle: "Arlong Park",
    arcDescription: "NA",
    arcCover: "06ArlongParkGK.jpg",
    altCover: "06ArlongPark.png",
    arcSlug: "arlong-park",
  },
  {
    arcTitle: "The Adventures of Buggy's Crew",
    arcDescription: "NA",
    altCover: "07TheAdventuresOfBuggysCrew.png",
  },
  {
    arcTitle: "Logue Town",
    arcDescription: "NA",
    arcCover: "08LogueTowngabingus.png",
    altCover: "08LogueTown.png",
    arcSlug: "logue-town",
  },
  {
    arcTitle: "Reverse Mountain",
    arcDescription: "NA",
    arcCover: "09ReverseMountaingabingus.png",
    altCover: "09ReverseMountain.png",
    arcSlug: "reverse-mountain",
  },
  {
    arcTitle: "Whisky Peak",
    arcDescription: "NA",
    arcCover: "10WhiskyPeakgabingus.png",
    altCover: "10WhiskyPeak.png",
    arcSlug: "whisky-peak",
  },
  {
    arcTitle: "The Trials of Koby-Meppo",
    arcDescription: "NA",
    arcCover: "11KobyMeppoGK.jpg",
    altCover: "11TheTrialsofKobyMeppo.png",
    arcSlug: "the-trials-of-koby-meppo",
  },
  {
    arcTitle: "Little Garden",
    arcDescription: "NA",
    arcCover: "12LittleGardenPP.PNG",
    altCover: "12LittleGarden.png",
    arcSlug: "little-garden",
  },
  {
    arcTitle: "Drum Island",
    arcDescription: "NA",
    arcCover: "13DrumIslandPP.png",
    altCover: "13DrumIsland.png",
    arcSlug: "drum-island",
  },
  {
    arcTitle: "Alabasta",
    arcDescription: "NA",
    arcCover: "14Arabastagabingus.png",
    altCover: "14Arabasta.png",
    arcSlug: "alabasta",
  },
  {
    arcTitle: "Jaya",
    arcDescription: "NA",
    arcCover: "15JayaPP.png",
    altCover: "15Jaya.png",
    arcSlug: "jaya",
  },
  {
    arcTitle: "Skypiea",
    arcDescription: "NA",
    arcCover: "16SkypieaPP.png",
    altCover: "16Skypiea.png",
    arcSlug: "skypiea",
  },
  {
    arcTitle: "Long Ring Long Land",
    arcDescription: "NA",
    arcCover: "17LongRingLongLandPP.PNG",
    altCover: "17LongRingLongLand.png",
    arcSlug: "long-ring-long-land",
  },
  {
    arcTitle: "Water Seven",
    arcDescription: "NA",
    arcCover: "18WaterSevenPP.PNG",
    altCover: "18WaterSeven.png",
    arcSlug: "water-seven",
  },
];
