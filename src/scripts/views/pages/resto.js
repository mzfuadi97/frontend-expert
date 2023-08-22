/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import RestoDbSource from '../../data/restodb-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Restaurant = {
  async render() {
    return `
    <div class="content">
    <h2 class="content__heading">Restaurant</h2>
    <div id="restos" class="restos">
    </div>
      </div>
      `;
  },

  async afterRender() {
    const restos = await RestoDbSource.listResto();
    const restosContainer = document.querySelector('#restos');
    restos.forEach((resto) => {
      restosContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Restaurant;
