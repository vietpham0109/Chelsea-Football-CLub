"use strict";
/*Close and open the information large window*/
let btn_sir = document.querySelector(".button-sir");
let btn_catona = document.querySelector(".button-catona");
let overlay = document.querySelector(".overlay");
let times = document.querySelector(".toast__times");
let info = document.querySelector(".info-zoom");

const openModal = function () {
  info.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
/*create data structure*/
let legendList = [
  [
    "drogba",
    "Didier Drogba",
    {
      fullname: "Didier Drogba",
      name: "drogba",
      birth: "11/3/1978",
      national: "cote d'ivoire",
      general:
        "Didier Drogba signed for Chelsea from Marseille in 2004 as a big man with a growing reputation. He left eight years later a true legend but returned in 2014 to help the club collect a fourth Premier League title.",
      appearance: 381,
      goal: 164,
      title: {
        premierLeague: 4,
        FaCup: 4,
        FootballCup: 3,
        ChampionLeague: 1,
      },
    },
  ],
  [
    "terry",
    "John Terry",
    {
      fullname: "John Terry",
      name: "terry",
      birth: "7/12/1980",
      national: "england",
      general: `Terry joined at the age of 14, made his debut in 1998 and established himself as a reliable regular in the team by 2001.

      Nobody epitomised the transition between the old and new more than Terry after Roman Abramovich bought the club in 2003. Jose Mourinho appointed him club captain a year later and by the end of Terry’s first season in the role he had lifted the Premier League trophy, the League Cup and the PFA Player of the Year award.`,
      appearance: 703,
      goal: 66,
      title: {
        premierLeague: 5,
        FaCup: 5,
        FootballCup: 3,
        ChampionLeague: 1,
        EuropaLeague: 1,
      },
    },
  ],
  [
    "cole",
    "Ashley Cole",
    {
      fullname: "Ashley Cole",
      name: "cole",
      birth: "20/12/1980",
      national: "england",
      general: `Ashley Cole moved across London from Arsenal in the summer of 2006 when many considered him the best left-back in the world. His Chelsea career did much to support that view.`,
      appearance: 338,
      goal: 7,
      title: {
        premierLeague: 2,
        FaCup: 4,
        FootballCup: 1,
        ChampionLeague: 1,
      },
    },
  ],
  [
    "cech",
    "Petr Cech",
    {
      fullname: "Petr Cech",
      name: "cech",
      birth: "20/05/1982",
      national: "czech",
      general: `Petr Cech enjoyed an 11-year career at Stamford Bridge that comfortably surpasses all our other goalkeepers. He won every major club honour, set a new Chelsea clean-sheet record and became the highest overseas appearance maker in our history.`,
      appearance: 494,
      goal: 228,
      title: {
        premierLeague: 4,
        FaCup: 4,
        FootballCup: 3,
        ChampionLeague: 1,
        EuropaLeague: 1,
      },
    },
  ],
  [
    "lampard",
    "Frank Lampard",
    {
      fullname: "Frank Lampard",
      name: "lampard",
      birth: "20/06/1978",
      national: "england",
      general: `Lampard played a vital role in Chelsea’s remarkable run of trophy successes from 2005 to 2013. His were the goals which sealed the league title for the first time in half a century and he later added an FA Cup final winner at Wembley. He netted in our first Champions League final, was a supreme penalty taker and no one played more games in the league and cup campaigns that yielded the 2010 Double. Lampard jointly lifted European trophies with John Terry in 2012 and 2013, having led the team on the pitch in successive finals `,
      appearance: 648,
      goal: 211,
      title: {
        premierLeague: 3,
        FaCup: 4,
        FootballCup: 2,
        ChampionLeague: 1,
        EuropaLeague: 1,
      },
    },
  ],
  [
    "zola",
    "Gianfranco Zola",
    {
      fullname: "Gianfranco Zola",
      name: "zola",
      birth: "05/07/1966",
      national: "italy",
      general:
        "He quickly charmed everybody, from team-mates to fans to the media, and ended the season as the Football Writers’ Footballer of the Year, the first Chelsea winner and the first to achieve the feat having played less than a full season in English football.",
      appearance: 312,
      goal: 80,
      title: {
        premierLeague: 1,
        FaCup: 2,
        EuropaLeague: 1,
      },
    },
  ],
];
/*=====================
sub-buton(click to show the large window
=======================================*/
let btnSet = document.querySelector(".sub-button");
for (let [legend, fullName, info] of legendList) {
  let btn = document.createElement("DIV");
  btn.classList.add("btn");
  let img = document.createElement("IMG");
  img.setAttribute("src", `assets/pic/btnImage/${legend}.jpg`);
  img.classList.add("btn-image");
  let name = document.createElement("DIV");
  name.classList.add("btn-name");
  name.textContent = `${fullName}`;
  btn.appendChild(img);
  btn.appendChild(name);
  btn.addEventListener("click", function () {
    openModal();
    upload_info(info);
  });
  btnSet.appendChild(btn);
}
const closeModal = function () {
  info.classList.add("hidden");
  overlay.classList.add("hidden");
  deletingtitle();
};

times.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

/*Convert tab between general and title*/
let general = document.querySelector(".general");
let title = document.querySelector(".title");
let iGeneral = document.querySelector(".info-general");
let iTitle = document.querySelector(".info-title");
general.addEventListener("click", function () {
  iTitle.classList.add("hidden");
  title.classList.remove("info-items--background");
  general.classList.add("info-items--background");
  iGeneral.classList.remove("hidden");
});
title.addEventListener("click", function () {
  iGeneral.classList.add("hidden");
  general.classList.remove("info-items--background");
  title.classList.add("info-items--background");
  iTitle.classList.remove("hidden");
});

/*function that make the legend infomation automatically*/
let upload_info = function ({
  fullname,
  name,
  birth,
  national,
  general,
  appearance,
  goal,
  title,
}) {
  /*image*/
  let image = document.querySelector(".image");
  image.setAttribute("src", `assets/pic/LegendName/${name}.png`);
  /*name*/
  let LegendName = document.querySelector(".legend-name");
  LegendName.textContent = `${fullname}`;
  /*birth*/
  let legendBirth = document.querySelector(".legend-birth");
  legendBirth.textContent = `Birth: ${birth}`;
  /*nation*/
  let nation = document.querySelector(".nation-image");
  nation.setAttribute("src", `assets/pic/Nationality/${national}.png`);
  document.querySelector(".nation-name").textContent = `${national}`;
  /*general text*/
  document.querySelector(".general-text").textContent = `${general}`;
  document.querySelector(".appearance").textContent = `${appearance}`;
  document.querySelector(".goal").textContent = `${goal}`;
  /*title*/
  let infoTitle = document.querySelector(".info-title");
  for (let cup of Object.keys(title)) {
    let wrap = document.createElement("P");
    wrap.classList.add("wrap");
    infoTitle.appendChild(wrap);

    for (let i = 0; i < title[cup]; i++) {
      let temp = document.createElement("IMG");
      temp.classList.add("legendCup");
      temp.setAttribute("src", `assets/pic/Cup/${cup}.jpg`);
      wrap.appendChild(temp);
    }
  }
};
/*DELETING ALL THE INFOMATION AUTOMATICALLY;*/
function deletingtitle() {
  let dat = document.querySelectorAll(".wrap");
  for (let p of dat) p.classList.add("hidden");
}
