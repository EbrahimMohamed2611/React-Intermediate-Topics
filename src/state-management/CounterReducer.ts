export enum Type {
    INCREMENT,
    RESET
}

interface Action {
    type: Type;
}

const counterReducer = (state: number, action: Action): number => {

    switch (action.type) {
        case Type.INCREMENT:
            return state + 1;
        case Type.RESET:
            return 0;
    }

    return state;
}


export default counterReducer;