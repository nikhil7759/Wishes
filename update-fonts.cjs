const fs = require('fs');
const path = require('path');
const dir = 'e:/desktop/wishes-website/src/components';

fs.readdirSync(dir).forEach(file => {
  if (file.endsWith('.tsx')) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace font-jost with font-manrope ONLY within <hX> tags
    let newContent = content.replace(/(<h[1-6][^>]*?)font-jost([^>]*?>)/gs, '$1font-manrope$2');
    
    // Specifically handle the ShopSection h3 which has text-sm but doesn't have font-jost
    if (file === 'ShopSection.tsx') {
      newContent = newContent.replace(/(<h3 className=")text-sm/g, '$1font-manrope text-sm');
    }

    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent);
      console.log('Updated ' + file);
    }
  }
});
