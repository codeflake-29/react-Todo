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
        return(
            // <div onClick={()=>{
            //     this.props.onToggle(id)
            // }}>
            <div>
                <input type="checkbox" checked={completed} onClick={this.onclick}/>
                <p>{text}</p>
                <p>{this.renderDate()}</p>                
            </div>
        )
    }
})
module.exports=Todo