const coffeeContainer = document.querySelector('main')

function setLoading() {
coffeeContainer.innerHTML = ''    //Erase everything in Main - all the children are gone
const h2 = document.createElement('h2') 
const loading = document.createTextNode('Loading...')
h2.appendChild(loading) //Go to the h2 and take and add to the end - add another child
coffeeContainer.appendChild(h2)
} //We are creating an h1 tag

function displayCoffeeList(coffeeList) {
    coffeeContainer.innerHTML = ''  
    coffeeList.map(coffee => {  //Take my list of coffees 
        const card = document.createElement('div') //Let's create a div
        //const img = document.createElement('img')
        const title = document.createElement('h3') //Put the title 
        const description = document.createElement('p') //The p list the description
        title.appendChild(document.createTextNode(coffee.title)) //Let's handle the inside first
        description.appendChild(document.createTextNode(coffee.description)) //Stick black inside the h3 then get coffee yo into the p tag 
        card.appendChild(title) //Stick title in the const card
        card.appendChild(description) //Stick description inside the card 
        coffeeContainer.appendChild(card) //Go to our coffee container is main and to stick the card in it 
    }) //when we want to go through the whole array

}


function getCoffee(temp) {
    setLoading()        //To call it 
    fetch(`https://api.sampleapis.com/coffee/${(temp)}`) //Get's the list of coffees
    .then(response => response.json())
    .then(displayCoffeeList)
    .catch(console.error) //TODO: display error for user
}

    
getCoffee('hot')
