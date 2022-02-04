const addItem = (data) => {
    return {
        type: "ADD_ITEM",
        payload: data
    }
}
const removeItem = (data) => {
    return {
        type: "REMOVE_ITEM",
        payload: data
    }
}
const clearItems = () => {
    return {
        type: "CLEAR",
    }
}

export default (addItem, removeItem, clearItems);