let arr = [
    {name: 'alex', age: 35},
    {name: 'tom', age: 35},
    {name: 'jonny', age: 32},
    {name: 'joe', age: 27},
    {name: 'chris', age: 18},
    {name: 'alex', age: 65},
    {name: 'gabby', age: 22}
]

let filteredArray = arr.map((item) => {
    item.id = "";
    return item;
})

console.log(filteredArray)