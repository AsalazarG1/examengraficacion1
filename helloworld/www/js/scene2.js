(function(){
    let scene = new THREE.Scene();
    const aspectRatio = window.innerWidth / window.innerHeight;
    
    let camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 100);

    let renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

    camera.position.z = 10;
    camera.position.y = 2;

    let geometry = new THREE.SphereGeometry(1,18,11,9);

    let groundMaterial = new THREE.MeshPhongMaterial({
        color: 0xffffff
    });

    let mesh = new THREE.Mesh(geometry, groundMaterial);

    let pointLight = new THREE.PointLight(0x404040);
    pointLight.position.y = 80;
    pointLight.position.z = 20;

    scene.background = new THREE.Color(0xeeeeee);
    scene.add(mesh);
    scene.add(new THREE.AmbientLight(0x404040));
    scene.add(pointLight);


    function loop(){
        requestAnimationFrame(loop);
        mesh.rotation.y += 0.01;
        mesh.rotation.z += 0.01;
        renderer.render(scene, camera);
    }

    loop();

})();