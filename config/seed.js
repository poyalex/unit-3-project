require('dotenv').config();
require('./database');

const Category = require('../models/category');
const Item = require('../models/item');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Kawasaki', sortOrder: 10},
    {name: 'Ducati', sortOrder: 20},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Kawasaki Z1 - Rickman', emoji: 'Gallery/KawasakiRickmanZ1.jpg', category: categories[0], price: 10.00},
    {name: 'Kawasaki ZX10R - EVA 01', emoji: 'Gallery/KawsakiZX10REva.jpg', category: categories[0], price: 10.00},
    {name: 'Ducati MH900 Evoluzione', emoji: 'Gallery/DucatiMh900E.jpg', category: categories[1], price: 10.00},
    {name: 'Ducati Paul Smart 1100', emoji: 'Gallery/DucatiPaulSmart1100.jpg', category: categories[1], price: 10.00},
  ]);

  console.log(items)

  process.exit();

})();