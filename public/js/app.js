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
        function checkName(name) {  // ! function name
            return name.trim().split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(" ")
        }

        while (uName.replace(/\s+/g, "").length < 5 || !/^[a-zA-Z\s]+$/.test(uName)) {
            alert("Write at least 5 letters and don't use numbers or special characters")
            uName = prompt("Insert your name")
        }
        uName = checkName(uName)

        // * email
        let uMail = prompt("Insert your email").trim().toLowerCase()
        function checkEmail(email) {   // ! function email 
            if (email.includes(" ")) return true
            if (!email.includes("@")) return true
            if (email.length < 10) return true
            return false
        }
        while (!uMail || checkEmail(uMail) || databasse.some(user => user.email === uMail)) {
            // ^ check wash ende had l email before
            if (databasse.some(user => user.email === uMail)) {
                alert("This email is already registered")
            } else {
                alert("Invalid email. Must contain '@', no spaces, and at least 10 characters")
            }
            uMail = prompt("Insert your email").trim().toLowerCase()
        }
        // * age
        let uAge = Number(prompt("Insert your age "))
        while (isNaN(uAge) || uAge < 18) {
            if (isNaN(uAge)) {
                alert("Insert a number ")
            }
            else if (uAge < 18) {
                alert("You are too young")
            }
                uAge = Number(prompt("Insert your age "))
        }
        // * password
        let uPassword = prompt("Greate your password").trim()
        function checkPassword(password) {    // ! function password
            if(password.includes(" ")) return true
            if(password.replace(/\s+/g, "").length < 7 ) return true
            if(!/[a-zA-Z]/.test(password)) return true
            if(!/[@#\-+*/]/.test(password)) return true
            return false
        }
        while (!uPassword || checkPassword(uPassword)) {
            alert("- Password must be at least 7 characters long,\n - cannot contain spaces,\n - and must include at least one special character: @, #, -, +, *, /")
            uPassword = prompt("Greate your password").trim()
        }
        // ^ confirme Password
        let cPassword = prompt("Confirme your password").trim()
        if (cPassword !== uPassword) {
            alert("Your Password not correct")
            break
        }
        let newUser = new Info(uName, uMail , uAge , uPassword)
        databasse.push(newUser)

        alert("Welcome")
        console.log(databasse)

    } else if (askUser === "login up") {
        let lMail = prompt("enter your email please : ").trim().toLowerCase()
        
        let findMail = databasse.findIndex(e => e.email.toLowerCase() == lMail)
        if (findMail != -1) {
            // let lPassword = prompt("enter your password")
            
        }else{
            alert("makaynch had email")
        }

    } else if (askUser === "change password") {
        alert("Chosen change password")
    } else {
        alert("You are not serious")
    }
}
