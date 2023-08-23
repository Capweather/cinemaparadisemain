import React from 'react'
import Header from './Header'
import ImgBackground from '../../assets/img/ice age2.png'

function MainImage(){
    return (
        <>
         <div class="main-image">
            <Header/>
           
            <div class="text">
                <h1>ICE AGE</h1>
                <p>
                    With gloabal warming threatning their <br/>
                    once-icy domain with widespread flooding, <br/>
                    Manny (Ray Romano), Sid (John Alberto <br/>
                    Leguizamo) and Diego (Denis Leary) <br/>
                    set out to find a safe haven. Along the way <br/>
                    Another mammoth (Queen Latifa) <br/>
                    Who thinks she is an opposum <br/>
                    joins the travellers on their perilous quest. <br/>
                </p>
                <a href="https://www.youtube.com/watch?v=s4PWGVtIZWA" target="_blank"><button>Watch Now</button></a>
            </div>
            <img style={{ width: '55%'}} src={ImgBackground} alt="" />
        </div>
        
        </>
    )
}
export default MainImage;