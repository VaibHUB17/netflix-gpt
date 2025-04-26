export const checkValidateData = (email, password)=> {


    const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
     const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/.test(password)

     if (!emailRegex) return "Invalid email address"
     if(!passwordRegex) return "Password must be at least 6 characters long and contain at least one letter and one number"

     return null
}
