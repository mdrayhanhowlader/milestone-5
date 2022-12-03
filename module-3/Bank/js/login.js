document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email')
    const passwordField = document.getElementById('user-password')

    const email = emailField.value
    const password = passwordField.value



    if(email === 'hello@gmail.com' && password === 'password')
    {
        window.location.href = 'bank.html'
    }else {
        alert('Enter valid email and password')
    }
})