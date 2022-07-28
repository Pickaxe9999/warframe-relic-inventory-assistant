const {Relic} = require('../models');

const seed_relics = async function(){
    const relics =[
        {
            name: 'C7',
            class: 'Lith',
            common: [1,2,3]
        }
    ]
    
    Relic.bulkCreate(relics);
}

module.exports = {seed_relics};