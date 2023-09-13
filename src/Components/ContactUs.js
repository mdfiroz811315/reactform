import {Container} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import Button from 'react-bootstrap/Button';
function NewUser(){
    const [userData, setUserData] = useState({
        "fullName": '',
        "mobile": '',
        "dob": '',
        "fullAdress" : '',
        "file" : ''
      })
      const [errorMessages, setErrorMessages] = useState({
        "fullName": '',
        "mobile": '',
        "dob": '',
        "fullAdress" :'',
        "file" : ''
      });
      const errors = {
        fullName : "Please Enter full Name",
        mobile : "Please Enter mobile",
        dob  : "Please Select dob",
        fullAdress : "Please Select fullAdress",
        file : "Please Select file"
      };
      const loginUser=(e)=>{
        e.preventDefault();
        console.log("data on submit",userData);
    let error = 0;
    let errorCopy = {...errorMessages};
    if(userData.fullName === ''){
        errorCopy.fullName = errors.fullName;
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
    if(userData.fullAdress === ''){
        errorCopy.fullAdress = errors.fullAdress;
        error = 1;
    }
    if(userData.file === ''){
        errorCopy.file = errors.file;
        error = 1;
    }
    setErrorMessages(errorCopy);
    if(error === 1){  
      return  
    }
    alert("all data are correct");
    }
    const changeText = (e)=>{
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
            <h1 className="text-center">NewUser form Example<hr/></h1>
            <Row className="margintop10">
              <Col>
                <label htmlFor="FullName"><b>Full Name <span className="text-danger"> * </span></b></label>
                <input type="text"  className="form-control" placeholder="Enter Full Name " name="fullName" onChange={changeText} />
                <Form.Text className="text-danger">
                  {errorMessages["fullName"]}
                </Form.Text>
              </Col>
              <Col>
                  <Form.Label><b>Upload file <span className="text-danger"> * </span></b></Form.Label>
                  <Form.Control type="file" multiple  name="file" onChange={changeText}  className="form-control"/>
                  <Form.Text className="text-danger">
                    {errorMessages["file"]}
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
                <label htmlFor="DOB"><b>Date Of Birth <span className="text-danger"> * </span></b></label>
            <Form.Control type="date" placeholder=" Type DOB" name="dob" onChange={changeText}  className="form-control"/>
            <Form.Text className="text-danger">
                {errorMessages["dob"]}
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
export default NewUser;