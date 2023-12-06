
import Logo from './../assets/images/twitterLogo.svg'
import myAccountImage from './../assets/images/bobur.png'
import './Header.scss'

const Header = () => {
  return (
    <div className="header__container container">
<img src={Logo} alt="twitter logo" className="header__logo" />
<ul className="header__navbar__list">
    <li className="header__navbar__item header__navbar__item-active">
    <svg width="28" height="28" className='header__navbar__item__icon' viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_7357_113" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28">
<rect width="28" height="28" fill="#C4C4C4"/>
</mask>
<g mask="url(#mask0_7357_113)">
<path d="M26.4601 8.83515L14.671 2.47331C14.3245 2.28665 13.908 2.28665 13.5626 2.47331L1.77931 8.83515C1.21231 9.14315 1.00114 9.85013 1.30681 10.4171C1.51681 10.808 1.91931 11.0296 2.33348 11.0296C2.52015 11.0296 2.71148 10.9853 2.88765 10.8896L3.74398 10.4276L5.59898 23.5526C5.85098 24.969 7.12731 25.9583 8.70231 25.9583H19.5313C21.1063 25.9583 22.3826 24.969 22.637 23.5223L24.4896 10.4265L25.3495 10.8908C25.9153 11.1976 26.6235 10.9865 26.9291 10.4195C27.236 9.85247 27.0225 9.14431 26.4578 8.83864L26.4601 8.83515ZM14.1168 18.2676C12.0226 18.2676 10.3251 16.5701 10.3251 14.476C10.3251 12.3818 12.0226 10.6843 14.1168 10.6843C16.211 10.6843 17.9085 12.3818 17.9085 14.476C17.9085 16.5701 16.211 18.2676 14.1168 18.2676Z" fill="black"/>
</g>
</svg>

        <span className="header__navbar__item__title">Home</span>
    </li>
    <li className="header__navbar__item">
    <svg width="28" className='header__navbar__item__icon' height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_7357_310" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28">
<rect width="28" height="28" fill="#C4C4C4"/>
</mask>
<g mask="url(#mask0_7357_310)">
<path d="M24.2083 9.43374H19.6233L20.0573 4.44974C20.0993 3.96907 19.7423 3.54558 19.2616 3.50241C18.7751 3.46741 18.3562 3.81741 18.3142 4.29924L17.8674 9.43257H10.4941L10.9257 4.4509C10.9689 3.96906 10.6107 3.54558 10.1324 3.50241C9.64242 3.46741 9.22592 3.81741 9.18392 4.29924L8.73825 9.43257H4.12058C3.63758 9.43257 3.24558 9.82574 3.24558 10.3076C3.24558 10.7894 3.63758 11.1826 4.12058 11.1826H8.58659L7.94492 18.5641H3.20825C2.72525 18.5641 2.33325 18.9561 2.33325 19.4391C2.33325 19.9221 2.72525 20.3141 3.20825 20.3141H7.79325L7.35925 25.2981C7.31725 25.7787 7.67425 26.2022 8.15492 26.2454L8.23192 26.2489C8.68108 26.2489 9.06259 25.9047 9.10225 25.4486L9.54908 20.3152H16.9224L16.4908 25.2969C16.4488 25.7787 16.8058 26.2022 17.2864 26.2454L17.3634 26.2489C17.8126 26.2489 18.1941 25.9047 18.2337 25.4486L18.6794 20.3152H23.2959C23.7778 20.3152 24.1709 19.9221 24.1709 19.4402C24.1709 18.9584 23.7778 18.5652 23.2959 18.5652H18.8299L19.4716 11.1837H24.2083C24.6913 11.1837 25.0833 10.7917 25.0833 10.3087C25.0833 9.82574 24.6913 9.43374 24.2083 9.43374ZM17.0741 18.5641H9.70075L10.3424 11.1837H17.7157L17.0741 18.5641Z" fill="black"/>
</g>
</svg>

        <span className="header__navbar__item__title">Explore</span>
    </li>
    <li className="header__navbar__item">
    <svg className='header__navbar__item__icon' width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_7357_318"  maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28">
<rect width="28" height="28" fill="#C4C4C4"/>
</mask>
<g mask="url(#mask0_7357_318)">
<path d="M25.314 19.2943C25.2907 19.2757 22.8173 17.381 22.8605 12.2593C22.8838 9.30533 21.9131 6.68032 20.1223 4.86848C18.5181 3.24332 16.3458 2.34498 14.0067 2.33331H13.9915C11.6535 2.34498 9.48115 3.24333 7.87581 4.86966C6.08615 6.68149 5.11315 9.30533 5.13882 12.2593C5.18199 17.311 2.78215 19.2208 2.68648 19.2943C2.38315 19.5195 2.25948 19.9127 2.37731 20.272C2.49631 20.6313 2.8323 20.8728 3.20797 20.8728H8.94799C9.06699 23.5678 11.2778 25.7262 13.9996 25.7262C16.7215 25.7262 18.93 23.5678 19.0478 20.8728H24.7901C25.1658 20.8728 25.5018 20.6325 25.6185 20.2732C25.7386 19.915 25.615 19.5206 25.3117 19.2955L25.314 19.2943ZM14.0008 23.9727C12.245 23.9727 10.8158 22.5995 10.7015 20.8717H17.3001C17.1835 22.5983 15.7566 23.975 14.0008 23.975V23.9727ZM5.11082 19.1217C5.97415 17.801 6.91682 15.589 6.88882 12.243C6.86782 9.72298 7.64015 7.59732 9.12065 6.09815C10.3958 4.80665 12.1306 4.09148 14.0008 4.08331C15.871 4.09265 17.6023 4.80666 18.8775 6.09933C20.3591 7.59849 21.1326 9.72299 21.1116 12.2442C21.0836 15.5902 22.0275 17.8033 22.8908 19.1228H5.11082V19.1217Z" fill="black"/>
</g>
</svg>

        <span className="header__navbar__item__title">Notifications</span>
    </li>
    <li className="header__navbar__item">
    <svg className='header__navbar__item__icon' width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_7357_314"  maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28">
<rect width="28" height="28" fill="#C4C4C4"/>
</mask>
<g mask="url(#mask0_7357_314)">
<path d="M22.4583 3.5H5.54159C3.77175 3.5 2.33325 4.93967 2.33325 6.71067V21.2882C2.33325 23.0592 3.77175 24.5 5.54159 24.5H22.4583C24.2281 24.5 25.6666 23.0592 25.6666 21.2882V6.71067C25.6666 4.93967 24.2281 3.5 22.4583 3.5ZM5.54159 5.25H22.4583C23.2633 5.25 23.9166 5.90333 23.9166 6.70833V7.54132L14.5249 13.8028C14.2064 14.0128 13.7946 14.0152 13.4749 13.8005L4.08325 7.54132V6.70833C4.08325 5.90333 4.73659 5.25 5.54159 5.25ZM22.4583 22.7477H5.54159C4.73659 22.7477 4.08325 22.0943 4.08325 21.2893V9.59233L12.5299 15.2273C12.9768 15.526 13.4889 15.6753 13.9999 15.6753C14.5133 15.6753 15.0231 15.526 15.4699 15.2285L23.9166 9.59349V21.2858C23.9166 22.0908 23.2633 22.7442 22.4583 22.7442V22.7477Z" fill="black"/>
</g>
</svg>

        <span className="header__navbar__item__title">Messages</span>
    </li>
    <li className="header__navbar__item">
    <svg className='header__navbar__item__icon' width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_7357_331"  maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28">
<rect width="28" height="28" fill="#C4C4C4"/>
</mask>
<g mask="url(#mask0_7357_331)">
<path d="M22.8083 25.8416C22.6252 25.8416 22.4443 25.7833 22.2927 25.6736L13.5917 19.341L4.89067 25.676C4.62467 25.8673 4.27232 25.8976 3.97832 25.746C3.68665 25.5978 3.5 25.2968 3.5 24.9678V4.95831C3.5 3.51165 4.67833 2.33331 6.125 2.33331H21.056C22.5027 2.33331 23.681 3.51165 23.681 4.95831V24.9666C23.681 25.2956 23.4967 25.5966 23.2027 25.746C23.079 25.8101 22.9425 25.8416 22.806 25.8416H22.8083ZM13.5917 17.3833C13.7725 17.3833 13.9533 17.4393 14.105 17.5513L21.9333 23.2481V4.95831C21.9333 4.47765 21.5402 4.08331 21.0583 4.08331H6.125C5.64317 4.08331 5.25 4.47765 5.25 4.95831V23.2481L13.0783 17.5513C13.23 17.4393 13.4108 17.3833 13.5917 17.3833Z" fill="black"/>
</g>
</svg>

        <span className="header__navbar__item__title">Bookmarks</span>
    </li>
    <li className="header__navbar__item">
    <svg className='header__navbar__item__icon' width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_7357_326"  maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28">
<rect width="28" height="28" fill="#C4C4C4"/>
</mask>
<g mask="url(#mask0_7357_326)">
<path d="M23.0416 25.6666H4.95825C3.51159 25.6666 2.33325 24.4883 2.33325 23.0416V4.95831C2.33325 3.51165 3.51159 2.33331 4.95825 2.33331H23.0416C24.4883 2.33331 25.6666 3.51165 25.6666 4.95831V23.0416C25.6666 24.4883 24.4883 25.6666 23.0416 25.6666ZM4.95825 4.08331C4.47525 4.08331 4.08325 4.47648 4.08325 4.95831V23.0416C4.08325 23.5235 4.47525 23.9166 4.95825 23.9166H23.0416C23.5246 23.9166 23.9166 23.5235 23.9166 23.0416V4.95831C23.9166 4.47648 23.5246 4.08331 23.0416 4.08331H4.95825Z" fill="black"/>
<path d="M19.5417 9.91669H7.875C7.392 9.91669 7 9.52352 7 9.04169C7 8.55985 7.392 8.16669 7.875 8.16669H19.5417C20.0247 8.16669 20.4167 8.55752 20.4167 9.04169C20.4167 9.52585 20.0247 9.91669 19.5417 9.91669ZM19.5417 14.7117H7.875C7.392 14.7117 7 14.3197 7 13.8367C7 13.3537 7.392 12.9617 7.875 12.9617H19.5417C20.0247 12.9617 20.4167 13.3537 20.4167 13.8367C20.4167 14.3197 20.0247 14.7117 19.5417 14.7117ZM13.7083 19.5067H7.875C7.392 19.5067 7 19.1159 7 18.6317C7 18.1475 7.392 17.7567 7.875 17.7567H13.7083C14.1913 17.7567 14.5833 18.1499 14.5833 18.6317C14.5833 19.1135 14.1913 19.5067 13.7083 19.5067Z" fill="black"/>
</g>
</svg>

        <span className="header__navbar__item__title">Lists</span>
    </li>
    <li className="header__navbar__item"><svg className='header__navbar__item__icon' width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_7357_80"  maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28">
<rect width="28" height="28" fill="#C4C4C4"/>
</mask>
<g mask="url(#mask0_7357_80)">
<path d="M13.2428 14.1867C14.8236 14.1867 16.5935 14.0116 17.7228 12.7213C18.6725 11.6363 18.9805 9.95865 18.6631 7.59731C18.2198 4.30148 16.1933 2.33331 13.2428 2.33331C10.2923 2.33331 8.2658 4.30148 7.82247 7.59965C7.50514 9.95865 7.81315 11.6363 8.76281 12.7213C9.89215 14.0128 11.662 14.1867 13.2428 14.1867ZM9.55614 7.83064C9.74514 6.43064 10.4743 4.08331 13.2428 4.08331C16.0113 4.08331 16.7405 6.43181 16.9295 7.83064C17.171 9.63898 16.996 10.8955 16.4045 11.5698C15.8736 12.1765 14.9275 12.4367 13.2428 12.4367C11.5581 12.4367 10.612 12.1765 10.0811 11.5698C9.48964 10.8955 9.31464 9.63781 9.55614 7.83064ZM22.9028 22.8433C21.8796 18.7297 17.9071 15.855 13.2428 15.855C8.57848 15.855 4.60598 18.7297 3.58281 22.8433C3.38214 23.6507 3.55014 24.4767 4.04364 25.1067C4.51964 25.7133 5.25697 26.0633 6.06547 26.0633H20.4201C21.2286 26.0633 21.966 25.7133 22.442 25.1067C22.9366 24.4767 23.1035 23.6518 22.9016 22.8433H22.9028ZM21.0641 24.0286C20.9171 24.2153 20.6955 24.3157 20.4201 24.3157H6.06547C5.79131 24.3157 5.56847 24.2165 5.42147 24.0286C5.26164 23.8256 5.21148 23.548 5.28148 23.2656C6.10981 19.9348 9.38464 17.6073 13.2428 17.6073C17.101 17.6073 20.3758 19.9336 21.2041 23.2656C21.2741 23.548 21.224 23.8256 21.0641 24.0286Z" fill="black"/>
</g>
</svg>

        <span className="header__navbar__item__title">Profile</span>
    </li>
    <li className="header__navbar__item">
    <svg className='header__navbar__item__icon' width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_7357_287"  maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="28">
<rect width="28" height="28" fill="#C4C4C4"/>
</mask>
<g mask="url(#mask0_7357_287)">
<path d="M18.9584 11.6667C17.8326 11.6667 16.9167 12.5849 16.9167 13.7084C16.9167 14.8319 17.8314 15.75 18.9584 15.75C20.0831 15.75 21.0001 14.833 21.0001 13.7084C21.0001 12.5837 20.0831 11.6667 18.9584 11.6667ZM18.9584 14.5834C18.4754 14.5834 18.0834 14.1914 18.0834 13.7084C18.0834 13.2265 18.4766 12.8334 18.9584 12.8334C19.4402 12.8334 19.8334 13.2254 19.8334 13.7084C19.8334 14.1902 19.4414 14.5834 18.9584 14.5834ZM13.7084 11.6667C12.5814 11.6667 11.6667 12.5849 11.6667 13.7084C11.6667 14.8319 12.5826 15.75 13.7084 15.75C14.8342 15.75 15.7501 14.833 15.7501 13.7084C15.7501 12.5837 14.8354 11.6667 13.7084 11.6667ZM13.7084 14.5834C13.2254 14.5834 12.8334 14.1914 12.8334 13.7084C12.8334 13.2265 13.2266 12.8334 13.7084 12.8334C14.1902 12.8334 14.5834 13.2254 14.5834 13.7084C14.5834 14.1902 14.1914 14.5834 13.7084 14.5834ZM8.45842 11.6667C7.33258 11.6667 6.41675 12.5849 6.41675 13.7084C6.41675 14.8319 7.33258 15.75 8.45842 15.75C9.58308 15.75 10.5001 14.833 10.5001 13.7084C10.5001 12.5837 9.58191 11.6667 8.45842 11.6667ZM8.45842 14.5834C7.97542 14.5834 7.58342 14.1914 7.58342 13.7084C7.58342 13.2265 7.97658 12.8334 8.45842 12.8334C8.94025 12.8334 9.33342 13.2254 9.33342 13.7084C9.33342 14.1902 8.94142 14.5834 8.45842 14.5834Z" fill="black"/>
<path d="M13.7084 26.25C6.79242 26.25 1.16675 20.6244 1.16675 13.7084C1.16675 6.79235 6.79242 1.16669 13.7084 1.16669C20.6244 1.16669 26.2501 6.79235 26.2501 13.7084C26.2501 20.6244 20.6244 26.25 13.7084 26.25ZM13.7084 2.91669C7.75842 2.91669 2.91675 7.75835 2.91675 13.7084C2.91675 19.6584 7.75842 24.5 13.7084 24.5C19.6584 24.5 24.5001 19.6584 24.5001 13.7084C24.5001 7.75835 19.6584 2.91669 13.7084 2.91669Z" fill="black"/>
</g>
</svg>

        <span className="header__navbar__item__title">More</span>
    </li>
</ul>

<button className="header__btn">Tweet</button>
<div className="header__my__account">
    <img src={myAccountImage} alt="My account" className="header__account__image" width='50' height='50' />
    <div className="header__my__account__innerBox">
        <h3 className="header__account__name">Bobur</h3>
        <p className="header__account__username">@bobur_mavlonov</p>
    </div>
    <ul className="header__account__dotes">
        <li className="header__more__btn"></li>
        <li className="header__more__btn"></li>
        <li className="header__more__btn"></li>
    </ul>
</div>
    </div>
  )
}

export default Header
