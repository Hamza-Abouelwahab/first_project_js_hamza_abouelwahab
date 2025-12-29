class Info {
    constructor(name, email, age, password) {
        this.name = name
        this.email = email
        this.age = age
        this.password = password
    }
}

let databasse = []

while (true) {

    let askUser = prompt("What do you want now?\n- sign up\n- login up\n- change password\n- exit")

    askUser = askUser.trim().toLowerCase()

    if (askUser === "exit") {
        alert("Exiting menu...")
        continue
    }

    if (askUser === "sign up") {

        // * Name
        let uName = prompt("Insert your name")
        function checkName(name) {
            return name.trim().split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(" ")
        }
        
        while (uName.replace(/\s+/g, "").length < 5 || !/^[a-zA-Z\s]+$/.test(uName)) {
            alert("Write at least 5 letters and don't use numbers or special characters")
            uName = prompt("Insert your name")
        }
        uName = checkName(uName)

        let newUser = new Info(uName)
        databasse.push(newUser)

        alert("Welcome")
        console.log(databasse)

    } else if (askUser === "login up") {
        alert("Chosen login")
    } else if (askUser === "change password") {
        alert("Chosen change password")
    } else {
        alert("You are not serious")
    }
}
