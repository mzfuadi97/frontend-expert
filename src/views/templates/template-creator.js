/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (restaurant) => `
  <h2 class="resto__title">${restaurant.name}</h2>
  <img class="resto__poster lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="resto__info">
  <h3>Information</h3>
    <h4>Description</h4>
    <p>${restaurant.tagline}</p>
    <h4>City</h4>
    <p>${restaurant.city}</p>
    <h4>Address</h4>
    <p>${restaurant.address}</p>
    <h4>Rating</h4>
    <p>${restaurant.rating}</p>
  </div>
  <div class="resto__overview">
    <h3>Overview</h3>
    <p>${restaurant.customerReviews}</p>
  </div>
`;

const createRestoItemTemplate = (restaurant) => `
  <div class="resto-item">
    <div class="resto-item__header">
        <img class="resto-item__header__poster lazyload" alt="${restaurant.title}"
            data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
        <div class="resto-item__header__rating">
            <p>⭐️<span class="resto-item__header__rating__score">${restaurant.rating}</span></p>
        </div>
    </div>
    <div class="resto-item__content">
        <h3><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
        <p>${restaurant.customerReviews}</p>
    </div>
  </div>
  `;

export { createRestoDetailTemplate, createRestoItemTemplate };
