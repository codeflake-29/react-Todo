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
    it('should add todo to the todo state on handleAddTodo',()=>{
        const todoText='test text'
        const todoapp=TestUtils.renderIntoDocument(<TodoApp/>)

        todoapp.setState({todos:[]})
        todoapp.handleAddTodo(todoText)

        expect(todoapp.state.todos[0].text).toBe(todoText)
    })
    it('should toggle completed value when handleToggle called',()=>{
        const todoData={
            id:11,
            text:'test features',
            completed:false
        }
        const todoapp=TestUtils.renderIntoDocument(<TodoApp />)
        todoapp.setState({todos:[todoData]})
        expect(todoapp.state.todos[0].completed).toBe(false)
        todoapp.handleToggle(11)
        expect(todoapp.state.todos[0].completed).toBe(true)

    })
})