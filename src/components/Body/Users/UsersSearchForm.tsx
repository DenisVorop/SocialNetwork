import { Field, Form, Formik } from 'formik';
import React from 'react';
import { FilterType } from '../../../Redux/usersReducer';

//========================================================================================================================================================

type FormType = {
    term: string,
    friend: 'true' | 'false' | 'null',
}

type PropsType = {
    onFilterChanged: (filter: FilterType) => void;
}

const UsersSearchForm: React.FC<PropsType> = React.memo((props) => {
    return (
        <div>
            <Formik
                initialValues={{
                    term: '',
                    friend: 'null',
                }}
                onSubmit={(values: FormType, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
                    const filter: FilterType = {
                        term: values.term,
                        friend: values.friend === 'null' ? null : values.friend === 'true' ? true : false,
                    }

                    props.onFilterChanged(filter)
                    setSubmitting(false);
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Field type="text" name="term" />
                        <Field name="friend" as="select">
                            <option value="null">All</option>
                            <option value="true">Only followed</option>
                            <option value="false">Only unfollowed</option>
                        </Field>
                        <button type="submit" disabled={isSubmitting}>
                            Find
                        </button>
                    </Form>
                )}
            </Formik>
        </div >
    )
})

//========================================================================================================================================================

export default UsersSearchForm;
