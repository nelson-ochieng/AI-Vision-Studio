const test=require('node:test');const assert=require('node:assert/strict');const fs=require('node:fs');
test('advanced engines wired',()=>{const s=fs.readFileSync('src/Advanced.tsx','utf8');for(const api of ['estimatePoses','estimateHands','segmentPeople','recognize'])assert.ok(s.includes(api))});
test('offline graph persistence wired',()=>{const s=fs.readFileSync('src/offline.ts','utf8');assert.ok(s.includes('model.save(key)'));assert.ok(s.includes('tf.loadGraphModel(key)'))});
test('release workflow exists',()=>assert.ok(fs.existsSync('.github/workflows/windows.yml')));
