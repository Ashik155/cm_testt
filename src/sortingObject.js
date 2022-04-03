const sortingObject = (Object, key)=>{
    return Object
    .filter((item) => item.type === key)
    .sort((a, b) => a.menuOrder - b.menuOrder);
}

module.exports = sortingObject;