const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
const large = new Array(100).fill('nemo');

function findNemo(array) {
    // This is a way to check how fast it will take for this function to run.
    // let t0 = performance.now();
    for (let i = 0; i < array.length; i++) {
        console.log('running');
        if (array[i] === 'nemo') {
            console.log('Found Nemo!');
            break;
        }
        // if (array.includes('nemo')) {
        //     console.log('find nemo!');
        // }
    }
    // A way to compare t0 - t1.
    // let t1 = performance.now();
    // console.log('Call to find Nemo took ' + (t1-t0) + ' milliseconds')
}

findNemo(everyone);

// Big O Notation - O(n) --> Linear Time 
// Big O Notation - O(1) --> Constant Time

const boxes = [0, 1, 2, 3, 4, 5];

function logFirstTwoBoxes(boxes) {
    // Two orders of operations
    console.log(boxes[0]); // O(1)
    console.log(boxes[1]); // O(2)
}

logFirstTwoBoxes(boxes); // O(2)

// What is the Big O of the below function? (Hint, you may want to go line by line)

function funChallenge(input) {
  let a = 10; // O(1)
  a = 50 + 3; // O(1)

  for (let i = 0; i < input.length; i++) { // O(n)
    anotherFunction(); // O(n)
    let stranger = true; // O(n)
    a++; // O(1)
  }
  return a; // O(n)
}

// Big O Notation - O(n)
// It's O(n) because you are only using one operation to go through the loop. 

// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
  let a = 5; // O(1)
  let b = 10; // O(1)
  let c = 50; // O(1)
  for (let i = 0; i < input; i++) { // O(n)
    let x = i + 1; // O(n)
    let y = i + 2; // O(n)
    let z = i + 3; // O(n)

  }
  for (let j = 0; j < input; j++) { // O(n)
    let p = j * 2; // O(n)
    let q = j * 2; // O(n)
  }
  let whoAmI = "I don't know"; // O(1)
}

// BIG O(4 + 5N) BIG O(4 + 7N) if we count the for-loops
// O(n);

function printFirstItemThenFirstHalfThenSayHi100Times(items) {
	console.log(items[0]);

	var middleIndex = Math.floor(items.length / 2);
	var index = 0;
    
    // If the middleIndex is largere than the index
	while (index < middleIndex) {
        // console log the items[index]
		console.log(items[index]);
        // And add to the index
		index++;
	}
    // loop through 100
	for (var i = 0; i < 100; i++) {
		console.log('hi');
	}
}

// O(n);