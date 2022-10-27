import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
// import bot3 from '../assets/images/bot3.png';



const Home = () => {
    return (
        <div className="container">
            {/* create react card */}

            <Card className='cardHome'>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="350"
                        image="https://appinventiv.com/wp-content/uploads/sites/1/2021/08/chatbot-development-with-deep-nlp.png"
                        alt="chatbot"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            HELLO, ka-ISKO at ISKA!
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            "We're no longer teaching people how to communicate with systems, we're teaching systems to communicate with people."
                        </Typography>
                        <br />
                    </CardContent>

                </CardActionArea>  <div className='startButton'>
                    <button className="startChat">
                        <Link to="/chatapp">
                            <h3 className='chatTitle'>START CONVERSATION</h3>
                        </Link>
                    </button>
                </div>

            </Card>
            <div className='footer'>
                <h5> © 2022 PUPBC ASKOLAR</h5>
            </div>
        </div>
    );
};

export default Home;