function getFlattenArray(nestedArray) {
    let flattenArray = [];

    nestedArray.forEach((nestedElement) => {
        flattenArray = flattenArray.concat(getElements(nestedElement));
    });

    return flattenArray;
}

function getElements() {
    let elements = [];
    const params = Object.values(arguments);

    params.forEach((element) => {
        if (Array.isArray(element)) {
            elements = elements.concat(getElements(...element));
        } else {
            elements.push(element);
        }
    });

    return elements;
}

function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    const length = arr1.length - 1;
    for (let i = 0; i < length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}

// Another possible function to compare arrays
function arraysEqualString(arr1, arr2) {
    return arr1.toString() === arr2.toString();
}

const nestedArray = [1, 2, [3, 4], [[5], [6, 7], 8], 9];

console.log('---------------------');
console.log('Example:');
console.log('Nested Array:');
console.log(nestedArray);
console.log('Flatten Array:');
console.log(getFlattenArray(nestedArray));
console.log('---------------------');
console.log('Unit Test');

// Test
console.log("Simple Array");
const unitTest1Value = [1, 2, 3];
const unitTest1Success = [1, 2, 3];
console.assert(arraysEqual(getFlattenArray(unitTest1Value), unitTest1Success), "Test 1 Error!");

console.log("An array with other array inside");
const unitTest2Value = [1, [2], 3];
const unitTest2Success = [1, 2, 3];
console.assert(arraysEqual(getFlattenArray(unitTest2Value), unitTest2Success), "Test 2 Error!");

console.log("Full nested array");
const unitTest3Value = [1, [2, [3, [4]]], 5];
const unitTest3Success = [1, 2, 3, 4, 5];
console.assert(arraysEqual(getFlattenArray(unitTest3Value), unitTest3Success), "Test 3 Error!");
