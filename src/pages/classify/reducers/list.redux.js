import {getListData,getEachListData} from "@/api/api";

const GET_LIST_DATA = "GET_LIST_DATA";
const GET_EACH_LIST_DATA ="GET_EACH_LIST_DATA"

const defaultState = {
    listData :[],
    listEachData:[]
}

export default (state = defaultState ,action)=>{
    const newState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case GET_LIST_DATA :
            newState.listData = [...newState.listData,...action.data];
            return newState;
        case GET_EACH_LIST_DATA :
            newState.listEachData = [...action.data];
            return newState;
        default :
            return state ;
    }
}
const getListAction = (data)=>{
    return {
    type : GET_LIST_DATA,
    data
}}
const getEachListAction = (data)=>{
    return {
    type : GET_EACH_LIST_DATA,
    data
}}

//这个是获取 列表的数据
export const getListApi = (id,pagenum)=>{
    return dispatch=>{
        getListData(id,pagenum).then((res)=>{
            dispatch(getListAction(res.list));
        })   
    } 
}
//这个是点击头部获取相应的lits 数据的
export const getEachListApi = (id,pagenum)=>{
    return dispatch=>{
        getEachListData(id,pagenum).then((res)=>{
            dispatch(getEachListAction(res.list));
        })   
    } 
}