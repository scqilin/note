// import * as d3 from "d3"
import * as d3d from "d3-force-3d";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"

const width = 800, height = 800;
let div = document.createElement('div');
document.body.append(div);
div.style.width = width + 'px';
div.style.height = height + 'px';
div.style.backgroundColor = '#222';



let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(45, width / height, 1, 100000)
camera.position.set(0, 0, 3000); //80
camera.lookAt(0, 0, 0);
let renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setClearColor(0xff0000, 0);
renderer.setSize(width, height);
div.appendChild(renderer.domElement);

new OrbitControls(camera, renderer.domElement);

let light = new THREE.AmbientLight(0x999999);
scene.add(light);
let light2 = new THREE.HemisphereLight(0xffffff, 0x444444, 0.6);
light2.position.set(0, 200, 0);
scene.add(light2);
scene.add(new THREE.AxesHelper(1));

let cubeGeo = new THREE.SphereBufferGeometry(4, 32, 32);
let cubeMat = new THREE.MeshPhongMaterial({
    color: 0xff00ff
});
function csphere(r: number | undefined, x: number, y: number, z: number) {
    let cube = new THREE.Mesh(cubeGeo, cubeMat);
    cube.position.set(x, y, z);
    scene.add(cube);
    return cube;
}

let material = new THREE.LineBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.5
});
function cline(a: any, b: any) {
    let geometry = new THREE.Geometry();
    geometry.vertices.push(new THREE.Vector3(a.x, a.y, a.z));
    geometry.vertices.push(new THREE.Vector3(b.x, b.y, b.z));

    let line = new THREE.Line(geometry, material);
    scene.add(line);
    return line
}


let render = () => {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}

render();

let data1 = {
    nodes: [

        { "id": "a1", zIndex: 1, name: '主调中心-南京', value: 22 },
        { "id": "a2", zIndex: 1, name: '主调中心-扬州', value: 22 },

        { "id": "b1", zIndex: 2, name: '扬州汇集中心', value: 22 },
        { "id": "b2", zIndex: 2, name: '淮安汇集中心', value: 22 },
        { "id": "b3", zIndex: 2, name: '宿迁汇聚中心', value: 22 },
        { "id": "b4", zIndex: 2, name: '徐州汇聚中心', value: 22 },

        { "id": "c1", zIndex: 3, name: '扬州分公司', value: 22 },
        { "id": "c2", zIndex: 3, name: '宝应站', value: 22 },
        { "id": "c3", zIndex: 3, name: '金湖站', value: 22 },

        { "id": "c4", zIndex: 3, name: '淮安分公司', value: 22 },
        { "id": "c5", zIndex: 3, name: '淮阴三站', value: 22 },
        { "id": "c6", zIndex: 3, name: '淮安四站', value: 22 },
        { "id": "c7", zIndex: 3, name: '洪泽站', value: 22 },

        { "id": "c8", zIndex: 3, name: '宿迁分公司', value: 22 },
        { "id": "c9", zIndex: 3, name: '刘老涧二站', value: 22 },
        { "id": "c10", zIndex: 3, name: '泗洪站', value: 22 },

        { "id": "c11", zIndex: 3, name: '泗阳站', value: 22 },
        { "id": "c12", zIndex: 3, name: '睢陵二站', value: 22 },
        { "id": "c13", zIndex: 3, name: '皂河二站', value: 22 },

        { "id": "c14", zIndex: 3, name: '徐州分公司', value: 22 },
        { "id": "c15", zIndex: 3, name: '刘山站', value: 22 },
        { "id": "c16", zIndex: 3, name: '邳州站', value: 22 },
        { "id": "c17", zIndex: 3, name: '解台站', value: 22 },
        { "id": "c18", zIndex: 3, name: '蔺家坝站', value: 22 },

    ],

    links: [
        { "source": "a1", "target": "a2" },

        { "source": "a1", "target": "b1" },
        { "source": "a1", "target": "b2" },
        { "source": "a1", "target": "b3" },
        { "source": "a1", "target": "b4" },

        { "source": "a2", "target": "b1" },
        { "source": "a2", "target": "b2" },
        { "source": "a2", "target": "b3" },
        { "source": "a2", "target": "b4" },

        { "source": "b1", "target": "c1" },
        { "source": "b1", "target": "c2" },
        { "source": "b1", "target": "c3" },

        { "source": "b2", "target": "c4" },
        { "source": "b2", "target": "c5" },
        { "source": "b2", "target": "c6" },
        { "source": "b2", "target": "c7" },

        { "source": "b3", "target": "c8" },
        { "source": "b3", "target": "c9" },
        { "source": "b3", "target": "c10" },
        { "source": "b3", "target": "c11" },
        { "source": "b3", "target": "c12" },
        { "source": "b3", "target": "c13" },

        { "source": "b4", "target": "c14" },
        { "source": "b4", "target": "c15" },
        { "source": "b4", "target": "c16" },
        { "source": "b4", "target": "c17" },
        { "source": "b4", "target": "c18" }


    ]
}


let num = 10240;

let nodes2 = [...Array(num).keys()].map(i => ({ id: i }));
let links2 = [...Array(num).keys()]
    .filter(id => id)
    .map(id => ({
        source: id,
        target: Math.round(Math.random() * (id - 1))
    }))
let data2 = {
    nodes: nodes2,
    links: links2
}

const links = data2.links.map(d => Object.create(d));
const nodes: any = data2.nodes.map(d => Object.create(d));


const sphers: any = [];
nodes.map(() => {
    let s = csphere(4, 0, 0, 0);
    sphers.push(s);
})
const lines: any = [];
links.map((e) => {
    let c = cline(e.source, e.target);
    lines.push(c);
})

const simulation = d3d
    .forceSimulation(nodes, 3)  // 2 3
    .force("link", d3d.forceLink(links).id((d: { id: any; }) => d.id))
    .force("charge", d3d.forceManyBody())
    .force("center", d3d.forceCenter(0, 0, 0));

simulation.on('tick', () => {
    for (let i = 0; i < nodes.length; i++) {
        const e = nodes[i];
        sphers[i] && sphers[i].position.set(e.x, e.y, e.z || 0);
    }
    for (let i = 0; i < links.length; i++) {
        const e = links[i], line = lines[i];
        line.geometry.vertices[0] = new THREE.Vector3(e.source.x, e.source.y, e.source.z);
        line.geometry.vertices[1] = new THREE.Vector3(e.target.x, e.target.y, e.target.z);
        line.geometry.verticesNeedUpdate = true;
    }
})

