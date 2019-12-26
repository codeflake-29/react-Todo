const React=require('react')
const TodoList=require('TodoList')
const Todoform=require('Todoform')

const TodoApp=React.createClass({
    getInitialState:function(){
        return{
            todos:[{
                id:1,
                text:'walk the dog'
            },
            {
                id:2,
                text:'clean the yard'
            },
            {
                id:3,
                text:'play pubg'
            },
            {
                id:4,
                text:'play coc'
                }]
            }
    },
    handleAddTodo:function(text){
        alert('new todo ' + text)
    },
    render:function(){
        const {todos}=this.state
        return(
            <div>
                <TodoList todos={todos}/>
                <Todoform AddTodo={this.handleAddTodo}/>
            </div>
        )
    }

})

module.exports=TodoApp