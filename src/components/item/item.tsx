import React, {useState} from "react";
import {ItemModel} from "../../domain/models";

interface ItemProps {
    item: ItemModel
    handleClick: (item: ItemModel) => void
    handleDelete: (item: ItemModel) => void
    handleInputChange: (newLabel: string, item: ItemModel) => void
}

export const Item = ({item, handleClick, handleDelete, handleInputChange}: ItemProps) => {

    const [crossVisibility, setCrossVisibility] = useState(false);

    const toggleCrossVisibility = (s: string) => {
        console.log(s)
        setCrossVisibility((prev) => !prev)
    }

    return (
        <div className='itemContainer' >
            <li key={item.id} className={item.isChecked ? 'scratched' : ''} >
                <input type="checkbox" name={item.label} checked={item.isChecked} onChange={() => handleClick(item)}/>
                <input type="text" name="" id="" value={item.label}
                       onChange={({target: {value}}) => handleInputChange(value, item)}
                       onFocus={() => toggleCrossVisibility('test')}
                       onBlur={() => setTimeout(toggleCrossVisibility, 100)}

                />
            </li>
            {crossVisibility &&
              <span
                onClick={() => handleDelete(item)}>&#x2715;</span>
            }
        </div>
    );
};