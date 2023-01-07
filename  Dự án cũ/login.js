function authentication(){
    message = document.getElementById('login_message')
    username = document.getElementById('username').value
    password = document.getElementById('pw').value
    email = document.getElementById('email').value
    if(username == 'admin' && password == '123456' && email == 'admin123@gmail.com'){
     document.getElementById('login_message').innerHTML = 'login Success!'
     window.location.href = "home.html"
    } 
    else{
        document.getElementById('login_message').innerHTML = 'login fail!'} 
     }
