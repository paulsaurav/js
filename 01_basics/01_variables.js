const accountId = 144553
let accountEmail = 'sauravpaul03@gmail.com'
var accountPassword = '123456'
accountCity = 'Delhi'
let accountState;

accountEmail = 'hello@test.com'
accountPassword = '12121212'
accountCity = 'Mumbai'

console.log(accountId)
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])


/*
Prefer not to use var
use let instead
because of issue in block scope and functional scope
*/