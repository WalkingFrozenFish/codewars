// Kata 29 - The Wide-Mouthed frog!
function mouthSize(animal) {
    let regex = /alligator/gi
    if (animal.match(regex)) {
        console.log("small")
        return "small"
    } else {
        console.log("wide")
        return "wide"
    }
}


mouthSize("toucan") // "wide"
mouthSize("ant bear") // "wide"
mouthSize("alligator") // "small"