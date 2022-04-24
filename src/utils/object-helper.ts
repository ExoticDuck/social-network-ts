export const updateObjectInArray = (items: any[], itemId: number, objPropName: string, newObjProps: any) => {
return items.map(item => {
    if (item[objPropName] === itemId) {
        let userCopy = { ...item, ...newObjProps};
        return userCopy;
    }
    return item;
})
}