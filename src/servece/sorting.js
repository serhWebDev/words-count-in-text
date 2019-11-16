export default function sortBy(array, by, desc = false) {
    const newArray = array.sort((a, b) => {
        const aValue = by ? a[by] : a;
        const bValue = by ? b[by] : b;
        return aValue > bValue ? 1 : aValue < bValue ? -1 : 0;
    });
    return desc === true ? newArray.reverse() : newArray;
}