import { Chart } from "@antv/g2"
let dom = document.createElement('div');
document.body.appendChild(dom);
dom.id = "container";
dom.style.padding = '20px'

const data = [
  { year: '1991', value: 3 },
  { year: '1992', value: 4 },
  { year: '1993', value: 3.5 },
  { year: '1994', value: 5 },
  { year: '1995', value: 4.9 },
  { year: '1996', value: 6 },
  { year: '1997', value: 7 },
  { year: '1998', value: 9 },
  { year: '1999', value: 13 },
];
const chart = new Chart({
  container: 'container',
  autoFit: true,
  height: 500,
  // theme:'dark'
});

chart.data(data);
chart.scale({
  // year: {
  //   range: [0, 1],
  // },
  value: {
    min: 0,
    nice: true,
  },
});

// chart.tooltip({
//   showCrosshairs: true, // 展示 Tooltip 辅助线
//   shared: true,
// });

// chart.line().position('year*value').label('value');
// // chart.point().position('year*value');

// chart.render();
chart
.line()
.position('year*value')
.color('#fff000')
.size(2);
chart.axis('year', {
  line: null,
  tickLine: null,
  grid: {
    line: {
      style: {
        lineDash: null,
      },
    },
  },
});
chart.coordinate('polar', {
  radius: 0.8,
})
chart.render();




