export const checkValidData = (email, password) =>{

    const isEmailValid =  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password);

    if(!isEmailValid) return "Please enter a valid email address or phone number."
    if(!isPasswordValid) return "Your password must contain between 4 and 60 characters."
    return null;
}