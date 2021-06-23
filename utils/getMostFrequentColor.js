const getMostFrequentColor = (samples) => {
  let map = new Map();
  let max = 0;
  let maxColor;

  for (let sample of samples) {
    // if we dont have color, add it
    if (!map.has(sample)) {
      map.set(sample, 1);
    } else {
      // else increment count
      map.set(sample, map.get(sample) + 1);
    }

    // update most frequent
    if (map.get(sample) > max) {
      max = map.get(sample);
      maxColor = sample;
    }
  }

  // fallback
  if (maxColor == undefined) {
    maxColor = "#FFFFFF";
  }

  return maxColor;
};

module.exports = {
  getMostFrequentColor,
};
