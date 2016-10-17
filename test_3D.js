(function(){

	var width = 500,
		height = 300;

	//scene
	var scene = new THREE.Scene();

	//Mesh
	var geometry = new THREE.CubeGeometry(50, 50, 50);
	var material = new THREE.MeshLambertMaterial({ color : 0xff0000});
	var cube = new THREE.Mesh(geometry, material);
	cube.castShadow = true;
	cube.receiveShadow = true;
	cube.position.set(0.0, 50.0, 0.0);
	scene.add(cube);
	
	var sGeometry = new THREE.SphereGeometry(30);
	var sMaterial = new THREE.MeshLambertMaterial({ color : 0x008800});
	var sphere = new THREE.Mesh(sGeometry, sMaterial);
	sphere.castShadow = true;
	sphere.position.set(100.0, 120.0, 110.0);
	scene.add(sphere);

	var pGeometry = new THREE.PlaneGeometry(500, 500);
	var pMaterial = new THREE.MeshLambertMaterial({ color : 0x0096d6,
					side : THREE.DoubleSide });
	var plane = new THREE.Mesh(pGeometry, pMaterial);
	plane.receiveShadow = true;
	plane.rotation.x = 90 * Math.PI / 180;
	plane.position.set(0.0, 0.0, 0.0);
	scene.add(plane);


	//light
	var light = new THREE.DirectionalLight(0xffffff, 1);
	light.position.set(0, 500, 0);
	light.castShadow = true;
	scene.add(light);

	var ambient = new THREE.AmbientLight(0x333333);
	scene.add(ambient);

	//camera
	var camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000);
	camera.position.set(200, 200, 500);
	camera.lookAt(cube.position);
	
	//helper
	var axis = new THREE.AxisHelper(1000);
	axis.position.set(0.0, 0.0, 0.0);
	scene.add(axis);


	//rendering
	var renderer = new THREE.WebGLRenderer();
	renderer.setSize(width, height);
	renderer.setClearColor(0xeeeeee, 1);
	renderer.shadowMapEnabled = true;
	document.getElementById('stage').appendChild(renderer.domElement);
	
	//control
	var controls = new THREE.OrbitControls(camera, renderer.domElement);
	
	function render(){
		requestAnimationFrame(render);

		cube.rotation.x += 1.0 * Math.PI / 180;
		cube.rotation.y += 1.0 * Math.PI / 180;
		cube.rotation.z += 1.0 * Math.PI / 180;
		
		sphere.position.x = Math.sin(new Date().getTime() / 380) * 100;
		sphere.position.z = Math.cos(new Date().getTime() / 400) * 100;
	
		renderer.render(scene, camera);
		controls.update();

	}
	render();

})();
