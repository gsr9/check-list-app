import React, {Reducer, useEffect, useReducer} from "react";
import './App.scss'
import {TodoList} from "./components/todo-list/TodoList";
import {AddItem} from "./components/add-item/AddItem";
import {ActionModel, ItemActions, ItemModel} from "./domain/models";
import {itemReducer} from "./reducers/itemReducer";


const init = () => {
    const itemsStringified = localStorage.getItem("items");
    return (itemsStringified && JSON.parse(itemsStringified)) ||
        [{  id: 'item_1',
            label: '',
            isChecked: false,

        }];
};

export const App = () => {

    const [itemList, dispatch] = useReducer<Reducer<ItemModel[], ActionModel>, any>(itemReducer, [], init);
    useEffect(() => {
        localStorage.setItem("items", JSON.stringify(itemList));
    }, [itemList]);


    const handleAddItem = (itemName: string): void => {
        const newItem = {
            id: `item_${itemList.length + 1}`,
            label: itemName,
            isChecked: false
        };
        dispatch({type: ItemActions.add, payload: newItem});
    }

    const handleItemClick = (item: ItemModel): void => {
        dispatch({type: ItemActions.toggle, payload: item})
    }

    const handleItemDelete = (item: ItemModel): void => {
        dispatch({type: ItemActions.delete, payload: item})
    }

    const handleItemLabelChange = (label: string, item: ItemModel): void => {
        dispatch({type: ItemActions.update, payload: {...item, label}})
    }


    return (
        <div className={'mobile-first-container'}>
            <section className={'container'}>
                <header>
                    <h1>Lista de la compra</h1>
                </header>
                <TodoList itemList={itemList.filter(el => !el.isChecked)}
                          handleItemClick={handleItemClick}
                          handleItemDelete={handleItemDelete}
                          handleItemLabelChange={handleItemLabelChange}
                >
                <AddItem addItem={handleAddItem}/>
                </TodoList>
                <TodoList itemList={itemList.filter(el => el.isChecked)}
                          handleItemClick={handleItemClick}
                          handleItemDelete={handleItemDelete}
                          handleItemLabelChange={handleItemLabelChange}
                />
            </section>
        </div>
    );
};