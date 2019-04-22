/*****************************************************************************************
 * Part 2
 ****************************************************************************************/
var employees = [
  { first: "Amanda", last: "Byron", group: "Sales" },
  { first: "Ye", last: "Xia", group: "Receiving", nameOrder: "reverse" },
  { first: "Miltiades", last: "Crescens", group: "Sales" }
  /*...don't foget to account for other entries of the same form, but with different group names.....*/
];

var employees2 = [
  { first: "Amanda", last: "Byron", group: "Sales" },
  { first: "Ye", last: "Xia", group: "Receiving", nameOrder: "reverse" },
  { first: "Miltiades", last: "Crescens", group: "Sales" },
  { first: "Simon", last: "Ribs", group: "Beta" },
  { first: "Bob", last: "Lob", group: "Law", nameOrder: "forward" },
  { first: "Chicken", last: "Soup", group: "Charlie" },
  { first: "Bob", last: "Lob", group: "Law", nameOrder: "reverse" },
  { first: "Lucy", last: "Smith", group: "Alpha" }
  /*...don't foget to account for other entries of the same form, but with different group names.....*/
];

function triggerAnswer() {
  document.querySelector("#employees_original").innerHTML = JSON.stringify(employees);
  document.querySelector("#employees_processed").innerHTML = JSON.stringify(processEmployees(employees));
}

function triggerAltAnswer() {
  document.querySelector("#employees_original").innerHTML = JSON.stringify(employees2);
  document.querySelector("#employees_processed").innerHTML = JSON.stringify(processEmployees(employees2));
}

function sortObject(o) {
  return Object.keys(o)
    .sort()
    .reduce((r, k) => ((r[k] = o[k]), r), {});
}
// Part 2 Answer Here
function processEmployees(data) {
  const output = {};
  for (let i = 0; i < data.length; i++) {
    const id = data[i].group.toLowerCase();
    if (!output[id]) output[id] = [];
    output[id].push(processName(data[i]));
  }
  return sortObject(output);
}

function processName(person) {
  return person.nameOrder && person.nameOrder === "reverse"
    ? `${person.last} ${person.first}`
    : `${person.first} ${person.last}`;
}

(function() {
  document.querySelector("#employees_original").innerHTML = JSON.stringify(employees);
})();
