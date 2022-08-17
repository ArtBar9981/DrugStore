module.exports = {
  async up(queryInterface, Sequelize) {
    const arrDrugs = [
      {
        name: 'Аспирин', price: 25, img: 'img/drugs/aspirin.jpg', avail: false, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Антибубмин', price: 40, img: 'img/drugs/bubmin.jpg', avail: false, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Активированный уголь', price: 7, img: 'img/drugs/coal', avail: false, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Непсихуй', price: 1588, img: 'img/drugs/psih', avail: false, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Факиншит', price: 126, img: 'img/drugs/shit', avail: true, createdAt: new Date(), updatedAt: new Date(),
      },
      {
        name: 'Выпивон', price: 91, img: 'img/drugs/vipivon', avail: true, createdAt: new Date(), updatedAt: new Date(),
      },

    ];
    await queryInterface.bulkInsert('Drugs', arrDrugs, {});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Drugs', null, {});
  },
};
