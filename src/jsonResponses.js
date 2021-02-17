const jokes = [{ q: 'What do you call a very small valentine?', a: 'A valen-tiny!' },
  { q: 'What did the dog say when he rubbed his tail on the sandpaper?', a: 'Ruff, Ruff!' },
  { q: "Why don't sharks like to eat clowns?", a: 'Because they taste funny!' },
  { q: 'What did the boy cat say to the girl cat?', a: "You're Purr-fect!" },
  { q: "What is a frog's favorite outdoor sport?", a: 'Fly Fishing!' },
  { q: 'I hate jokes about German sausages.', a: 'Theyre the wurst.' },
  { q: 'Did you hear about the cheese factory that exploded in France?', a: 'There was nothing left but de Brie.' },
  { q: 'Our wedding was so beautiful ', a: 'Even the cake was in tiers.' },
  { q: 'Is this pool safe for diving?', a: 'It deep ends.' },
  { q: 'Dad, can you put my shoes on?', a: 'I dont think theyll fit me.' }];

//source: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
const shuffle = (array) => {
  const tempArray = array;
  let currentIndex = tempArray.length;
  let temporaryValue;
  let randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = tempArray[currentIndex];
    tempArray[currentIndex] = tempArray[randomIndex];
    tempArray[randomIndex] = temporaryValue;
  }

  return tempArray;
};

const GetRandomJokeJSON = (limit = 1) => {
  let tempLimit = Number(limit); // cast limit to a number
  tempLimit = !tempLimit ? 1 : tempLimit; // default to 1 if max is not a number (falsy)
  tempLimit = tempLimit < 1 ? 1 : tempLimit; // default to 1 if max is less than 1
  tempLimit = tempLimit > 10 ? 10 : tempLimit; // default to 1 if max is less than 1

  const tempJokes = [];
  shuffle(jokes);
  for (let i = 0; i < tempLimit; i += 1) {
    const number = Math.floor(Math.random() * jokes.length);
    const randJoke = jokes[number];
    tempJokes.push(randJoke);
  }

  //console.log(tempJokes);
  return JSON.stringify(tempJokes);
};

const getRandomJokeResponse = (request, response, params) => {
  response.writeHead(200, { 'Content-Type': 'application/json' }); // send response headers
  response.write(GetRandomJokeJSON(params.limit)); // send content
  response.end(); // close connection
};

module.exports.getRandomJokeResponse = getRandomJokeResponse;
