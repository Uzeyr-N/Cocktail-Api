
//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('.next').addEventListener('click', goForward)
document.querySelector('.back').addEventListener('click', goBack)
document.querySelector('.get').addEventListener('click', getDrink)

// let counter = 0;

function getDrink(){
    let drink = document.querySelector('input').value

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.drinks)
      counter = 0;
      
      document.querySelector('h2').innerText = data.drinks[0].strDrink
      document.querySelector('img').src = data.drinks[0].strDrinkThumb
      document.querySelector('#toDo').innerText = data.drinks[0].strInstructions

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
      //   let ingridents = data.drinks.strIngredient[+i]
      // for( i = 0; i= ingridents.length; i++ ){
      //   if(ingridents === null){
      //   return ""
      //   }
      // }
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
    document.querySelector('h2').innerText = data.drinks[counter].strDrink
    document.querySelector('img').src = data.drinks[counter].strDrinkThumb
    document.querySelector('#toDo').innerText = data.drinks[counter].strInstructions

    document.querySelector('#inst').innerText = data.drinks[counter].strIngredient1
    
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
    document.querySelector('h2').innerText = data.drinks[counter].strDrink
    document.querySelector('img').src = data.drinks[counter].strDrinkThumb
    document.querySelector('#toDo').innerText = data.drinks[counter].strInstructions

    document.querySelector('#inst').innerText = data.drinks[counter].strIngredient1
    
  
  })
  .catch(err => {
      console.log(`error ${err}`)
  });
}


//===================================================================
// document.querySelector('button').addEventListener('click',getDrink)

// function getDrink (){
//     let drinks = document.querySelector('input').value
//     //.trim()

// fetch(`www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`)
//     .then(res => res.json()) // parse response as JSON
//     .then(data => {
//         // document.querySelector("h1").innerText('')
//         // for (let i = 0; i = drink.length; i++) {
//         //     if (drink == drink[0].length) {
//         //   }
//         console.log(data.drinks)
//       // for (let keys in drinks){
//     })
//       document.querySelector("h2").innerText = data.drinks.strDrink[0];
//       document.querySelector("img").src = data.drinks.strDrinkThumb[0];
//       document.querySelector("h3").innerText = data.drinks.strInstructions[0];
//     }
//     .catch(err => {
//         console.log(`error ${err}`)
//     });

// // the user to type in value need an eventlister for a button to fetch the data, global varaible

// // const next = document.querySelector('next')

// // document.querySelector("back").addEventListener('click',back)
// // document.querySelector("next").addEventListener('click',next)

// // function next (){
  // //   let next  = querySelector("input")
  // //     for(let i = next; i <=data.drinks.length-1; i++){
    
    // //     }
    // //   //= document.querySelector = data.drinks.length[i].strDrink
    // //   //document.querySelector('#next') = data.drinks.length[0].strDrink
    
    // // }
    

// document.querySelector('#next').addEventListener('click', goForward)
// document.querySelector('#back').addEventListener('click', goBack)
// document.querySelector('button').addEventListener('click', getDrink)


// function getDrink (){
// //we need th value from the input, go to the document and get the data
//   let drink = document.querySelector('input').value

// fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
//     .then(res => res.json()) // parse response as JSON
//     .then(data => {
//       console.log(data.drinks)
//       counter = 0;

//       document.querySelector('h2').innerText = data.drinks[0].strDrink
//       document.querySelector('img').src = data.drinks[0].strDrinkThumb
//       document.querySelector('#toDo').innerText = data.drinks[0].strInstructions

//       // document.querySelector("#inst").innerText = data.drinks[0].strIngredient1
//       // document.querySelector("#inst").innerText = data.drinks[0].strIngredient2
//       // document.querySelector("#inst").innerText = data.drinks[0].strIngredient3
//       // document.querySelector("li").innerText = data.drinks[0].strIngredient4
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//     });
//   }


//   function goForward(){

//     let drink = document.querySelector('input').value
  
//     fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
//     .then(res => res.json()) // parse response as JSON
//     .then(data => {
//       console.log(data.drinks)
//       if (counter === data.drinks.length-1){
//         counter = -1
//       }
    
//       counter++
//       document.querySelector('h2').innerText = data.drinks[counter].strDrink
//       document.querySelector('img').src = data.drinks[counter].strDrinkThumb
//       document.querySelector('h3').innerText = data.drinks[counter].strInstructions
      
//       // count();
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//     });
//   }

//   function goBack(){

//     let drink = document.querySelector('input').value
  
//     fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
//     .then(res => res.json()) // parse response as JSON
//     .then(data => {
//       console.log(data.drinks)
//       if (counter === data.drinks.length){
//       }
    
//       counter--
//       document.querySelector('h2').innerText = data.drinks[counter].strDrink
//       document.querySelector('img').src = data.drinks[counter].strDrinkThumb
//       document.querySelector('h3').innerText = data.drinks[counter].strInstructions
      
//       // count();
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//     });
//   }



