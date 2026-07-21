const fs = require('fs');
const path = require('path');
const dir = 'e:/desktop/wishes-website/src/components';

fs.readdirSync(dir).forEach(file => {
  if (file.endsWith('.tsx')) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Revert font-manrope back to font-jost within <hX> tags
    let newContent = content.replace(/(<h[1-6][^>]*?)font-manrope([^>]*?>)/gs, '$1font-jost$2');
    
    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent);
      console.log('Reverted ' + file);
    }
  }
});
