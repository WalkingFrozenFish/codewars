// Kata 27 - Regex Password Validation
function validate(password) {

    let regx = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/g

    if (password.match(regx)) {
        console.log(password);
        return true
    } else {
        console.log(password);
        return false
    }

}

validate('djI38D55'), 'djI38D55 - Expected true'
!validate('a2.d412'), 'a2.d412 - Expected false'
!validate('JHD5FJ53'), 'JHD5FJ53 - Expected false'
!validate('!fdjn345'), '!fdjn345 - Expected false'
!validate('jfkdfj3j'), 'jfkdfj3j - Expected false'
!validate('123'), '123 - Expected false'
!validate('abc'), 'abc - Expected false'
validate('Password123'), 'Password123 - Expected true'