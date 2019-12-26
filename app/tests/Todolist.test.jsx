const React=require('react')
const ReactDOM=require('react-dom')
const $=require('jquery')
const expect=require('expect')
const TestUtils=require('react-addons-test-utils')

const TodoList=require('TodoList')
const Todo=require('Todo')

describe('Todolist',()=>{
    it('should exist',()=>{
        expect(TodoList).toExist()
    })

    it('should render one todo component for each todo items',()=>{
        const todos=[{
            id:1,
            text:'do something'
        },{
            id:2,
            text:'check mail'
        }]
        const todolist=TestUtils.renderIntoDocument(<TodoList todos={todos}/>)
        const todosComponents=TestUtils.scryRenderedComponentsWithType(todolist,Todo)
        expect(todosComponents.length).toBe(todos.length)
    })


})