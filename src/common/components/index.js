import Vue from "vue"
import Header from "./header"
import ChildHeader from "./childHeader"
import SelectBar from "./selectBar"
import ShortBox from "./shortBox"
let componentMap = [
    Header,
    ChildHeader,
    SelectBar,
    ShortBox,
]

componentMap.forEach(item=>{
    Vue.component(item.name,item)
})