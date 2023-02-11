function login(){
    Username = document.getElementById("username").value;
    Password = (document.getElementById("password"));
    Date_of_birth = document.getElementById("dob").value;
    user = {
        Username: Username,
        Password: Password,
        Date_of_birth: Date_of_birth,
    };
    user_data = JSON.stringify(user);
    localStorage.setItem("login-info", user_data);
    window.location.href="show.html"
}
