const React=require('react')

const Todo=React.createClass({
    onclick:function(){
        const id=this.props.id
        this.props.onToggle(id)
    },
    render:function(){
        const{text,completed}=this.props
        return(
            // <div onClick={()=>{
            //     this.props.onToggle(id)
            // }}>
            <div>
                <input type="checkbox" checked={completed} onClick={this.onclick}/>
                {text}
                
            </div>
        )
    }
})
module.exports=Todo