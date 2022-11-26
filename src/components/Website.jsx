import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const Website = () => {
    return (
        <div className="container">
            <h3 className="courseTitle">Related Websites and Pages</h3>

            {/* ************ PUPBC FB OFFICIAL **************** */}
            <Card className='webPages'>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="150"
                        image="https://philippinesgraphic.com.ph/wp-content/uploads/2021/02/pup12.jpg"
                    />
                    <CardContent className='webTitles'>
                        <Typography>
                            PUP Binan Official Facebook Page
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className='webLinks'>
                    <Button size="small" color="primary" variant='contained'>
                        <a href='https://web.facebook.com/profile.php?id=100070145051782'>VISIT PAGE</a>
                    </Button>
                </CardActions>
            </Card>

            {/* ************ PUP ISKOMUNITY **************** */}
            <Card className='webPages'>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="150"
                        image="https://www.othot.com/hubfs/student-success-journey-blog.jpg"
                    />
                    <CardContent className='webTitles'>
                        <Typography>
                            PUPBC ISKOMUNITY A.Y 2022-2023
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className='webLinks'>
                    <Button size="small" color="primary" variant='contained'>
                        <a href='https://web.facebook.com/groups/519226440018420'>VISIT PAGE</a>
                    </Button>
                </CardActions>
            </Card>

            {/* ************ PUP SAS **************** */}
            <Card className='webPages'>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="150"
                        image="https://cpet.tc.columbia.edu/uploads/1/8/4/5/18456699/shutterstock-1812591067_orig.jpg"
                    />
                    <CardContent className='webTitles'>
                        <Typography>
                            PUPBC Student Affairs and Services
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className='webLinks'>
                    <Button size="small" color="primary" variant='contained'>
                        <a href='https://web.facebook.com/HSASPUPBC'>VISIT PAGE</a>
                    </Button>
                </CardActions>
            </Card>

            {/* ************ PUPBC CSC **************** */}
            <Card className='webPages'>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="150"
                        image="https://scontent.fmnl6-1.fna.fbcdn.net/v/t39.30808-6/280328862_3487937368099760_4159653879166269082_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeG1dg_b5Ag1q5H3-HDneR4A7VEfd5WOI7ftUR93lY4jt6hW850aH9ie6p1ri2XD46EkSKtPuyU6znHxIHEUKGyK&_nc_ohc=_JzOQtBZkvIAX8e0JLt&_nc_zt=23&_nc_ht=scontent.fmnl6-1.fna&oh=00_AfAYxSwzgUZF8GI1UOSzR_MoJsd7M0BZlXxqgBt-ZefGKQ&oe=63868373"
                    />
                    <CardContent className='webTitles'>
                        <Typography>
                            PUPBC Central Student Council
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className='webLinks'>
                    <Button size="small" color="primary" variant='contained'>
                        <a href='https://web.facebook.com/CSCPUPBN'>VISIT PAGE</a>
                    </Button>
                </CardActions>
            </Card>

            {/* ************ PUP SIS **************** */}
            <Card className='webPages'>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="150"
                        image="https://www.pup.edu.ph/resources/images/photos/sportal.jpg"
                    />
                    <CardContent className='webTitles'>
                        <Typography>
                            PUP Student Information System (PUPSIS)
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className='webLinks'>
                    <Button size="small" color="primary" variant='contained'>
                        <a href='https://sisstudents.pup.edu.ph/'>VISIT PAGE</a>
                    </Button>
                </CardActions>
            </Card>

            {/* ************ PUP WEB OFFICIAL **************** */}
            <Card className='webPages'>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="150"
                        image="https://www.pup.edu.ph/resources/images/logo200.png"
                    />
                    <CardContent className='webTitles'>
                        <Typography>
                            Polytechnic University of the Philippines Official Website
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className='webLinks'>
                    <Button size="small" color="primary" variant='contained'>
                        <a href='https://www.pup.edu.ph/'>VISIT PAGE</a>
                    </Button>
                </CardActions>
            </Card>

            {/* ************ PUP FB OFFICIAL **************** */}
            <Card className='webPages'>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="150"
                        image="https://i.imgur.com/3D8NQAI.jpg"
                        alt="pup"
                    />
                    <CardContent className='webTitles'>
                        <Typography>
                            PUP Official Facebook Page
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className='webLinks'>
                    <Button size="small" color="primary" variant='contained'>
                        <a href='https://web.facebook.com/ThePUPOfficial'>VISIT PAGE</a>
                    </Button>
                </CardActions>
            </Card>

        </div>
    );
};

export default Website;