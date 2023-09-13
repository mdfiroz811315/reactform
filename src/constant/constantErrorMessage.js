import constant from "./constant";
const constantErrorMessage = {
    userError : {
        emailId : constant.emailNotEnterErrorMsg,
        password : "Please Enter password",
        firstName  : "Please Enter firstName",
        lastName  : "Please Enter lastName",
        mobile  : constant.phoneNotEnterErrorMsg,
        city  : "Please Select City",
        dob  : "Please Select dob",
        gender  : "Please Select gender",
        fullAdress  : "Please Enter fullAdress",
        file  : "Please Select file",
        country : "Please Select Citizenship"
    },
    appValidation : {
        firstName : "Please Enter Name",
        emailid : constant.emailNotEnterErrorMsg,
        password  : "Please Enter Password",
        gender : "Please Enter Gender",     
        mobile : constant.phoneNotEnterErrorMsg,
        dob : "Please Enter DOB"
    }
}
export default constantErrorMessage;