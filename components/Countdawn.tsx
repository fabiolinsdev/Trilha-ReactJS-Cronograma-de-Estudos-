import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Countdawn.module.css';

let countdawnTimeout: NodeJS.Timeout;

export function Countdawn() {
    const { startNewChallenge } = useContext(ChallengesContext);

    const [time, setTime] = useState(0.1 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft, minuteRihgt] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRihgt] = String(minutes).padStart(2, '0').split('');

    function  startCountdown() {
        setIsActive(true);
    }

    function resetCountdown() {
        clearTimeout(countdawnTimeout);
        setIsActive(false);
        setTime(0.1 * 60);
    }

    useEffect(() => {
        if (isActive && time > 0 ){
            countdawnTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        } else if (isActive &&  time === 0) {
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
       }
    },[isActive, time])


    return(
        <div className={styles.CountdawnContainer}>
          <div>
            <div>
                <span>{minuteLeft}</span>
                <span>{minuteRihgt}</span>
            </div>
            <span>:</span>
            <div>
                <span>{secondLeft}</span>
                <span>{secondRihgt}</span>
            </div>
        </div> 

            { hasFinished ? (
                <button 
                disabled 
                className={styles.CountdawnButton} 
             >
                   Ciclo encerrado
                </button>
            ): (
                <>
            { isActive ? (
                <button 
                type="button" 
                className={`${styles.CountdawnButton} ${styles.CountdawnButtonActive}`}
                onClick={resetCountdown}
                >
                   Abandonar ciclo
                </button>    
          
            ) :(
                <button 
                type="button" 
                className={styles.CountdawnButton}
                onClick={startCountdown}
               >
                   Iniciar um ciclo
               </button>  
            )}    
            </>
            )}

           
        </div>      
    );
}