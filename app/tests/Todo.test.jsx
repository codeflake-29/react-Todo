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
    it('should call onToggle prop with id onClick',()=>{
        const tododata={
            id:199,
            text:'write todo.tet.jsx',
            completed:false
        }
        const spy =expect.createSpy()
        const todo=TestUtils.renderIntoDocument(<Todo {...tododata} onToggle={spy} />)
        const $el=$(ReactDOM.findDOMNode(todo))
        const input=$el.find('input[type="checkbox"]')
        TestUtils.Simulate.click(input[0])
        expect(spy).toHaveBeenCalledWith(199)
    })
})