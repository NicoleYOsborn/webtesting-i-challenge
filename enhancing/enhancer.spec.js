// const enhancer = require('./enhancer.js');
// const { TestScheduler } = require('jest');
const { success, fail, repair, get } = require("./enhancer.js");
// test away!


describe('enhancer functions', ()=>{
    describe('success tests', ()=>{
        test.todo('that it increases enhancement by 1');
        test.todo('that id does not change if enhancment is 20');
        test.todo('that durability is not changed');
    })
    describe('fail functions', ()=>{
        test.todo('that it decreases durability by 5 if enhancement is < 15');
        test.todo('that it decreases durability by 10 if enhancement is >= 15');
        test.todo('that it decreases enhancement by 1 if enhancement leveli is > 16');
    })
    describe('repair functions', ()=>{
        const item = {
            name: "subtle knife", 
            enhancement: 15,
            durability: 50
        }
        const expected = {
            name: "subtle knife", 
            enhancement: 15,
            durability: 100
        }
        test('that it returns a new item with durability of 100', ()=>{
            expect(repair(item)).toStrictEqual(expected);
        });
    })
})
