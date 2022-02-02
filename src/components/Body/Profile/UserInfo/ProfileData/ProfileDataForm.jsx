import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { string } from 'yup';
import ui from '../../../../../scss/ui.module.scss';

//========================================================================================================================================================

const ProfileDataForm = (props) => {
    const validationProfile = yup.object().shape({
        fullName: yup.string().typeError('string expected!').required('Obligatory field!'),
        lookingForAJobDescription: yup.string().typeError('string expected!').required('Obligatory field!'),
        aboutMe: yup.string().typeError('string expected!').required('Obligatory field!'),
    })

    return (
        <div className='profile__wpform'>
            <div className='profile__form'>
                <Formik
                    initialValues={{
                        fullName: '',
                        lookingForAJob: '',
                        lookingForAJobDescription: '',
                        aboutMe: '',
                        contacts: {
                            vk: '',
                            instagram: '',
                            github: '',
                        },
                    }}
                    validateOnBlur={false}
                    validateOnChange={false}
                    onSubmit={(values, { setSubmitting, setStatus }) => {
                        props.onSubmit(values, setStatus);
                        setSubmitting(false);
                    }}
                    validationSchema={validationProfile}
                >
                    {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty, status }) => (
                        <Form>
                            <div>
                                <button
                                    onClick={handleSubmit}
                                    type='submit'
                                    disabled={!isValid && !dirty}
                                >save</button>
                            </div>
                            <div className="login__form">
                                <p>
                                    <label htmlFor={`fullName`}>Username</label><br />
                                    <input
                                        className={ui.input}
                                        type="text"
                                        name='fullName'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.fullName || props.initialValues.fullName}
                                        placeholder='field is required'
                                    />
                                </p>
                                {touched.fullName && errors.fullName && <p className={ui.error}>{errors.fullName}</p>}
                                <p>
                                    <label htmlFor={`lookingForAJob`}>Looking for a job</label><br />
                                    <input
                                        className={ui.input}
                                        type="checkbox"
                                        name='lookingForAJob'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.lookingForAJob}
                                    />
                                </p>
                                <p>
                                    <label htmlFor={`lookingForAJobDescription`}>My professional skills</label><br />
                                    <input
                                        className={ui.input}
                                        type="text"
                                        name='lookingForAJobDescription'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.lookingForAJobDescription || props.initialValues.lookingForAJobDescription}
                                        placeholder='field is required'
                                    />
                                </p>
                                {touched.lookingForAJobDescription && errors.lookingForAJobDescription && <p className={ui.error}>{errors.lookingForAJobDescription}</p>}
                                <p>
                                    <label htmlFor={`aboutMe`}>About me</label><br />
                                    <input
                                        className={ui.input}
                                        type="text"
                                        name='aboutMe'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.aboutMe || props.initialValues.aboutMe}
                                        placeholder='field is required'
                                    />
                                </p>
                                {touched.aboutMe && errors.aboutMe && <p className={ui.error}>{errors.aboutMe}</p>}
                                <div>
                                    <div>Contacts</div>
                                    <p>
                                        <label htmlFor={`contacts.vk`}>vk</label><br />
                                        <input
                                            className={ui.input}
                                            type="email"
                                            name='contacts.vk'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.contacts.vk}
                                        />
                                    </p>
                                    <p>
                                        <label htmlFor={`contacts.instagram`}>instagram</label><br />
                                        <input
                                            className={ui.input}
                                            type="email"
                                            name='contacts.instagram'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.contacts.instagram}
                                        />
                                    </p>
                                    <p>
                                        <label htmlFor={`contacts.github`}>github</label><br />
                                        <input
                                            className={ui.input}
                                            type="email"
                                            name='contacts.github'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.contacts.github}
                                        />
                                    </p>
                                </div>
                                <div className={ui.error}>
                                    {status}
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

//========================================================================================================================================================

export default ProfileDataForm;
