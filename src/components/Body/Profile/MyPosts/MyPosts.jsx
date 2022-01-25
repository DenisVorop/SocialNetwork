import Post from "./Post/Post";
import ui from '../../../../scss/ui.module.scss';

import { Formik } from 'formik';
import * as yup from 'yup';

//========================================================================================================================================================

let MyPosts = (props) => {
    let postElements = props.posts.map(post => <Post message={post.message} key={post.id} />)

    let addNewPost = (values) => {
        props.addPost(values.newPostText)
        console.log(values.newPostText)
    }

    const validationPosts = yup.object().shape({
        newPostText: yup.string().typeError('string expected!').required('Obligatory field!'),
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
                                    <div className="messages-body__form">
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
                                        {touched.newPostText && errors.newPostText && <p className='error'>{errors.newPostText}</p>}
                                        <div>
                                            <button
                                                className={ui._btn}
                                                disabled={!isValid && !dirty}
                                                onClick={handleSubmit}
                                                type='submit'
                                            >add post</button>
                                        </div>
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
}

//========================================================================================================================================================

export default MyPosts;
