/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import RestoDbSource from '../../data/restodb-source';

const Restaurant = {
  async render() {
    return `
    <div class="content">
    <h2 class="content__heading">Restaurant</h2>
    <div id="restos" class="restos">>
      `;
  },

  async afterRender() {
    const restos = await RestoDbSource.listResto();
    const restosContainer = document.querySelector('#restos');
    restos.forEach((resto) => {
      restosContainer.innerHTML += createRestoDetailTemplate(resto);
    });
  },
};

export default Restaurant;
