import {combineReducers} from "redux";
import sortData from "@/pages/classify/reducers/header.redux";
import listData from "@/pages/classify/reducers/list.redux";
import myData from "@/pages/my/reducers/my.redux.js";
import content from "@/pages/demo/Content/reducer/content" ;

const reducers = combineReducers({
    sortData,
    listData,
    myData,
    content
});

export default reducers ;