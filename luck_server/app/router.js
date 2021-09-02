'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/prizeList', controller.prize.getPrizeList);
  router.post('/editPrizeList', controller.prize.editPrizeList);
  router.post('/editPrice', controller.prize.editPrice);
  router.get('/getLuckResult', controller.prize.getLuckResult);
  router.get('/money/getMoney', controller.money.getMoney);
};
