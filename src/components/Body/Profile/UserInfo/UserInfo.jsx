import React, { useState } from 'react';
import Preloader from '../../../common/Preloader/Preloader';
import UserStatus from './UserStatus.tsx';
import ProfileDataForm from './ProfileData/ProfileDataForm';
import ProfileData from './ProfileData/ProfileData';
import { Formik } from 'formik';
import settings from '../../../../assets/images/settings.svg';
import ui from '../../../../scss/ui.module.scss';

//========================================================================================================================================================

let UserInfo = (props) => {
    const [isActive, setActive] = useState(false);
    const [editMode, setEditMode] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);

    };

    if (!props.profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (values, setStatus) => {
        props.saveProfile(values, setStatus).then(() => {
            setEditMode(false);
        })
    }

    const goToEditMode = () => {
        setEditMode(true)
    }

    return (
        <div className="contact-area">
            <div className="contact">
                <main>
                    <section>
                        <div className="content">
                            {props.isOwner &&
                                <div>
                                    <label htmlFor="file-upload" className="custom__file-upload">
                                        <p>Change photo</p>
                                    </label>
                                    <input id="file-upload" type='file' onChange={onMainPhotoSelected} />
                                </div>
                            }
                            <aside>
                                <div className='profile__image'>
                                    <img src={props.profile.photos.large ? props.profile.photos.large : "https://s3-us-west-2.amazonaws.com/s.cdpn.io/256492/_mLIxaKY_400x400.jpg"} alt="Profile" />
                                </div>
                                <div>
                                    <div className='profile__user'>
                                        <h1 className='profile__username'>{props.profile.fullName ? props.profile.fullName : 'Riccardo Cavallo'}</h1>
                                        {props.isOwner &&
                                            <div>
                                                <button className='profile__edit' onClick={goToEditMode}>
                                                    <img src={settings} alt="" />
                                                </button>
                                            </div>
                                        }
                                    </div>
                                    <div>
                                        {props.isOwner
                                            ? <UserStatus status={props.status} updateStatus={props.updateStatus} />
                                            :
                                            <div>
                                                <div className={ui.input__block}>
                                                    <span>{props.status || 'No status :C'}</span>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                    <div>
                                        {editMode
                                            ? <ProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit} />
                                            : <ProfileData profile={props.profile} isOwner={props.isOwner} />
                                        }
                                    </div>
                                </div>
                            </aside>
                            {props.isOwner &&
                                <span>
                                    {editMode
                                        ? null
                                        : <button onClick={toggleClass} className={isActive ? 'button active' : 'button'}>
                                            <span>Contact Me</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"> <g className="nc-icon-wrapper" fill="#444444"> <path d="M14.83 30.83L24 21.66l9.17 9.17L36 28 24 16 12 28z"></path> </g> </svg>
                                        </button>
                                    }
                                </span>
                            }
                        </div>
                        {!editMode && <div className={isActive ? 'title active' : 'title'}><p>Contact Me</p></div>}
                    </section>
                </main>
                {!editMode && <ContactsLinks profile={props.profile} isActive={isActive} />}
            </div>
        </div>
    );
}

