import Header from "./header"
import bscroll from "./bscroll"
// import Loading from "./loading"
import MessageBox from "./messageBox"



const UIcomponents = [
    Header,
    bscroll
]


 const install = (Vue)=>{
    //全局注册
    UIcomponents.forEach(item=>{
        Vue.component(item.name,item);
    })
}


export default {
    install,
    Loading,
    MessageBox
}


