const changeName = (value) => {
    return { type: "CHANGE_NAME", payload: typeof value !== 'object' ? value : {...value}  }
}
const changeSecond = (value) => {
    return { type: "CHANGE_SECOND", payload: typeof value !== 'object' ? value : {...value} }
}
const changeAge = (value) => {
    return { type: "CHANGE_AGE", payload: typeof value !== 'object' ? value : {...value}  }
}
// const changeName = { type: "CHANGE_NAME" }
// const changeSecond = { type: "CHANGE_SECOND" }
// const changeAge = { type: "CHANGE_AGE" }
export { changeAge, changeName, changeSecond}
