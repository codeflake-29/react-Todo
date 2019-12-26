const React=require('react')
const ReactDOM=require('react-dom')
const $=require('jquery')
const expect=require('expect')
const TestUtils=require('react-addons-test-utils')

const TodoSearch=require('Todosearch')

describe('todo search',()=>{
    it('should exist',()=>{
        expect(TodoSearch).toExist()
    })
    it('should call onSearch wih entered input text',()=>{
        const searchText='dog'
        const spy=expect.createSpy()
        const todosearch=TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>)

        todosearch.refs.searchText.value=searchText
        TestUtils.Simulate.change(todosearch.refs.searchText)

        expect(spy).toHaveBeenCalledWith(false,'dog')

    })
    it('should call onsearch with proper checked value',()=>{
        const spy=expect.createSpy()
        const todosearch=TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>)
        todosearch.refs.showCompleted.checked=true
        TestUtils.Simulate.change(todosearch.refs.showCompleted)
        expect(spy).toHaveBeenCalledWith(true,'')


    })
})