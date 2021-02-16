export const initialState = {
    before: [],
    current: '#00FF00',
    after: []
};

export default function reducer(state, action) {
    switch (action.type) {
        case 'UNDO':
            return {
                before: state.before.slice(0, -1),
                current: state.before[state.before.length - 1],
                after: [state.current, ...state.after]
            };
        case 'REDO':
            return {
                before: [...state.before, state.current],
                current: state.after[0],
                after: state.after.slice(1)
            };
        case 'RECORD':
            return {
                ...state,
                before: [...state.before, state.current],
                current: action.payload,

            };
        default:
            return state;
    }
}