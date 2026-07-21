const fs = require('fs');
const path = require('path');
const base_dir = 'public/Images/product';
const folders = ['Sweets', 'Bar', 'Macaron', 'Namkeen', 'Box', 'Cake'];
const products = [];
let id_counter = 1;
folders.forEach(folder => {
  const folder_path = path.join(base_dir, folder);
  if (!fs.existsSync(folder_path)) return;
  const files = fs.readdirSync(folder_path);
  // for sweets limit to 12
  const limit = folder === 'Sweets' ? 12 : files.length;
  let count = 0;
  files.forEach(file => {
    if (count >= limit) return;
    if (file.endsWith('.jpg') || file.endsWith('.png')) {
      const name = path.basename(file, path.extname(file)).replace(/_/g, ' ').replace(/\.[^/.]+$/, '').trim();
      products.push({
        id: id_counter++,
        name: name,
        image: '/Images/product/' + folder + '/' + encodeURIComponent(file),
        category: folder
      });
      count++;
    }
  });
});
console.log(JSON.stringify(products, null, 2));
