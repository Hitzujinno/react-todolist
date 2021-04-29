import React from "react";

function ListItem(props) {
    return (
        <li>
            <span className='item-name'>{props.value}</span>
            <span className='item-state'>{props.state ? '已完成' : '未完成'}</span>
            <button onClick={props.onClick}>{!props.state ? '完成' : '未完成'}</button>
            <button onClick={props.onDelete}>删除</button>
        </li>
    )
}

export default ListItem;
