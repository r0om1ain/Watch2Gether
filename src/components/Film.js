import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Film.css';
import Johnwick from '../assets/JohnWick.jpg'
import Equalizer from '../assets/equalizer.jpeg'
import SW3 from '../assets/sw.png'
import Spiderman from '../assets/Spiderman.jpg'
import Sga from '../assets/sga.png'
import Avg from '../assets/avg.png'
import BlackPanther from '../assets/BlackPanther.jpg'
import HP from '../assets/hp.png'
import Mario from '../assets/Mario.jpg'
import Venom from '../assets/venom.png'


const films = [
  {
    id: 1,
    title: 'John Wick',
    image: Johnwick,
    description: "John Wick a transgressé une règle fondamentale: il a tué à l'intérieur même de l'Hôtel Continental. Excommunié, tous les services liés au Continental lui sont fermés et sa tête est mise à prix. John se retrouve sans soutien, traqué par tous les plus dangereux tueurs du monde.",
    director: 'Chad Stahelski',
    actor:'Keanu Reeves',
    role:"Keanu Reeves:John Wick",
    star:4,
    reviews:[ {
      "author": "Marc Wampach",
      "review": "Un conte moderne bourré de violence hyper graphique, mais puisque que c'est un conte très bien conçu, nous savons en tout temps que ce n'est pas réaliste, nous évitant ainsi de souffrir par empathie. Original, créatif, explosif (!), intéressant et captivant.  Fidèle à son habitude, Keanu est excellent et beau comme un dieu.  Halle Berry est parfaite en Sofia, et les 2 leaders du Continental eux aussi.  Asia Kate Dillon est magnifique et envoutante, comme Anjelica Huston."
    },]
  },
  {
    id: 2,
    title: 'Spiderman',
    image: Spiderman,
    description: "Avec l'identité de Spiderman désormais révélée, celui-ci est démasqué et n'est plus en mesure de séparer sa vie normale en tant que Peter Parker des enjeux élevés d'être un superhéros. Lorsque Peter demande de l'aide au docteur Strange, les enjeux deviennent encore plus dangereux, l'obligeant à découvrir ce que signifie vraiment être Spiderman.",
    director: 'Jon Watts',
    actor:'Tom Holland,Tobey Maguire,Andrew Garfield',
    role:'Tom Holland:Peter Parker,Tobey Maguire:Spider-Man,Andrew Garfield:Spider-Man',
    star:5,
    reviews:[ {
      "author": "Ben Brens",
      "review": "A mon avis ce film est très clairement top 3 dans tout les films Marvel , pour une durée de 2h30 il y a très peu de scènes ennuyantes , je pense que tout les fans de spiderman on ressentis des émotions dingues devant ce film , même si certains pensent qu’il manque ce petit quelque chose en plus (meilleurs décors , scènes dramatiques , combats plus marquants) ils n’auront pas totalement tord , mais sur l’ensemble ce film est une énorme claque pour tout les fans , beaucoup de références aux précédents univers et aux comics , une fin et des scènes post génériques qui nous hype grandement pour les prochains films. Malgré des petits détails manquant ce film est un des meilleurs que j’ai vu de ma vie. Bonne séance à tout ceux qui vont le voir ;)"
    },]
  },
  {
    id: 3,
    title: 'Star Wars 3',
    image:SW3,
    description: "La Guerre des Clones fait rage. Une franche hostilité oppose désormais le Chancelier Palpatine au Conseil Jedi. Anakin Skywalker, jeune Chevalier Jedi pris entre deux feux, hésite sur la conduite à tenir. Séduit par la promesse d'un pouvoir sans précédent, tenté par le côté obscur de la Force, il prête allégeance au maléfique Darth Sidious et devient Dark Vador.Les Seigneurs Sith s'unissent alors pour préparer leur revanche, qui commence par l'extermination des Jedi.",
    director: 'George Lucas',
    actor:'Hayden Christensen,Ewan McGregor',
    role:'Hayden Christensen:Anakin,Ewan McGregor:Obiwan',
    star:5,
    reviews:[ {
      "author": "The Nice Fox",
      "review": "Quel film! Mon préféré parmi toute la saga Star Wars. L'histoire très triste et a la fois touchante d'Obi Wan, joué par Ewan Mc Gregor avec Anakin. De très bon acteurs et une histoire d'amour entre Padmé et Anakin qui vire au cauchemar. Ce film est tout simplement triste mais aussi très beau, j'ai adoré."
    },]
  },
  {
    id: 4,
    title: 'Equalizer',
    image: Equalizer,
    description: "McCall a abandonné un passé mystérieux pour se refaire une nouvelle vie sans histoire. Lorsque McCall rencontre Teri, une jeune femme contrôlée par de violents gangsters russes, il doit l'aider. Armé de talents cachés, McCall retrouve son désir ardent de justice et de vengeance contre ceux qui brutalisent les innocents. Si quelqu'un a un problème, si les chances s'accumulent contre lui, s'il n'a aucun autre recours, McCall sera là. Il est Le justicier.",
    director: 'Antoine Fuqua',
    actor:'Denzel Washington',
    role:'Denzel Washington:McCall',
    star:4,
    reviews: [{"author":"SeptemberGirl", 
    "review":"Un film d’action américain dans lequel Denzel Washington tient la vedette. L’histoire de cet ange vengeur peu explicite sur son passé est entraînante, l'ambiance plaisante et la mise en scène présente un rythme crescendo, du suspense et une esthétique soignée. Une réalisation qui ne révolutionne pas le genre mais qui atteint son objectif et s'impose aisément comme un thriller divertissant et musclé de qualité !"},]
  },
  {
    id: 5,
    title: 'Super Mario Bros,le Film',
    image: Mario,
    description: 'Un plombier nommé Mario parcourt un labyrinthe souterrain avec son frère, Luigi, essayant de sauver une princesse capturée. Adaptation cinématographique du célèbre jeu vidéo.',
    director: 'Aaron Horvath, Michael Jelenic',
    actor:'Chris Pratt,Jack Black,Charlie Day',
    role:'Chris Pratt:Mario,Jack Black:Bowser,Charlie Day:Luigi',
    star:4,
    reviews:[ {
      "author": "Clément Lavielle",
      "review": "Ce film est juste génial! Bon, il y a évidamment du bon gros fan service, mais ça passe tellement bien tant l univers est splendide."
    },]
  },
  {
    id: 6,
    title: 'Harry Potter 3',
    image: HP,
    description: "Sirius Black, un dangereux sorcier criminel, s'échappe de la sombre prison d'Azkaban avec un seul et unique but : se venger d'Harry Potter, entré avec ses amis Ron et Hermione en troisième année à l'école de sorcellerie de Poudlard, où ils auront aussi à faire avec les terrifiants Détraqueurs.",
    director: 'Alfonso Cuarón',
    actor:'Daniel Radcliffe,Emma Watson,Rupert Grint',
    role:'Daniel Radcliffe:Harry Potter,Emma Watson:Hermione,Rupert Grint:Ron',
    star:4,
    reviews: [
      {
        "author": "Julien Coston",
        "review": "C'est mon film préféré. Merci beaucoup de l'avoir réalisé."
      },
      {
        "author": "Irene Penrose",
        "review": "Le film en lui-même est bien, mais décevant après avoir lu le livre. Il omet pas mal de choses qui me semblent importantes et semble faire durer des scènes longtemps (vol avec Buckbeak) sans grand intérêt. La fidélité au livre n’est pas son point fort, mais cinématographiquement c’est très réussi, en particulier les Détraqueurs."
      },
      {
        "author": "Nico ngs",
        "review": "Je trouve le film comme le livre extraordinaire, certes avec quelques différences entre les deux, mais sinon, j'apporte un avis positif à cette œuvre et à cet ouvrage fabuleux créé par J.K Rowling, artiste fabuleuse qui nous a donné ce magnifique monde de magie."
      }
    ]
  },
  {
    id: 7,
    title: 'Avengers End Game',
    image:Avg,
    description: "Le Titan Thanos, ayant réussi à s'approprier les six Pierres d'Infinité et à les réunir sur le Gantelet doré, a pu réaliser son objectif de pulvériser la moitié de la population de l'Univers. Cinq ans plus tard, Scott Lang, alias Ant-Man, parvient à s'échapper de la dimension subatomique où il était coincé. Il propose aux Avengers une solution pour faire revenir à la vie tous les êtres disparus, dont leurs alliés et coéquipiers : récupérer les Pierres d'Infinité dans le passé.",
    director: 'Anthony Russo, Joe Russo',
    actor:'Robert Downey Jr,Chris Hemsworth',
    role:'Robert Downey Jr:Iron Man,Chris Hemsworth:Thor',
    star:5,
    reviews:[ {
      "author": "ANDY RANDRIANANTENAINA",
      "review": "J’avais hâte de voir Avengers: Endgame, le film le plus attendu de l’année 2019, et je n’ai pas regretté. C’est le 22e film de l’univers cinématographique Marvel, et la suite directe de Avengers: Infinity War, qui m’avait bouleversé avec la disparition de la moitié de tous les êtres vivants de l’univers, à cause du claquement de doigts du Titan Thanos."
    },]
  },
  {
    id: 8,
    title: 'Le seigneur des anneaux',
    image: Sga,
    description: "Un jeune et timide hobbit, Frodon Sacquet, hérite d'un anneau magique. Sous ses apparences de simple bijou, il s'agit en réalité d'un instrument de pouvoir absolu qui permettrait à Sauron, le Seigneur des ténèbres, de régner sur la Terre du Milieu et de réduire en esclavage ses peuples. Frodon doit parvenir, avec l'aide de la Communauté de l'Anneau, composée de huit compagnons venus de différents royaumes, jusqu'à la Montagne du Destin pour le détruire.",
    director: 'Peter Jackson',
    actor:'Elijah Wood,Ian McKellen',
    role:'Elijah Wood:Frodon Sacquet,Ian McKellen:Gandalf',
    star:4,
    reviews:[ {
      "author": "Leon Annexe",
      "review": "Une merveille sur terre et je peux vous dire que je n'ai jamais vu de tels films. Une réalisation qui surpasse l'exceptionnel avec des acteurs incroyables."
    },]
  },
  {
    id: 9,
    title: 'Venom : Let There Be Carnage',
    image:Venom,
    description: "Après leur triomphe sur Riot, Eddie Brock et son parasite extraterrestre se sont mis d'accord sur quelques règles de conduite. Alors que Venom préférerait manger des méchants à longueur de temps, Eddie veut maintenant absolument relancer sa carrière de journaliste. Le tueur en série Cletus Kasady, qui souhaite parler à Eddie de ses victimes, arrive alors à point nommé. Lorsque Kasady se transforme en Carnage brutal lors de son exécution et sème le chaos partout, Venom doit intervenir.",
    director: 'Andy Serkis',
    actor:'Tom Hardy, Woody Harrelson',
    role:'Tom Hardy:Venom, Woody Harrelson:Carnage',
    star:4,
    reviews:[ {
      "author": "Chloé DOS SANTOS",
      "review": "Un film génialissime avec des effets spéciaux incroyables avec une suite prometteuse et certainement géniale !C'est LE film de l'année avec bien évidemment Spider-Man: No Way Home et la série Hawkeye qui vont arriver en décembre."
    },]
  },
  {
    id: 10,
    title: 'Black Panther',
    image: BlackPanther,
    description: "Black Panther: Wakanda Forever ou Black Panther : Longue vie au Wakanda au Québec est un film de super-héros américain coécrit et réalisé par Ryan Coogler, sorti en 2022. Il s'agit du trentième film de l'univers cinématographique Marvel et du septième et dernier de la phase IV.",
    director: 'Ryan Coogler',
    actor:"Chadwick Boseman,Michael B. Jordan",
    role:"Chadwick Boseman:Black Panther,Michael B. Jordan:Erik Killmonger",
    star:4,
    reviews:[ {
      "author": "Marko la detail",
      "review": "WAKANDA FOREVER BLACK PANTHER MEILLEUR FILM"
    },]
  },
];

const Film = () => {
  return (
    <div className="film">
      <ul className="liste">
        {films.map((film) => (
          <li key={film.id}>
            <Link to={`/details/${film.id}`}>
              <img src={film.image} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Film;
