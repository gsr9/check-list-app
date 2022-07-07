import {ActionModel, ItemActions, ItemModel} from "../domain/models";

export const itemReducer = (state: ItemModel[] = [], {type, payload}: ActionModel) => {
    let newState: ItemModel[];
    switch (type) {
        case ItemActions.add:
            newState = [...state, payload];
            break;
        case ItemActions.delete:
            newState = state.filter(({id}) => id !== payload.id);
            break;
        case ItemActions.toggle:
            newState = state.map((item) => (item.id === payload.id ? {...item, isChecked: !item.isChecked} : item));
            break;
        case ItemActions.update:
            newState = state.map((item) => (item.id === payload.id ? payload : item));
            break;
        default:
            newState = state;
    }
    return newState.sort(({label: labelA}, {label: labelB}) =>
        labelA.toLowerCase() < labelB.toLowerCase() ? -1 : 1)
};
