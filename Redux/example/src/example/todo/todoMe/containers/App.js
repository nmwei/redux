/**
 * Created by nmw on 2017/3/24.
 */

import React from 'react'
import Footer from './FooterContainer'
import AddTodo from './AddTodoContainer'
import VisibleTodoList from './TodoListContainer'

const App = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
)

export default App
