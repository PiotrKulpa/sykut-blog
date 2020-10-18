const setTotalPagesArray = (totalPages) => {
    let initArray = [];
    for(let x = 0; x < totalPages; x++) {
        initArray.push(x +1);
    }
    return initArray;
}

export default setTotalPagesArray;