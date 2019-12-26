const React=require('react')
const ReactDOM=require('react-dom')
const $=require('jquery')
const expect=require('expect')
const TestUtils=require('react-addons-test-utils')

const Todoform=require('Todoform')


describe('Todoform',()=>{
    it('should exist',()=>{
        expect(Todoform).toExist()
    })
    it('should call AddTodo if text enter',()=>{
        const spy=expect.createSpy()
        const todoform=TestUtils.renderIntoDocument(<Todoform AddTodo={spy}/>)
        const $el=$(ReactDOM.findDOMNode(todoform))
        todoform.refs.texts.value='check'
        TestUtils.Simulate.submit($el.find('form')[0])
        expect(spy).toHaveBeenCalledWith('check')
    })
})