
class Info {
    constructor(name, email, age, password,money,loanAmount, remainingLoan) {
        this.name = name
        this.email = email
        this.age = age
        this.password = password
        this.money = money
        this.loanAmount = loanAmount
        this.remainingLoan = remainingLoan
    }
}
let databasse = []

// ! function name
function checkName(name) {  
    return name.trim().split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(" ")
}
// ! function email 
function checkEmail(email) {    
            if (email.includes(" ")) return true
            if(email.split("@").length -1 !== 1) return true
            if (email.length < 10) return true
            if(/[A-Z]/.test(email)) return true
            return false
        }
// ! function password
function checkPassword(password) {    
            if(password.includes(" ")) return true
            if(password.replace(/\s+/g, "").length < 7 ) return true
            if(!/[a-zA-Z]/.test(password)) return true
            if(password.split("@").length -1 !== 1) return true
            return false
        }

// * ------------------------------------function login------------------------------------------
function login() {
    while (true) {
            let lMail = prompt("Enter your email please : ").trim().toLowerCase()
            let findMail = databasse.findIndex(e => e.email.toLowerCase() == lMail)
        if (findMail != -1) {
            
            while (true) {
                let lPassword = prompt("Enter your password please")
                if (databasse[findMail].password == lPassword) {
                alert("Welcome agian " + databasse[findMail].name)
                // alert("Your money is " + databasse[findMail].money)

                    let user = databasse[findMail]

                    if (user.remainingLoan > 0) {
                        let pinalty = user.loanAmount * 0.1
                        if (pinalty > user.remainingLoan) {
                            pinalty = user.remainingLoan
                            
                        }
                        if (pinalty > 0 ) {
                        user.money -= pinalty
                        user.remainingLoan -= pinalty
                        alert("Loan payment: -" + pinalty)
                        console.log("Loan payment: -" + pinalty)
                        }
                    }
                    alert("Your money is " + user.money)
                    console.log("Your money is " + user.money)

                    return user
            }else{
                alert("Incorrect password, please try again") 
            }
        }
        }else{
        alert("This email is not registered")            
        }
    }
}
// *----------------------------------------------------- user Menu befor login user -------------------------------------------------------------
function userMenu(user){
    let userLog  = prompt("What do you want Mester " +  user.name + "\n" + "- Logout" + "\n" + "- Withraw Money " + "\n" + "- Deposit Money" + "\n" + "- Take a Loan").trim().toLowerCase()
    if (userLog == "logout") {
        alert(" Good by ")
        // * ki rja3 l part lawela 
    }
    else if(userLog == "withraw money") {
        withrawMoney(user)
    }
    else if (userLog == "deposit money") {
        depositMoney(user)
    }
    else if (userLog == "take a loan") {
        takeALoan(user)
    }else{
        alert("error")
    }
    return userLog
}
// * ---------------------------------------------withraw money-------------------------------------------------------
function withrawMoney(user) {
    while (true) {
        let amount = Number(prompt("Enter the amount you want to withdraw"))
    if (isNaN(amount)) {
        alert("Please insert a valid number");
    }
    else if(0 >= amount){
        alert("Amount must be greater than 0")
    }
    else if (user.money < amount){
        alert("You don't have enough money")
    }
    else{
        user.money -= amount
        alert("Withdraw successful")
        alert( " Mester " + user.name + " your many now is " + user.money)
        console.log(  " Mester " +user.name + " your many now is " + user.money);
    
        break
    }
    }
}
    // * ------------------------------------------------deposit money------------------------------------------------------
        function depositMoney(user) {
            while (true) {
                let askUser = Number(prompt("Enter the amount you want to deposit"))
                if (isNaN(askUser)) {
                    alert("Please insert a valid number")
                }
                else if (askUser <= 0) {
                    alert("Amount must be greater than 0")
                }
                else{
                    user.money += askUser
                    alert("- Deposit successful: " + askUser + "\n" +"- Available balance: " + user.money);
                    break
                }
            }
        }
    // * -------------------------------------------------take a loan----------------------------------------------------
        function takeALoan(user){
            if (user.remainingLoan > 0) {
                alert("You already have a loan pay it first ")
                return
            }

            while (true) {
                let askUser = parseFloat(prompt("How much do you want to borrow ? (20% only)"))
                
                if (isNaN(askUser)) {
                    alert("Please insert a valid number")
                }

                else{
                    
                    if (askUser == 20) {
                        askUser = askUser / 100
                    }
                    else if (askUser !== 0.2  ){
                    alert("Loan must be 20%");
                        continue
                    }
                    askUser = Math.round(askUser * 100) / 100
                    
                    let baseLoan = user.money * askUser
                    user.loanAmount = baseLoan
                    user.remainingLoan = baseLoan
                    user.money += baseLoan
                    user.money = Math.round(user.money * 100 ) / 100
                    alert("Loan successful! Your money now is " + user.money);
                    console.log("Loan percentage stored:", baseLoan);
                    console.log("User money:", user.money);
                    
                    break
                }
            }
        }
    // & --------------------------------------------------------------------------------------------------
        while (true) {
            // ? ask user : 
        let askUser = prompt("What do you want now?\n- sign up\n- login\n- change password\n- exit")
    askUser = askUser.trim().toLowerCase()
    // todo had part dyal exit
    if (askUser === "exit") {
        alert("Exiting menu...")
        break
    }
    // todo : had part dyal sign up
    if (askUser === "sign up") {
        // * Name
        let uName = prompt("Insert your name")
        while (uName.replace(/\s+/g, "").length < 5 || !/^[a-zA-Z\s]+$/.test(uName)) {
            alert("Write at least 5 letters and don't use numbers or special characters")
            uName = prompt("Insert your name")
        }
        uName = checkName(uName)
        // * email
        let uMail = prompt("Insert your email").trim()
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
        while (isNaN(uAge) || uAge < 18 || uAge > 100) {
            if (isNaN(uAge)) {
                alert("Insert a number ")
            }
            else if (uAge < 18) {
                alert("You are too young")
            }
            else if (uAge > 100) {
                alert("you are too old ")
            }
                uAge = Number(prompt("Insert your age "))
        }
        // * password
        let uPassword = prompt("Greate your password").trim()
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

        // ~ push Info to databasse
        let newUser = new Info(uName, uMail , uAge , uPassword, 100)
        databasse.push(newUser)        
        alert("Your account has been created successfully.")
        console.log(databasse)

// TODO : had part dyal login
    } else if (askUser === "login") {
        let currentUser = login()
        userMenu(currentUser)
        

// todo : had part dyal change password
    } else if (askUser === "Change password") {
        let changeMail
        let findMail
        while (true) {
            changeMail = prompt("Enter your email please").trim().toLowerCase()
            findMail = databasse.findIndex(e => e.email.toLowerCase() == changeMail)
            if (findMail != -1) {
                let changePassword = prompt("Greate a new password ").trim()
                
            
        while (!changePassword || checkPassword(changePassword)) {
            alert("- Password must be at least 7 characters long,\n - cannot contain spaces,\n - and must include at least one special character: @, #, -, +, *, /")
            changePassword = prompt("Greate a new password").trim()
        }
        databasse[findMail].password = changePassword
        alert("Password changed successfully")
        break
        }else{
            alert("Wrong email")
        }
        }
        
    } else {
        alert("You are not serious")
    }
}

