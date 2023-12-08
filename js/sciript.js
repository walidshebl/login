function saveData() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;


  var userRecords = new Array()
  userRecords = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []

  if (loginForm() == true) {
    if (userRecords.some((v) => {
      return v.email == email
    })) {
      alert("Duplicate Data");
    }

    else {
      userRecords.push({
        "name": name,
        "email": email,
        "password": password
      })

      localStorage.setItem("users", JSON.stringify(userRecords));
      clerForm()
      alert("the registration is done ")
    }
  }
  else {
    alert(" data fild")
  }

}
function clerForm() {
  name.value= "";
  email.value= "";
  password.value= "";

}


function saveDataLogin() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;


  var userRecords = new Array()
  userRecords = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []

  if (loginForm() == true) {
    if (userRecords.some((v) => {
      return v.email == email && v.password == password
    })) {

      var currentUser = userRecords.filter((v) => {
        return v.email == email && v.password == password
      })[0]
      localStorage.setItem("name", currentUser.name)
      localStorage.setItem("email", currentUser.email)
      window.location.href = "Home.html"
    }
    else {
      alert("login fail")

    }
  }
  else {
    alert("passwort or email faill")
  }

}

function logOut() {
  localStorage.removeItem("name")
  localStorage.removeItem("email")
  window.location.href = "index.html"
}





function loginForm() {
  var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (regex.test(email.value) == true) {
    return true
  }
  else {
    return false
  }
}
