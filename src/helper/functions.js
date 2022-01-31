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

export {getTopRank};