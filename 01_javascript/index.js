
function employee() {
    let salary = 5000;

    if(salary > 4000) {
        let bonus = 500;
    } // let respect to block

    // console.log(bonus);
} // let respect to function scope ;

console.log(salary);

employee();

function employee2(){

    var salary = 3000;

    if(salary > 2000) {
        var bonus = 20; 
    } // var does not respect block
    // console.log(bonus);
} // var give respect to function 

console.log(salary)
employee2();