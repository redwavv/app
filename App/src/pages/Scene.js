import "./Scene.css";
import React, { Component } from "react";
import * as THREE from "three";
import ReactDOM from "react-dom";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { Water } from "three/addons/objects/Water.js";
import { Sky } from "three/addons/objects/Sky.js";
import waterNormalsImage from "../assets/waternormals.jpg";

class Scene extends Component {
  render() {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
        }}
        ref={(el) => (this.container = el)}
      />
    );
  }

  componentDidMount() {
    let camera, scene, renderer;
    let controls, water, sun;
    init();
    animate();

    function init() {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      document.body.appendChild(renderer.domElement);

      //

      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(
        55,
        window.innerWidth / window.innerHeight,
        1,
        20000
      );
      camera.position.set(30, 30, 100);

      //

      sun = new THREE.Vector3();

      // Water

      const waterGeometry = new THREE.PlaneGeometry(10000, 10000);

      water = new Water(waterGeometry, {
        textureWidth: 512,
        textureHeight: 512,
        waterNormals: new THREE.TextureLoader().load(
          waterNormalsImage,
          function (texture) {
            texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
          }
        ),
        sunDirection: new THREE.Vector3(),
        sunColor: 0xffffff,
        waterColor: 0x001e0f,
        distortionScale: 3.7,
        fog: scene.fog !== undefined,
      });

      water.rotation.x = -Math.PI / 2;

      scene.add(water);

      // Skybox

      const sky = new Sky();
      sky.scale.setScalar(10000);
      scene.add(sky);

      const skyUniforms = sky.material.uniforms;

      skyUniforms["turbidity"].value = 10;
      skyUniforms["rayleigh"].value = 2;
      skyUniforms["mieCoefficient"].value = 0.005;
      skyUniforms["mieDirectionalG"].value = 0.8;

      const parameters = {
        elevation: 2,
        azimuth: 180,
      };

      const pmremGenerator = new THREE.PMREMGenerator(renderer);
      let renderTarget;

      function updateSun() {
        const phi = THREE.MathUtils.degToRad(90 - parameters.elevation);
        const theta = THREE.MathUtils.degToRad(parameters.azimuth);

        sun.setFromSphericalCoords(1, phi, theta);

        sky.material.uniforms["sunPosition"].value.copy(sun);
        water.material.uniforms["sunDirection"].value.copy(sun).normalize();

        if (renderTarget !== undefined) renderTarget.dispose();

        renderTarget = pmremGenerator.fromScene(sky);

        scene.environment = renderTarget.texture;
      }

      updateSun();
      //

      controls = new OrbitControls(camera, renderer.domElement);
      controls.maxPolarAngle = Math.PI * 0.495;
      controls.target.set(0, 10, 0);
      controls.minDistance = 40.0;
      controls.maxDistance = 200.0;
      controls.update();

      window.addEventListener("resize", onWindowResize);
    }

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function animate() {
      requestAnimationFrame(animate);
      render();
    }

    function render() {
      water.material.uniforms["time"].value += 1.0 / 60.0;

      renderer.render(scene, camera);
    }
    this.container.appendChild(renderer.domElement);
  }
}
ReactDOM.render(<Scene />, document.getElementById("root"));
export default Scene;
