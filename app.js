console.log('connected')

let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let lower = 'abcdefghijklmnopqrstuvwxyz'
let numbers = '1234567890'
let specialChar = '!@#$%^&*()'
let dataArray = [upper, lower, numbers, specialChar]
let pass = document.getElementById('pass')
let Cpass = document.getElementById('Cpass')
let fname = document.getElementById('fname')
let lname = document.getElementById('lname')
let email = document.getElementById('email')
let phone = document.getElementById('phone')
let phoneError = document.getElementById('phoneError')
let fNameError = document.getElementById('fNameError')
let lNameError = document.getElementById('lNameError')
let emailError = document.getElementById('emailError')


const randomString = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}

const generatePassword = () => {
    let index = 0
    let password = ''
    let passLength = (Math.floor(Math.random() * (11 - 8))) + 8
    for (let i = 1; i <= passLength; i++) {
        index > 3 ? index = 0 : index
        password += randomString(dataArray[index])
        index++
    }
    pass.value = password
}
    
const handleSubmit = (e) => {
    e.preventDefault()
    // if (Cpass.value !== pass.value) console.log('password is not same');
    // if(Cpass.value=='' || pass.value==''){
    //     document.getElementById('CpassError').innerText='enter password'

    // }
    // if (fname.value.length == 0) {
    //     fNameError.innerText = '*first name is empty'
    // }
    // else { fNameError.innerText = '' }
    // if (lname.value.length == 0) {
    //     lNameError.innerText = '*last name is empty'
    // }
    // else { lNameError.innerText = '' }
    // if (phone.value.length == 0) {
    //     phoneError.innerText = '*Phone number is empty'
    // }
    // else { phoneError.innerText = '' }
    // if (email.value.length == 0) {
    //     emailError.innerText = '*Email is empty'
    // }
    // else { emailError.innerText = '' }

    // if (pass.value.length < 1){
    //     return false
    // }
    if(fname.value == '' || lname.value== '' || phone.value =='' || email.value=='' || pass.value =='' || Cpass==''){
        console.log('empty')
        handleTyping()
        return false
    }
        console.log('submit')
}

function handleTyping(){
    if(fname.value.length < 1){
        fNameError.innerText = '*first name is empty'
    }else{
        fNameError.innerText = ''
    }
    if(lname.value.length < 1){
        lNameError.innerText = '*last name is empty'
    }else{
        lNameError.innerText = ''
    }
    if(phone.value.length < 1){
        phoneError.innerText = '*phone no is empty'
    }else{
        phoneError.innerText = ''
    }
    if(email.value.length < 1){
        emailError.innerText = '*email is empty'
    }else{
        emailError.innerText = ''
    }
    // pass.classList.add('yello')
    // console.log('asdasd')

}
