const React=require('react')

const Todoform=React.createClass({
    onSubmit:function(e){
        e.preventDefault()
        const text=this.refs.texts.value
        if(text.length >0){
            this.refs.texts.value=''
            this.props.AddTodo(text)
        }
        else{
            this.refs.texts.focus()
        }
    },

    render:function(){
        return(
       <div className="container-footer">
            <form  onSubmit={this.onSubmit}  >
                 <input type="text" ref="texts" placeholder="enter texts"/>
                <button className="button expanded">SUBMIT</button>

            </form>
       </div>
        )
    }
})
module.exports=Todoform