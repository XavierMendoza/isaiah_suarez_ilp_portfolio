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
test('all evidence is honestly pending with exactly two capstone exceptions',()=>{
 for(const course of courses){assert.deepEqual(course.evidence,[]);assert.equal(course.evidenceStatus,'pending');}
 assert.deepEqual(courses.filter(c=>c.isCapstone).map(c=>c.code),['CST 489','CST 499']);
});
test('correct identity and expected page routing',()=>{
 assert.equal(profile.name,'Isaiah Suarez');
 const app=readFileSync(new URL('../src/App.jsx',import.meta.url),'utf8');
 for(const route of ['about','courses','courses/:slug','*'])assert.ok(app.includes(`path="${route}"`));
 assert.ok(!app.toLowerCase().includes('projects'));
});
