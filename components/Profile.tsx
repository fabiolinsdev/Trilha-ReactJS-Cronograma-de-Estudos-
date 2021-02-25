import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/fabiolinsdev" alt="Fabio Lins"/>
            <div>
                <strong>Fabio Lins</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                Level 1
                </p>
            </div>
        </div>
    );
}