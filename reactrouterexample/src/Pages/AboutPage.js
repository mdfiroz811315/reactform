import axios from "axios";
import Card from 'react-bootstrap/Card';
import React, {useState, useEffect} from "react"
const AboutPage = ()=>{
    

    const [post, setPost] = useState([]);
        // Make a request for a user with a given ID
    let URL = "https://jsonplaceholder.typicode.com/posts";
    
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
                    <Card key={postData.id}>
                        <Card.Header>
                            Id : {postData.id}

                        </Card.Header>
                        <Card.Body>
                            <Card.Title>{postData.title}</Card.Title>
                            <Card.Text>
                                {postData.body}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )

    if (!post) return null;
    return(
        <>
        <div> This is My About page.</div>
        {postList}
        </>
    )

}
export default AboutPage
