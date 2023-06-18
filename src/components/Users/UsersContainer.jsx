import React from "react";
import { connect } from "react-redux";
import { follow, unfollow, setCurrentPage } from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { toggleFollowingProgress } from "../../redux/users-reducer";
import { requestUsers } from "../../redux/users-reducer";
// import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";
import { compose } from "redux";
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from "../../redux/users-selectors";


class UsersContainer extends React.Component {
    componentDidMount() {
        let {currentPage, pageSize} = this.props
        this.props.requestUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props.pageSize
        this.props.requestUsers(pageNumber, pageSize);
    }

    render() {
        return <>
            {this.props.isFetching
                ? <Preloader />
                : <Users totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    followingInProgress={this.props.followingInProgress}
                // toggleFollowingProgress={this.props.toggleFollowingProgress}
                />}

        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}



export default compose(
    // WithAuthRedirect,
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, toggleFollowingProgress, requestUsers}),
)(UsersContainer)