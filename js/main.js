(function() {
    'use strict';

    Vue.config.devtools = true;
    
    var vm = new Vue({
        el: '#app',
        data: {
            newComment: '',
            todos: [
                {comment: "a", isDone: false},
                {comment: "b", isDone: true},
                {comment: "c", isDone: false}
            ]
        },
        methods:{
            addTodo: function(){
                if(this.newComment == '')
                    return;

                let todo = {
                    comment: this.newComment,
                    isDone: false
                };
                this.todos.push(todo);
                this.newComment = '';
            },
            deleteComment: function(index){
                this.todos.splice(index,1)
            }
        }
    });

})();