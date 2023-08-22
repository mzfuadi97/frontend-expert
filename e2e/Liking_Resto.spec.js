/* eslint-disable no-unused-vars */
const assert = require('assert');

Feature('Liking Restos');

Before((I) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorited restos', (I) => {
  I.seeElement('#query');
  // I.seeElement('.query'); // membuat test menjadi gagal
  I.see('Tidak ada resto untuk ditampilkan', '.resto-item__not__found');
});

Scenario('liking one resto', async (I) => {
  I.see('Tidak ada resto untuk ditampilkan', '.resto-item__not__found');
  I.amOnPage('/');
  I.seeElement('.resto__title a');
  const firstResto = locate('.resto__title a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.seeElement('.resto-item');
  const favoritedRestoTitle = await I.grabTextFrom('.resto__title');

  assert.strictEqual(firstRestoTitle, favoritedRestoTitle);
});

Scenario('cancel liked resto', async (I) => {
  I.see('Tidak ada resto untuk ditampilkan', '.resto-item__not__found');
  I.amOnPage('/');
  I.seeElement('.resto__title a');
  const firstResto = locate('.resto__title a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');
  I.seeElement('.resto__title a');

  const cancelResto = locate('.resto__title a').first();
  const cancelRestoTitle = await I.grabTextFrom(cancelResto);
  I.click(cancelResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');

  I.see('Tidak ada resto untuk ditampilkan', '.resto-item__not__found');
});
