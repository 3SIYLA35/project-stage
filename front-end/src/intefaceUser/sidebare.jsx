import  './style.css'
import perfilImage from './perfil.png';

export default function Sidebar(){





    return <>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.2.0/remixicon.css"></link>

{/* <!--=============== HEADER ===============--> */}
      <header class="header" id="header">
         <div class="header__container">
            <button class="header__toggle" id="header-toggle">
               <i class="ri-menu-line"></i>
            </button>
            <a href="#" class="header__logo">
               <i class="ri-cloud-fill"></i>
               <span>Cloud</span>
            </a>
            
         </div>
      </header>

      {/* <!--=============== SIDEBAR ===============--> */}
      <nav class="sidebar" id="sidebar">
         <div class="sidebar__container">
            <div class="sidebar__user">
               <div class="sidebar__img">
                  <img src={perfilImage} alt="image"/>
               </div>
   
               <div class="sidebar__info">
                  <h3>Rix Methil</h3>
                  <span>rix123@email.com</span>
               </div>
            </div>

            <div class="sidebar__content">
               <div>
                  <h3 class="sidebar__title">MANAGE</h3>

                  <div class="sidebar__list">
                     <a href="#" class="sidebar__link active-link">
                        <i class="ri-pie-chart-2-fill"></i>
                        <span>News</span>
                     </a>
                     
                     <a href="#" class="sidebar__link">
                        <i class="ri-wallet-3-fill"></i>
                        <span>Attendance</span>
                     </a>

                     <a href="#" class="sidebar__link">
                        <i class="ri-calendar-fill"></i>
                        <span>Salary</span>
                     </a>

                     <a href="#" class="sidebar__link">
                        <i class="ri-arrow-up-down-line"></i>
                        <span>Vaction</span>
                     </a>

                     <a href="#" class="sidebar__link">
                        <i class="ri-bar-chart-box-fill"></i>
                        <span>Other</span>
                     </a>
                  </div>
               </div>

               <div>
                  <h3 class="sidebar__title">SETTINGS</h3>

                  <div class="sidebar__list">
                     <a href="#" class="sidebar__link">
                        <i class="ri-settings-3-fill"></i>
                        <span>Settings</span>
                     </a>

                     <a href="#" class="sidebar__link">
                        <i class="ri-mail-unread-fill"></i>
                        <span>My Messages</span>
                     </a>

                     <a href="#" class="sidebar__link">
                        <i class="ri-notification-2-fill"></i>
                        <span>Notifications</span>
                     </a>
                  </div>
               </div>
            </div>

            <div class="sidebar__actions">
               <button>
                  <i class="ri-moon-clear-fill sidebar__link sidebar__theme" id="theme-button">
                     <span>Theme</span>
                  </i>
               </button>

               <button class="sidebar__link">
                  <i class="ri-logout-box-r-fill"></i>
                  <span>Log Out</span>
               </button>
            </div>
         </div>
      </nav>

      {/* <!--=============== MAIN ===============--> */}
      <main class="main container" id="main">
         <h1>Sidebar Menu</h1>
      </main>
{/*       
      <!--=============== MAIN JS ===============--> */}
      <script src="assets/js/main.js"></script>

    
    
    </> 
} 