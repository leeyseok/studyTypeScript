let todoItems: {
  id: number,
  title: string,
  done: boolean
}[];

// type Todo = {id: number, title: string, done: boolean}
interface Todo {id: number, title: string, done: boolean}
// let todoItems {a:string};

// api
function fetchTodoItems(): Todo[] {
  const todos = [
    { id: 1, title: '안녕', done: false }, 
    { id: 2, title: '타입', done: false },
    { id: 3, title: '스크립트', done: false },
  ];
  return todos;
}

// crud methods
function fetchTodos() {
  const todos = fetchTodoItems();
  return todos;
}

function addTodo(todo: Todo): void{
  todoItems.push(todo);
}

function deleteTodo(index:number):void {
  todoItems.splice(index, 1);
}

function completeTodo(index: number, todo: Todo):void {
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo(): object {
  return todoItems[0];
}

function showCompleted():Todo[] {
  // return todoItems.filter(item => item.done);
  return todoItems.filter(item => item.done);
  // return todoItems.filter(function(params) {
  //   if (params.gender) {
  //   }
  // });
}

function addTwoTodoItems(): void {
  const item1 = {
    id:4,
    title: 'item4',
    done: false
  }
  addTodo(item1);
  addTodo({
    id:4,
    title: 'item4',
    done: false
  });
}

// NOTE: 유틸 함수
function log() : void{
  console.log(todoItems);
}

todoItems = fetchTodoItems();
addTwoTodoItems();
log();
