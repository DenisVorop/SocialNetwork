// @ts-ignore
import { Users } from "./Users.tsx"
import './Users.scss';
import React from 'react';
import { useSelector } from "react-redux"// @ts-ignore
import { getIsFetching } from "../../../Redux/users-selectors.ts";
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';

//========================================================================================================================================================

type UsersPagePropsType = {

}

const UsersPage: React.FC<UsersPagePropsType> = () => {
    const isFetching = useSelector(getIsFetching);

    return (
        <>
            <Users isFetching={isFetching} />
        </>
    )
}

//========================================================================================================================================================

export default withAuthRedirect(UsersPage);
