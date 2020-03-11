import * as actionType from './../constants/ActionType'

export const actDelete = (userId) => {
    return {
        type: actionType.DELETE,
        userId: userId
    }
}

export const actGetUserEdit = (user) => {
    return {
        type: actionType.GETUSEREDIT,
        user: user
    }
}

export const actSearch = (keyWord) => {
    return {
        type: actionType.SEARCH,
        keyWord: keyWord
    }
}

export const actChangeValue = (target) => {
    return {
        type: actionType.CHANGEVALUE,
        target: target
    }
}

export const actSubmitUser = (event) => {
    return {
        type: actionType.SUBMITUSER,
        event: event
    }
}

export const actAddUser = () => {
    return {
        type: actionType.ADDUSER
    }
}