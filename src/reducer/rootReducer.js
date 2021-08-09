import { combineReducers } from "redux";

import { tweetsReducer } from "./tweetsReducer";

export default combineReducers({
  tweetsList: tweetsReducer,
});
