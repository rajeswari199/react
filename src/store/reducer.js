
export const List = (state = [], action) => {
    switch (action.type) {
        case 'list':
            return [...state, { value: action.items, isDeleted: false, checked: false }];
        case 'calculator':
            return { ...action.payload };
        case 'check':
            return [...action.index];
        case 'weather':
            return { ...action.index }
        default:
            return state;
    }
}

export default List;
