
export const required = (value) =>{
    if(value) return undefined;
    return 'field is required!'
}

export const maxLengthCreator = (maxLength) => {
    return (value) => {
        if(value && value.length > maxLength) {
            console.log(`max length ${maxLength} sym!`)
            return `max length ${maxLength} sym!`
        };
        return undefined;
    }
}
