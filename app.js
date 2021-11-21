const citiesRussia = ["Moscow", "Kazan", "St.Petersburg", "Novosibirsk"]
const citiesEurope = ["Berlin", "Prague", "Paris"]

const citiesRussiaWithPopulation = {
	Moscow: 20,
	SaintPetersburg: 8,
	Kazan: 5,
	Novosibirsk: 3
}
const citiesEuropeWithPopulation = {
	Moscow: 26,
	//перезапишется при спреде с предыдущей константой
	Berlin: 10,
	Praha: 3,
	Paris: 2
}

//Spread
console.log(...citiesRussia)
//получим не массив а набор строк

const allCities = [...citiesRussia, ...citiesEurope]
const allCities = citiesEurope.concat(citiesRussia)
//аналог спреда через конкат

console.log({ ...citiesRussiaWithPopulation, ...citiesEuropeWithPopulation })

//Practice

const numbers = [5, 37, 42, 17]
console.log(Math.max(5, 37, 42, 17))
console.log(Math.max(...numbers))
console.log(Math.max.apply(null, numbers))
//аналогичны

const divs = document.querySelectorAll("div")
const nodes = [...divs]
console.log(nodes)

//Rest
//Синтаксис такой же, отличается в области применения
function sum(a, b, ...rest) {
	console.log(rest)
	//Rest!!!
	return a + b + rest.reduce((a, i) => a + i, 0)
}
//Spread!!
console.log(sum(...numbers))


// const a = numbers[0]
// const b = numbers[1]
//и так далее...

const [a, b, ...other] = numbers
console.log(a, b, other)
//идентичные записи