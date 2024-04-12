import React from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Role.css';

function Role() {
    const { username } = useParams();
    const [role, setRole] = React.useState('');
    const navigate = useNavigate();
    const handleClick = async() => {
        const {data, error} = await axios.get(`https://starfish-app-dgren.ondigitalocean.app/api/pushRole?username=${username}&role=${role}`).then(res => {navigate(`/verification/${username}`)});
    }

    if(window.innerWidth > 1024){
        return(
            <>
            <Navbar />
            <main className='main-form d-block'>
                <div className='main-container'>
                    <header class='header mb-5 mt-5 pt-5'>
                        <h1 className='header-title mt-5 pt-5'>Welcome Dribbble</h1>
                        <p class="header-sub">Why are you here?</p>
                    </header>
                </div>
                <form className=' d-flex justify-content-center align-items-center'>
                        <label class="radio-container" id='1'>
                            <input id='radio' type="radio" name="option" value="yes" onClick={(e)=>{setRole('Explorer');document.getElementById('2').classList.remove('selected');document.getElementById('1').classList.add('selected')}}/>
                            <span class="radio-button">
                            <div className='role-content'>
                                <span class="radio-text">I'm a designer looking to share my work</span>
                            </div>
                            </span>
                        </label>
                        <label class="radio-container" id='2'>
                            <input type="radio" name="option" value="no" button='hidden' id='radio' onClick={(e)=>{setRole('Creator');document.getElementById('1').classList.remove('selected');document.getElementById('2').classList.add('selected')}} />
                            <span className="radio-button">
                            <div className='role-content'>
                                <span class="radio-text">I'm looking to hire a designer</span>
                            </div>
                            </span>
                        </label>
                        <label class="radio-container" id='2'>
                            <input type="radio" name="option" value="no" button='hidden' id='radio' onClick={(e)=>{setRole('Creator');document.getElementById('1').classList.remove('selected');document.getElementById('2').classList.add('selected')}} />
                            <span className="radio-button">
                            <div className='role-content'>
                                <span class="radio-text">I'm looking for design inspiration</span>
                            </div>
                            </span>
                        </label>
                    </form>
                    <div className='d-flex  justify-content-center'>
                        <button className='submitbtn1' onClick={handleClick}>Finish</button>
                    </div>
            </main>
            </>
        );
    }else{
        return(
            <>
            <Navbar />
            <main className='main-form d-block'>
                <div className='main-container'>
                    <header class='header'>
                        <h1 className='header-title'>Welcome {username}!</h1>
                        <p class="header-sub">Why are you here?</p>
                    </header>
                </div>
                <form className='justify-content-center align-items-center'>
                        <label class="radio-container" id='1'>
                            <input id='radio' type="radio" name="option" value="yes" onClick={(e)=>{setRole('Explorer');document.getElementById('2').classList.remove('selected');document.getElementById('1').classList.add('selected')}}/>
                            <span class="radio-button">
                            <div className='role-content'>
                                <span class="radio-text">Explorer</span>
                            </div>
                            </span>
                        </label>
                        <label class="radio-container" id='2'>
                            <input type="radio" name="option" value="no" button='hidden' id='radio' onClick={(e)=>{setRole('Creator');document.getElementById('1').classList.remove('selected');document.getElementById('2').classList.add('selected')}} />
                            <span className="radio-button">
                            <div className='role-content'>
                                <span class="radio-text">Creator</span>
                            </div>
                            </span>
                        </label>
                    </form>
                    <div className='d-flex  justify-content-center'>
                        <button className='submitbtn1' onClick={handleClick}>Next</button>
                    </div>
            </main>
            </>
        );
    }
}

export default Role;