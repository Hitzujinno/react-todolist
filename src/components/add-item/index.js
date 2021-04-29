import React from "react";

class AddItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
           inputValue: ''
        }
    }

    onChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }

    onClick() {
        this.props.onClick(this.state.inputValue)
        this.setState({
            inputValue: ''
        })
    }

    render() {
        return (
            <div>
                <input type='text' value={this.state.inputValue} onChange={this.onChange.bind(this)} />
                <button onClick={this.onClick.bind(this)}>新增</button>
                {/*<button onClick={() => this.onClick}></button>*/}
            </div>

        )
    }
}

export default AddItem;
