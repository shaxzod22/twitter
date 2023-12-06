import SearchImage from './../assets/images/search.png'
import Settings from './../assets/images/settings.png'
import './Footer.scss'
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
      <div className="footer__search__box">
        <img src={SearchImage} alt="search" width='24' height='24' className="footer__search__img" />
        <input type="text" placeholder='Search Twitter' className="footer__search__input" />
      </div>

<div className="footer__trends__box">
    <div className="footer__trends__heading__box">
        <h3 className="footer__trends__heading">Trends for you</h3>
        <img src={Settings} alt="Settings" width='22' height='22' className="footer__trends__setting__img" />
    </div>
</div>
    </div>
    </div>
  )
}

export default Footer
