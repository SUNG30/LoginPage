const names = document.getElementById('inputName')
const Password = document.getElementById('pass')
const form = document.getElementById('form1')
const Box1  = document.getElementById('Box1')
const valueElement = document.getElementById('showValue')
form.addEventListener('submit' , (e)=>{
    let messages = []
    if(names.value === '' || names.value === null){
        messages.push('Name must be fill')
    }
    else{
        messages.push('UserName:'+names.value)
    }
    if(Password.value === '' || Password.value === null){
        messages.push('Password must be fill')
    }
    else{
        messages.push('Password:' + Password.value)
    }
    if (messages.length > 0 ){
        e.preventDefault()
        Box1.innerText= messages.join('\n')
    }
})
      