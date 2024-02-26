// Q:13 Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let Favtransportation:Array<[transport:string, brand:string]>=[]
Favtransportation.push(["Motorbike", "Crown"])
Favtransportation.push(["Car", "Revo"])
Favtransportation.push(["Aiplane", "Emirates Airlines"])
// console.log(Favtransportation)
Favtransportation.forEach(([transport, brand]) => {console.log(`I would like to own a ${brand } ${transport}`)})
