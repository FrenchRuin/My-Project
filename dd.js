const trap = function (num) {
  let height = 0;

  for (let i = 1; i < num.length - 1; i++) {
    let left = num.slice(0, i);
    let right = num.slice(i, num.length);

    let bound = Math.min(left, right);

    height += Math.max(0, bound - num[i]);

  }
  return height;
}


const arr = [0, 3, 0, 0, 2, 0, 4];
const asd = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
console.log(trap(asd))