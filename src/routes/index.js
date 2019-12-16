import {
    Index,
    Classify,
    My,
    Delivery,
    Cart,
    Search,
    Login,
    Detail

} from "@/pages";
export const mainRoutes = [
    {
        pathname : "/index",
        component : Index,
        icon : "\ue601",
        name:"首页",
        index:0,
        flag:true
    }, 
    {
        pathname : "/classify",
        component : Classify,
        icon:"\ue60e",
        name : "分类",
        index:1,
        flag:true
    },
    {
        pathname : "/cart",
        component : Cart,
        icon : "\ue621",
        name : "购物车",
        index:2,
        flag:true
    },
    {
        pathname : "/my",
        component : My,
        icon : "\ue6f3",
        name : "我的",
        index:3 ,
        flag:true     

    }
]

export const otherRoutes = [
    {
        pathname : "/delivery",
        component : Delivery,
    },
    {
        pathname : "/search",
        component : Search,
    },
    {
        pathname : "/goods/detail/:id",
        component : Detail,
    },
    {
        pathname : "/login",
        component : Login
    }
]

