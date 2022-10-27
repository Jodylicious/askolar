import { Link } from 'react-router-dom';
import bot3 from '../assets/images/bot3.png';



const Home = () => {
    return (
        <div className="container">
            {/* create react card */}
            <div className='quotes'>
                <h4>
                " Chatbots are useful because they make you feel less silly when you ask important questions. Talking to someone can be scary at times. Speaking with a chatbot makes this much easier! "
                </h4>

                <div className='appLogo'>
                <img src={(bot3)} className='botImage' width='250px' alt="botAvatar" ></img>
              </div>

                <div className='chatBtn'>
                    <button className="startChat">
                        <Link to="/chatapp">
                            <h3 className='chatTitle'>START CONVERSATION</h3>
                        </Link>
                    </button>
                </div>

            </div>

        </div>
    );
};

export default Home;