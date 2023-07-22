export const getDataAndTime = (ISOdate) => {
    const givenDate = new Date(ISOdate);
    
    return `${givenDate.getFullYear()}-${givenDate.getMonth()+1}-${givenDate.getDay()}`
}