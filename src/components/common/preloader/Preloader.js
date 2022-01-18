import preloader from '../../../assets/images/preloader.svg'
import ui from '../../../scss/ui.module.scss';

//========================================================================================================================================================

const Preloader = (props) => {
    return (
        <div className={ui.preloader}>
            <img src={preloader} />
        </div>
    )
}

//========================================================================================================================================================

export default Preloader;
