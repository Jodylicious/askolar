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
            {/* **************************** */}
            
            <Card className='webPages'>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="150"
                        image="https://scontent.fmnl3-4.fna.fbcdn.net/v/t39.30808-6/311273841_479619094187641_6128168707740322774_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8631f5&_nc_eui2=AeGINyJoSX3ZSUS5KfXFAxIQZjJHAfKzAGJmMkcB8rMAYvY5QW15JIfhqTbM9o8Rq-t1rZJQMc8pQERnDs5dsZNi&_nc_ohc=cXJPvjT6poYAX9LXOP1&_nc_zt=23&_nc_ht=scontent.fmnl3-4.fna&oh=00_AT87gA2xOGfjBa6C7z8nqzd5aSRFkDXu-Ms236m7HioWqw&oe=635DBE61"
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
            {/* **************************** */}

            <Card className='webPages'>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="150"
                        image="https://scontent.fmnl3-4.fna.fbcdn.net/v/t39.30808-6/305756424_578403234071536_3454547611055147681_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeE7emxNf8fwVuVwuUVMGHmS5wBeHODm0NfnAF4c4ObQ1xziFezR5BTuK5bJ6S4B8ps3UvzLXR7W8ZSuIA33lVdk&_nc_ohc=V5bTYzqhbP0AX8GVRqM&_nc_zt=23&_nc_ht=scontent.fmnl3-4.fna&oh=00_AT_KHfU3Ero-MU6mBdG_GeWg03SRw8wxcEg_S-q1bDhImw&oe=635D795D"
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
            {/* **************************** */}

            <Card className='webPages'>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="150"
                        image="https://scontent.fmnl3-3.fna.fbcdn.net/v/t39.30808-6/280328862_3487937368099760_4159653879166269082_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeG1dg_b5Ag1q5H3-HDneR4A7VEfd5WOI7ftUR93lY4jt6hW850aH9ie6p1ri2XD46EkSKtPuyU6znHxIHEUKGyK&_nc_ohc=R2iujEwxu_QAX-nuuWd&_nc_zt=23&_nc_ht=scontent.fmnl3-3.fna&oh=00_AT-cEkpp8cOO-cyaBvakASY9xLYAtCsl3ixhqAyPZoZBYA&oe=635CFC33"
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
            {/* **************************** */}


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
            {/* **************************** */}

            
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
            {/* *************************** */}

            <Card className='webPages'>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="150"
                        image="https://scontent.fmnl3-3.fna.fbcdn.net/v/t39.30808-6/284422608_5054916684604294_7522294499720997223_n.jpg?stp=dst-jpg_p960x960&_nc_cat=103&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeE8x4jpp0t6fJhb3cDXiM06LSa9sEPTY9MtJr2wQ9Nj01nZBWKCHhHm0GNWcA_EgYDmyXj1geanCfNn6IRvTN9a&_nc_ohc=KTU02oke0K0AX-J2wG3&_nc_zt=23&_nc_ht=scontent.fmnl3-3.fna&oh=00_AT-kStcQbNY2EEuijVnPlA8VvjlWK4MNgYcCLl8A6tavcQ&oe=635B8CD9"
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
            {/* *************************** */}

       

        </div>
    );
};

export default Website;