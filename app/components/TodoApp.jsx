const React=require('react')
const TodoList=require('TodoList')
const Todoform=require('Todoform')
const TodoSearch=require('Todosearch')

const TodoApp=React.createClass({
    getInitialState:function(){
        return{
            showCompleted:false,
            searchText:'',
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
    handleSearch:function(showCompleted,searchText){
        this.setState({
            showCompleted:showCompleted,
            searchText:searchText.toLowerCase()
        })
    },
    render:function(){
        const {todos}=this.state
        return(
            <div>
                <TodoSearch onSearch={this.handleSearch}/>
                <TodoList todos={todos}/>
                <Todoform AddTodo={this.handleAddTodo}/>
            </div>
        )
    }

})

module.exports=TodoApp