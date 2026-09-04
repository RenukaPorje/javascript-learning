const houseA = { rooms: 3, color: "blue" };
const houseB = { rooms: 3, color: "blue" }; // separate object, identical-looking content
const houseC = houseA; // NOT a new object — just another name for the SAME address as houseA

console.log(houseA === houseB); // false — different addresses, even though content looks identical
console.log(houseA === houseC); // true — literally the same object, same address

const expectedResponse = { status: 200, body: "success" };
const actualResponse = { status: 200, body: "success" };

function deepEqual(objA, objB) {
  // comparing each PRIMITIVE property individually with === works fine —
  // === only breaks down on whole objects, not on the primitive values inside them
  return objA.status === objB.status && objA.body === objB.body;
}

console.log(expectedResponse === actualResponse); // whole-object comparison — reference check
console.log(deepEqual(expectedResponse, actualResponse)); // property-by-property — value check
