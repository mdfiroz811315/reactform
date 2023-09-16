import axios from "axios";
import Card from 'react-bootstrap/Card';
import React, {useState, useEffect} from "react";
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
const CareerPage = (props) =>{
    const [post, setPost] = useState([]);
        // Make a request for a user with a given ID
    let URL = "https://jsonplaceholder.typicode.com/posts";

    const calculateRange = (data, rowsPerPage) => {
        const range = [];
        const num = Math.ceil(data.length / rowsPerPage);
        let i = 1;
        for (let i = 1; i <= num; i++) {
          range.push(i);
        }
        return range;
      };
      
      const sliceData = (data, page, rowsPerPage) => {
        return data.slice((page - 1) * rowsPerPage, page * rowsPerPage);
      };
      
    
    useEffect(()=>{

        axios.get(URL)
        .then(function (response) {
            // handle success
            console.log(response.data);
            setPost(response.data);
            
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        //  alert("API Calling Done")
        });


    },[] );

    
    const postList = post.map((postData) => 
                    <tr>
                        <td>{postData.id}</td>
                        <td>{postData.userId}</td>
                        <td>{postData.title}</td>
                        <td>{postData.body}</td>
                       

                    </tr>
                    
                )

    if (!post) return null;
    return(
        <>
            <div>

                <Table responsive="sm">
                    <thead>
                    <tr>
                        <th> Id </th>
                        <th>userId</th>
                        <th>title</th>
                        <th>body</th>
                        
                    </tr>
                    </thead>
                    <tbody>
                        {postList}

                    </tbody>
                </Table>
                
            </div>
       
        </>
    )

}
export default CareerPage;