const mockList: Array<number> = [];

function exec(list: Array<number>, target: number) {
  for (let i = 1; i < 1000001; i++) {
    mockList.push(i);
  }
  console.time("Search Binary");
  let left: number = 0;
  let right: number = list.length - 1;
  let mid: number;
  //   console.log("list ->> ", list);
  //   console.log("target ->> ", target);
  //   console.log(target);
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    // console.log("----------------------------------");
    // console.log(list);
    // console.log("target ->> ", target);
    // console.log("\n");
    // console.log(" left ->> ", left);
    // console.log(" right ->> ", right);
    // console.log(" mid ->> ", mid);
    // console.log("----------------------------------");
    // console.log("\n");

    if (list[mid] === target) {
      console.timeEnd("Search Binary");
      return { isPresentInArray: true, position: mid, value: list[mid] };
    }
    if (list[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return { isPresentInArray: false };
}

function execWithoutBinarySearch(list: Array<number>, target: number) {
  for (let i = 1; i < 1000001; i++) {
    mockList.push(i);
  }
  console.time("Common iteraction");
  for (let i = 0; i < list.length; i++) {
    if (list[i] === target) {
      console.timeEnd("Common iteraction");
      return { isPresentInArray: true, position: i, value: list[i] };
    }
  }
  return { isPresentInArray: false };
}

console.log(exec(mockList, 985400));

console.log("----------------------------------");

console.log(execWithoutBinarySearch(mockList, 985400));
