const expect=require('expect')
const TodoAPI=require('TodoAPI')

describe('TodoAPI',()=>{
    beforeEach(()=>{
        localStorage.removeItem('todos')
    })
    it('should exist',()=>{
        expect(TodoAPI).toExist()
    })
    describe('setTodos',()=>{
        it('should set valid todos array',()=>{
            var goodtodos=[{
                id:23,
                test:'test all files',
                completed:false
            }]
            TodoAPI.setTodos(goodtodos)
            var actualTodos=JSON.parse(localStorage.getItem('todos'))
            expect(actualTodos).toEqual(goodtodos)
        })
        it('should not set invalid todos array',()=>{
            var badtodos={
                a:'b'
            }
            TodoAPI.setTodos(badtodos)
            
            expect(localStorage.getItem('todos')).toBe(null)
        })
    })
    describe('getTodos',()=>{
        it('should return empty array for bad localstorage data',()=>{
            var actualTodos=TodoAPI.getTodos()
            expect(actualTodos).toEqual([])
        })
        it('should return todo if valid array in local storage',()=>{
            var goodtodos=[{
                id:23,
                test:'test all files',
                completed:false
            }]
            localStorage.setItem('todos',JSON.stringify(goodtodos))
            var actualTodos=TodoAPI.getTodos()
            expect(actualTodos).toEqual(goodtodos)
        })
    })
})