const ContactsLinks = (props) => {
    return (
        <Formik>
            <nav className={props.isActive ? 'nav active' : 'nav'}>
                <a href="#vk.com" className="gmail">
                    <div className="icon">
                        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M16 3v10c0 .567-.433 1-1 1h-1V4.925L8 9.233 2 4.925V14H1c-.567 0-1-.433-1-1V3c0-.283.108-.533.287-.712C.467 2.107.718 2 1 2h.333L8 6.833 14.667 2H15c.283 0 .533.108.713.288.179.179.287.429.287.712z" fillRule="evenodd" /></svg>
                    </div>

                    <div className="content">
                        <h1>Vk</h1>
                        <span>{props.profile.contacts.vk}</span>
                    </div>

                    <svg className="arrow" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"> <g className="nc-icon-wrapper" fill="#444444"> <path d="M17.17 32.92l9.17-9.17-9.17-9.17L20 11.75l12 12-12 12z"></path> </g> </svg>
                </a>

                <a href="#vk.com" className="facebook">
                    <div className="icon">
                        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414"><path d="M15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.48-1.195 1.18v1.54h2.39l-.31 2.42h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0" fillRule="nonzero" /></svg>
                    </div>

                    <div className="content">
                        <h1>Instagram</h1>
                        <span>{props.profile.contacts.instagram}</span>
                    </div>

                    <svg className="arrow" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"> <g className="nc-icon-wrapper" fill="#444444"> <path d="M17.17 32.92l9.17-9.17-9.17-9.17L20 11.75l12 12-12 12z"></path> </g> </svg>
                </a>

                <a href="#vk.com" className="twitter">
                    <div className="icon">
                        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414"><path d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.37-1.337.64-2.085.79-.598-.64-1.45-1.04-2.396-1.04-1.812 0-3.282 1.47-3.282 3.28 0 .26.03.51.085.75-2.728-.13-5.147-1.44-6.766-3.42C.83 2.58.67 3.14.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.41-.02-.61-.058.42 1.304 1.63 2.253 3.07 2.28-1.12.88-2.54 1.404-4.07 1.404-.26 0-.52-.015-.78-.045 1.46.93 3.18 1.474 5.04 1.474 6.04 0 9.34-5 9.34-9.33 0-.14 0-.28-.01-.42.64-.46 1.2-1.04 1.64-1.7z" fillRule="nonzero" /></svg>
                    </div>

                    <div className="content">
                        <h1>GitHub</h1>
                        <span>{props.profile.contacts.github}</span>
                    </div>

                    <svg className="arrow" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"> <g className="nc-icon-wrapper" fill="#444444"> <path d="M17.17 32.92l9.17-9.17-9.17-9.17L20 11.75l12 12-12 12z"></path> </g> </svg>
                </a>

                <a href="#vk.com" className="twitter">
                    <div className="icon">
                        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414"><path d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.37-1.337.64-2.085.79-.598-.64-1.45-1.04-2.396-1.04-1.812 0-3.282 1.47-3.282 3.28 0 .26.03.51.085.75-2.728-.13-5.147-1.44-6.766-3.42C.83 2.58.67 3.14.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.41-.02-.61-.058.42 1.304 1.63 2.253 3.07 2.28-1.12.88-2.54 1.404-4.07 1.404-.26 0-.52-.015-.78-.045 1.46.93 3.18 1.474 5.04 1.474 6.04 0 9.34-5 9.34-9.33 0-.14 0-.28-.01-.42.64-.46 1.2-1.04 1.64-1.7z" fillRule="nonzero" /></svg>
                    </div>

                    <div className="content">
                        <h1>Telegram</h1>
                        <span>@dino</span>
                    </div>

                    <svg className="arrow" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"> <g className="nc-icon-wrapper" fill="#444444"> <path d="M17.17 32.92l9.17-9.17-9.17-9.17L20 11.75l12 12-12 12z"></path> </g> </svg>
                </a>

                <a href="#vk.com" className="twitter">
                    <div className="icon">
                        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414"><path d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.37-1.337.64-2.085.79-.598-.64-1.45-1.04-2.396-1.04-1.812 0-3.282 1.47-3.282 3.28 0 .26.03.51.085.75-2.728-.13-5.147-1.44-6.766-3.42C.83 2.58.67 3.14.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.41-.02-.61-.058.42 1.304 1.63 2.253 3.07 2.28-1.12.88-2.54 1.404-4.07 1.404-.26 0-.52-.015-.78-.045 1.46.93 3.18 1.474 5.04 1.474 6.04 0 9.34-5 9.34-9.33 0-.14 0-.28-.01-.42.64-.46 1.2-1.04 1.64-1.7z" fillRule="nonzero" /></svg>
                    </div>

                    <div className="content">
                        <h1>Email</h1>
                        <span>saskeazaske@mail.ru</span>
                    </div>

                    <svg className="arrow" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"> <g className="nc-icon-wrapper" fill="#444444"> <path d="M17.17 32.92l9.17-9.17-9.17-9.17L20 11.75l12 12-12 12z"></path> </g> </svg>
                </a>
            </nav>
        </Formik>
    )
}

//========================================================================================================================================================

export default UserInfo;
