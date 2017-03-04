import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'  //导入createStore
import Counter from './components/Counter'
import counter from './reducers'
/*
* 大多数情况，你可以不用它，只用 React 就够了。
* Redux：同一个地方查询状态、改变状态、传播状态的变化(所有的状态保存在一个对象(由store生成的state)里)。
* 使用场景: 多交互、多数据源。
* */

/*        1. Store(数据容器)
* (1)Store 是保存数据的容器。一个应用只能有一个 Store。
* (2)import { createStore } from 'redux';
*    const store = createStore(reducer);  //创建数据容器
* (3)createStore函数接受另一个函数(reducer)作为参数，返回新生成的 Store 对象。
* */
const store = createStore(counter)     //创建数据容器
const rootEl = document.getElementById('root')

/*      2. State(所有数据)
*  (1)store对象包含所有数据。
*  (2)通过store.getState()方法可以拿到此时的State。
*  注释:State与View一一对应。只要State 相同，View 就相同。
* */
/*
*        3. Action(动作)
* Action 是一个对象，其中的type属性是必须的。
*     const action = {
          type: 'ADD_TODO',      //Action名称
          payload: 'Learn Redux' //携带的信息
      };
*改变 State 的唯一办法，就是使用 Action。它会运数据到 Store。
*/
/*
*      4. Action Creator(动作生成器)
* (1)View 要发送多少种消息，就会有多少种 Action。
* (2)如果都手写，会很麻烦。可以定义一个函数来生成 Action，这个函数就叫 Action Creator。
  (3)const ADD_TODO = '添加一项';
   function addTodo(text) {
      return {
        type: ADD_TODO,
        text
      }
   }
  const action = addTodo('Learn Redux');
* addTodo函数就是一个 Action Creator。
* */
/*
 reducer  ——函数  (action + oldState = > newState)
 const store = createStore(reducer)

 store.getState();   //得到数据
 store.dispath(action);   //更新数据
 store.SubScribe(fn);//监听数据变化

*/
/*
*         5. store.dispatch(接收并发送action的函数)
*   (1)store.dispatch()是 View 发出 Action 的唯一方法。
 *  (2) import { createStore } from 'redux';
        const store = createStore(fn);
        store.dispatch({
          type: 'ADD_TODO',
          payload: 'Learn Redux'
        });
     store.dispatch接受一个 Action 对象作为参数，将它发送出去。
    (3)结合 Action Creator，这段代码可以改写如下。
    store.dispatch(addTodo('Learn Redux'));
* */
/*
*         6. Reducer(action + oldState => newState)
*   (1)Store 收到 Action 以后，必须给出一个新的 State，这样 View 才会发生变化。这种 State 的计算过程就叫做 Reducer。
*   (2)Reducer 是一个函数，它接受 Action 和当前 State 作为参数，返回一个新的 State。
*   (3)const reducer = function (state, action) {
          // ...
          return new_state;
       };
    (4)reducer函数书写
       const defaultState = 0;
       const reducer = (state = defaultState, action) => {
          switch (action.type) {
             case 'ADD':
                return state + action.payload;
             default:
                return state;
            }
       };
       const state = reducer(1, {
          type: 'ADD',
          payload: 2
       });
*   (5)reducer函数调用
*   Reducer 函数不用像上面这样手动调用，store.dispatch方法会触发 Reducer 的自动执行。为此，Store 需要知道 Reducer函数，做法就是在生成 Store 的时候，将 Reducer 传入createStore方法(见1)。
*   import { createStore } from 'redux';
    const store = createStore(reducer);
    (6)为什么这个函数叫做 Reducer 呢？因为它可以作为数组的reduce方法的参数。请看下面的例子，一系列 Action 对象按照顺序作为一个数组。
   const actions = [
        { type: 'ADD', payload: 0 },
        { type: 'ADD', payload: 1 },
        { type: 'ADD', payload: 2 }
   ];
   const total = actions.reduce(reducer, 0); // 3
  上面代码中，数组actions表示依次有三个 Action，分别是加0、加1和加2。数组的reduce方法接受 Reducer 函数作为参数，就可以直接得到最终的状态3。
  注意:改变状态的两种方式
      ①store.dispatch(action), 自动调用reducer函数，传递action
      ②actions.reduce(reducer, 0)
* */
/*
*       7. 纯函数
*  (1)Reducer 函数最重要的特征是，它是一个纯函数。同样的输入，必定得到同样的输出。
   (2)Reducer 函数里面不能改变 State，必须返回一个全新的对象。
   (3)最好把 State 对象设成只读。你没法改变它，要得到新的 State，唯一办法就是生成一个新对象。
* */
/*
*       8. store.subscribe()
*  (1)Store 允许使用store.subscribe方法设置监听函数，一旦 State 发生变化，就自动执行这个函数。
*  (2) 示例
*      import { createStore } from 'redux';
       const store = createStore(reducer);
       store.subscribe(listener);
   只要把 View 的更新函数（对于 React 项目，就是组件的render方法或setState方法）放入listen，就会实现 View 的自动渲染。
    (3)接触监听
    store.subscribe方法返回一个函数，调用这个函数就可以解除监听。
    let unsubscribe = store.subscribe(() =>
        console.log(store.getState())
    );
    unsubscribe();
* */
/*
* 总结:
* (1)不使用redux项目
*   用户点击 → 触发函数 → setState →更新视图
* (2)使用redux项目
*   一个应用只能有一个 Store，只有一个State 对象。
*   用户点击 → 动作生成器生成动作(Action Creator)
*   → store.dispatch(action)
*   → reducer自动执行(oldState + action = newState)
*   → store.subscribe(listener);监听函数自动执行
* (3) store数据容器的三个方法
*    store.getState()  获取数据
*    store.dispatch()  发送时间，reducer自动修改数据
*    store.subscribe(listener)  数据变化，listener函数自动执行
*
* */

const render = () => ReactDOM.render(
  <Counter
    value={store.getState()}  //获取当前时刻state状态
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
  />,
  rootEl
)
/*
* (1) Counter组件是纯组件，改变状态、事件处理的逻辑写在这里。
*
* */
render()
store.subscribe(render)
