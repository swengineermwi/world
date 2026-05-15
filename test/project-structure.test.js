const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');

const requiredFiles = [
  'src/index.html',
  'src/index.js',
  'src/assets/css/style.min.css',
  'src/assets/js/scripts.js',
  'webpack.config.js',
  'firebase.json',
];

test('required project files exist', () => {
  requiredFiles.forEach((filePath) => {
    assert.equal(fs.existsSync(filePath), true, `${filePath} should exist`);
  });
});

test('firebase hosting is configured to publish from public/', () => {
  const firebaseConfig = JSON.parse(fs.readFileSync('firebase.json', 'utf8'));
  assert.equal(firebaseConfig.hosting.public, 'public');
});
