/* eslint-disable max-len */
/* eslint-disable indent */
/* eslint-disable comma-dangle */
/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (restaurant) => `
  <h2 class="resto__title">${restaurant.name}</h2> 
  <img class="resto__poster lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="resto__info">
  <h3>Information</h3>
    <h4>Description</h4>
    <p>${restaurant.description}</p>
    <h4>City</h4>
    <p>${restaurant.city}</p>
    <h4>Address</h4>
    <p>${restaurant.address}</p>
    <h4>Rating</h4>
    <p>⭐️<span class="resto-item__header__rating__score">${restaurant.rating}</span></p>
  </div>
  <div class="resto__overview">
    <h3 style="text-align: center;">Overview</h3>
    <br>
    <h4>Categories</h4>
    <span  id="category">
      ${restaurant.categories.map((category) => category.name)}
    </span>
   <h4>Food Menu</h4>
    <span id="food">
    ${restaurant.menus.foods.map((food) => food.name)}
    </span>
    <h4>Drink Menu</h4>
    <span id="drink">
    ${restaurant.menus.drinks.map((drink) => drink.name)}
    </span>
    <br>
    <div  class="restaurantInfo">
    <br>
    <h4>Customer Review</h4>
    <table>
    <tr>
      <th>Waktu</th>
      <th>Nama</th>
      <th>Komentar</th>
    </tr> 
    ${restaurant.customerReviews
      .map(
        (review) => `
        <tr>
            
            <td>${review.date}</td>
            <td>${review.name}</td>
            <td>${review.review}</td>
        </tr>
    `
      )
      .join('')}
</table>
</div>
  </div>
`;

const createRestoItemTemplate = (restaurants) => `
  <div class="resto-item">
    <div class="resto-item__header">
    <div class="resto-item__content">
    <h3 class="resto__title"><a href=${`/#/detail/${restaurants.id}`}>${restaurants.name || '-'}</a></h3>
</div>
    <figure>
        <img class="resto-item__header__poster lazyload" alt="${restaurants.name || '-'}"
            data-src="${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}" alt="${restaurants.name || '-'}">
    </figure>
            <div class="resto-item__header__rating">
            <p>⭐️<span class="resto-item__header__rating__score">${restaurants.rating || '-'}</span></p>
        </div>
        <div class="resto__info">
        <h2>Information</h2>
        <h3>City : ${restaurants.city || '-'}</h3>
        <h3 class="text">Description : <br> ${restaurants.description || '-'}</h3>
       
        </div>
    </div>
  
  </div>
  `;

const createLikeRestoButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestoButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

// eslint-disable-next-line object-curly-newline
export { createRestoDetailTemplate, createRestoItemTemplate, createLikeRestoButtonTemplate, createUnlikeRestoButtonTemplate };
