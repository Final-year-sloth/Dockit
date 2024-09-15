
{ /*Adding necessary imports from React and Next.js*/ }
import React, { useState, useEffect, useContext } from 'react';
import Image from 'next/image';
// import { useRouter } from 'next/router';
import styles from './sidebar.module.css';

{/* Importing image assets*/ }
import Home from '../../public/sidebar_local_images/Home_Logo.png'
import Chat from '../../public/sidebar_local_images/Chat_Logo.png'
import Settings from '../../public/sidebar_local_images/Setings_Logo.png'
import Search from '../../public/sidebar_local_images/Search_Logo.png'
import Community from '../../public/sidebar_local_images/Community_Logo.png'
import Internship from '../../public/sidebar_local_images/Internship_Logo.png'
import Courses from '../../public/sidebar_local_images/Courses_Logo.png'
import defaultProfle from '../../public/sidebar_local_images/Profile_Default.png'
import WebIcon from '../../public/sidebar_local_images/MediGeek_Logo.png'

{/* Defining the Sidebar component*/ }
const Sidebar = () => {
  {/* Initializing state variables */ }
  const [isOpen, setIsOpen] = useState(false);
  const [activeButton, setActiveButton] = useState(0); {/* Setting initial active button to 0 */ }
  const [name, setName] = useState('Rounak Singh'); {/* Setting initial name for the user */ }
  const firstName = name.split(' ')[0]; {/* Extracting the first name */ }

  {/* Fetching user's name from a data source or API on component mount */ }
  useEffect(() => {
    {/* Fetching data from the API */ }
    const fetchData = async () => {
      const response = await fetch('/api/user/name'); {/* Modify the API endpoint in future */ }
      const data = await response.json();
      setName(data.name);
    };
    fetchData();
  }, []);

  {/* Toggling the sidebar open state */ }
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  {/* Handling button clicks and updating the active button state */ }
  const handleButtonClick = (index: number) => {
    setActiveButton(index);

    {/* Commented out as it's not being used */ }
    // switch (index) {
    //   case 0:
    //     router.push('/home');
    //     break;
    //   case 1:
    //     router.push('/chat');
    //     break;
    //   case 2:
    //     router.push('/community');
    //     break;
    //   case 3:
    //     router.push('/courses');
    //     break;
    //   case 4:
    //     router.push('/internship');
    //     break;
    //   case 5:
    //     router.push('/settings');
    //     break;
    //   // ... other cases
    //   default:
    //     break;
    // }
  };

  {/* Rendering the component */ }
  return (
    /* Container element for the page */
    <div className={styles.page}>
      {/* Sidebar container */}
      <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        {/* Sidebar content container*/}
        <div className={styles.sidebarContent}>
          {/* Inner container for the sidebar content*/}
          <div className={styles.innerContainer}>
            {/* Hamburger button to toggle the sidebar */}
            <button className={styles.hamburgerButton} onClick={toggleSidebar}>
              <span></span>
              <span></span>
              <span></span>
            </button>
            {/* Dashboard section, with Business Icon and Search Bar*/}
            <div className={styles.dashBoard}>
              <Image className={styles.webIcon} src={WebIcon} alt="My Image" />
              <button className={styles.searchButton}>
                <Image className={styles.navIcon} src={Search} alt="My Image" width={20} height={20} />
                {/* Search input field */}
                <input type="text" placeholder="Search" className={styles.searchInput} />
              </button>
            </div>
            {/* Separator element*/}
            <span className={styles.separator}></span>
            {/* Navigation buttons container */}
            <div className={styles.navigationButtons}>
              {/* Navigation buttons */}
              <button className={`${styles.navButton} ${activeButton === 0 ? styles.activeButton : ''}`} onClick={() => handleButtonClick(0)}>
                <Image className={styles.navIcon} src={Home} alt="My Image" width={20} height={20} />
                <h2 className={styles.navDesc}>Home</h2>
              </button>
              <button className={`${styles.navButton} ${activeButton === 2 ? styles.activeButton : ''}`} onClick={() => handleButtonClick(2)}>
                <Image className={styles.navIcon} src={Chat} alt="My Image" width={20} height={20} />
                <h2 className={styles.navDesc}>Message</h2>
              </button>
              <button className={`${styles.navButton} ${activeButton === 3 ? styles.activeButton : ''}`} onClick={() => handleButtonClick(3)}>
                <Image className={styles.navIcon} src={Community} alt="My Image" width={20} height={20} />
                <h2 className={styles.navDesc}>Community</h2>
              </button>
              <button className={`${styles.navButton} ${activeButton === 4 ? styles.activeButton : ''}`} onClick={() => handleButtonClick(4)}>
                <Image className={styles.navIcon} src={Courses} alt="My Image" width={20} height={20} />

                <h2 className={styles.navDesc}>Courses</h2>
              </button>
              <button className={`${styles.navButton} ${activeButton === 5 ? styles.activeButton : ''}`} onClick={() => handleButtonClick(5)}>
                <Image className={styles.navIcon} src={Internship} alt="My Image" width={20} height={20} />
                <h2 className={styles.navDesc}>Internship</h2>
              </button>
              <button className={`${styles.navButton} ${activeButton === 6 ? styles.activeButton : ''}`} onClick={() => handleButtonClick(6)}>
                <Image className={styles.navIcon} src={Settings} alt="My Image" width={20} height={20} />
                <h2 className={styles.navDesc}>Settings</h2>
              </button>
              {/*Change the buttons acordingly in future*/}
            </div>
            {/* Profile section */}
            <div className={styles.profileSection}>
              <Image className={styles.profileIcon} src={defaultProfle} alt="My Image" width={50} height={50}></Image>
              {/* Renderig the name dynamically, appearing or disappearing based on the 'isOpen' prop*/}
              <h1 className={isOpen ? styles.appear : styles.disappear}>
                {/* Concatenating the greeting message with the first name*/}
                {("Hey there, " + firstName).split('').map((letter, index) => (
                  // Creating a span element for each letter with a unique key
                  <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                    {/* Displaying the letter with a staggered animation effect*/}
                    {letter}
                  </span>
                ))}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

{/* Exporting the Sidebar component */ }
export default Sidebar;
