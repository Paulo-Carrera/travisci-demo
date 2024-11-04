const {add, subtract, multiply, average} = require('./operations');

describe('#add', ()=>{
    it('adds numbers', ()=>{
        expect(add(2, 2)).toEqual(4);
    });
    it('handles empty inputs', ()=>{
        expect(add()).toEqual(0);
    });
});

describe('#subtract', ()=>{
    it('subtracts numbers', ()=>{
        expect(subtract(2, 2)).toEqual(0);
    });
    it('handles empty inputs', ()=>{
        expect(subtract()).toEqual(0);
    });
})

describe('#multiply', ()=>{
    it('multiplies numbers', ()=>{
        expect(multiply(2, 3)).toEqual(6);
        expect(multiply(-5, 4)).toEqual(-20);
    });
});

describe('#average', ()=>{
    it('calculates the average', ()=>{
        expect(average(2, 2)).toEqual(2);
        expect(average(2, -2)).toEqual(0);
    });
    it('handles empty inputs', ()=>{
        expect(average()).toEqual(0);
    });
});