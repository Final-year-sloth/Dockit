import React from 'react';
import styles from './header.module.css';
import Image from 'next/image';
// import ReactPlayer from 'react-player';
import WebIcon from '../../../public/Header_Images/MediGeek_Logo.png'
import Search from '../../../public/Header_Images/Search_Logo.png'
import Info from '../../../public/Header_Images/Info_Icon.png'
import LogOut from '../../../public/Header_Images/LogOut_Icon_2.png'


const Header = () => {
    return (
        <header className={styles.header}>
            {/* Your header content here */}
            <div className={styles.logo}>
                <Image className={`${styles.icons} ${styles.webIcon}`} src={WebIcon} alt="My Image" width={120} height={40} />
                <p className={styles.copyright}>©</p>
            </div>
            <div className={styles.searchSpace} >
                <input className={styles.searchBar} type="text" placeholder="Search" />
                <div className={`${styles.icons} ${styles.searchIcon}`}>
                    <Image src={Search} alt="Search Image" width={20} height={20} />
                </div>
            </div>
            <div className={styles.iconsContainer}>
                <Image className={`${styles.icons} ${styles.info}`} src={Info} alt="My Image" width={20} height={20} />
                <Image className={`${styles.icons} ${styles.logOut}`} src={LogOut} alt="My Image" width={20} height={20} />
              </div>
        </header>
    );
};

export default Header;