import React from 'react';
import ListItem from "./components/list-item";
import AddItem from "./components/add-item";
import './index.css';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      list: [{ id: 1, value: '吃饭', hasDo: false }, { id: 2, value: '睡觉', hasDo: false }, { id: 3, value: '打豆豆', hasDo: false }]
    }
  }

  getData(data) {
    // const list = this.state.list
    // list.push({ id: list.length, value: data, hasDo: false })
    // this.setState({
    //   list
    // })
    this.setState((state) => {
      // 重要：在更新的时候读取 `state`，而不是 `this.state`。
      const list = state.list.concat([{ id: state.list.length, value: data, hasDo: false }])
      return { list }
    })
  }

  finish(i) {
    this.setState((state) => {
      return {
        list: state.list.map((v, index) => {
          if (i === index) {
            v.hasDo = !v.hasDo
          }
          return v
        })
      }
    })
    // const list = [...this.state.list]
    // this.setState({
    //   list: list.map((v, index) => index === i ? {...v, hasDo: !v.hasDo}: v)
    // })
  }

  delete(i) {
    const list = [...this.state.list]
    this.setState({
      list: list.filter((v, index) => index !== i)
    })
  }

  render() {
    return (
        <div>
          <AddItem onClick={this.getData.bind(this)} />
          <ul className='todolist'>
            {
              this.state.list.map((v, i) => {
                return (<ListItem
                    value={v.value}
                    state={v.hasDo}
                    onClick={() => this.finish(i)}
                    onDelete={() => this.delete(i)}
                    key={i}
                />)
              })
            }
          </ul>
        </div>
    )
  }
}

export default App;
