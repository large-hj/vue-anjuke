import Vue from "vue"
import Header from "./header"
import ChildHeader from "./childHeader"
import SelectBar from "./selectBar"

let componentMap = [
    Header,
    ChildHeader,
    SelectBar
]

componentMap.forEach(item=>{
    Vue.component(item.name,item)
})