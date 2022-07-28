const {seed_items} = require('./item-seeds');
const {seed_relics} = require('./relic-seeds');

const seed = async function (){
    console.log('Seeding!')

    await seed_items();
    console.log('\n ITEMS SUCCSESSFULLY SEEDED');

    await seed_relics();
    console.log('\n Relics SUCCSESSFULLY SEEDED');
}

module.exports = {seed};