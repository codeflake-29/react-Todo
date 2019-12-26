const React=require('react')
const TodoList=require('TodoList')
const Todoform=require('Todoform')
const TodoSearch=require('Todosearch')
const uuid=require('node-uuid')

const TodoApp=React.createClass({
    getInitialState:function(){
        return{
            showCompleted:false,
            searchText:'',
            todos:[{
                id:uuid(),
                text:'walk the dog'
            },
            {
                id:uuid(),
                text:'clean the yard'
            },
            {
                id:uuid(),
                text:'play pubg'
            },
            {
                id:uuid(),
                text:'play coc'
                }]
            }
    },
    handleAddTodo:function(text){
        this.setState({
            todos:[
                ...this.state.todos,
                {
                    id:uuid(),
                    text:text
                }
            ]
        })
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