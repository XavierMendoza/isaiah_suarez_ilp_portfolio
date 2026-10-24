import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { courses } from '../src/data/courses.js';
import { profile } from '../src/data/profile.js';
test('exactly 14 expected courses, unique dedicated slugs, complete catalog data', () => {
 assert.deepEqual(courses.map(c=>c.code), ['CST 300','CST 338','CST 363','CST 334','CST 311','CST 336','CST 370','CST 462S','CST 328','CST 438','CST 315','CST 329','CST 489','CST 499']);
 assert.equal(new Set(courses.map(c=>c.slug)).size,14);
 for(const course of courses){assert.equal(course.slug,course.code.toLowerCase().replace(' ','-'));assert.ok(course.description.length>100);assert.ok(course.title);assert.ok(course.units>0);assert.ok(course.topics.length>0);}
});
test('12 student-verified reflections retain their required length and course association',()=>{
 const reflections=courses.filter(c=>!c.isCapstone);
 assert.equal(reflections.length,12);
 const paragraphs=[];
 for(const course of reflections){
  assert.equal(course.evidenceStatus,'complete');
  assert.equal(course.evidence.length,1);
  const item=course.evidence[0];
  assert.equal(item.id,`${course.slug}-reflection`);
  assert.equal(item.type,'reflection');
  assert.equal(item.title,'Coursework & Learning Reflection');
  assert.equal(item.contentStatus,'student-verified');
  const count=item.text.trim().split(/\s+/u).length;
  assert.ok(count>=100,`${course.code}: ${count} words`);
  assert.notEqual(item.text,course.description);
  assert.doesNotMatch(item.text,/\b(draft|verification|confirmation|unverified|undocumented)\b|need to confirm|must be confirmed|I would|reflection would/i);
  paragraphs.push(...item.text.split(/\n\s*\n/));
 }
 assert.equal(new Set(paragraphs).size,paragraphs.length);
});
test('exactly two capstones retain descriptions and deferred, empty evidence',()=>{
 const capstones=courses.filter(c=>c.isCapstone);
 assert.deepEqual(capstones.map(c=>c.code),['CST 489','CST 499']);
 for(const course of capstones){assert.deepEqual(course.evidence,[]);assert.equal(course.evidenceStatus,'deferred');}
});
test('correct identity and expected page routing',()=>{
 assert.equal(profile.name,'Isaiah Suarez');
 const app=readFileSync(new URL('../src/App.jsx',import.meta.url),'utf8');
 for(const route of ['about','courses','courses/:slug','*'])assert.ok(app.includes(`path="${route}"`));
 assert.ok(!app.toLowerCase().includes('projects'));
});
