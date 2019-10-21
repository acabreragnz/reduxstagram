function postComments(state = [], action) {
    switch (action.type) {
        case 'ADD_COMMENT':
            const {author: user, comment: text} = action;

            return [...state, {text, user}];
        case 'REMOVE_COMMENT':
            return [
                ...state.slice(0, action.commentIndex),
                ...state.slice(action.commentIndex + 1)
            ];
        default:
            return state;
    }

    return state;
}

function comments(state = {}, action) {
    if (action.postId) {
        return {
            ...state,
            [action.postId]: postComments(state[action.postId], action)
        }
    }

    return state;
}

export default comments;