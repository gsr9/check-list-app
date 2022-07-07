import React from "react";
import {ItemModel} from "../../domain/models";
import {Item} from "../item/item";

interface TodoListProps {
    itemList: ItemModel[]
    handleItemClick: (item: ItemModel) => void
    handleItemDelete: (item: ItemModel) => void
    handleItemLabelChange: (newLabel:string, item: ItemModel) => void
    children?: any
}



export const TodoList = ({itemList, handleItemClick, handleItemDelete, handleItemLabelChange, children}: TodoListProps) => {
    return (
        <div className="item-list-container">
            <ul style={{listStyle: "none", padding: 0}}>
                {itemList.map(el =>
                    <Item key={el.id} item={el} handleClick={handleItemClick} handleDelete={handleItemDelete}
                    handleInputChange={handleItemLabelChange}/>
                )}
                { children && <li>{children}</li>}
            </ul>
            <br/>
        </div>
    );
};