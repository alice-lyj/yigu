import {getSortData} from "@/api/api";


const GET_SORT_DATA = "GET_SORT_DATA";
const GET_SLIDER_DATA = "GET_SLIDER_DATA";

const defaultState = {
    sortData :[],
    sliderData : []
}

export default (state = defaultState ,action)=>{
    const newState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case GET_SORT_DATA :
            newState.sortData = [...action.data];
            return newState;
        case GET_SLIDER_DATA :
            newState.sliderData = [...action.data];
            return newState;
        default :
            return state ;
    }
}
//这个是头部的action
const getSortAction = (data)=>({
    type : GET_SORT_DATA,
    data
})
//这个是slider 的action
const getSliderAction = (data)=>({
    type : GET_SLIDER_DATA,
    data
})

//这个是获取头部的 nav 列表的数据
export const getSortApi = (index)=>{
    return dispatch=>{
        getSortData().then((res)=>{
            dispatch(getSortAction(res.list[index].bcProductTypeEos))
        })   
    } 
}
//这里是获取侧边栏 slider 的数据
export const getSliderApi = ()=>{
    return dispatch=>{
        getSortData().then((res)=>{
            dispatch(getSliderAction(res.list))
        })   
    } 
}


