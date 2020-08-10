import {transform} from '../src/romanizer'

describe('romanizer test', ()=>{
    it('when input 10 then return X', ()=>{
        expect('X').toEqual(transform(10));
    });

})