const fs = require('fs');

let content = fs.readFileSync('src/components/ShopSection.tsx', 'utf8');

// Use regex replacement to dynamically update description based on name and category
content = content.replace(/("name":\s*"([^"]+)",\n\s*"image":\s*"[^"]+",\n\s*"category":\s*"([^"]+)",\n\s*"description":\s*")Enter description here(")/g, (match, prefix, name, category, suffix) => {
    
    // Generate a beautiful, generic description based on the name and category
    let desc = "";
    const lowerName = name.toLowerCase();
    
    if (category === "Sweets") {
        if (lowerName.includes("ladoo") || lowerName.includes("ball")) {
            desc = `A delicately crafted sweet sphere offering a perfect balance of traditional richness and ${lowerName.split(' ')[0]} flavour.`;
        } else if (lowerName.includes("barfi") || lowerName.includes("katli")) {
            desc = `A rich, melt-in-the-mouth Indian delicacy featuring premium ${lowerName.split(' ')[0]} and aromatic notes.`;
        } else if (lowerName.includes("cookie")) {
            desc = `A perfectly baked gourmet cookie loaded with decadent ${lowerName.split(' ')[0]} goodness and a buttery bite.`;
        } else if (lowerName.includes("truffle") || lowerName.includes("bonbon")) {
            desc = `An exquisite artisanal truffle with a smooth, velvety center and sophisticated flavor profile.`;
        } else {
            desc = `A premium handcrafted sweet offering a luxurious blend of classic textures and rich flavours.`;
        }
    } else if (category === "Bar") {
        desc = `A luxurious chocolate bar crafted with premium cocoa and carefully selected inclusions for an indulgent bite.`;
    } else if (category === "Macaron") {
        desc = `A delicate, airy French macaron featuring a crisp shell and a luscious, flavourful ganache center.`;
    } else if (category === "Namkeen") {
        desc = `A perfectly spiced, crisp savoury treat baked to golden perfection for a satisfying crunch.`;
    } else if (category === "Box") {
        desc = `An elegant assortment of our finest handcrafted delights, beautifully curated for the perfect gifting experience.`;
    } else if (category === "Cake") {
        desc = `A decadent, moist cake layered with premium ingredients and finished with an elegant, rich frosting.`;
    } else {
        desc = `A premium handcrafted delicacy made with the finest ingredients for a luxurious taste.`;
    }
    
    return prefix + desc + suffix;
});

fs.writeFileSync('src/components/ShopSection.tsx', content, 'utf8');
console.log('Generated generic beautiful descriptions for the missing products!');
