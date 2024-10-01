// // src/ThreeDModel.js
// import React, { useEffect, useRef } from 'react';
// import * as THREE from 'three';
// import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

// const ThreeDModel = ({ objPath }) => {
//   const mountRef = useRef(null);

//   useEffect(() => {
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer();
    
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     mountRef.current.appendChild(renderer.domElement);

//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
//     scene.add(ambientLight);

//     const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
//     scene.add(directionalLight);

//     const loader = new OBJLoader();
//     loader.load(objPath, (object) => {
//       scene.add(object);
//     });

//     camera.position.z = 5;

//     const animate = () => {
//       requestAnimationFrame(animate);
//       renderer.render(scene, camera);
//     };
//     animate();

//     // Clean up on unmount
//     return () => {
//       mountRef.current.removeChild(renderer.domElement);
//       renderer.dispose();
//     };
//   }, [objPath]);

//   return <div ref={mountRef} />;
// };

// export default ThreeDModel;



// src/ThreeDModel.js
// import React, { useEffect, useRef } from 'react';
// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

// const ThreeDModel = ({ objPath }) => {
//   const mountRef = useRef(null);

//   useEffect(() => {
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
//     const renderer = new THREE.WebGLRenderer();
    
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     mountRef.current.appendChild(renderer.domElement);

//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
//     scene.add(ambientLight);

//     const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
//     scene.add(directionalLight);

//     const loader = new OBJLoader();
//     loader.load(objPath, (object) => {
//       scene.add(object);
//       // Center the model in the scene
//       const box = new THREE.Box3().setFromObject(object);
//       const size = box.getSize(new THREE.Vector3()).length();
//       const center = box.getCenter(new THREE.Vector3());
//       object.position.sub(center); // Center the object
//       camera.position.z = size * 1.5; // Set camera distance based on object size
//     });

//     camera.position.z = 5;

//     // Add OrbitControls
//     const controls = new OrbitControls(camera, renderer.domElement);
//     controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
//     controls.dampingFactor = 0.25;
//     controls.enableZoom = true; // Enable zoom

//     const animate = () => {
//       requestAnimationFrame(animate);
//       controls.update(); // Update controls in the animation loop
//       renderer.render(scene, camera);
//     };
//     animate();

//     // Clean up on unmount
//     return () => {
//       mountRef.current.removeChild(renderer.domElement);
//       renderer.dispose();
//     };
//   }, [objPath]);

//   return <div ref={mountRef} />;
// };

// export default ThreeDModel;


// import React, { useEffect, useRef } from 'react';
// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// const ThreeDModel = ({ objPath }) => {
//   const mountRef = useRef(null);

//   useEffect(() => {
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer();

//     renderer.setSize(window.innerWidth, window.innerHeight);
//     mountRef.current.appendChild(renderer.domElement);

//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
//     scene.add(ambientLight);

//     const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
//     scene.add(directionalLight);

//     const loader = new GLTFLoader();
//     loader.load(objPath, (gltf) => {
//       scene.add(gltf.scene);
//       // Center the model in the scene
//       const box = new THREE.Box3().setFromObject(gltf.scene);
//       const size = box.getSize(new THREE.Vector3()).length();
//       const center = box.getCenter(new THREE.Vector3());
//       gltf.scene.position.sub(center); // Center the object
//       camera.position.z = size * 1.5; // Set camera distance based on object size
//     }, undefined, (error) => {
//       console.error('An error happened while loading the model:', error);
//     });

//     // Add OrbitControls
//     const controls = new OrbitControls(camera, renderer.domElement);
//     controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
//     controls.dampingFactor = 0.25;
//     controls.enableZoom = true; // Enable zoom

//     const animate = () => {
//       requestAnimationFrame(animate);
//       controls.update(); // Update controls in the animation loop
//       renderer.render(scene, camera);
//     };
//     animate();

//     // Clean up on unmount
//     return () => {
//       mountRef.current.removeChild(renderer.domElement);
//       renderer.dispose();
//     };
//   }, [objPath]);

//   return <div ref={mountRef} style={{ width: '50%', height: '10vh' }} />;
// };

// export default ThreeDModel;

// import React, { useEffect, useRef } from 'react';
// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// const ThreeDModel = ({ objPath }) => {
//   const mountRef = useRef(null);
//   const rendererRef = useRef(null);
//   const cameraRef = useRef(null);
//   const sceneRef = useRef(null);

//   useEffect(() => {
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, 656.500 / 370, 0.1, 1000); // Use the fixed aspect ratio
//     const renderer = new THREE.WebGLRenderer();

//     // Set the initial size
//     renderer.setSize(656.500, 370); // Fixed size
//     mountRef.current.appendChild(renderer.domElement);

//     // Save refs
//     rendererRef.current = renderer;
//     cameraRef.current = camera;
//     sceneRef.current = scene;

//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
//     scene.add(ambientLight);

//     const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
//     scene.add(directionalLight);

