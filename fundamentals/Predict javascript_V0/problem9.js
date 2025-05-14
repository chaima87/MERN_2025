const planet = {
	name:"Jupiter",
	milesFromSun: 49849,
	mass: 393983,
            composition: ["gas", "liquid", "oxygen"]
}
const planetCopy = {...planet}
console.log(planet.composition[0] === planetCopy.composition[0]) 
console.log(planet === planetCopy)

// output:
true
false

The first comparison (planet.composition[0] === planetCopy.composition[0]) is true because both planet.composition and planetCopy.composition 
point to the same array in memory, and the first element ("gas") is identical in both places.

The second comparison (planet === planetCopy) is false because planet and planetCopy are two distinct objects 
in memory, even though they contain the same data.