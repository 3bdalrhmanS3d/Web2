const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// fun 
function isEven(num) {
    return num % 2 === 0;
}

const evenNymbers = [] ;

for(let i in numbers) {

    if(isEven( i )) {
        const square = { num : i , square : i * i };
        evenNymbers.push(square);
    }
    
}

console.log(evenNymbers);