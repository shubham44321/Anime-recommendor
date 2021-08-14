import "./styles.css";
import React, { useState, useEffect } from "react";

const animeDictionary = {
  shonen: [
    {
      title: "ONE PIECE",
      rating: "8.55 / 10",
      desc: `The series focuses on Monkey D. Luffy, a young man who, inspired by his childhood idol and powerful pirate "Red Haired" Shanks, sets off on a journey from the East Blue Sea to find the titular treasure and proclaim himself the King of the Pirates.`,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl__T8vXefHYCCcuUxi8rFvGT6N9uUwmNtgg&usqp=CAU",
    },
    {
      title: "NARUTO",
      rating: "8.19 / 10",
      desc: `Naruto (Japanese: NARUTO ナルト ) is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village.`,
      img: "https://s3.getstickerpack.com/storage/uploads/sticker-pack/naruto/sticker_13.png?0f814da4bcde05cbaf4ee89855eb9b04&d=200x200",
    },
    {
      title: "Black Clover",
      rating: "8 / 10",
      desc: `Black Clover (Japanese: ブラッククローバー, Hepburn: Burakku Kurōbā) is a Japanese manga series written and illustrated by Yūki Tabata. The story centers around Asta, a young boy born without any magic power. This is unknown to the world he lives in because seemingly everyone has some sort of magic power.`,
      img: "https://pbs.twimg.com/media/EmaRtuLXYAAbaXl.jpg",
    },
    {
      title: "Attack On Titan",
      rating: "8.5 / 10",
      desc: `It is set in a world where humanity lives inside cities surrounded by three enormous walls that protect them from the gigantic man-eating humanoids referred to as Titans; the story follows Eren Yeager, who vows to exterminate the Titans after a Titan brings about the destruction of his hometown and the death of his mother.`,
      img: "https://wallpaperaccess.com/full/1397544.jpg",
    },
    {
      title: "HUNTER X HUNTER",
      rating: "8.41 / 10",
      desc: `The story focuses on a young boy named Gon Freecss who discovers that his father, who left him at a young age, is actually a world-renowned Hunter, a licensed professional who specializes in fantastical pursuits such as locating rare or unidentified animal species, treasure hunting, surveying unexplored enclaves, or hunting down lawless individuals.`,
      img: "https://comicvine1.cbsistatic.com/uploads/original/11128/111289255/6158346-6163096699-gon-g.jpg",
    },
  ],
  shojo: [
    {
      title: "Natsume's Book Of Friends",
      rating: "8.68 / 10",
      desc: `The series is about Natsume, an orphaned teenage boy who can see spirits, who inherits from his grandmother the notebook she used to bind spirits under her control.`,
      img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRByUFu_wLTsS006LGYezlSivXeDMh7KaUtqk3JhCt29ZTXeGgm",
    },
    {
      title: "Vampire Knight",
      rating: "8.45 / 10",
      desc: `Vampire Knight tells the story of Yuki Cross. The earliest thing she remembers is being attacked on a snowy night by a vampire, and being rescued by Kaname Kuran, who is also a vampire. The story takes place 10 years after that event, Yuki is now the adopted daughter of the Headmaster of Cross Academy.
      `,
      img: "https://cdn.myanimelist.net/images/anime/3/7327.webp",
    },
    {
      title: "Banana Fish",
      rating: "8.36 / 10",
      desc: `The story captures the war between a mafia boss named Dino and a young gang leader searching for redemption. * Based on an action shoujo manga by Yoshida Akimi. ... Many years later in New York City, Ash Lynx, a young gang leader, is given a mysterious vial by a dying man whose last words are also 'Banana Fish'.`,
      img: "https://sallyanime.com/wp-content/uploads/2020/09/main200929aki1.jpg",
    },
  ],
  seinen: [
    {
      title: "Monster",
      rating: "8.71 / 10",
      desc: `The story revolves around Kenzo Tenma, a Japanese surgeon living in Düsseldorf, Germany whose life enters turmoil after getting himself involved with Johan Liebert, one of his former patients, who is revealed to be a dangerous serial killer. Monster was Urasawa's first work to receive international acclaim and success.`,
      img: "https://cdn.myanimelist.net/images/anime/10/18793.jpg",
    },
    {
      title: "Tokyo Ghoul",
      rating: "8.0 / 10",
      desc: `The story follows Ken Kaneki, a student who barely survives a deadly encounter with Rize Kamishiro, his date who reveals herself as a ghoul and tries to eat him. ... This was accomplished because some of Rize's organs were transferred into his body, and now, like normal ghouls, he must consume human flesh to survive.`,
      img: "https://cdn.myanimelist.net/images/anime/5/64449.webp",
    },
    {
      title: "Mushishi",
      rating: "8.79 / 10",
      desc: `Mushishi (蟲師) is a Japanese manga series written and illustrated by Yuki Urushibara. ... The series follows Ginko, a man who dedicates himself to keeping people protected from supernatural creatures called Mushi.`,
      img: "https://upload.wikimedia.org/wikipedia/en/3/30/Mushishi%2C_Volume_1.jpg",
    },
  ],
  josei: [
    {
      title: "Nodame Cantabile",
      rating: "8.31 / 10",
      desc: `Nodame Cantabile (Japanese: のだめカンタービレ, Hepburn: Nodame Kantābire) is a Japanese manga series written and illustrated by Tomoko Ninomiya. ... The series depicts the relationship between two aspiring classical musicians, Megumi "Nodame" Noda and Shinichi Chiaki, as university students and after graduation.`,
      img: "https://images-na.ssl-images-amazon.com/images/I/91UFqSBbxdL._RI_.jpg",
    },
    {
      title: "Chihayafuru",
      rating: "8.2 / 10",
      desc: `Plot. Chihaya Ayase is a girl who has spent most of her life simply supporting her sister in her modeling career. That changes when she meets a boy named Arata Wataya, a talented karuta player. After becoming friends, he believes that Chihaya has potential to become a great player.`,
      img: "https://cdn.myanimelist.net/images/anime/3/35749.webp",
    },
    {
      title: "07 Ghost",
      rating: "7.22 / 10",
      desc: `Teito Klein, a student at the academy, is one of the most promising soldiers produced. Although ridiculed by everyone for being a sklave (German for slave) with no memories of his past, he is befriended by a fellow student called Mikage. While preparing for the final exam, Teito uncovers a dark secret related to his past. When an attempt to assassinate Ayanami, a high-ranking official who killed his father, fails, Teito is locked away awaiting punishment.`,
      img: "https://upload.wikimedia.org/wikipedia/en/5/57/07Ghost_vol1_Cover.jpg",
    },
  ],
  kodomomuke: [
    {
      title: "Pokemon",
      rating: "7.43 / 10",
      desc: `An anime series based on the popular Game Boy game "Pocket Monsters" in which children raise a pocket monster and train it to fight other monsters. ... Ash and his friend Pikachu explore the world of pokemon. Ash's goal is to become the greatest pokemon master of all. He competes in regional gyms and championships.`,
      img: "https://cdn.myanimelist.net/images/anime/13/73834.jpg",
    },
    {
      title: "Kiteretsu Daihyakka",
      rating: "7.90 / 10",
      desc: `The series is the story of a scientific inventor boy genius named Eiichi Kite a.k.a. Kiteretsu, descendant of a great inventor named D. Kiteretsu, who has built a companion robot named Korosuke.`,
      img: "https://upload.wikimedia.org/wikipedia/en/d/d2/KiteretsuDaihyakka-vol1.jpg",
    },
    {
      title: "Doraemon",
      rating: "7.71 / 10",
      desc: `Doraemon (Japanese: ドラえもん) is a fictional character in the Japanese manga and anime series of the same name created by Fujiko Fujio, the pen name of writing team Hiroshi Fujimoto and Motoo Abiko. He is a male robotic cat that travels back in time from the 22nd century to aid a preteen boy named Nobita.`,
      img: "https://cdn.myanimelist.net/images/anime/3/3953.jpg",
    },
  ],
};
const genresList = Object.keys(animeDictionary);

export default function App() {
  const [animeList, setAnimeList] = useState([]);
  const getAnimeList = (genre) => {
    setAnimeList(animeDictionary[genre]);
  };
  useEffect(() => {
    getAnimeList("shonen");
  }, []);
  return (
    <div className="App">
      <h1>Anime Recommendor</h1>
      <small>
        Checkout your favourite anime. Select a genre to get started
      </small>
      <div>
        {genresList.map((genre, index) => {
          return (
            <button
              key={index}
              onClick={() => getAnimeList(genre)}
              className="btn-genres"
            >
              {genre}
            </button>
          );
        })}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0px" }}>
          {animeList.map((anime, index) => {
            return (
              <li className="animes" key={index}>
                <div className="wrapper">
                  <div className="one">
                    <img className="img-logo" src={anime.img} alt="" />
                  </div>
                  <div className="two">
                    <span>{anime.title}</span>
                    <hr />
                    <span>{anime.desc}</span>
                    <hr />
                    <span>Ratings : {anime.rating}</span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
