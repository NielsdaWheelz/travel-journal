const nums = [1, 2, 3, 4, 5]

const squaredNums = nums.map(function(num) {
    return num * num
})

// let squaredNums = []

// nums.map((num) =>(
//     squaredNums.push(
//         num * num
//     )
// ))

console.log(squaredNums)

// 


const names = ["alice", "bob", "charlie", "dan", "elizabeth"]

const capitalizedNames = names.map(function(name) {
    if (name.length === 0) {
        return "";
    }
    const capitalizedFirstLetter = name.charAt(0).toUpperCase();
    const restOfName = name.slice(1);
    const capitalizedName = capitalizedFirstLetter + restOfName
    return capitalizedName
})

console.log(capitalizedNames)

// 

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]

const htmlWrappedPokemon = pokemon.map((pokemon) => {
    return "<p>" + pokemon + "</p>"
})

console.log(htmlWrappedPokemon)