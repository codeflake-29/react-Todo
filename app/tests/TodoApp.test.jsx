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
        expect(todoapp.state.todos[0].createdAt).toBeA('number')
    })
    it('should toggle completed value when handleToggle called',()=>{
        const todoData={
            id:11,
            text:'test features',
            completed:false,
            createdAt:0,
            completedAt:undefined
        }
        const todoapp=TestUtils.renderIntoDocument(<TodoApp />)
        todoapp.setState({todos:[todoData]})
        expect(todoapp.state.todos[0].completed).toBe(false)
        todoapp.handleToggle(11)
        expect(todoapp.state.todos[0].completed).toBe(true)
        expect(todoapp.state.todos[0].completedAt).toBeA('number')

    })
    it('should toggle completedAt value when handleToggle called again',()=>{
        const todoData={
            id:11,
            text:'test features',
            completed:true,
            createdAt:0,
            completedAt:10
        }
        const todoapp=TestUtils.renderIntoDocument(<TodoApp />)
        todoapp.setState({todos:[todoData]})
        expect(todoapp.state.todos[0].completed).toBe(true)
        todoapp.handleToggle(11)
        expect(todoapp.state.todos[0].completed).toBe(false)
        expect(todoapp.state.todos[0].completedAt).toBe(undefined)

    })
})