export const getUsersData = (state: { stateUsersPage: { usersData: any; }; }) => {
    return state.stateUsersPage.usersData;
}
export const getPageSize = (state: { stateUsersPage: { pageSize: any; }; }) => {
    return state.stateUsersPage.pageSize;
}
export const getTotalUsersCount = (state: { stateUsersPage: { totalUsersCount: any; }; }) => {
    return state.stateUsersPage.totalUsersCount;
}
export const getCurrentPage = (state: { stateUsersPage: { currentPage: any; }; }) => {
    return state.stateUsersPage.currentPage;
}
export const getIsFetching = (state: { stateUsersPage: { isFetching: any; }; }) => {
    return state.stateUsersPage.isFetching;
}
export const getFollowingInProgress = (state: { stateUsersPage: { followingInProgress: any; }; }) => {
    return state.stateUsersPage.followingInProgress;
}
