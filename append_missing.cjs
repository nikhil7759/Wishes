const fs = require('fs');
const path = require('path');

let content = fs.readFileSync('src/components/ShopSection.tsx', 'utf8');

// Extract the products array
const productsMatch = content.match(/const products = (\[[\s\S]*?\]);\n\nconst ShopSection/);
if (!productsMatch) {
    console.log("Could not find products array");
    process.exit(1);
}

const productsStr = productsMatch[1];
let products = eval(productsStr);

const base_dir = 'public/Images/product';
const folders = ['Sweets', 'Bar', 'Macaron', 'Namkeen', 'Box', 'Cake'];

let maxId = Math.max(...products.map(p => p.id), 0);
let newProducts = [];

folders.forEach(folder => {
  const folder_path = path.join(base_dir, folder);
  if (!fs.existsSync(folder_path)) return;
  const files = fs.readdirSync(folder_path);
  
  files.forEach(file => {
    if (file.endsWith('.jpg') || file.endsWith('.png') || file.endsWith('.jpeg')) {
      const image_url = '/Images/product/' + folder + '/' + file;
      
      // check if it exists
      if (!products.find(p => p.image === image_url)) {
          // It doesn't exist, generate a clean name
          let name = path.basename(file, path.extname(file)).replace(/_/g, ' ').trim();
          let cleanName = name
            .replace(/\b\d+\s*(pc|pcs|gm|g|kg)\b/ig, '')
            .replace(/\bpack of\b/ig, '')
            .replace(/\(box of \d+\)/ig, '')
            .replace(/\s+/g, ' ')
            .trim();
        
          cleanName = cleanName.replace(/[\(\)-]+$/g, '').trim();

          newProducts.push({
              id: ++maxId,
              name: cleanName,
              image: image_url,
              category: folder,
              description: "Enter description here"
          });
      }
    }
  });
});

if (newProducts.length > 0) {
    products = products.concat(newProducts);
    const newProductsStr = JSON.stringify(products, null, 2);
    content = content.replace(productsStr, newProductsStr);
    fs.writeFileSync('src/components/ShopSection.tsx', content, 'utf8');
    console.log(`Added ${newProducts.length} missing products!`);
} else {
    console.log("No missing products found.");
}
