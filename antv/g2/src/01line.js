
var domline = document.createElement('div');
document.body.appendChild(domline);
domline.id = "01line";
domline.style.border = "1px solid #ff0000"
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
const chartline = new G2.Chart({
    container: '01line',
    // width: 600,
    autoFit: true,
    height: 300,
    theme: 'dark', //dark cheery
    // padding:40
    
});
chartline.data(data2);
chartline.scale('value', {
    min: 0,
    nice: true,
    // alias:"123",
    fill:'#fff',
    fontSize:44
    // max: 100,
  });
  chartline.scale('name', {
    range: [0, 1],
    // type: 'linear',
  });
  chartline.tooltip({
    showCrosshairs: true,
    shared: true,
  });
  chartline.interaction('element-highlight'); // 使用 active-region 交互行为
// chartline.interval().position('name*value');
// chartline.point().position('name*value').color('type').adjust('stack')  adjust 堆叠
chartline.line().position('name*value').color('type')//.adjust('stack')
chartline.area().position('name*value').color('l(90) 0:#1890FFFF 1:#1890FF00','l(90) 0:#ff9000FF 1:#18900000')
// chartline.point().position('name*value').color('type')//.adjust('stack')
    // .color('type')
    // .shape('type', ['circle', 'square', 'triangle'])
    // .size(3)

// chartline.legend({
//     position: 'bottom',
// });


chartline.render();

setInterval(() => {
    data2.forEach((e) => {
        e.value = Math.floor(Math.random() * 200 + 20);
    })
    chartline.changeData(data2);
}, 15000);

