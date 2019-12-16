import {getIndexData} from "@/api/api";

const GET_ACTION="GET_ACTION";

const dataCC= (data) =>(
    {
        type:GET_ACTION,
        data
    }
)
const list = {listing:[]}
export default (state=list,action)=>{
    const newState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case GET_ACTION:
            newState.listing = [...newState.listing,action.data]
            return newState
        default:
            return state
    }
}

export const Datab=(pages)=>{
    return dispatch=>{
        getIndexData(pages).then(res=>{
            console.log(res.list);
            dispatch(dataCC(res.list))
            
        })
    }
}

