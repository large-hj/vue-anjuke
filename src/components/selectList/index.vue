<template>
    <div class="selectBox">
        <van-dropdown-menu>
            <van-dropdown-item v-model="value1" :options="option1" />
            <van-dropdown-item v-model="value2" :options="option2" />
            <van-dropdown-item v-model="value3" :options="option3" />
             <van-dropdown-item v-model="value4" :options="option4" />
        </van-dropdown-menu>
    </div>
</template>
<script>
export default {
    name:"List",
     data() {
        return {
            value1: 0,
            value2: 'a',
            value3:'A',
            value4:'aa',
            option1: [
                { text: '区域', value: 0 },
                { text: '全部', value: 1 },
                { text: '朝阳', value: 2 },
                { text: '大兴', value: 3 },
                { text: '丰台', value: 4 },
                { text: '昌平', value: 5 },
                { text: '海淀', value: 6 },
                { text: '房山', value: 7 },
                { text: '通州', value: 8 },
                { text: '顺义', value: 9 },
                { text: '东城', value: 10 },
                { text: '西城', value: 11 },
                { text: '密云', value: 12 },
                { text: '石景山', value: 13 },
                { text: '北京周边', value: 14 },
                { text: '怀柔', value: 15 },
                { text: '门头沟', value: 16 },
                { text: '平谷', value: 17 },
                { text: '延庆', value: 18 },
            ],
            option2: [
                { text: '价格', value: 'a' },
                { text: '100万以下', value: 'b' },
                { text: '100-150万', value: 'c' },
                 { text: '150-200万', value: 'd' },
                { text: '200-250万', value: 'e' },
                 { text: '250-300万', value: 'f' },
                { text: '300-400万', value: 'g' },
                { text: '400-500万', value: 'h' },
                { text: '500-700万', value: 'i' },
                { text: '700-1000万', value: 'j' },
                { text: '1000-1500万', value: 'k' },
                 { text: '1500-2000万', value: 'l' },
                  { text: '2000万以上', value: 'm' },
            ],
             option3: [
                {text:'全部',value:'A'},
                { text: '一室', value: 'B' },
                { text: '二室', value: 'C' },
                { text: '三室', value: 'D' },
                { text: '四室', value: 'E' },
                { text: '五室', value: 'F' },
                { text: '五世以上', value: 'G' },
            ],
              option4: [
                {text:'更多',value:'aa'},
                { text: '', value: 'bb' },
                { text: '', value: 'cc' },
                { text: '', value: 'dd' },
                { text: '', value: 'ee' },
                { text: '', value: 'ff' },
                { text: '', value: 'gg' },
            ],
        }
    }
}
</script>
<style scoped>
   
</style>