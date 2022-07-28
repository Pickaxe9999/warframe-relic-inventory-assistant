const {Item} = require('../models');

const seed_items = async function(){
    const items=[
        {
            name: 'Rhino Prime Chassis Blueprint',
            image_url: '/refImages/chassis.png'
        },
        {
            name: 'Rhino Prime Systems Blueprint',
            image_url: '/refImages/systems.jpg'
        },
        {
            name: 'Rhino Prime Neuroptics Blueprint',
            image_url: '/refImages/neuroptics.png'
        },
        {
            name: 'Rhino Prime Blueprint',
            image_url: '/refImages/RhinoPrime.jpg'
        },
        {
            name: 'Forma',
            image_url: '/refImages/Forma.png'
        }
    ]

    Item.bulkCreate(items);
}

module.exports = {seed_items};