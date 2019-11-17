import Vue from "vue";
import Header from "./header"
import ChildHeader from "./childHeader"
import SelectBar from "./selectBar"
import ShortBox from "./shortBox"
import BScroll from "./betterScroll"
import Bscroll from "./bscroll"

let componentMap = [
    Header,
    BScroll,
    ChildHeader,
    SelectBar,
    ShortBox,
    Bscroll
];


componentMap.forEach(item=>{
    Vue.component(item.name,item);
})