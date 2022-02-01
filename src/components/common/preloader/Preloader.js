// import preloader from '../../../assets/images/preloader.svg'
import ui from '../../../scss/ui.module.scss';
import './Preloader.scss'

//========================================================================================================================================================

const Preloader = () => {
    return (
        <div className={ui.preloader}>
            <div className="spinner__box">
                <div className="blue__orbit leo">
                </div>

                <div className="green__orbit leo">
                </div>

                <div className="red__orbit leo">
                </div>

                <div className="white__orbit w1 leo">
                </div><div className="white__orbit w2 leo">
                </div><div className="white__orbit w3 leo">
                </div>
            </div>
        </div>
    )
}

//========================================================================================================================================================

export default Preloader;
