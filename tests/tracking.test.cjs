const test=require('node:test');const assert=require('node:assert/strict');
const {Tracker,iou}=require('../src/tracking.ts');
test('intersection over union',()=>{assert.equal(iou([0,0,10,10],[0,0,10,10]),1);assert.equal(iou([0,0,10,10],[20,20,10,10]),0)});
test('track identity and expiry',()=>{const t=new Tracker();const d={label:'cup',score:.9,box:[0,0,10,10]};assert.equal(t.update([d],0)[0].label,'cup #1');assert.equal(t.update([d],100)[0].label,'cup #1');assert.equal(t.counts.cup,1);assert.equal(t.update([d],2000)[0].label,'cup #2');assert.equal(t.counts.cup,2)});
