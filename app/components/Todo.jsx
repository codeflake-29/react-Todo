const React=require('react')
const moment=require('moment')

const Todo=React.createClass({
    onclick:function(){
        const id=this.props.id
        this.props.onToggle(id)
    },
      renderDate:function(){
        var createdAt=this.props.createdAt
        const completedAt=this.props.completedAt
        const completed =this.props.completed

        var message='Created'
        var timestamp=createdAt
        if(completed){
            var message='Completed'
            var timestamp=completedAt
        }

        return(message+moment.unix(timestamp).format('MMM Do YYYY @ h:mm a'))
    },
    render:function(){
        const{text,completed}=this.props
        const todoClassName=completed ? 'todo todo-completed' : 'todo'
        return(
            // <div onClick={()=>{
            //     this.props.onToggle(id)
            // }}>
            <div className={todoClassName}>
                <div>
                <input type="checkbox" checked={completed} onClick={this.onclick}/>
                </div>
               <div>
                <p>{text}</p>
                <p className="todo__subtext">{this.renderDate()}</p>                
               </div>
            </div>
        )
    }
})
module.exports=Todo