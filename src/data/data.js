import Ohmyfood from './../assets/images/website-ohmyfood.png';
import Lespetitsplats from './../assets/images/website-lespetitsplats.png';
import Kasa from './../assets/images/website-kasa.png';
import Argentbank from './../assets/images/website-argentbank.png';
import Sportsee from './../assets/images/website-sportsee.png';
import Fisheye from './../assets/images/website-fisheye.png';
import ReactLogo from './../assets/logo/react-logo.png';
import JsLogo from './../assets/logo/JavaScript-logo.png';
import SassLogo from './../assets/logo/sass.png';
import CssLogo from './../assets/logo/css.png';
import HtmlLogo from './../assets/logo/html.png';
import ReduxLogo from './../assets/logo/redux.png';

const DATA = [
  {
    id: 1,
    image: Sportsee,
    title: 'SPORTSEE',
    description: `SportSee, une startup dédiée au coaching sportif, veut lancer une nouvelle version de la page profil de l’utilisateur. Cette page va notamment permettre à l’utilisateur de suivre le nombre de sessions réalisées ainsi que le nombre de calories brûlées.`,
    technologie: [HtmlLogo, CssLogo, JsLogo, ReactLogo],
  },
  {
    id: 2,
    image: Kasa,
    title: 'KASA',
    description: `Développer une application React, ses composants ainsi que les routes React Router, en suivant les maquettes Figma (responsives) pour un site de location d'appartements entre particuliers.`,
    technologie: [HtmlLogo, CssLogo, JsLogo, ReactLogo],
  },
  {
    id: 3,
    image: Argentbank,
    title: 'ARGENTBANK',
    description: `Le projet concerne une nouvelle banque qui démarre, Argent Bank, qui essaie de percer dans le secteur et qui a besoin d'aide pour mettre en place son application.`,
    technologie: [HtmlLogo, CssLogo, JsLogo, ReactLogo, ReduxLogo],
  },
  {
    id: 4,
    image: Lespetitsplats,
    title: 'LES PETIS PLATS',
    description: `Après avoir édité des livres de cuisine pendant plusieurs années, l’entreprise a décidé de se lancer dans un nouveau projet : réaliser son propre site de recettes de cuisine à l’instar de Marmiton ou 750g.`,
    technologie: [HtmlLogo, SassLogo, JsLogo],
  },
  {
    id: 5,
    image: Fisheye,
    title: 'FISHEYE',
    description:
      'FishEye est un site web qui permet aux photographes indépendants de présenter leurs meilleurs travaux. Ils ont récemment levé des fonds et aimeraient mettre à jour leur site web.',
    technologie: [HtmlLogo, CssLogo, JsLogo],
  },
  {
    id: 6,
    image: Ohmyfood,
    title: 'OHMYFOOD!',
    description: `Développer un site “mobile first” qui répertorie les menus de restaurants gastronomiques.`,
    technologie: [HtmlLogo, SassLogo],
  },
];

export default DATA;
