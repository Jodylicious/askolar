import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container">
            {/* create react card */}

            <Card className='cardHome'>
                <CardMedia
                    component="img"
                    height="300"
                    image="https://appinventiv.com/wp-content/uploads/sites/1/2021/08/chatbot-development-with-deep-nlp.png"
                    alt="chatbot"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        HELLO, ka-ISKO at ISKA!
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        " Chatbots are useful because they make you feel less silly when you ask important questions. Talking to someone can be scary at times. Speaking with a chatbot makes this much easier! "
                    </Typography>
                </CardContent>

                <button className="startChat">
                    <Link to="/chatapp">
                        <h3 className='chatTitle'>START CONVERSATION</h3>
                    </Link>
                </button>

                 {/* FEEDBACK FORM */}
                 <div className='feeds'>
                        <button className='feedback-btn'> <a href='https://docs.google.com/forms/d/e/1FAIpQLScwgrTy4cNOWVC5IjKc5xonMJUIx-qPXXQyH7tz0fwdbxmWqQ/viewform'> Give us your feedback! </a></button>
                    </div>

            </Card>
            <div className='footer'>
                <h5 className='footer-name'> © 2022 PUPBC ASKOLAR</h5>
            </div>
        </div>
    );
};

export default Home;