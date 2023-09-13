import {Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import constant from '../constant/constantErrorMessage';
function FullUservaledation(){

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
    });
    const errors = constant.userError;

    const loginUser=(e)=>{
        e.preventDefault();
        console.log("data on submit",userData);
    let error = 0;
    let errorCopy = {...errorMessages};
    if(userData.emailId === ''){
        errorCopy.emailId = errors.emailId;
        error = 1;
    }
    if(userData.password === ''){
        errorCopy.password = errors.password;
        error = 1;
    }
    if(userData.firstName === ''){
        errorCopy.firstName = errors.firstName;
        error = 1;
    }
    if(userData.lastName === ''){
        errorCopy.lastName = errors.lastName;
        error = 1;
    }
    if(userData.mobile === ''){
        errorCopy.mobile = errors.mobile;
        error = 1;
    }
    if(userData.city === ''){
        errorCopy.city = errors.city;
        error = 1;
    }
    if(userData.dob === ''){
        errorCopy.dob = errors.dob;
        error = 1;
    }
    if(userData.gender === ''){
        errorCopy.gender = errors.gender;
        error = 1;
    }
    if(userData.fullAdress === ''){
        errorCopy.fullAdress = errors.fullAdress;
        error = 1;
    }
    if(userData.file === ''){
        errorCopy.file = errors.file;
        error = 1;
    }
    if(userData.country === ''){
        errorCopy.country = errors.country;
        error = 1;
    }
    
    setErrorMessages(errorCopy);
    if(error === 1){  
      return  
    }
    alert("all data are correct");
    }
    const changeText=(e)=>{
        let value =e.target.value;
        let name =e.target.name;
        let cloneError = {...errorMessages};
        if(cloneError.hasOwnProperty(name)){
            if(value  === ''){ 
                let errorMsg = errors[name];
                cloneError[name] = errorMsg
                setErrorMessages(cloneError)
            }else{ 
                cloneError[name] = ""
                setErrorMessages(cloneError)

            }
        }
        setUserData(current =>{
            const cloneData = {...current}
            if(cloneData.hasOwnProperty(name))
            {
              cloneData[name] = value
            }
            return cloneData;
        }
        )
        console.log(userData);
    }
    return(
        <>
        <Container>
            <form onSubmit={loginUser}>
                <h1>FullUser form</h1>
                <Row className="margintop10">
              <Col>
                <label htmlFor="firstName"><b>First Name <span className="text-danger"> * </span></b></label>
                <input type="text"  className="form-control" placeholder="Enter First Name " name="firstName" onChange={changeText} />
                <Form.Text className="text-danger">
                  {errorMessages["firstName"]}
                </Form.Text>
              </Col>
              <Col>
                <label htmlFor="LastName"><b>Last Name <span className="text-danger"> * </span></b></label>
                <input type="text"  className="form-control" placeholder="Enter Last Name " name="lastName" onChange={changeText} />
                <Form.Text className="text-danger">
                  {errorMessages["lastName"]}
                </Form.Text>
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
            <label htmlFor="city"><b>SELECT CITY <span className="text-danger"> * </span></b></label>
                <select name="city" onChange={changeText} onSelect={changeText}  className="form-control">
                  <option>SELECT CITY</option>
                  <option value="KOLKATA">KOLKATA</option>
                  <option value="DELHI">NEW DELHI</option>
                  <option value="MUMBAI">MUMBAI</option>
                  <option value="Goa">Goa</option>
                  <option value="Bihar">Bihar</option>
                </select>
                <Form.Text className="text-danger">
                  {errorMessages["city"]}
                </Form.Text>
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
                       {errorMessages["gender"]}
                  </Form.Text>
            </Col>
            </Row>
           
            <Row className="margintop10">
            <Col>
                  <Form.Label><b>Upload file <span className="text-danger"> * </span></b></Form.Label>
                  <Form.Control type="file" multiple  name="file" onChange={changeText}  className="form-control"/>
                  <Form.Text className="text-danger">
                    {errorMessages["file"]}
                  </Form.Text>
            </Col>
            <Col>
            
                  <label htmlFor="country"><b>Citizenship <span className="text-danger"> * </span></b></label>
                  <select name="country" onChange={changeText} onSelect={changeText}  className="form-control">
                        <option value="">COUNTRY </option>
                        <option value="India">India</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="Dubai">Dubai</option>
                        <option value="China">China</option>
                        <option value="UAE">UAE</option>
                  </select>
                  <Form.Text className="text-danger">
                    {errorMessages["country"]}
                  </Form.Text>
            </Col>
            </Row>    
         
            <Row className="margintop10">
            <Col md={6}>
                  <label htmlFor="Adress"><b>Full Adress <span className="text-danger"> * </span></b></label><br/>
                  <textarea className="form-control"   name="fullAdress"  style={{ height: '100px' }} onChange={changeText} />
                  <Form.Text className="text-danger">
                  {errorMessages["fullAdress"]}
            </Form.Text>
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
    )

}
export default FullUservaledation;