//     const loader = new GLTFLoader();
//     loader.load(objPath, (gltf) => {
//       scene.add(gltf.scene);
//       const box = new THREE.Box3().setFromObject(gltf.scene);
//       const size = box.getSize(new THREE.Vector3()).length();
//       const center = box.getCenter(new THREE.Vector3());
//       gltf.scene.position.sub(center);
//       camera.position.z = size * 1.5;
//     }, undefined, (error) => {
//       console.error('An error happened while loading the model:', error);
//     });

//     const controls = new OrbitControls(camera, renderer.domElement);
//     controls.enableDamping = true;
//     controls.dampingFactor = 0.25;
//     controls.enableZoom = true;

//     const animate = () => {
//       requestAnimationFrame(animate);
//       controls.update();
//       renderer.render(scene, camera);
//     };
//     animate();

//     const handleResize = () => {
//       const width = mountRef.current.clientWidth;
//       const height = mountRef.current.clientHeight;
//       camera.aspect = width / height;
//       camera.updateProjectionMatrix();
//       renderer.setSize(width, height);
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       mountRef.current.removeChild(renderer.domElement);
//       renderer.dispose();
//       window.removeEventListener('resize', handleResize);
//     };
//   }, [objPath]);

//   return <div ref={mountRef} style={{ width: '656.500px', height: '370px' }} />;
// };

// export default ThreeDModel;


// import React, { useEffect, useRef } from 'react';
// import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// const ThreeDModel = ({ objPath }) => {
//   const mountRef = useRef(null);
//   const rendererRef = useRef(null);
//   const cameraRef = useRef(null);
//   const sceneRef = useRef(null);

//   useEffect(() => {
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, 656.5 / 370, 0.1, 1000); // Default aspect ratio
//     const renderer = new THREE.WebGLRenderer();

//     // Append renderer to mountRef
//     mountRef.current.appendChild(renderer.domElement);

//     // Save refs
//     rendererRef.current = renderer;
//     cameraRef.current = camera;
//     sceneRef.current = scene;

//     const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
//     scene.add(ambientLight);

//     const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
//     scene.add(directionalLight);

//     const loader = new GLTFLoader();
//     loader.load(objPath, (gltf) => {
//       scene.add(gltf.scene);
//       const box = new THREE.Box3().setFromObject(gltf.scene);
//       const size = box.getSize(new THREE.Vector3()).length();
//       const center = box.getCenter(new THREE.Vector3());
//       gltf.scene.position.sub(center);
//       camera.position.z = size * 1.5;
//     }, undefined, (error) => {
//       console.error('An error happened while loading the model:', error);
//     });

//     const controls = new OrbitControls(camera, renderer.domElement);
//     controls.enableDamping = true;
//     controls.dampingFactor = 0.25;
//     controls.enableZoom = true;

//     const animate = () => {
//       requestAnimationFrame(animate);
//       controls.update();
//       renderer.render(scene, camera);
//     };
//     animate();

//     const handleResize = () => {
//       const width = mountRef.current.clientWidth;
//       const height = mountRef.current.clientHeight;
//       camera.aspect = width / height;
//       camera.updateProjectionMatrix();
//       renderer.setSize(width, height);
//     };

//     // Set initial size
//     handleResize();

//     window.addEventListener('resize', handleResize);

//     return () => {
//       mountRef.current.removeChild(renderer.domElement);
//       renderer.dispose();
//       window.removeEventListener('resize', handleResize);
//     };
//   }, [objPath]);

//   return <div ref={mountRef} style={{ width: '100%', height: '100%' }} />;
// };

// export default ThreeDModel;


import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const ThreeDModel = ({ objPath }) => {
  const mountRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const sceneRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 656.5 / 370, 0.1, 1000); // Default aspect ratio
    const renderer = new THREE.WebGLRenderer({ alpha: false }); // Set alpha to false for a solid background

    // Set background color to white
    renderer.setClearColor(0xffffff, 1); // white background
    mountRef.current.appendChild(renderer.domElement);

    // Save refs
    rendererRef.current = renderer;
    cameraRef.current = camera;
    sceneRef.current = scene;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    scene.add(directionalLight);

    const loader = new GLTFLoader();
    loader.load(objPath, (gltf) => {
      scene.add(gltf.scene);
      const box = new THREE.Box3().setFromObject(gltf.scene);
      const size = box.getSize(new THREE.Vector3()).length();
      const center = box.getCenter(new THREE.Vector3());
      gltf.scene.position.sub(center);
      camera.position.z = size * 1.5;
    }, undefined, (error) => {
      console.error('An error happened while loading the model:', error);
    });

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = true;

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    // Set initial size
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      // Check if mountRef.current is not null before removing the renderer
      if (mountRef.current && rendererRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      window.removeEventListener('resize', handleResize);
    };
  }, [objPath]);

  return <div ref={mountRef} style={{ width: '100%', height: '100%' }} />;
};

export default ThreeDModel;
