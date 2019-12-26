const React=require('react')
const ReactDOM=require('react-dom')
const $=require('jquery')
const expect=require('expect')
const TestUtils=require('react-addons-test-utils')

const Todo=require('Todo')

describe('Todo',()=>{
    it('should exist',()=>{
        expect(Todo).toExist()
    })
})