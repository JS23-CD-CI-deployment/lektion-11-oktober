function increase(value) {
    return {
        type: 'INCREASE',
        payload: value
    }
}

function decrease(value) {
    return {
        type: 'DECREASE',
        payload: value
    }
}

export { increase, decrease }