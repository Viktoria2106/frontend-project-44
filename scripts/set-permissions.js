const fs = require('fs');
const path = require('path');

try {
  fs.chmodSync(path.join(__dirname, '../bin/brain-even.js'), '755');
  fs.chmodSync(path.join(__dirname, '../bin/brain-games.js'), '755');
  console.log('Permissions set successfully');
} catch (err) {
  console.error('Error setting permissions:', err);
}
