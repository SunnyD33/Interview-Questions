function hungryBears(bears) {
  const notYourAverageBear = [];
  const totalHunger = bears.reduce((accumulator, bearsObject) => {
    return accumulator + bearsObject.hunger;
  }, 0);

  const averageHunger = totalHunger / bears.length;

  bears.forEach((bear) => {
    if (bear.hunger > averageHunger) {
      notYourAverageBear.push(bear.name);
    }
  });

  return notYourAverageBear.sort();
}

const bears = [
  { name: "Baloo", hunger: 6 },
  { name: "Yogi", hunger: 9 },
  { name: "Paddington", hunger: 4 },
  { name: "Winnie", hunger: 10 },
  { name: "Chicago", hunger: 20 },
];

console.log(hungryBears(bears));
