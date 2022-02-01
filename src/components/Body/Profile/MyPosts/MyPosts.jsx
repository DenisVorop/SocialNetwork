import Post from "./Post/Post";
import ui from '../../../../scss/ui.module.scss';
import arrow from '../../../../assets/images/arrrow.svg'
import React from 'react';

import { Formik } from 'formik';
import * as yup from 'yup';

//========================================================================================================================================================

let MyPosts = React.memo((props) => {
    let postElements = props.posts
        .map(post =>
            <div className="profile-body__wrapper-post">
                <Post message={post.message} key={post.id} />
            </div>)

    let addNewPost = (values) => {
        props.addPost(values.newPostText)
    }

    const validationPosts = yup.object().shape({
        newPostText: yup.string().max(30, 'Error! Exceeded allowed number of characters!').typeError('string expected!').required('Obligatory field!'),
    })

    return (
        <div className="profile-body__posts">
            <div className="profile-body__input">
                <div className="profile-body__my">My posts</div>
                <div className="profile-body__myPosts">
                    <div className="profile-body__form">
                        <form>
                            <Formik
                                initialValues={{
                                    newPostText: '',
                                }}
                                validateOnBlur
                                onSubmit={(values) => { addNewPost(values) }}
                                validationSchema={validationPosts}
                            >
                                {({ values, errors, touched, handleBlur, isValid, handleSubmit, handleChange, dirty }) => (
                                    <div>
                                        <div className="profile-body__form">
                                            <div>
                                                <textarea placeholder='Write smth here and tap to btn'
                                                    className={ui._area}
                                                    type="text"
                                                    name='newPostText'
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.newPostText}
                                                />
                                            </div>
                                            <div className="profile-body__addpost">
                                                <button
                                                    disabled={!isValid && !dirty}
                                                    onClick={handleSubmit}
                                                    type='submit'
                                                >
                                                    <img src={arrow} alt="" />
                                                </button>
                                            </div>
                                        </div>
                                        {touched.newPostText && errors.newPostText && <p className='error'>{errors.newPostText}</p>}
                                    </div>
                                )}
                            </Formik>
                        </form>
                    </div>
                    {postElements}
                </div>
            </div>
        </div>
    );
})

//========================================================================================================================================================

export default MyPosts;
