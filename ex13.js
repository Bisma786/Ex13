// Q:13 Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var Favtransportation = [];
Favtransportation.push(["Motorbike", "Crown"]);
Favtransportation.push(["Car", "Revo"]);
Favtransportation.push(["Aiplane", "Emirates Airlines"]);
// console.log(Favtransportation)
Favtransportation.forEach(function (_a) {
    var transport = _a[0], brand = _a[1];
    console.log("I would like to own a ".concat(brand, " ").concat(transport));
});
