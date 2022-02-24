import {useSelector} from "react-redux";
import React from "react";
import PublicProfileItem from "./PublicProfileItem";

const selectAllProfile = (state) => state.profile.profile;
const PublicProfile = () => {
    const profile = useSelector(selectAllProfile);
    return (
        <div>
            {
                profile.map(profile =>
                    <PublicProfileItem profile={profile}/>
                )
            }
        </div>
    );
}
export default PublicProfile;