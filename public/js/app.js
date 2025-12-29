while (true) {
    let askUser = prompt("What do you want now?\n- sign up\n- login\n- change password\n- exit")

    askUser = askUser.trim().toLowerCase()

    if (askUser === "exit") {
        alert("menu")
        continue
    }

    if (askUser === "sign up") {
        alert("chosen sign up")
    } else if (askUser === "login up") {
        alert("chosen login")
    } else if (askUser === "change password") {
        alert("chosen change password")
    } else {
        alert("You are not serious")
    }
}

