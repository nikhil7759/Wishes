const fs = require('fs');
const path = require('path');
const dir = 'e:/desktop/wishes-website/src/components';

fs.readdirSync(dir).forEach(file => {
  if (file.endsWith('.tsx')) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace font-sloop with font-flemish
    let newContent = content.replace(/font-sloop/g, 'font-flemish');
    
    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent);
      console.log('Updated ' + file);
    }
  }
});
