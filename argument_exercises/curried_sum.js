// PROTOTYPE CURRY VERSION

// Function.prototype.curry = function(count) {
//     const args = [];
//     let that = this;
//     return function _curriedAdd(num) {
//         args.push(num);
//         count--;
//         if (count === 0) {
//             return that(...args);
//         }
//         else {
//             return _curriedAdd;
//         };
//     };
// };


// CURRIED SUM
function curriedSum(numArgs) {
    let numbers = [];

    return function _curriedSum(num) {
        numbers.push(num);
        if (numbers.length === numArgs) {
                let sum = 0
                numbers.forEach(ele => {
                    sum += ele
                });
                return sum;
        }
        else {
            return _curriedSum;
        };
    };
};
