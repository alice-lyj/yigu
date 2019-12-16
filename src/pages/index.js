// import Index from "./demo";
// import Classify from "./classify";
// import Delivery from "./classify/delivery";
// import Search from "../component/search";
// import My from "./my";
// import Cart from "./cart";


import Loadable from "react-loadable"
import Loading  from  "../loading"
const Index = Loadable({
    loader : ()=>import ("./demo"),
    loading : Loading
})
const Classify = Loadable({
    loader : ()=>import ("./classify"),
    loading : Loading
})
const Delivery = Loadable({
    loader : ()=>import ("./classify/delivery"),
    loading : Loading
})
const Search = Loadable({
    loader : ()=>import ("../component/search"),
    loading : Loading
})
const My = Loadable({
    loader : ()=>import ("./my"),
    loading : Loading
})
const Cart = Loadable({
    loader : ()=>import ("./cart"),
    loading : Loading
})
const Login = Loadable({
    loader : ()=>import ("./login"),
    loading : Loading
})
const Detail = Loadable({
    loader : ()=>import ("../component/detail"),
    loading : Loading
})
export{
    Index,
    Classify,
    My,
    Cart,
    Delivery,
    Search,
    Login,
    Detail
} 