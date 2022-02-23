const init = () => {
  //select the node
  const inputForm = document.querySelector('form');

  //add event listener to store input
  inputForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.querySelector('input#searchByID');
  

    //fetch dat from db.json file
    fetch(`http://localhost:3000/movies/${input.value}`)
    
    //converts the json data into an object
    .then(response => response.json())

    //calls the new object and uses it
    .then(data => {
      //accesses the nodes for modification on the DOM
      const title = document.querySelector('section#movieDetails h4')
      const summary = document.querySelector('section#movieDetails p')
      
      //changes the text of each item on the DOm
      title.textContent = data.title
      summary.textContent = data.summary

    })
  })
}

document.addEventListener('DOMContentLoaded', init);