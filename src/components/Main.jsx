import Stars from './../assets/images/stars.png'
import myAccountImage from './../assets/images/bobur.png'
import ImageIcon from './../assets/images/imageIcon.svg'
import GifIcon from './../assets/images/gif.png'
import StatsIcon from './../assets/images/stats.png'
import SmileIcon from './../assets/images/smile.png'
import ScheduleIcon from './../assets/images/schedule.png'
import AccountImage from './../assets/images/designsta.png'
import Comment from './../assets/images/comment.png'
import Retweet from './../assets/images/retweet.png'
import Like from './../assets/images/like.png'
import Share from './../assets/images/share.png'
import Statistics from './../assets/images/statistics.png'
import './Main.scss'

const Main = () => {
    return (
        <div className='main'>
        <div className="main__container">

        <section className="home">
        <div className="home__container">
        <h2 className="home__heading">Home</h2>
        <img src={Stars} alt="Stars" width='24' height='24' className="home__star__icon" />
        </div>
        </section>

        <section className="myPost">
        <div className="myPost__container">
        <form className="myPost__form">
        <div className="myPost__title__box">
        <img src={myAccountImage} alt="Bobur" width='60' height='60' />
        <textarea type="text" placeholder='What`s happening' className="myPost__title__input" />
        </div>
        <ul className="myPost__download__list">
        <li className="myPost__download__item"><img src={ImageIcon} alt="icon" className="myPost__download__icon" /></li>
        <li className="myPost__download__item"><img src={GifIcon} alt="icon" className="myPost__download__icon" /></li>
        <li className="myPost__download__item"><img src={StatsIcon} alt="icon" className="myPost__download__icon" /></li>
        <li className="myPost__download__item"><img src={SmileIcon} alt="icon" className="myPost__download__icon" /></li>
        <li className="myPost__download__item"><img src={ScheduleIcon} alt="icon" className="myPost__download__icon" /></li>
        </ul>
        <button className="myPost__btn">Tweet</button>
        </form>
        </div>
        </section>

        <section className="otherPosts">
        <div className="otherPosts__container">
        <ul className="otherPosts__list">
        <li className="otherPosts__item">
        <img src={AccountImage} alt="account" width='60' height='60' />
        <div className="otherPosts__inner__box">
        <h3 className="otherPosts__account__name">Designsta <span className="otherPosts__userName">@inner · 25m</span></h3>
        <p className="otherPosts__account__overview">Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?</p>
        <ul className="otherPosts__emotions">
        <li className="otherPosts__emotion__item"><img src={Comment} alt="comment" className="otherPosts__emotion__img" /> 23</li>
        <li className="otherPosts__emotion__item"><img src={Retweet} alt="comment" className="otherPosts__emotion__img" />4</li>
        <li className="otherPosts__emotion__item"><img src={Like} alt="comment" className="otherPosts__emotion__img" />5</li>
        <li className="otherPosts__emotion__item"><img src={Share} alt="comment" className="otherPosts__emotion__img" />3</li>
        <li className="otherPosts__emotion__item"><img src={Statistics} alt="comment" className="otherPosts__emotion__img" />7</li>
        </ul>
        </div>
        <ul className="otherPosts__more__list">
        <li className="otherPosts__more__item"></li>
        <li className="otherPosts__more__item"></li>
        <li className="otherPosts__more__item"></li>
        </ul>
        </li>
        </ul>
        </div>
        </section>
        </div>
        </div>
        )
    }
    
    export default Main
    