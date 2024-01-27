import Navbar from "./navbar";
import image_carte from '../images/406484797_3692107147675905_8245703339747401412_n.jpg';
import localisation_icons from "../images/variante-despace-reserve-noire.png";
import tlfn from '../images/telephone.png';
import mail from '../images/e-mail.png';
import linkedin from '../images/linkedin.png' ;
import localisation from '../images/localisation.png' ; 
// import star from '../images/star (1).png' ;
import etoile from '../images/etoile.png';
import etoile_plein from '../images/etoile (1).png';
import multi from '../images/signe-de-multiplication (1).png';
import '../css/profil.css';
import Footer from './footer';
import { useState , useRef} from "react";
import coche from '../images/coche.png'


export default function Proifil() {

    const ele1ref = useRef(null);
    const ele2ref = useRef(null);
    const hidden = () => {
        ele1ref.current.style.display = "flex";
        ele2ref.current.style.opacity = "40%" ;
    }

    const modifier = () => {
        ele1ref.current.style.display = "none";
        ele2ref.current.style.opacity = "100%" ;
    }

    const [state , setState] = useState({x:0 , star1:etoile , star2:etoile, star3:etoile, star4:etoile, star5:etoile })
    const star1 = state.star1 ;
    const star2 = state.star2 ;
    const star3 = state.star3 ;
    const star4 = state.star4 ;
    const star5 = state.star5 ;


    const change1 = () => {
        setState( (prevState)=>({ x:1 , star1: etoile_plein , star2: etoile, star3: etoile, star4: etoile, star5: etoile}))
    }

    const change2 = () => {
        setState( (prevState)=>({ x:2 , star1: etoile_plein , star2: etoile_plein , star3: etoile, star4: etoile, star5: etoile}))
    }

    const change3 = () => {
        setState( (prevState)=>({  x:3 , star1: etoile_plein , star2: etoile_plein, star3: etoile_plein, star4: etoile, star5: etoile}))
    }

    const change4 = () => {
        setState( (prevState)=>({  x:4 , star1: etoile_plein , star2: etoile_plein, star3: etoile_plein, star4: etoile_plein, star5: etoile}))
    }

    const change5 = () => {
        setState( (prevState)=>({ x:5 , star1: etoile_plein , star2: etoile_plein, star3: etoile_plein, star4: etoile_plein, star5: etoile_plein}))
    }




    const days = ['Samedi', 'Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'];
    const periods = ['8:00-9:00', '9:00-10:00', '10:00-11:00' ,'13:00-14:00','14:00-15:00', '15:00-16:00'];

    const [schedule, setSchedule] = useState(Array.from({ length: days.length }, () => Array(periods.length).fill(false)));

    const toggleAvailability = (dayIndex, periodIndex) => {
        const newSchedule = [...schedule];
        newSchedule[dayIndex][periodIndex] = !newSchedule[dayIndex][periodIndex];
        setSchedule(newSchedule);

        const isAvailable = newSchedule[dayIndex][periodIndex];
        console.log(`Day: ${days[dayIndex]}, Period: ${periods[periodIndex]}, Available: ${isAvailable}`);
    };








    return(
        <div className="profil">
            <Navbar/>
            <div className="page11" ref={ele2ref}>
                <div className="left">
                    <div className="profil_carte">
                        <div className='img'>
                            <img src={image_carte} alt="image"/>
                        </div>
                        <h3> bouhafs imane</h3>
                        <div>
                            <img src={localisation_icons} alt="image"/>
                            <p> 10 rue Enfantin, 16000 Alger </p>
                        </div>
                        <div>
                            <img src={tlfn} alt="image"/>
                            <p> 0662695753 </p>
                        </div>
                        <div>
                            <img src={mail} alt="image"/>
                            <p> i_bouhafs@estin.dz </p>
                        </div>
                        <div>
                            <img src={linkedin} alt="image"/>
                            <p> i_bouhafs@estin.dz </p>
                        </div>
                        <button onClick={hidden}> prendre RDV</button>
                    </div>
                </div>
                <div className="right1">
                    <div className="img">
                        {/* <img src={localisation} alt="image"/> */}
                        {/* <iframe src="https://maps.app.goo.gl/CbczTKRgePU9kwsJ8" style={{  width:"600" ,height:"450" ,style:"border:0;" , loading:"lazy" , referrerpolicy:"no-referrer-when-downgrade" }}  > */}
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d409090.6435667906!2d5.006979!3d36.770072!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f2cca1a82082c5%3A0x7807b41e13330b6e!2zQsOpamHDr2E!5e0!3m2!1sfr!2sdz!4v1706088870791!5m2!1sfr!2sdz" style={{  width:"600" ,height:"450" ,style:"border:0;" , loading:"lazy" , referrerpolicy:"no-referrer-when-downgrade" }}  >

                            
                        </iframe>
                    </div>
                    <div className="information">
                        <div> 
                            <h3> Competence :</h3>
                            <p> familly law</p>
                        </div>
                        <div> 
                            <h3> langue :</h3>
                            <p> Francais - anglais - arabe</p>
                        </div>
                        <div className="experience1" > 
                            <h3> Experience :</h3>
                            
                            <p> vous pouvez facilement trouvez l’avocat que</p>
                            <p> vous pouvez facilement trouvez l’avocat que</p>
                            <p> vous pouvez facilement trouvez l’avocat que</p>
                            
                        </div>

                    </div>
                </div>
            </div>

            <div className="formulaire" ref={ele1ref}>
                <div className="img" onClick={modifier}> <img src={multi}/></div>
                <h1> prendre rendez-vous</h1>
                <label for="name"> nom complet</label>
                <input type="text" id="name" name="name" required/>
                <label for="name"> date</label>
                <input type="date" id="date" name="date" required/>
                <label for="date"> date</label>
                <input type="email" id="email" name="email" required/>
                <label for="situation"> situation</label>
                <input type="text" id="situation" name="situation" required/>

            </div>

            <div className="dispo">
                <h1>disponibilites</h1>
                <table>   
                <thead>
                    <tr>
                        <td></td>
                        {periods.map((period, index) => (
                        <td key={index}>{period}</td>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                            {days.map((day, dayIndex) => (
                                <tr key={dayIndex}>
                                <td>{day}</td>
                                {periods.map((period, periodIndex) => (
                                    <td key={periodIndex}>
                                    {schedule[dayIndex][periodIndex] ? (
                                        <img src={etoile} alt="Available" />
                                    ) : (
                                       ''
                                    )}
                                    </td>
                                ))}
                                </tr>
                            ))}
                    </tbody>

                </table>
            </div>

            <div className="rating">
                    <h1> notez cet avocat</h1>
                    <div className="form_avis">
                        <div>
                             <img src={star1} onClick={change1}/> <img src={star2} onClick={change2}/> <img src={star3} onClick={change3}/> <img src={star4} onClick={change4}/> <img src={star5} onClick={change5}/>
                        </div>
                        <input type="text" name="avis" placeholder="Ajoutez votre avis  sur cet avocat ......."/>
                        <button> ajouter</button>
                    </div>
            </div>

            <div className="commentaires">
                <div className="comment">
                    <div> <img src={etoile_plein}/> <p> 5.0</p></div>
                    <p> jxhskjdchsudcreation timeless for the standard best service passage vary, with some citing the 15 centurycreation timeless for the standard</p>
                </div>
                <div className="comment">
                    <div> <img src={etoile_plein}/> <p> 5.0</p></div>
                    <p> jxhskjdchsudcreation timeless for the standard best service passage vary, with some citing the 15 centurycreation timeless for the standard</p>
                </div>
                <div className="comment">
                    <div> <img src={etoile_plein}/> <p> 5.0</p></div>
                    <p> jxhskjdchsudcreation timeless for the standard best service passage vary, with some citing the 15 centurycreation timeless for the standard</p>
                </div>
                <div className="comment">
                    <div> <img src={etoile_plein}/> <p> 5.0</p></div>
                    <p> jxhskjdchsudcreation timeless for the standard best service passage vary, with some citing the 15 centurycreation timeless for the standard</p>
                </div>
                <div className="comment">
                    <div> <img src={etoile_plein}/> <p> 5.0</p></div>
                    <p> jxhskjdchsudcreation timeless for the standard best service passage vary, with some citing the 15 centurycreation timeless for the standard</p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}