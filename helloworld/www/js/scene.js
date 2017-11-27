(function(){
    let scene = new THREE.Scene();
    const aspectRatio = window.innerWidth / window.innerHeight;
    let camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 1000 );
    //let camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 100);

    let renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);

    document.body.appendChild(renderer.domElement);

    renderer.shadowMap.enabled = true;
    renderer.shadowMap.soft = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;

    camera.position.set( 0, - 6, 100 );
    //camera.position.z = 100;
    //camera.position.y = 2;
    let mesh;
    let mesh1;
    let mesh3;
    
    
    let loader1 = new THREE.TextureLoader();
    
        loader1.load('public/mercurio2.jpg', function(texture1){
            let geometry1 = new THREE.SphereGeometry(5,60,60)
            let material1 = new THREE.MeshBasicMaterial({
                map: texture1
            });
            mesh1 = new THREE.Mesh(geometry1,material1);

            mesh1.position.y=0;
            mesh1.position.z=30
            mesh1.position.x=50;
            
            mesh1.castShadow=true;
            scene.add(mesh1);
        })

    let loader = new THREE.TextureLoader();

    loader.load('public/sol.jpg', function(texture){
        let geometry = new THREE.SphereGeometry(35,100,100)
        let material = new THREE.MeshBasicMaterial({
            map: texture
        });
        mesh = new THREE.Mesh(geometry, material);
        mesh.position.y = 0;
        mesh.position.x=-45
        scene.add(mesh);
    });

  

  

        let loader3 = new THREE.TextureLoader();
        
            loader3.load('public/map2.jpg', function(texture3){
                let geometry3 = new THREE.SphereGeometry(15,60,60)
                let material3 = new THREE.MeshBasicMaterial({
                    map: texture3
                });
                mesh3 = new THREE.Mesh(geometry3,material3);
                mesh3.receiveShadow  = true;
                mesh3.position.x=50;
                scene.add(mesh3);
            })

         



    //let geometry = new THREE.BoxGeometry(2,2,2,2);

    let groundMaterial = new THREE.MeshPhongMaterial({
        color: 0xffffffff
    });

    //let mesh = new THREE.Mesh(geometry, groundMaterial);

    let pointLight = new THREE.PointLight(0x000000);
    pointLight.position.y = 90 ;
    pointLight.position.z = 60;
    //pointLight.position.x=0;
    pointLight.castShadow = true;
    scene.add(pointLight);
   

    scene.add( new THREE.AmbientLight( 0x222233 ) );
    


    function loop(){
        requestAnimationFrame(loop);
        mesh.rotation.y += 0.01;
       
        mesh1.rotation.y += 0.01;
        
       
        mesh3.rotation.y += 0.01;
        
        mesh1.translateX( 0.4 );
        renderer.render(scene, camera);
    }

    loop();

})();