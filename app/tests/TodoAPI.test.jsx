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
    describe('filterTodos',()=>{
        var todos=[{
            id:1,
            text:'some text',
            completed:true
        },{
            id :2,
            text:'other text',
            completed:false
        },{
            id:3,
            text:'some text',
            completed:true
        }]
        it('should return all items if showCompleted is true',()=>{
            var filteredTodos=TodoAPI.filterTodos(todos,true,'')
            expect(filteredTodos.length).toBe(3)
        })
        it('should return todos which are incompleteed when showCompleted is false',()=>{
            var filteredTodos=TodoAPI.filterTodos(todos,false,'')
            expect(filteredTodos.length).toBe(1)
        })
        it('should sort by completed statsus',()=>{
            var filteredTodos=TodoAPI.filterTodos(todos,true,'')
            expect(filteredTodos[0].completed).toBe(false)
        })
        it('should filter todos by searchText',()=>{
            var filteredTodos=TodoAPI.filterTodos(todos,true,'some')
            expect(filteredTodos.length).toBe(2)
        })
        it('should return all todos if searchtext is empty',()=>{
            var filteredTodos=TodoAPI.filterTodos(todos,true,'')
            expect(filteredTodos.length).toBe(3)
        })
    })
})