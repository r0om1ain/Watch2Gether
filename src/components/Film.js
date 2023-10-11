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
    reviews: 'Critiques pour John Wick.'
  },
  {
    id: 2,
    title: 'Spiderman',
    image: Spiderman,
    description: "Avec l'identité de Spiderman désormais révélée, celui-ci est démasqué et n'est plus en mesure de séparer sa vie normale en tant que Peter Parker des enjeux élevés d'être un superhéros. Lorsque Peter demande de l'aide au docteur Strange, les enjeux deviennent encore plus dangereux, l'obligeant à découvrir ce que signifie vraiment être Spiderman.",
    director: 'Jon Watts',
    actor:'Tom Holland,Tobey Maguire,Andrew Garfield',
    reviews: 'Critiques pour Spiderman.'
  },
  {
    id: 3,
    title: 'Star Wars 3',
    image:SW3,
    description: "La Guerre des Clones fait rage. Une franche hostilité oppose désormais le Chancelier Palpatine au Conseil Jedi. Anakin Skywalker, jeune Chevalier Jedi pris entre deux feux, hésite sur la conduite à tenir. Séduit par la promesse d'un pouvoir sans précédent, tenté par le côté obscur de la Force, il prête allégeance au maléfique Darth Sidious et devient Dark Vador.Les Seigneurs Sith s'unissent alors pour préparer leur revanche, qui commence par l'extermination des Jedi.",
    director: 'George Lucas',
    actor:'Hayden Christensen,Ewan McGregor',
    reviews: 'Critiques pour Spiderman.'
  },
  {
    id: 4,
    title: 'Equalizer',
    image: Equalizer,
    description: "McCall a abandonné un passé mystérieux pour se refaire une nouvelle vie sans histoire. Lorsque McCall rencontre Teri, une jeune femme contrôlée par de violents gangsters russes, il doit l'aider. Armé de talents cachés, McCall retrouve son désir ardent de justice et de vengeance contre ceux qui brutalisent les innocents. Si quelqu'un a un problème, si les chances s'accumulent contre lui, s'il n'a aucun autre recours, McCall sera là. Il est Le justicier.",
    director: 'Antoine Fuqua',
    actor:'Denzel Washington',
    reviews: 'Critiques pour Equalizer.'
  },
  {
    id: 5,
    title: 'Super Mario Bros,le Film',
    image: Mario,
    description: 'Un plombier nommé Mario parcourt un labyrinthe souterrain avec son frère, Luigi, essayant de sauver une princesse capturée. Adaptation cinématographique du célèbre jeu vidéo.',
    director: 'Aaron Horvath, Michael Jelenic',
    actor:'Chris Pratt,Jack Black,Charlie Day',
    reviews: 'Critiques pour Mario .'
  },
  {
    id: 6,
    title: 'Harry Potter 3',
    image: HP,
    description: "Sirius Black, un dangereux sorcier criminel, s'échappe de la sombre prison d'Azkaban avec un seul et unique but : se venger d'Harry Potter, entré avec ses amis Ron et Hermione en troisième année à l'école de sorcellerie de Poudlard, où ils auront aussi à faire avec les terrifiants Détraqueurs.",
    director: 'Alfonso Cuarón',
    actor:'Daniel Radcliffe,Emma Watson,Rupert Grint',
    reviews: 'Critiques pour Harry Potter.'
  },
  {
    id: 7,
    title: 'Avengers End Game',
    image:Avg,
    description: "Le Titan Thanos, ayant réussi à s'approprier les six Pierres d'Infinité et à les réunir sur le Gantelet doré, a pu réaliser son objectif de pulvériser la moitié de la population de l'Univers. Cinq ans plus tard, Scott Lang, alias Ant-Man, parvient à s'échapper de la dimension subatomique où il était coincé. Il propose aux Avengers une solution pour faire revenir à la vie tous les êtres disparus, dont leurs alliés et coéquipiers : récupérer les Pierres d'Infinité dans le passé.",
    director: 'Anthony Russo, Joe Russo',
    actor:'Robert Downey Jr,Chris Hemsworth',
    reviews: 'Critiques pour Spiderman.'
  },
  {
    id: 8,
    title: 'Le seigneur des anneaux',
    image: Sga,
    description: "Un jeune et timide hobbit, Frodon Sacquet, hérite d'un anneau magique. Sous ses apparences de simple bijou, il s'agit en réalité d'un instrument de pouvoir absolu qui permettrait à Sauron, le Seigneur des ténèbres, de régner sur la Terre du Milieu et de réduire en esclavage ses peuples. Frodon doit parvenir, avec l'aide de la Communauté de l'Anneau, composée de huit compagnons venus de différents royaumes, jusqu'à la Montagne du Destin pour le détruire.",
    director: 'Peter Jackson',
    actor:'Elijah Wood,Ian McKellen',
    reviews: 'Critiques pour Spiderman.'
  },
  {
    id: 9,
    title: 'Venom : Let There Be Carnage',
    image:Venom,
    description: "Après leur triomphe sur Riot, Eddie Brock et son parasite extraterrestre se sont mis d'accord sur quelques règles de conduite. Alors que Venom préférerait manger des méchants à longueur de temps, Eddie veut maintenant absolument relancer sa carrière de journaliste. Le tueur en série Cletus Kasady, qui souhaite parler à Eddie de ses victimes, arrive alors à point nommé. Lorsque Kasady se transforme en Carnage brutal lors de son exécution et sème le chaos partout, Venom doit intervenir.",
    director: 'Andy Serkis',
    actor:'Tom Hardy, Woody Harrelson',
    reviews: 'Critiques pour Venom 2'
  },
  {
    id: 10,
    title: 'Black Panther',
    image: BlackPanther,
    description: "Black Panther: Wakanda Forever ou Black Panther : Longue vie au Wakanda au Québec est un film de super-héros américain coécrit et réalisé par Ryan Coogler, sorti en 2022. Il s'agit du trentième film de l'univers cinématographique Marvel et du septième et dernier de la phase IV.",
    director: 'Ryan Coogler',
    actor:"Chadwick Boseman, T'Challa, Michael B. Jordan",
    reviews: 'Critiques pour Black Panther'
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
