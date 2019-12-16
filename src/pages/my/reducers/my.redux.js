import {getMyData} from "@/api/api";

const GET_MY_DATA = "GET_MY_DATA";
const defaultState = {
    myData:[]
}


export default (state = defaultState , action)=>{
    const newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case GET_MY_DATA :
            newState.myData = [...newState.myData,...action.data]
            return newState
        default :
            return state;
    }
}

const getMyAction = (data)=>({
    type : GET_MY_DATA,
    data
})


export const getMyApi = (page)=>{
    return dispatch=>{
        getMyData(page).then(res=>{
            dispatch(getMyAction(res.list));
        })
    }
}