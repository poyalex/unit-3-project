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
    {name: 'Kawasaki Z1 - Rickman', emoji: 'https://ogden_images.s3.amazonaws.com/www.motorcycleclassics.com/images/2014/12/11085451/Rickman-Main-jpg.jpg', category: categories[0], price: 10.00},
    {name: 'Kawasaki ZX10R - EVA 01', emoji: 'https://i.ytimg.com/vi/o7lC9cq7gno/maxresdefault.jpg', category: categories[0], price: 10.00},
    {name: 'Ducati MH900 Evoluzione', emoji: 'img/DucatiMh900E.jpg', category: categories[1], price: 10.00},
    {name: 'Ducati Paul Smart 1100', emoji: 'https://upload.wikimedia.org/wikipedia/commons/3/39/PaulSmartLE1000.jpg', category: categories[1], price: 10.00},
  ]);

  console.log(items)

  process.exit();

})();