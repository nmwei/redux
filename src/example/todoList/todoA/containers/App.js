import React from 'react'
import Footer from './VisibleFooter'
import AddTodo from './VisibleAddTodo'
import TodoList from './VisibleTodoList'


const App = () => (
    <div>
        <AddTodo />
        <TodoList />
        <Footer />
    </div>
)

export default App
