const title = document.querySelector('.quote')
const names = document.querySelector('.author')
const house = document.querySelector('.house')


document.querySelector('.got').addEventListener('click', generateQuote);


async function generateQuote() {

    let res = await fetch('https://game-of-thrones-quotes.herokuapp.com/v1/random')
    let data = await res.json()
    appendData(data)

}


function appendData(data) {

    title.innerHTML = data.sentence

    names.innerHTML = `${data.character.name}`
    house.innerHTML = `${data.character.house.name}`

    // document.querySelector('.body').appendChild(names)
    // document.querySelector('.body').appendChild(house)



}