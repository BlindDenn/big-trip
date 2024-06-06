import dayjs from 'dayjs';

const getRandomInteger = (min, max) => Math.floor(Math.random()*(max - min + 1) + min);

const getRandomBoolean = () => Math.random() < 0.5;

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
const diffTimes = (dateFrom, dateTo) => {
  const dayDiff = dayjs(dateTo).diff(dateFrom, 'd');
  const hourDiff = dayjs(dateTo).diff(dateFrom, 'h') % 24;
  const minuteDiff = dayjs(dateTo).diff(dateFrom, 'm') % 60;

  const normalize = (data) => data.toString().padStart(2, '0');

  switch (true) {
    case !!dayDiff:
      return `${normalize(dayDiff)}D ${normalize(hourDiff)}H ${normalize(minuteDiff)}M`;
    case (!dayDiff && !!hourDiff):
      return `${normalize(hourDiff)}H ${normalize(minuteDiff)}M`;
    default:
      return `${normalize(minuteDiff)}M`;
  }
};

export {
  getRandomInteger,
  getRandomBoolean,
  getRandomItem,
  getSomeItems,
  humanizeEventDate,
  humanizeEventTime,
  diffTimes
};
