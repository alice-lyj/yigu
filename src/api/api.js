import axios from "./axios"

//这个是  侧边栏 ，以及头部导航的接口
export const getSortData = ()=>{
    return axios.get("/api/goods/classify")
}

//这个是页面刚进来list获取商品的信息的接口
export const getListData = (id,page)=>{
  if(id && page){
    return axios.get("/api/goods/list?sorts=hits+asc&tid="+id+"&pageNo="+page+"")
  }else{
    return axios.get("http://api.egu365.com/goods/list?sorts=hits+asc&tid=0200000000&pageNo=1")  
  } 
}

//这个是点击头部相应额分列获取相应的数据的请求接口
export const getEachListData = (id,page)=>{
  if(id && page){
      return axios.get("/api/goods/list?sorts=hits+asc&tid="+id+"&pageNo="+page)
      //http://api.egu365.com/goods/list?sorts=hits+asc&tid=0201000000&pageNo=1
  }
  else{
      return axios.get("http://api.egu365.com/goods/list?sorts=hits+asc&tid=0201000000&pageNo=1")
  }
}


//获取我的  数据
export const getMyData = (page)=>{
  if(page){
    return axios.get("/api/goods/list?sorts=hits+asc&pageNo="+page)
  }
  return axios.get("/api/goods/list?sorts=hits+asc&pageNo=1")
//http://api.egu365.com/goods/list?sorts=hits+asc&pageNo=1  
}

export const getIndexData = (pages)=>{
  return axios.post("/api/news/adviseGoods?seat="+pages)
}