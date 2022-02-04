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

const isInList = (wishlist, id) => {
    const result = !wishlist.find(item => item.id === id)
    return result;
}

export {getTopRank, isInList};