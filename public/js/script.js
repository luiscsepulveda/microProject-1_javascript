

//we used our button id to load the content and add a click event
document.getElementById('loadJsonCards').addEventListener('click', async () => {
    try {
      //requesto to our server to fetch our items
      const response = await fetch('/api/items');
      const data = await response.json();
  
      //we define the location in our Html where we want to show our tshirts
      const container = document.getElementById('jsonCardsContainer');
      container.innerHTML = '';
  
      //here we create a car with each item on our json 
      data.forEach(item => {
        //basically we create the div and we add our card class in order to apply our css 
        const card = document.createElement('div');
        card.classList.add('card');
  
        //we fill all the html structure 
        card.innerHTML = `
          <div class="image">
            <img class="card__image" src="./Img/img_card/${item.image}" alt="${item.name}">
          </div>
          <div class="product_details">
            <h5>
              <span>
                reviews
                <i class="fas fa-star star"></i>
                <i class="fas fa-star star"></i>
                <i class="fas fa-star star"></i>
                <i class="fas fa-star star"></i>
                <i class="fas fa-star star"></i>
              </span>
              <span>${item.price}</span>
            </h5>
            <h2>${item.name}</h2>
            <p>${item.description}</p>
            <button><a href="./pages/checkout.html"> add to cart <i class="fas fa-cart-plus"></i></a></button>
          </div>
        `;
  
        //we add the cards to our container inside our jsonCardsContainer
        container.appendChild(card);
      });
      //if anything goes wrong we get this error.
    } catch (error) {
      console.error("Error loading JSON items:", error);
    }
  });
  