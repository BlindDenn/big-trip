import dayjs from 'dayjs';

const getRandomBoolean = () => Math.random() < 0.5;

// const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);
const shuffleArray = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const getRandomItem = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

const getSomeItems = (arr) => {
  const result = [];
  arr.map((item) => {
    if (getRandomBoolean()) {
      result.push(item);
    }
  });
  return shuffleArray(result);
};

const humanizeEventDate = (date) => dayjs(date).format('MMM D');
const humanizeEventTime = (date) => dayjs(date).format('HH:mm');

export {
  getRandomBoolean,
  getRandomItem,
  getSomeItems,
  humanizeEventDate,
  humanizeEventTime
};
