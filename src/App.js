import { Container } from "react-bootstrap"
import { useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import constantErrorMessage from "./constant/constantErrorMessage";

function App() {
   const [userData, setUserData] = useState({
    "emailId": '',
    "password": '',
    "firstName": '',
    "lastName": '',
    "mobile": '',
    "city" : '',
    "dob": '',
    "gender" : '',
    "fullAdress" : '',
    "file" : '',
    "country" : ''
  })
  const [errorMessages, setErrorMessages] = useState({
    "firstName": '',
    "emailid": '',
    "password": '',
    "gender" : '',
    "mobile": '',
    "dob" : ''
  });
  const errors = constantErrorMessage.appValidation
// form submit karne ke bad ye value ko save karne ke lye 
const loginUser=(e)=>{
    e.preventDefault();


    console.log("data on submit",userData);
    let error = 0;
    let errorCopy = {...errorMessages};
    if(userData.firstName === ''){
        errorCopy.firstName = errors.firstName;
        error = 1;
    }
    if(userData.emailid === ''){
        errorCopy.emailid = errors.emailid;
        error = 1;
    }
    if(userData.password === ''){
        errorCopy.password = errors.password;
        error = 1;
    }
    if(userData.gender === ''){
        errorCopy.gender = errors.gender;
        error = 1;

    }
    if(userData.mobile === ''){
        errorCopy.mobile = errors.mobile;
        error = 1;
    }
    if(userData.dob === ''){
        errorCopy.dob = errors.dob;
        error = 1;
    }
    setErrorMessages(errorCopy);
    if(error === 1){  // code has any validation error
      return  // not allow to execute further stop here
    }
    alert("all data are correct");
    /// api call to save data

}
//value ko change karne ke lye Changetext lete hai
  const changeText=(e)=>{
      let value =e.target.value;
      let name =e.target.name;
        ///// to update error message //////
      let cloneError = {...errorMessages};
      if(cloneError.hasOwnProperty(name)){//do we need to validate given field with this name
        if(value  === ''){ // to show error message
            let errorMsg = errors[name];
            cloneError[name] = errorMsg
            setErrorMessages(cloneError)
        }else{ // to remove error message as value been added
            cloneError[name] = ""
            setErrorMessages(cloneError)

        }
      }
      //// to update error message end /////

      //// to update data which we get from form into state footerData///
      setUserData(current =>{
          const cloneData = {...current}
          if(cloneData.hasOwnProperty(name))
          {
            cloneData[name] = value
          }
          return cloneData;
        }
      )
      //// to update data which we get from form into state footerData end///

        console.log(userData);
  }
  //// function changeText end ///////////////
 

  return (
      <>
      <Container  className="border border-dark rounded">
          <form  onSubmit={loginUser}>
            <h1 className="text-center">footer form Example<hr/></h1>
            <Row className="margintop10">
              <Col>
                <label htmlFor="FirstName"><b>First Name <span className="text-danger"> * </span></b></label>
                <input type="text"  className="form-control" placeholder="Enter First Name " name="firstName" onChange={changeText} />
                <Form.Text className="text-danger">
                  {errorMessages["firstName"]}
                </Form.Text>
              </Col>
              <Col>
                <label htmlFor="LastName"><b>Last Name</b></label>
                <input type="text"  className="form-control" placeholder="Enter Last Name " name="lastName" onChange={changeText} />
              </Col>
          </Row>
        
          <Row  className="margintop10">
          <Col>
            <label htmlFor="emailId"><b>Email <span className="text-danger"> * </span></b></label>
            <input type="text" placeholder="Enter Email " name="emailId" onChange={changeText}  className="form-control"/>
            <Form.Text className="text-danger">
                  {errorMessages["emailId"]}
            </Form.Text>
          </Col>
          <Col>
            <label htmlFor="password"><b>Password <span className="text-danger"> * </span></b></label>
            <input type="password" placeholder="Password " name="password" onChange={changeText}  className="form-control"/>
            <Form.Text className="text-danger">
                  {errorMessages["password"]}
            </Form.Text>
          </Col>
          </Row>
         
         
          <Row  className="margintop10">
          
          <Col>
            <label htmlFor="mobile"><b>Mobile <span className="text-danger"> * </span></b></label>
            <input type="number" placeholder="Enter number " name="mobile" onChange={changeText}  className="form-control"/>
            <Form.Text className="text-danger">
                  {errorMessages["mobile"]}
            </Form.Text>
          </Col>
          <Col>
            <label htmlFor="city"><b>SELECT CITY</b></label>
                <select name="city" onChange={changeText} onSelect={changeText}  className="form-control">
                  <option>SELECT CITY</option>
                  <option value="KOLKATA">KOLKATA</option>
                  <option value="DELHI">NEW DELHI</option>
                  <option value="MUMBAI">MUMBAI</option>
                  <option value="Goa">Goa</option>
                  <option value="Bihar">Bihar</option>
                </select>
          </Col>
          </Row>
       
          <Row className="margintop10">
          <Col>
                <label htmlFor="DOB"><b>Date Of Birth <span className="text-danger"> * </span></b></label>
                <Form.Control type="date" placeholder=" Type DOB" name="dob" onChange={changeText}  className="form-control"/>
                <Form.Text className="text-danger">
                  {errorMessages["dob"]}
            </Form.Text>
          </Col>
          <Col>
                <label htmlFor="Gender"><b>Gender <span className="text-danger"> * </span></b></label>
             
                  <Form.Text  className="form-control">
                  <Form.Check 
                        inline
                        type='radio'
                        id="male"
                        label="Male"
                        name="gender"
                        value="Male"
                        onChange={changeText}/>
                  <Form.Check 
                        inline
                        type='radio'
                        id="Female"
                        label="Female"
                        name="gender"
                        value="Female"
                        onChange={changeText}/>
                  </Form.Text>
                  <Form.Text className="text-danger">
                    <br/>{errorMessages["gender"]}
                  </Form.Text>
            </Col>
            </Row>
           
            <Row className="margintop10">
            <Col>
                  <Form.Label><b>Upload file</b></Form.Label>
                  <Form.Control type="file" multiple  name="file" onChange={changeText}  className="form-control"/>
            </Col>
            <Col>
            
                  <label htmlFor="country"><b>Citizenship</b></label>
                  <select name="country" onChange={changeText} onSelect={changeText}  className="form-control">
                        <option>COUNTRY </option>
                        <option value="India">India</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="Dubai">Dubai</option>
                        <option value="China">China</option>
                        <option value="UAE">UAE</option>
                  </select>
            </Col>
            </Row>    
         
            <Row className="margintop10">
            <Col md={6}>
                  <label htmlFor="Adress"><b>Full Adress</b></label><br/>
                  <textarea className="form-control"   name="fullAdress"  style={{ height: '100px' }} onChange={changeText} />
            </Col>
            </Row>  
                 
            <Row>
                  <Col md={{ span: 2, offset: 5 }}>           
                  <Button variant="success" className="form-control heght30 mrgintop30" type="submit">Register</Button>
                  </Col>
            </Row>
          </form>
          
        </Container>
      </>
  );
}

export default App;
