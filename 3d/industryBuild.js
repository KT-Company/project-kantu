import * as Bol3D from "./main.js";

var container,
    PRO_ENV,
    time = {
        value: 0,
    },
    StartTime = {
        value: 1,
    },
    flexMesh,
    mouseX = 0,
    mouseY = 0,
    windowHalfX,
    windowHalfY;

var modelarr;

// 初始化整个场景
export const pageOnloadBuild_3d = (baseUrl, canvas, fun) =>
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
                position: [-152, 18, 167],
                near: 1,
                far: 100000,
                fov: 75,
            },
        },
        controls: {
            orbitControls: {
                autoRotate: false,
                autoRotateSpeed: 2,
                // target: [413, -0, -441],
                target: [0, 0, 0],
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
            "/models/Lou_04.glb",
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
            bloomStrength: 0.2, // 强度
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
            sataturation: 1, // 0 - 2
            vibrance: 0, // -1 - 1
            brightness: 0, // 0 - 0.5
            contrast: 2, // 0 - 2
        },
        fog: {
            color: 0x030a2f, // 雾颜色
            intensity: 0, // 雾强度
        },
        stats: false,
        onProgress: (item) => {
            modelarr = item;
            item.position.y = -100;
            item.traverse(child => {
                if (child.isMesh) {
                    child.material.envMapIntensity = 0.3

                    if (child.name == "BOX") {
                        container.addBloom(child)
                        child.material.opacity = 0.8
                        child.material.transparent = true;
                        flexMesh = child
                        child.renderOrder = 50
                    } else if (child.name == "Pian") {
                        container.addBloom(child)
                    } else if (child.name == "B_02" || child.name == "B_01") {
                        container.addBloom(child)
                        child.material.transparent = true;
                        if (child.name == "B_02") {
                            child.renderOrder = 60
                        } else {
                            child.renderOrder = 50
                        }
                    } else if (child.name == "LOGO") {
                        child.material = new Bol3D.MeshBasicMaterial({ color: 0xffffff })
                        // container.addBloom(child)
                        // child.material.lightMap = new Bol3D.TextureLoader().load(
                        //     PRO_ENV + "/textures/1.png"
                        // );
                        // child.material.lightMapIntensity = 1.0;
                    } else if (child.name == "Door") {
                        child.material.roughness = 1.0;
                        child.material.envMapIntensity = 15;
                    } else if (child.name == "Ding") {
                        child.material.lightMap = new Bol3D.TextureLoader().load(
                            PRO_ENV + "/textures/1.png"
                        );
                        child.material.lightMapIntensity = -1.5;
                    } else if (child.name == "Peng01") {
                        child.material.lightMap = new Bol3D.TextureLoader().load(
                            PRO_ENV + "/textures/1.png"
                        );
                        child.material.lightMapIntensity = -3;
                    } else if (child.name == "Peng02") {
                        child.material.lightMap = new Bol3D.TextureLoader().load(
                            PRO_ENV + "/textures/1.png"
                        );
                        child.material.lightMapIntensity = 2.0;
                        container.addBloom(child)
                    } else if (child.name == "B_04") {
                        container.addBloom(child)
                    } else if (child.name == "B_05") {
                        container.addBloom(child)
                        child.material.roughness = 0
                        child.material.envMapIntensity = 0.5;
                    } else if (child.name == "B_06") {
                        container.addBloom(child)
                        child.material.transparent = true;
                        child.material.opacity = 0.6;
                        child.material.roughness = 0.2;
                        child.material.envMapIntensity = 2.0;
                        child.renderOrder = 40
                    } else if (child.name == "B_03") {
                        child.visible = false
                    } else if (child.name == "LouJia01") {
                        child.material.roughness = 1;
                        child.material.envMapIntensity = -8.0;
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

    flexMesh.material.map.offset.y += 0.001;

    // if (mouseX >= 0) {
    //     if (modelarr.rotation.y > -0.38) {
    //         modelarr.rotation.y -= mouseX * 0.00001;
    //     }
    // } else {
    //     if (modelarr.rotation.y < 0.38) {
    //         modelarr.rotation.y += -mouseX * 0.00001;
    //     }
    // }

    // if (mouseY >= 0) {
    //     if (container.orbitCamera.position.y < 100) {
    //         container.orbitCamera.position.y += mouseY * 0.003;
    //     }
    // } else {
    //     if (container.orbitCamera.position.y > -60) {
    //         container.orbitCamera.position.y -= -mouseY * 0.003;
    //     }
    // }

    // outViewPoint()
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


// 建筑特效加载
const setCityMaterial = (object) => {
    // 确定oject的geometry的box size
    // 计算当前几何体的的边界矩形，该操作会更新已有 [param:.boundingBox]。
    // 边界矩形不会默认计算，需要调用该接口指定计算边界矩形，否则保持默认值 null。
    object.geometry.computeBoundingBox();
    object.geometry.computeBoundingSphere();

    const { geometry } = object;

    // 获取geometry的长宽高 中心点
    const { center, radius } = geometry.boundingSphere;

    const { max, min } = geometry.boundingBox;

    const size = new Bol3D.Vector3(max.x - min.x, max.y - min.y, max.z - min.z);

    forMaterial(object.material, (material) => {
        // 在编译shader程序之前立即执行的可选回调。此函数使用shader源码作为参数。用于修改内置材质。
        material.onBeforeCompile = (shader) => {
            shader.uniforms.time = time;
            shader.uniforms.uStartTime = StartTime;

            // 中心点
            shader.uniforms.uCenter = {
                value: center,
            };

            // geometry大小
            shader.uniforms.uSize = {
                value: size,
            };

            shader.uniforms.uMax = {
                value: max,
            };

            shader.uniforms.uMin = {
                value: min,
            };
            shader.uniforms.uTopColor = {
                value: new Bol3D.Color("#1898e2"),
            };

            // 效果开关
            shader.uniforms.uSwitch = {
                value: new Bol3D.Vector3(
                    0, // 扩散
                    0, // 左右横扫
                    0 // 向上扫描
                ),
            };
            // 扩散
            shader.uniforms.uDiffusion = {
                value: new Bol3D.Vector3(
                    1, // 0 1开关
                    10, // 范围
                    300 // 速度
                ),
            };
            // 扩散中心点
            shader.uniforms.uDiffusionCenter = {
                value: new Bol3D.Vector3(0, 0, 0),
            };

            // 扩散中心点
            shader.uniforms.uFlow = {
                value: new Bol3D.Vector3(
                    1, // 0 1开关
                    1000, // 范围
                    500 // 速度
                ),
            };

            // 效果颜色
            shader.uniforms.uColor = {
                value: new Bol3D.Color("#5588aa"),
            };
            // 效果颜色
            shader.uniforms.uFlowColor = {
                value: new Bol3D.Color("#8fedf6"),
            };

            // 效果透明度
            shader.uniforms.uOpacity = {
                value: 1,
            };

            // 效果透明度
            shader.uniforms.uRadius = {
                value: radius,
            };

            /**
             * 对片元着色器进行修改
             */
            const fragment = /* glsl */ `
            float distanceTo(vec2 src, vec2 dst) {
                float dx = src.x - dst.x;
                float dy = src.y - dst.y;
                float dv = dx * dx + dy * dy;
                return sqrt(dv);
            }
  
            float lerp(float x, float y, float t) {
                return (1.0 - t) * x + t * y;
            }
  
            vec3 getGradientColor(vec3 color1, vec3 color2, float index) {
                float r = lerp(color1.r, color2.r, index);
                float g = lerp(color1.g, color2.g, index);
                float b = lerp(color1.b, color2.b, index);
                return vec3(r, g, b);
            }
  
            varying vec4 vPositionMatrix;
            varying vec3 vPosition;
  
            uniform float time;
            // 扩散参数
            uniform float uRadius;
            uniform float uOpacity;
            // 初始动画参数
            uniform float uStartTime; 
  
            uniform vec3 uMin;
            uniform vec3 uMax;
            uniform vec3 uSize;
            uniform vec3 uFlow;
            uniform vec3 uColor;
            uniform vec3 uCenter;
            uniform vec3 uSwitch;
            uniform vec3 uTopColor;
            uniform vec3 uFlowColor;
            uniform vec3 uDiffusion; 
            uniform vec3 uDiffusionCenter;
  
            void main() {
        `;
            const fragmentColor = /* glsl */ `
          vec3 distColor = outgoingLight;
          float dstOpacity = diffuseColor.a;
          
        //   float indexMix = vPosition.y / (uSize.y * 0.5);
        //   distColor = mix(distColor, uTopColor, indexMix);
          
        //   // 开启扩散波
        //   vec2 position2D = vec2(vPosition.x, vPosition.z);
        //   if (uDiffusion.x > 0.5) {
        //       // 扩散速度
        //       float dTime = mod(time * uDiffusion.z, uRadius * 2.0);
        //       // 当前的离中心点距离
        //       float uLen = distanceTo(position2D, vec2(uCenter.x, uCenter.z));
  
        //       // 扩散范围
        //       if (uLen < dTime && uLen > dTime - uDiffusion.y) {
        //           // 颜色渐变
        //           float dIndex = sin((dTime - uLen) / uDiffusion.y * PI);
        //           distColor = mix(uColor, distColor, 1.0 - dIndex);
        //       }
        //   }
  
          // 流动效果
          if (uFlow.x > 0.5) {
              // 扩散速度
              float dTime = mod(time * uFlow.z, uSize.y); 
              // 流动范围
              float topY = vPosition.y + uFlow.y;

              if (dTime > vPosition.y && dTime < topY ) {
                  // 颜色渐变 
                  float dIndex = sin((topY - dTime) / uFlow.y * PI);
  
                  distColor = mix(distColor, uFlowColor,  dIndex); 
              } 
          }
        
            gl_FragColor = vec4(distColor, dstOpacity * uStartTime);
        `;
            shader.fragmentShader = shader.fragmentShader.replace(
                "void main() {",
                fragment
            );
            shader.fragmentShader = shader.fragmentShader.replace(
                "gl_FragColor = vec4( outgoingLight, diffuseColor.a );",
                fragmentColor
            );

            /**
             * 对顶点着色器进行修改
             */
            const vertex = /* glsl */ `
            varying vec4 vPositionMatrix;
            varying vec3 vPosition;
            uniform float uStartTime;
            void main() {
                    vPositionMatrix = projectionMatrix * vec4(position, 1.0);
                    vPosition = position;
            `;
            const vertexPosition = /* glsl */ `
            vec3 transformed = vec3(position.x, position.y* uStartTime, position.z );
            `;

            shader.vertexShader = shader.vertexShader.replace(
                "void main() {",
                vertex
            );
            shader.vertexShader = shader.vertexShader.replace(
                "#include <begin_vertex>",
                vertexPosition
            );
        };
    });
};
const forMaterial = (materials, callback) => {
    if (!callback || !materials) return false;
    if (Array.isArray(materials)) {
        materials.forEach((mat) => {
            callback(mat);
        });
    } else {
        callback(materials);
    }
};

if (process.browser) {
    // windowHalfX = window.innerWidth / 2;
    // windowHalfY = window.innerHeight / 2;

    // document.addEventListener('mousemove', onDocumentMouseMove);

    // function onDocumentMouseMove(event) {
    //     mouseX = (event.clientX - windowHalfX);
    //     mouseY = (event.clientY - windowHalfY);
    // }

    // 实时获取位置
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
