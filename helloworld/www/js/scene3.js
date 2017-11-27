(function(){
    let scene = new THREE.Scene();
    const aspectRatio = window.innerWidth / window.innerHeight;
    
    let camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 100);

    let renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

    camera.position.z = 10;
    camera.position.y = 2;

    let geometry = new THREE.CylinderGeometry(1,1,2,20);

    let groundMaterial = new THREE.MeshPhongMaterial({
        color: 0xffff
    });

    let mesh = new THREE.Mesh(geometry, groundMaterial);

    let pointLight = new THREE.PointLight(0x404040);
    pointLight.position.y = 80;

    scene.add(mesh);
    scene.add(new THREE.AmbientLight(0x404040));
    scene.add(pointLight);


    function loop(){
        requestAnimationFrame(loop);
        renderer.render(scene, camera);
    }

    loop();

})();