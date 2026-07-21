const fs = require('fs');
const path = require('path');
const dir = 'e:/desktop/wishes-website/src/components';

fs.readdirSync(dir).forEach(file => {
  if (file.endsWith('.tsx')) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace font-flemish with font-burgues
    let newContent = content.replace(/font-flemish/g, 'font-burgues');
    
    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent);
      console.log('Updated ' + file);
    }
  }
});
