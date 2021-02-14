const moment = require('moment');
const faker = require('faker');

const data = [];
for (let  i = 0; i<10; i ++ ){
    data.push ({
        id : faker.random.uuid().slice(0, 15),
         address: `${faker.address.streetAddress()} ${faker.address.country()}`,
         area : faker.random.number(),
         owner: `${faker.name.firstName()} ${faker.name.lastName()}`,
         privatiziOn: faker.date.past().toDateString(),
         privatiziOn :moment(faker.date.past()).format('MMMM, Do YYYY')
    })
}
console.log(data)

module.exports = data;