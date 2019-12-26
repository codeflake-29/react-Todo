const React=require('react')
const ReactDOM=require('react-dom')
const $=require('jquery')
const expect=require('expect')
const TestUtils=require('react-addons-test-utils')

const TodoApp=require('TodoApp')

describe('TodoApp',()=>{
    it('should exist',()=>{
        expect(TodoApp).toExist()
    })
})