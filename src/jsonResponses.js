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

const GetRandomJokeJSON = () => {
  const number = Math.floor(Math.random() * jokes.length);
  const randJoke = jokes[number];
  return JSON.stringify(randJoke);
};

const getRandomJokeResponse=(request, response)=>{
    response.writeHead(200, { 'Content-Type': 'application/json' }); // send response headers
    response.write(GetRandomJokeJSON()); // send content
    response.end(); // close connection
};

module.exports.getRandomJokeResponse=getRandomJokeResponse;