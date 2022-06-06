import * as Bol3D from "./main.js";

var container,
    PRO_ENV,
    moveingObj = [],
    jumpObj = [];

// 初始化整个场景
export const pageOnloadOil_3d = (baseUrl, canvas, fun) =>
    sceneOnLoad({
        baseUrl: baseUrl,
        domElement: canvas,
        callback: () => {
            console.log("load finish");
            fun()
        },
    });


var sceneOnLoad = ({ baseUrl, domElement, callback }) => {
    PRO_ENV = baseUrl;

    container = new Bol3D.Container({
        publicPath: baseUrl,
        container: domElement,
        viewState: "orbit",
        bgColor: 0xfff000,
        cameras: {
            orbitCamera: {
                position: [-6, 8, 30],
                near: 1,
                far: 100000,
                fov: 75,
            },
        },
        controls: {
            orbitControls: {
                autoRotate: false,
                autoRotateSpeed: 2,
                target: [-15, -0, 8],
                minDistance: 0,
                maxDistance: 2000,
                maxPolarAngle: Math.PI * 0.7,
                minPolarAngle: Math.PI * 0.2,
                enableDamping: false,
                dampingFactor: 0.05,
            },
        },
        lights: {
            sunLight: {
                color: 0xedeacc,
                intensity: 2,
                position: [2000.3, 6000, 4000.2],
                mapSize: [4096, 4096],
                near: 1,
                far: 15000,
                bias: -0.001,
                distance: 8000,
            },
            ambientLight: {
                color: 0xffffff,
                intensity: 1.5,
            },
        },
        dof: {
            focus: 5500.0, // 模拟相机焦距
            aperture: 0, // 模糊系数1
            maxblur: 0, // 模糊系数2
        },
        skyBox: {
            urls: [""],
            scale: 1,
            rotation: [0, 0, 0],
        },
        modelUrls: [
            "/models/YouTian.glb",
        ],
        outline: {
            edgeStrength: 3.5,
            edgeGlow: 0,
            edgeThickness: 1,
            pulsePeriod: 1,
            visibleEdgeColor: "#FF7A5A",
            hiddenEdgeColor: "#190a05",
        },
        bloomEnabled: true,
        bloom: {
            bloomStrength: 1.0, // 强度
            threshold: 0, // 阈值
            bloomRadius: 0.5, // 半径
        },
        enableShadow: true,
        hdrUrls: ["/hdr/8.hdr"],
        toneMappingExposure: 1,
        antiShake: false,
        bounds: {
            radius: 1000,
            center: [0, 0, 0],
        },
        nodePass: {
            hue: 0, // 0 - 6.2
            sataturation: 1.5, // 0 - 2
            vibrance: 0, // -1 - 1
            brightness: 0, // 0 - 0.5
            contrast: 1, // 0 - 2
        },
        fog: {
            color: 0x030a2f, // 雾颜色
            intensity: 0, // 雾强度
        },
        stats: false,
        onProgress: (item) => {
            item.scale.set(10, 10, 10);
            item.traverse(child => {
                if (child.isMesh) {
                    if (child.name == "tou-1" || child.name == "Line048_2") {
                        child.material.opacity = 0.15;
                        child.renderOrder = 100
                    } else if (child.name == "Line064" || child.name == "Line055" || child.name == "Line067" || child.name == "Line065" || child.name == "Line066" || child.name == "Line057" || child.name == "lvxian") {
                        moveingObj.push(child);
                    }
                }

                if (child.type == "Group") {
                    if (child.name == "dong-1" || child.name == "dong-2" || child.name == "dong-3" || child.name == "dong-7" || child.name == "dong-5" || child.name == "dong-6" || child.name == "dong-4" || child.name == "dong-004") {
                        // child.userData.oldPosition = child.position.clone();
                        jumpObj.push(child)
                    }
                }
            })
        },
        onLoad: () => {
            render();

            callback && callback()
        },
    });

    mouseLockToggle(false);

    // const events = new Bol3D.Events(container);
    // events.onhover = (e) => {
    //     let name = e.objects[0].object.name;
    // };

    // events.onclick = (e) => {
    //     // e.objects[0].point.y.toFixed(2)
    //     // let y = 12;
    //     console.log(
    //         "中心点： " +
    //         e.objects[0].point.x.toFixed(2) +
    //         "," +
    //         e.objects[0].point.y.toFixed(2) +
    //         "," +
    //         e.objects[0].point.z.toFixed(2)
    //     );
    //     console.log(e.objects[0].object);
    // };

    // events.ondbclick = (e) => { };
}

const clock = new Bol3D.Clock();
const render = () => {
    requestAnimationFrame(render);

    moveingObj.forEach(item => {
        item.material.map.offset.x += 0.01
    })

    jumpObj.forEach(item => {
        item.position.y += Math.sin(clock.getElapsedTime()) * 0.001;
    })
};

////////////////////////////////////////////////////
////////////////////基本效果功能/////////////////////
////////////////////////////////////////////////////

const tweenMoveView = (point, look, times, td) => {
    cameraTween = new Bol3D.TWEEN.Tween(container.orbitCamera)
        .to({ position: new Bol3D.Vector3(...look) }, times)
        .start()
        .onComplete(function () {
            td && td();
        });
    orbitTween = new Bol3D.TWEEN.Tween(container.orbitControls)
        .to({ target: new Bol3D.Vector3(...point) }, times)
        .start();
};


// 场景鼠标事件
const mouseLockToggle = (bool) => {
    container.orbitControls.enablePan = bool;
    container.orbitControls.enableRotate = bool;
    container.orbitControls.enableZoom = bool;
};

if (process.browser) {
    // // 实时获取位置
    // window.outViewPoint = () => {
    //     const point = container.orbitControls.target;
    //     const camera = container.orbitCamera.position;
    //     console.log(
    //         "point:",
    //         point.x.toFixed(0) + "," + point.y.toFixed(0) + "," + point.z.toFixed(0)
    //     );
    //     console.log(
    //         "camera:",
    //         camera.x.toFixed(0) + "," + camera.y.toFixed(0) + "," + camera.z.toFixed(0)
    //     );
    // };
}
