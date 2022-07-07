import React, {ChangeEvent, useRef, useState} from "react";


interface AddItemProps {
    addItem: (itemName: string) => void
}

export const AddItem = ({addItem}: AddItemProps) => {
    const EnterKey = 'Enter';
    const [state, setState] = useState<string>('');
    const inputRef = useRef<HTMLInputElement>(null);
    const handleOnChange = ({target}: ChangeEvent<HTMLInputElement>) => {
        setState(target.value)
    }

    const handleOnPressEnter = () => {
        if (state) {
            addItem(state)
            if (inputRef?.current)
                inputRef.current.value = ''
            setState('')
        }
    }

    return (
        <div>
            <input type="text"
                   enterKeyHint={'done'}
                   name="addTodo" id="addTodo" ref={inputRef} onChange={handleOnChange}
                   onKeyDown={({key}) => key.includes(EnterKey) && handleOnPressEnter()}/>
        </div>
    );
};