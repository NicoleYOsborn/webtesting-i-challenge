// const enhancer = require('./enhancer.js');
// const { TestScheduler } = require('jest');
const { success, fail, repair, get } = require("./enhancer.js");
// test away!


describe('enhancer functions', ()=>{
    describe('success tests', ()=>{
        test('that it increases enhancement by 1', ()=>{
            const item = {
                name: "subtle knife", 
                enhancement: 10,
                durability: 50
            }
            const expected = {
                name: "subtle knife", 
                enhancement: 11,
                durability: 50
            }
            expect(success(item)).toStrictEqual(expected);
        });
        test('that id does not change if enhancment is 20', ()=>{
            const item = {
                name: "subtle knife", 
                enhancement: 20,
                durability: 50
            }
            const expected = {
                name: "subtle knife", 
                enhancement: 20,
                durability: 50
            }
            expect(success(item)).toStrictEqual(expected);
        });
        test('that durability is not changed', ()=>{
            const item = {
                name: "subtle knife", 
                enhancement: 20,
                durability: 50
            }
            const expected = {
                name: "subtle knife", 
                enhancement: 20,
                durability: 50
            }
            expect(success(item)).toStrictEqual(expected);
        });
    })
    describe('fail functions', ()=>{
        test ('that it decreases durability by 5 if enhancement is < 15', ()=>{
            const item = {
                name: "subtle knife", 
                enhancement: 10,
                durability: 50
            }
            const expected = {
                name: "subtle knife", 
                enhancement: 10,
                durability: 45
            }
            expect(fail(item)).toStrictEqual(expected);
        });
        test('that it decreases durability by 10 if enhancement is >= 15', ()=>{
            const item = {
                name: "subtle knife", 
                enhancement: 16,
                durability: 50
            }
            const expected = {
                name: "subtle knife", 
                enhancement: 16,
                durability: 40
            }
            expect(fail(item)).toStrictEqual(expected);
        });
        test('that it decreases enhancement by 1 if enhancement level is > 16', ()=>{
            const item = {
                name: "subtle knife", 
                enhancement: 18,
                durability: 50
            }
            const expected = {
                name: "subtle knife", 
                enhancement: 17,
                durability: 40
            }
            expect(fail(item)).toStrictEqual(expected);
        });
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
    describe('get function', ()=>{
        test('that it adds enhancement level to name when greater than 0', ()=>{
        const item = {
            name: "subtle knife", 
            enhancement: 15,
            durability: 50
        }
        const expected = {
            name: "[+15] subtle knife", 
            enhancement: 15,
            durability: 50
        }
            expect(get(item)).toStrictEqual(expected);
        });
        test('that name stays the same if enhancement is 0', ()=>{
        const item = {
            name: "subtle knife", 
            enhancement: 0,
            durability: 50
        }
        const expected = {
            name: "subtle knife", 
            enhancement: 0,
            durability: 50
            }
            expect(get(item)).toStrictEqual(expected);
        })
    })
})
