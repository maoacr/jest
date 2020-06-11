const cities = [
  "Bogotá",
  "Lima",
  "Buenos Aires",
  "Guadalajara",
  "Fusagasugá",
  "Pasca",
  "Chinauta",
];

const randomString = () => {
  const string = cities[Math.floor(Math.random() * cities.length)];
  return string;
};

module.exports = randomString;
