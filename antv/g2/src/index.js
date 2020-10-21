// import {G2} from "@antv/g2"
let dom = document.createElement('div');
document.body.appendChild(dom);
dom.id = "c2";

const cdata = {
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

let data = [
    // { genre: 'Sports', sold: 275},
    // { genre: 'Strategy', sold: 115},
    // { genre: 'Action', sold: 120},
    // { genre: 'Shooter', sold: 350},
    // { genre: 'Other', sold: 150},

    { genre: 'Sports', sold: 275, type: "A" },
    { genre: 'Strategy', sold: 115, type: "A" },
    { genre: 'Action', sold: 120, type: "A" },
    { genre: 'Shooter', sold: 350, type: "A" },
    { genre: 'Other', sold: 150, type: "A" },
    { genre: 'Sports', sold: 175, type: "B" },
    { genre: 'Strategy', sold: 175, type: "B" },
    { genre: 'Action', sold: 246, type: "B" },
    { genre: 'Shooter', sold: 150, type: "B" },
    { genre: 'Other', sold: 250, type: "B" },
];
const chart = new G2.Chart({
    container: 'c2',
    width: 600,
    height: 300,
    // theme: 'dark',
});
chart.data(data);
chart.scale('sold', {
    nice: true,
    min:0
  });
//   chart.scale('Data', {
//     range: [0, 1],
//     tickCount: 10,
//     type: 'timeCat'
//   });
// chart.interval().position('genre*sold');
chart.line().position('genre*sold').color('type')//.adjust('stack')
chart.area().position('genre*sold').color('type')//.adjust('stack')
// chart.point().position('genre*sold')
//     .color('type')
//     // .shape('type', ['circle', 'square', 'triangle'])
//     .size(3)
//     .adjust('stack')
// chart.coordinate('polar');//极坐标系
// chart.coordinate('rect')//.transpose(); 
// chart.legend({
//     position: 'bottom',
//   });
chart.render();

// setInterval(() => {
//     data.forEach((e)=>{
//         e.sold = Math.floor(Math.random()*200+20);
//     })
//     chart.changeData(data);
// }, 15000);

