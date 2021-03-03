/*
  The voyagers decide that they quite like this planet, and some of them want to settle there and colonise it.
  They call the planet "Alpha" and they decide that the FAMILIES whose last names start with 'A' should stay,
  while the others go on in search of other planets to call home.

  Create a function that returns an array of colonisers that will stay, according to the above rules.

  NOTE: don't include any element that is not a "family".
*/
const voyagers = [
  "Adam family",
  "Potter family",
  "Eric",
  "Aldous",
  "Button family",
  "Jude",
  "Carmichael",
  "Bunny",
  "Asimov",
  "Oscar family",
  "Avery family",
  "Archer family"
];

function colonisers(arr) {
   let result = arr.filter(item => (item.includes('family') && item[0] === 'A') );
    return result;
  }
     console.log(colonisers(voyagers))

/* ======= TESTS - DO NOT MODIFY ===== */
function test(test_name, actual, expected) {
    let status;
    if (actual, expected) {
        status = "PASSED";
    } else {
        status = `FAILED: expected: ${expected} but your function returned: ${actual}`;
    }
    console.log(`${test_name}: ${status}`);
}
test(
  "colonisers function works",
  colonisers(voyagers),
  ["Adam family", "Avery family", "Archer family"]
)
