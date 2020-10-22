import * as G2Plot from '@antv/g2plot'
document.body.style.background = 'rgb(240,242,245)'


const dom = document.createElement('div');
dom.id = 'container';
dom.style.height = '250px';
dom.style.width = '40%';
dom.style.position = 'absolute';
dom.style.background = '#FFF';
dom.style.padding = '24px';
document.body.appendChild(dom);

const cdata2 = {
    "value": 1.68,
    "unit": "秒",
    "series": [
        {
            "name": "DNS",
            "data": [
                {
                    "name": "wgz",
                    "value": 16
                },
                {
                    "name": "wgz2",
                    "value": 6
                }
            ]
        }
    ]
}

const data = [
    { year: '1991', value: 30 },
    { year: '1992', value: 40 },
    { year: '1993', value: 30.5 },
    { year: '1994', value: 50 },
    { year: '1995', value: 40.9 },
    { year: '1996', value: 60 },
    { year: '1997', value: 70 },
    { year: '1998', value: 90 },
    { year: '1999', value: 130 },
];


const linePlot = new G2Plot.Area('container', {
    data,
    xField: 'year',
    yField: 'value',
    yAxis:{
        // label:{
        //     formatter:(v)=>{
        //         // return v +'%'; //Y轴加单位
        //     }
        // }
    },
    line:{
        size:2,
        color:'#5B8FF9',
        
    },
    point:{
        size:4,
        shape:'circle',
        color:'#5B8FF9',
        style:{
            stroke:'#FFF',
            lineWidth:1
        }
    },
    areaStyle: {
        fill: 'l(270) 0:#ffffff  1:#5B8FF9',
    },
    meta:{
        value:{
            alias:'数据占比',   //映射字段                    
        }        
    }
});

linePlot.render();


////////////////////////

const dom2 = document.createElement('div');
dom2.id = 'container2';
dom2.style.height = '250px';
dom2.style.width = '40%';
dom2.style.position = 'absolute';
dom2.style.background = '#FFF';
dom2.style.padding = '24px';
dom2.style.marginLeft = '45%';
document.body.appendChild(dom2);

let data2 = [

    { name: '2018年1月', value: 23, type: "数据占比" },
    { name: '2018年2月', value: 25, type: "数据占比" },
    { name: '2018年3月', value: 20, type: "数据占比" },
    { name: '2018年4月', value: 30, type: "数据占比" },
    { name: '2018年5月', value: 40, type: "数据占比" },
    { name: '2018年6月', value: 42, type: "数据占比" },
    { name: '2018年7月', value: 58, type: "数据占比" },

    { name: '2018年1月', value: 40, type: "启动时间" },
    { name: '2018年2月', value: 35, type: "启动时间" },
    { name: '2018年3月', value: 25, type: "启动时间" },
    { name: '2018年4月', value: 36, type: "启动时间" },
    { name: '2018年5月', value: 35, type: "启动时间" },
    { name: '2018年6月', value: 38, type: "启动时间" },
    { name: '2018年7月', value: 68, type: "启动时间" },

];
let datar = [];
for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 10; j++) {    
        datar.push({
            name:'2020.'+j,
            value:Math.round(4*j+Math.random()*50),
            type:'图例'+i
        })
    }    
}
// line area  Column 柱状图
// bar 条形图 x轴 和 Y轴 不一样
const linePlot2 = new G2Plot.Column('container2', {
    data:datar,
    xField: 'name',
    yField: 'value',
    seriesField: 'type',
    isStack:true,
    // smooth:true,
    // line:{      
        
    // },
    legend:{
        position:"right-top",
        
        // marker:{
        //     symbol:'circle'
        // }
    },
    xAxis:{
        label:{
            formatter:(v)=>{
                if(v == '时间戳'){
                    return v +'%'; //x轴转换为时间
                }else{
                    return v + "--"
                }
                
            }
        }
    },
});

linePlot2.render();