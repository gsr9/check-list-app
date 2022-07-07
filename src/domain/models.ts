export interface ItemModel {
    id: string;
    label: string;
    isChecked: boolean
}


export interface ActionModel {
    type: string;
    payload: ItemModel;
}

export enum ItemActions {
    add = "add",
    delete = "delete",
    toggle = "toggle",
    update = "update",
}