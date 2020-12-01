/* exported todos */

var todos = [];

window.addEventListener('beforeunload', function(event){
    
var todosJSON = JSON.stringify(todos);
Storage.setItem(todosJSON, 'javascript-local-storage');
});