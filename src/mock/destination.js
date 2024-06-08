import {
  getRandomItem,
  getSomeItems
} from '../utils.js';

const IMGS_PATH = '/img/photos/';

const IMG_FILES = [
  {
    'name': '1.jpg',
    'description': 'Lorem ipsum dolor.'
  },
  {
    'name': '2.jpg',
    'description': 'Sit amet consectetur.'
  },
  {
    'name': '3.jpg',
    'description': 'Adipisicing elit.'
  },
  {
    'name': '4.jpg',
    'description': 'Omnis alias earum.'
  },
  {
    'name': '5.jpg',
    'description': 'Deserunt commodi tempora.'
  },
];

const DESTINATION = [
  {
    'name': 'Chamonix',
    'description': 'Chamonix-Mont-Blanc (usually shortened to Chamonix) is a resort area near the junction of France,  Switzerland and Italy. At the base of Mont Blanc, the highest summit in the Alps, it\'s renowned for its skiing.'
  },
  {
    'name': 'Amsterdam',
    'description': 'Amsterdam (usually shortened to Dam) is a resort area near the junction of France, Switzerland and Italy. At the base of Mont Blanc, the highest summit in the Alps, it\'s renowned for its doping.'
  },
  {
    'name': 'Geneva',
    'description': 'Geneva is a resort area near the junction of France, Switzerland and Italy. At the base of Mont Blanc, the highest summit in the Alps, it\'s renowned for its banking.'
  },
  {
    'name': 'Syzran\'',
  }
];

const addPhotos = () => {
  const result = [];
  getSomeItems(IMG_FILES).forEach((element) => {
    result.push({'src': `${IMGS_PATH}${element.name}`, 'description': element.description});
  });
  return result;
};

DESTINATION.forEach((item) => {item.pictures = addPhotos();});


export const generateDestination = () => {
  const {name, description, pictures} = getRandomItem(DESTINATION);
  return {
    'description': description,
    'name': name,
    'pictures': pictures,
  };

};

export const getDestinations = () => DESTINATION;
