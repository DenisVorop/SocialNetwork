// @ts-ignore
import { AppStateType } from './redux-store.ts';

export const getUsersData = (state: AppStateType) => {
    return state.stateUsersPage.usersData;
}
export const getPageSize = (state: AppStateType) => {
    return state.stateUsersPage.pageSize;
}
export const getTotalUsersCount = (state: AppStateType) => {
    return state.stateUsersPage.totalUsersCount;
}
export const getCurrentPage = (state: AppStateType) => {
    return state.stateUsersPage.currentPage;
}
export const getIsFetching = (state: AppStateType ) => {
    return state.stateUsersPage.isFetching;
}
export const getFollowingInProgress = (state: AppStateType) => {
    return state.stateUsersPage.followingInProgress;
}
export const getUsersFilter = (state: AppStateType) => {
    return state.stateUsersPage.filter;
}
