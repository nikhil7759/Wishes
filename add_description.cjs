const fs = require('fs');
let content = fs.readFileSync('src/components/ShopSection.tsx', 'utf8');

// Add "description" to products array if missing
content = content.replace(/("category":\s*"[^"]+")(\s*\})/g, '$1,\n    "description": "Enter description here"$2');

// Add the description paragraph below the title in the JSX
if (!content.includes('{product.description}')) {
    content = content.replace(
        /(<h3 className="font-jost font-normal text-\[15px\].*?>\s*\{product\.name\}\s*<\/h3>)/,
        `$1\n\n                {/* Description */}\n                <p className="font-jost font-light text-[12px] text-gray-500 text-center px-4 mt-2 w-full relative z-10">\n                  {product.description}\n                </p>`
    );
}

fs.writeFileSync('src/components/ShopSection.tsx', content, 'utf8');
console.log('Successfully updated ShopSection.tsx');
