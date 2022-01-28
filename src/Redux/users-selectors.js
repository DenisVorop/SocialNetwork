export const getUsersData = (state) => {
    return state.stateUsersPage.usersData;
}
export const getPageSize = (state) => {
    return state.stateUsersPage.pageSize;
}
export const getTotalUsersCount = (state) => {
    return state.stateUsersPage.totalUsersCount;
}
export const getCurrentPage = (state) => {
    return state.stateUsersPage.currentPage;
}
export const getIsFetching = (state) => {
    return state.stateUsersPage.isFetching;
}
export const getFollowingInProgress = (state) => {
    return state.stateUsersPage.followingInProgress;
}
