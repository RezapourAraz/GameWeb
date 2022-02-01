const getTopRank = (games) => {
    const tops = [];
    games.map(item => {
        if(item.rating >= 1) {
            tops.push(item);
        }
        return tops;
    })
    return tops;
}

const isInList = (state, id) => {
    const result = !state.wishList.find(item => item.id === id)
    return result;
}

export {getTopRank, isInList};