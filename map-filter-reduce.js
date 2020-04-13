// map
const myArray = [1, 2, 3, 4];
const myArrayTimesTwo = myArray.map((value, index, array) => {
  return value * 2;
});

console.log(myArray);
console.log(myArrayTimesTwo);

console.log('---')
const songs = [
  { id: 1, name: "Curl of the Burl", artist: "Mastodon", duration: 204 },
  { id: 2, name: "Oblivion", artist: "Mastodon", duration: 306 },
  { id: 3, name: "Flying Whales", artist: "Gojira", duration: 444 },
  { id: 4, name: "L'Enfant Sauvage", artist: "Gojira", duration: 246 }
];

var allSongNames = songs.map(function (song) {
  return song.name;  
});

// ES6
const allSongNames1 = songs.map(song1 => {
  return song1.name;
});

console.log(allSongNames1); // ["Curl of the Burl","Oblivion","Flying Whales","L'Enfant Sauvage"];

console.log('---')
const mySongFunc = function(song) {
  return song.name.toLowerCase();
};

// ES6
const mySongFunc1 = song1 => {
  return song1.name.toLowerCase();
};

const lowerCaseSongs = songs.map(mySongFunc1);

console.log(lowerCaseSongs); // ["curl of the burl","oblivion","flying whales","l'enfant sauvage"];

console.log('---')
// var mapped = songs.map(function (song) {
//   // using _.omit we remove the artist property
//   // don't use delete because it mutates the song object
//   // while _.omit creates a new one
//   var newSong = _.omit(song, "artist");
  
//   return Object.assign(newSong, {
//     scrobbleCount: 0,
//     spotifyUrl: "let's just imagine these properties make sense for now",
//   });
// });

// ES6
const mapped1 = songs.map(song => {
  // let's remove the artist property
  const { artist, duration, ...rest } = song;
  
  return {
     ...rest,
    scrobbleCount: 0,
    spotifyUrl: "let's just imagine these properties make sense for now",
  };
});

console.log(mapped1);

console.log('--- Filter')
// filter
const myArrayF = [1,2,3,4,5,6,7,8,9,10];

// const EvenArray = myArrayF.filter(function (num) {
//   return num % 2 === 0;
// });

// ES6
const evenNumbers = myArrayF.filter(num => {
  return num % 2 === 0
});

console.log(evenNumbers); // [2,4,6,8,10];

// Filter receives the same arguments as map, and works very similarly.
// The only difference is that the callback needs to return either true or false.
// If it returns true then the array keeps that element and
// if it returns false the element is filtered out.

console.log('---')
const strings = ["hello", "Matt", "Mastodon", "Cat", "Dog"];

// var filtered = strings.filter(function (str) {
//   return str.includes("at");
// });

// ES6
const filtered = strings.filter(str => {
  return str.includes("at");
});

console.log(filtered); // ["Matt", "Cat"];

console.log('---')
// var mastodonSongs = songs.filter(function (song) {
//   return song.artist.toLowerCase() === "mastodon";
// });

// ES6
const mastodonSongs = songs.filter(song => {
  return song.artist.toLowerCase() === "mastodon";
});

console.log(mastodonSongs);

console.log('--- Reduce')
const numbers = [2,10,11,5,16];

// var sum = numbers.reduce(function (acc, currValue) {
//   return acc + currValue;
// }, 0);

// ES6
const sum = numbers.reduce((acc, currValue, currIndex, array) => {
  return (acc + currValue);
}, 0);
const avg = sum / numbers.length;
console.log(sum, avg);

console.log('---')
// var obj = songs.reduce(function (acc, currValue) {
//   var artist = currValue.artist;
//   var artistCount = acc[artist] ? acc[artist] + 1 : 1;
  
//   var newObj = {};
//   newObj[artist] = artistCount;
  
//   return Object.assign(acc, newObj);
// }, {});

// ES6
const artistSongCount = songs.reduce((acc, currValue) => {
  const artist = currValue.artist;
  const artistCount = acc[artist] ? acc[artist] + 1 : 1;

  return {
    ...acc,
    [artist]: artistCount,
  };
}, {});

console.log(artistSongCount); // {Mastodon: 2, Gojira: 2}

console.log('---')
const mult = [songs, [{id: 112, name: "Chop Suey", artist: "System of a Down" }]];

// var flatMult = mult.reduce(function (acc, currValue) {
//   return acc.concat(currValue);
// }, []);

// ES6
const flatMult = mult.reduce((acc, currValue) => {
  return acc.concat(currValue);
}, []);

console.log(flatMult);

console.log('--- Using reduce, filter and map')
const spotifySongs = [
  { id: 1, name: "Curl of the Burl", artist: "Mastodon", duration: 204 },
  { id: 2, name: "Oblivion", artist: "Mastodon", duration: 306 },
  { id: 3, name: "Flying Whales", artist: "Gojira", duration: 444 },
  { id: 4, name: "L'Enfant Sauvage", artist: "Gojira", duration: 246 }
];

const lastFmSongs = [
  { id: 5, name: "Chop Suey", artist: "System of a Down", duration: 192 },
  { id: 6, name: "Throne", artist: "Bring me the Horizon", duration: 186 },
  { id: 7, name: "Destrier", artist: "Agent Fresco", duration: 132 },
  { id: 8, name: "Out of the Black", artist: "Royal Blood", duration: 240 }
];

const allSongs = [spotifySongs, lastFmSongs];
console.log(allSongs);

// Let's reduce the array of arrays into a single one
const songNames = allSongs.reduce((acc, currValue) => {
  return acc.concat(currValue);
}, [])
// Let's map it out with the seconds turned into minutes 
.map(song => {
  return { ...song, duration: Math.floor(song.duration / 60) };
})
// Let's filter the ones under 3 minutes
.filter(song => {
  return song.duration > 3;
})
// Now let's map out the song names the quick way
.map(song => song.name).join(" , ");

console.log(songNames); // Oblivion , Flying Whales , L'Enfant Sauvage , Out of the Black
