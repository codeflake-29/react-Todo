const $=require('jquery')

module.exports={
    setTodos:function(todos){
        if($.isArray(todos)){
            localStorage.setItem('todos',JSON.stringify(todos))
            //local storage cannot store objects or arrays
            return todos
        }

    },
    getTodos:function(){
        const stringTodos=localStorage.getItem('todos')
         var todos=[]
        try{
            todos=JSON.parse(stringTodos)
        }catch(e){

        }
        if($.isArray(todos)){
            return todos
        }
        else{
            return []
        }
    }
}