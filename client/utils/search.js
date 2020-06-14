import Fuse from "fuse.js";

async function fetchMatches(tutorialsArray) {
  return new Fuse(tutorialsArray, options);
}

const options = {
  includeScore: true,
  shouldSort: true,
  includeMatches: true,
  threshold: 0.1,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: [
    {
      name: "title",
      weight: 0.3,
    },
    {
      name: "tags",
      weight: 0.7,
    },
  ],
};

export default fetchMatches;
