
//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('.next').addEventListener('click', goForward)
document.querySelector('.back').addEventListener('click', goBack)
document.querySelector('.get').addEventListener('click', getDrink)
const h2 = document.querySelector('h2')
const image = document.querySelector('img')
const toDo =  document.querySelector('#toDo')

// let counter = 0;

function getDrink(){
    let drink = document.querySelector('input').value

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.drinks)
      counter = 0;
      
      h2.innerText = data.drinks[0].strDrink
      image.src = data.drinks[0].strDrinkThumb
      toDo.innerText = data.drinks[0].strInstructions

      //set ingridients:
      const ingredients = [];

      for (let i = 1; i <= 15; i++){
        //all ingrideients (api shows max of 15)
        const ingredient = data.drinks[0][`strIngredient${i}`];
        if (ingredient){
          ingredients.push(`${ingredient}`)
        }
      }
      const ul = document.querySelector('#inst');
      ul.innerHTML = "";
      //clears previous list

      for (let i = 0; i < ingredients.length; i++) {
        const li = document.createElement("li");
        li.innerText = ingredients[i]
        ul.appendChild(li);
      }

    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}

function goForward(){

  let drink = document.querySelector('input').value

  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data.drinks)
    if (counter === data.drinks.length-1){
      counter = -1
    }
  
    counter++
    h2.innerText = data.drinks[counter].strDrink
    image.src = data.drinks[counter].strDrinkThumb
    toDo.innerText = data.drinks[counter].strInstructions

    //set ingridients:
    const ingredients = [];

    for (let i = 1; i <= 15; i++){
      //all ingrideients (api shows max of 15)
    const ingredient = data.drinks[counter][`strIngredient${i}`];
      if (ingredient){
        ingredients.push(`${ingredient}`)
      }
    }
    const ul = document.querySelector('#inst');
    ul.innerHTML = "";
    //clears previous list
    
    for (let i = 0; i < ingredients.length; i++) {
      const li = document.createElement("li");
      li.innerText = ingredients[i]
      ul.appendChild(li);
    }
    
    // count();
  })
  .catch(err => {
      console.log(`error ${err}`)
  });
}

function goBack(){
  let drink = document.querySelector('input').value

  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data.drinks)
  
    if(counter === 0){
      counter = data.drinks.length
    }
    counter--
    h2.innerText = data.drinks[counter].strDrink
    image.src = data.drinks[counter].strDrinkThumb
    toDo.innerText = data.drinks[counter].strInstructions

    
    const ingredients = [];

    for (let i = 1; i <= 15; i++){
      //all ingrideients (api shows max of 15)
    const ingredient = data.drinks[counter][`strIngredient${i}`];
      if (ingredient){
        ingredients.push(`${ingredient}`)
      }
    }
    const ul = document.querySelector('#inst');
    ul.innerHTML = "";
    //clears previous list
    
    for (let i = 0; i < ingredients.length; i++) {
      const li = document.createElement("li");
      li.innerText = ingredients[i]
      ul.appendChild(li);
    }
    
  
  })
  .catch(err => {
      console.log(`error ${err}`)
  });
}




