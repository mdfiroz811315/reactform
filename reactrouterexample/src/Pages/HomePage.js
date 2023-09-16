import axios from "axios";
import Card from 'react-bootstrap/Card';
import React, {useState, useEffect} from "react"
const HomePage = ()=>{

    const [post, setPost] = useState(null);
        // Make a request for a user with a given ID
    let URL = "https://jsonplaceholder.typicode.com/posts";

    useEffect(()=>{

        axios.get(URL)
        .then(function (response) {
            // handle success
            console.log(response.data[0]);
            setPost(response.data[0]);
            
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


    if (!post) return null;
  
    return(
        <>
        <div> This is My Home Page</div>
       
        <Card>
            <Card.Header>
                Id : {post.id}

            </Card.Header>
            <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>
                    {post.body}
                </Card.Text>
            </Card.Body>
        </Card>
        </>
    )

}
export default HomePage
