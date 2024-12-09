new Vue({
  el: '#app',
  data() {
    return {
      //データの準備
      todos: [],
      text: ''
    };
  },
  methods: {
    //inputTextメソッドを追加
    inputText(e) {
      this.text = e.target.value;
    },
    //addTodoメソッドを追加
    addTodo(){
      if (!this.text) return;
      const text = this.text;
      const id = Math.ceil(Math.random() * 100);
      const todo = {
        id, text, isDone:false
      };
      this.todos.push(todo);
      this.resetText();
    },
    //resetTextメソッドを追加
    resetText(){
      this.text = '';
    }
  }
});