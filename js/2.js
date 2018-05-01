var
// Obtain a reference to the canvas element using its id.
htmlCanvas = document.getElementById('canvas'),
// Obtain a graphics context on the canvas element for drawing.
context = htmlCanvas.getContext('2d');

function blackraw() {
   context.strokeStyle = 'black';
   context.lineWidth = '10000';
   context.strokeRect(0, 0, window.innerWidth, window.innerHeight);
}

function resizeCanvas() {
    htmlCanvas.width = window.innerWidth;
    htmlCanvas.height = window.innerHeight;
    blackraw();
}

window.addEventListener('resize', resizeCanvas, false);
resizeCanvas();

function SquareJump(){
    

   // Start listening to resize events and draw canvas.
   initializetext();
   setTimeout(function(){document.querySelector('.countDown').innerHTML = "5";}, 0);
   setTimeout(function(){document.querySelector('.countDown').innerHTML = "4";}, 1000);
   setTimeout(function(){document.querySelector('.countDown').innerHTML = "3";}, 2000);
   setTimeout(function(){document.querySelector('.countDown').innerHTML = "2";}, 3000);
   setTimeout(function(){document.querySelector('.countDown').innerHTML = "1";}, 4000);
   setTimeout(function(){document.querySelector('.countDown').innerHTML = "0";}, 5000);
   setTimeout(initializeMarioGame, 5000);
   function initializetext() {
       var y = document.querySelector('.countDown');
       if (y.style.display === "none") {
           y.style.display = "block";
       }
       
       var x = document.getElementById("Java");
       if (x.style.display === "none") {
           x.style.display = "block";
       }
       
       var d = document.getElementById("Description");
       if (d.style.display === "none") {
           d.style.display = "block";
       }

       var e = document.getElementById("java");
       if (e.style.display === "none") {
           e.style.display = "block";
       }
       
       var a = document.getElementById("JAva");
       if (a.style.display === "none") {
           a.style.display = "block";
       }
    }
    function initializeMarioGame() {
       var y = document.querySelector('.countDown');
       if (y.style.display === "block") {
           y.style.display = "none";
       } else {
           y.style.display = "none";
       }
       
       var x = document.getElementById("Java");
       if (x.style.display === "block") {
           x.style.display = "none";
       } else {
           x.style.display = "none";
       }
       
       var d = document.getElementById("Description");
       if (d.style.display === "block") {
           d.style.display = "none";
       } else {
           d.style.display = "none";
       }

       var e = document.getElementById("java");
       if (e.style.display === "block") {
           e.style.display = "none";
       } else {
           e.style.display = "none";
       }
       var a = document.getElementById("JAva");
       if (a.style.display === "block") {
           a.style.display = "none";
       } else {
           a.style.display = "none";
       }
    }
    
    

    
}
function initializefalse() {
   var y = document.querySelector('.countDown');
   y.style.display = "none";
   var x = document.getElementById("Java");
   x.style.display = "none";
   var d = document.getElementById("Description");
   d.style.display = "none";
   var e = document.getElementById("java");
   e.style.display = "none";
   var a = document.getElementById("JAva");
   a.style.display = "none";
}
function BB9E_Game(){
    // DEFINITIONS
    initializefalse();
    var btn = document.querySelector('.btn');
    var canvas = document.querySelector('canvas');
            canvas.width = document.body.clientWidth;
            canvas.height = document.body.clientHeight;
    var context = canvas.getContext('2d');
    var currentFrame = 0;
    var particles = [];
    var storedParticles = [];
    var particleCount = 2000;
    var isUp;
    var isLeft;
    var isRight;
    var isDown;
    var isShift;
    var lastDirection;
    var visibleParticles  = 0;
    
    var car = new vehicle();
    
    // LIFECYCLE
    
    function update() {
        // update state
        currentFrame ++;
    
        // render
        render();
    }
    
    function render() {
    
    
    
        // ----------------
        // Clear the canvas
        // ----------------
    
        context.clearRect(0, 0, canvas.width, canvas.height);
    
    
    
        // ---------------
        // Render the ball
        // ---------------
    
    
    
    
    
        // ----------------
        // Ball manouvering
        // ----------------
    
        if(!isLeft && !isRight && !isUp && !isDown && car.velocity.x !== 0 || isLeft && isRight) {
            if(lastDirection === 'left') {
                car.velocity.add(car.decay);
            }
    
            if(lastDirection === 'right') {
                car.velocity.sub(car.decay);
            }
            if(lastDirection === 'up') {
                car.velocity.sub(car.decay);
            }
            if(lastDirection === 'down') {
                car.velocity.sub(car.decay);
            }
        }
    
        if(isRight) {
            if(isShift){
                if(car.velocity.x < 20) {
                    car.velocity.add(car.acceleration);
                    lastDirection = 'right';
                }
            }
            if(car.velocity.x < 10) {
                car.velocity.add(car.acceleration);
                lastDirection = 'right';
            }
        }
    
        if(isLeft) {
            if(isShift){
                if(car.velocity.x > -20) {
                    car.velocity.sub(car.acceleration);
                    lastDirection = 'left';
                }
            }
            if(car.velocity.x > -10) {
    
                car.velocity.sub(car.acceleration);
                lastDirection = 'left';
            }
        
        }
        
        if(isUp) {
            if(isShift){
                if(car.velocity.y < 20) {
                    car.velocity.add(car.acceleration);
                    lastDirection = 'up';
                }
            }
            car.velocity.y = -1;
    
                lastDirection = 'up';
            
        
        }
        
        if(isDown) {
            if(isShift){
                if(car.velocity.y > -20) {
                    car.velocity.sub(car.acceleration);
                    lastDirection = 'down';
                }
            }
            car.velocity.y = 1;
    
                lastDirection = 'down';
            
        
        }
    
        if(!isLeft && !isRight && car.velocity.x !== 0 || isLeft || isRight) {
            // visibleParticles++;
    
            storedParticles[0].position.x = car.position.x;
            particles.push(storedParticles[0]);
            storedParticles.splice(0, 1);
    
            storedParticles[0].position.x = car.position.x;
            particles.push(storedParticles[0]);
            storedParticles.splice(0, 1);
    
            storedParticles[0].position.x = car.position.x;
            particles.push(storedParticles[0]);
            storedParticles.splice(0, 1);
        }
    
        // ---------------------
        // Display the particles
        // ---------------------
    
    
        for (var i = 0; i < particles.length; i++) {
            particles[i].reset();
            particles[i].scale();
            particles[i].bounds();
            particles[i].render();
    
            // particles[i].position.sub(particles[i].velocity);
    
            if(lastDirection === 'right') {
                particles[i].position.add(particles[i].velocity);
            }
    
            if(lastDirection === 'left') {
                particles[i].position.sub(particles[i].velocity);
            }
    
            // // console.log(lastDirection);
    
            if(particles[i].complete) {
                particles[i].complete = false;
                storedParticles.push(particles[i]);
                particles.splice(i, 1);
          i--;
            }
        }
    
        // ---------------
        // Draw the ground
        // ---------------
    
        context.beginPath();
        context.fillStyle = '#03960a';
        context.fillRect(0, canvas.height/2, canvas.width, canvas.height/2);
    
        context.save();
        context.translate(car.position.x, car.position.y - 39);
        context.rotate(car.velocity.x / 20);
    
    
        context.beginPath();
        context.fillStyle = '#000000';
        context.moveTo(-26, car.radius * -1.5);
        context.lineTo(0, 0);
        context.lineTo(26, car.radius * -1.5);
        context.closePath();
        context.fill();
    
        context.beginPath();
        context.fillStyle = '#000000';
        context.fillRect(-10, car.radius * -0.9 - 23, 1, -20);
    
        context.beginPath();
        context.fillStyle = '#000000';
        context.fillRect(-5, car.radius * -0.9 - 23, 1, -10);
    
        context.restore();
    
        car.render();
        car.bounds();
        car.position.add(car.velocity);
    
        requestAnimationFrame(update);
    }
    
    
    
    // --------------
    // Particle Class
    // --------------
    
    function dustParticle() {
        this.radius = 0;
        this.position = new vec2(car.position.x, car.position.y);
        this.velocity = new vec2(Math.floor(Math.random() * (4 - 1)) + 1, 0);
        this.growing = true;
        this.complete = false;
    
        this.render = function(car) {
            context.beginPath();
            context.fillStyle = '#147372';
            context.arc(this.position.x, this.position.y, this.radius, 0, Math.PI*2, false);
            context.fill();
        }
    
        this.bounds = function() {
            if(this.radius > 16) {
                this.growing = false;
            }
        }
    
        this.reset = function() {
            if(this.radius <= 1 && this.growing === false) {
                this.complete = true;
    
                this.position.x = car.position.x;
                this.position.y = car.position.y;
                this.growing = true;
            }
        }
    
        this.scale = function() {
            if(this.growing) {
                this.radius += (Math.random() * 4);
            } else {
                this.radius -= (Math.random() * 0.75);
            }
        }
    }
    
    
    
    // ----------------------
    // Populate the particles
    // ----------------------
    
    for (var i = 0; i < particleCount; i++) {
        storedParticles.push(new dustParticle());
    }
    
    
    
    // -------
    // Vehicle
    // -------
    
    function vehicle() {
        this.radius = 36;
        this.position = new vec2(canvas.width/2, canvas.height/2);
        this.velocity = new vec2(0, 0);
        this.acceleration = new vec2(1.5, 0);
        this.decay = new vec2(0.25, 0);
    
        this.render = function() {
            context.beginPath();
            context.fillStyle = '#072d2d';
            context.arc(this.position.x, this.position.y - this.radius, this.radius, 0, Math.PI*2, false);
            context.fill();
        }
    
        this.bounds = function() {
            if(this.position.x > canvas.width + this.radius) {
                this.position.x = 0 - this.radius;
            }
    
            if(this.position.x < 0 - this.radius) {
                this.position.x = canvas.width + this.radius;
            }
        }
    }
    
    
    
    requestAnimationFrame(update);
    
    
    
    // ---------------
    // Event Listeners
    // ---------------
    
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("keyup", onKeyUp);
    
    function onKeyDown(HuamanEvent) {
        var HuamanKey = HuamanEvent.keyCode;
        switch (HuamanKey) {
            case 73:
                isUp = true;
                break;
            case 74:
                isLeft = true;
                break;
            case 75:
                isDown = true;
                break;
            case 76:
                isRight = true;
                break;
            case 16:
                isShift = true;
                break;
        }
    }
    addEventListener("scroll", function(){isRight = true;setTimeout(function(){isRight = false;},2000);},2000);
    
    function onKeyUp(HuamanEvent) {
        var HuamanKey = HuamanEvent.keyCode;
        switch (HuamanKey) {
            case 73:
                isUp = false;
                break;
            case 74:
                isLeft = false;
                break;
            case 75:
                isDown = false;
                break;
            case 76:
                isRight = false;
                break;
            case 16:
                isShift = false;
                break;
        }
    }
    
    window.addEventListener('resize', function() {
        canvas.width = document.body.clientWidth;
        canvas.height = document.body.clientHeight;
    
        car.position.x = canvas.width/2;
        car.position.y = canvas.height/2;
    
        storedParticles = [];
        for (var i = 0; i < particleCount; i++) {
            storedParticles.push(new dustParticle());
        }
    });
    
    function vec2(x = 0, y = 0) {
    
        this.x = x;
        this.y = y;
    
        this.add = function(v) {
            this.x += v.x;
            this.y += v.y;
            return this;
        }
    
        this.sub = function(v) {
            this.x -= v.x;
            this.y -= v.y;
            return this;
        }
    
        this.mult = function(s) {
            this.x *= s;
            this.y *= s;
            return this;
        }
    
        this.mag = function() {
            return Math.sqrt(this.x*this.x + this.y*this.y);
        }
    
        this.norm = function() {
            var m = this.mag();
            this.x /= m;
            this.y /= m;
            return this;
        }
    
        this.rotate = function(a) {
            var sina = Math.sin(a);
            var cosa = Math.cos(a);
            var rx = this.x * cosa - this.y * sina;
            var ry = this.x * sina + this.y * cosa;
            this.x = rx;
            this.y = ry;
            return this;
        }
    
        this.copy = function() {
            return new vec2(this.x, this.y);
        }
    
        this.render = function(context, ox = 0, oy = 0, color = "#FF330088", minLen = 42) {
    
            if (this.mag() < 0.001) return;
    
            context.save();
    
            var cp = this.copy();
            if (cp.mag() < minLen) {
                cp.norm();
                cp.mult(minLen);
            }
            context.fillStyle = "";
            context.lineWidth = 2;
            context.strokeStyle = color;
            context.lineCap = "square";
            context.beginPath();
            context.moveTo(ox, oy);
            context.lineTo(ox + cp.x, oy + cp.y);
            // arrow
            var r = 16;
            var a = Math.atan2(cp.y, cp.x) - Math.PI;
            var da = 30 * (Math.PI/180);
            var p1x = ox + cp.x + Math.cos(a-da)*r;
            var p1y = oy + cp.y + Math.sin(a-da)*r;
            var p2x = ox + cp.x + Math.cos(a+da)*r;
            var p2y = oy + cp.y + Math.sin(a+da)*r;
            context.moveTo(ox + cp.x, oy + cp.y);
            context.lineTo(p1x, p1y);
            context.moveTo(ox + cp.x, oy + cp.y);
            context.lineTo(p2x, p2y);
            context.stroke();
    
            context.restore();
    
        }
    
    }
}
function BB8_Game(){    
    // DEFINITIONS
    initializefalse();
    var btn = document.querySelector('.btn');
    var canvas = document.querySelector('canvas');
            canvas.width = document.body.clientWidth;
            canvas.height = document.body.clientHeight;
    var context = canvas.getContext('2d');
    var currentFrame = 0;
    var particles = [];
    var storedParticles = [];
    var particleCount = 2000;
    var isUp;
    var isLeft;
    var isRight;
    var isDown;
    var isShift;
    var lastDirection;
    var visibleParticles = 0;
    
    var car = new vehicle();
    
    // LIFECYCLE
    
    function update() {
        // update state
        currentFrame ++;
    
        // render
        render();
    }
    
    function render() {
    
    
    
        // ----------------
        // Clear the canvas
        // ----------------
    
        context.clearRect(0, 0, canvas.width, canvas.height);
    
    
    
        // ---------------
        // Render the ball
        // ---------------
    
    
    
    
    
        // ----------------
        // Ball manouvering
        // ----------------
    
        if(!isLeft && !isRight && !isUp && !isDown && car.velocity.x !== 0 || isLeft && isRight) {
            if(lastDirection === 'left') {
                car.velocity.add(car.decay);
            }
    
            if(lastDirection === 'right') {
                car.velocity.sub(car.decay);
            }
            if(lastDirection === 'up') {
                car.velocity.sub(car.decay);
            }
            if(lastDirection === 'down') {
                car.velocity.sub(car.decay);
            }
        }
    
        if(isRight) {
            if(isShift){
                if(car.velocity.x < 20) {
                    car.velocity.add(car.acceleration);
                    lastDirection = 'right';
                }
            }
            if(car.velocity.x < 10) {
                car.velocity.add(car.acceleration);
                lastDirection = 'right';
            }
        }
    
        if(isLeft) {
            if(isShift){
                if(car.velocity.x > -20) {
                    car.velocity.sub(car.acceleration);
                    lastDirection = 'left';
                }
            }
            if(car.velocity.x > -10) {
    
                car.velocity.sub(car.acceleration);
                lastDirection = 'left';
            }
        
        }
        
        if(isUp) {
            if(isShift){
                if(car.velocity.y < 20) {
                    car.velocity.add(car.acceleration);
                    lastDirection = 'up';
                }
            }
            car.velocity.y = -1;
    
                lastDirection = 'up';
            
        
        }
        
        if(isDown) {
            if(isShift){
                if(car.velocity.y > -20) {
                    car.velocity.sub(car.acceleration);
                    lastDirection = 'down';
                }
            }
            car.velocity.y = 1;
    
                lastDirection = 'down';
            
        
        }
    
        if(!isLeft && !isRight && car.velocity.x !== 0 || isLeft || isRight) {
            // visibleParticles++;
    
            storedParticles[0].position.x = car.position.x;
            particles.push(storedParticles[0]);
            storedParticles.splice(0, 1);
    
            storedParticles[0].position.x = car.position.x;
            particles.push(storedParticles[0]);
            storedParticles.splice(0, 1);
    
            storedParticles[0].position.x = car.position.x;
            particles.push(storedParticles[0]);
            storedParticles.splice(0, 1);
        }
    
        // ---------------------
        // Display the particles
        // ---------------------
    
    
        for (var i = 0; i < particles.length; i++) {
            particles[i].reset();
            particles[i].scale();
            particles[i].bounds();
            particles[i].render();
    
            // particles[i].position.sub(particles[i].velocity);
    
            if(lastDirection === 'right') {
                particles[i].position.add(particles[i].velocity);
            }
    
            if(lastDirection === 'left') {
                particles[i].position.sub(particles[i].velocity);
            }
    
            // // console.log(lastDirection);
    
            if(particles[i].complete) {
                particles[i].complete = false;
                storedParticles.push(particles[i]);
                particles.splice(i, 1);
          i--;
            }
        }
    
        // ---------------
        // Draw the ground
        // ---------------
    
        context.beginPath();
        context.fillStyle = '#108d89';
        context.fillRect(0, canvas.height/2, canvas.width, canvas.height/2);
    
        context.save();
        context.translate(car.position.x, car.position.y - 39);
        context.rotate(car.velocity.x / 20);
    
        context.beginPath();
        context.fillStyle = '#072d2d';
        context.arc(0, car.radius * -0.9, 26, 0, Math.PI, true);
        context.fill();
    
        context.beginPath();
        context.fillStyle = '#072d2d';
        context.moveTo(-26, car.radius * -0.92);
        context.lineTo(0, 0);
        context.lineTo(26, car.radius * -0.92);
        context.closePath();
        context.fill();
    
        context.beginPath();
        context.fillStyle = '#072d2d';
        context.fillRect(-10, car.radius * -0.9 - 23, 1, -20);
    
        context.beginPath();
        context.fillStyle = '#072d2d';
        context.fillRect(-5, car.radius * -0.9 - 23, 1, -10);
    
        context.restore();
    
        car.render();
        car.bounds();
        car.position.add(car.velocity);
    
        requestAnimationFrame(update);
    }
    
    
    
    // --------------
    // Particle Class
    // --------------
    
    function dustParticle() {
        this.radius = 0;
        this.position = new vec2(car.position.x, car.position.y);
        this.velocity = new vec2(Math.floor(Math.random() * (4 - 1)) + 1, 0);
        this.growing = true;
        this.complete = false;
    
        this.render = function(car) {
            context.beginPath();
            context.fillStyle = '#147372';
            context.arc(this.position.x, this.position.y, this.radius, 0, Math.PI*2, false);
            context.fill();
        }
    
        this.bounds = function() {
            if(this.radius > 16) {
                this.growing = false;
            }
        }
    
        this.reset = function() {
            if(this.radius <= 1 && this.growing === false) {
                this.complete = true;
    
                this.position.x = car.position.x;
                this.position.y = car.position.y;
                this.growing = true;
            }
        }
    
        this.scale = function() {
            if(this.growing) {
                this.radius += (Math.random() * 4);
            } else {
                this.radius -= (Math.random() * 0.75);
            }
        }
    }
    
    
    
    // ----------------------
    // Populate the particles
    // ----------------------
    
    for (var i = 0; i < particleCount; i++) {
        storedParticles.push(new dustParticle());
    }
    
    
    
    // -------
    // Vehicle
    // -------
    
    function vehicle() {
        this.radius = 36;
        this.position = new vec2(canvas.width/2, canvas.height/2);
        this.velocity = new vec2(0, 0);
        this.acceleration = new vec2(1.5, 0);
        this.decay = new vec2(0.25, 0);
    
        this.render = function() {
            context.beginPath();
            context.fillStyle = '#072d2d';
            context.arc(this.position.x, this.position.y - this.radius, this.radius, 0, Math.PI*2, false);
            context.fill();
        }
    
        this.bounds = function() {
            if(this.position.x > canvas.width + this.radius) {
                this.position.x = 0 - this.radius;
            }
    
            if(this.position.x < 0 - this.radius) {
                this.position.x = canvas.width + this.radius;
            }
        }
    }
    
    
    
    requestAnimationFrame(update);
    
    
    
    // ---------------
    // Event Listeners
    // ---------------
    
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("keyup", onKeyUp);
    
    function onKeyDown(evt) {
        var key = evt.keyCode;
        switch (key) {
            case 73:
                isUp = true;
                break;
            case 74:
                isLeft = true;
                break;
            case 75:
                isDown = true;
                break;
            case 76:
                isRight = true;
                break;
            case 16:
                isShift = true;
                break;
        }
    }
    addEventListener("scroll", function(){isRight = true;setTimeout(function(){isRight = false;},2000);},2000);
    
    function onKeyUp(evt) {
        var key = evt.keyCode;
        switch (key) {
            case 73:
                isUp = false;
                break;
            case 74:
                isLeft = false;
                break;
            case 75:
                isDown = false;
                break;
            case 76:
                isRight = false;
                break;
            case 16:
                isShift = false;
                break;
        }
    }
    
    window.addEventListener('resize', function() {
        canvas.width = document.body.clientWidth;
        canvas.height = document.body.clientHeight;
    
        car.position.x = canvas.width/2;
        car.position.y = canvas.height/2;
    
        storedParticles = [];
        for (var i = 0; i < particleCount; i++) {
            storedParticles.push(new dustParticle());
        }
    });
    
    function vec2(x = 0, y = 0) {
    
        this.x = x;
        this.y = y;
    
        this.add = function(v) {
            this.x += v.x;
            this.y += v.y;
            return this;
        }
    
        this.sub = function(v) {
            this.x -= v.x;
            this.y -= v.y;
            return this;
        }
    
        this.mult = function(s) {
            this.x *= s;
            this.y *= s;
            return this;
        }
    
        this.mag = function() {
            return Math.sqrt(this.x*this.x + this.y*this.y);
        }
    
        this.norm = function() {
            var m = this.mag();
            this.x /= m;
            this.y /= m;
            return this;
        }
    
        this.rotate = function(a) {
            var sina = Math.sin(a);
            var cosa = Math.cos(a);
            var rx = this.x * cosa - this.y * sina;
            var ry = this.x * sina + this.y * cosa;
            this.x = rx;
            this.y = ry;
            return this;
        }
    
        this.copy = function() {
            return new vec2(this.x, this.y);
        }
    
        this.render = function(context, ox = 0, oy = 0, color = "#FF330088", minLen = 42) {
    
            if (this.mag() < 0.001) return;
    
            context.save();
    
            var cp = this.copy();
            if (cp.mag() < minLen) {
                cp.norm();
                cp.mult(minLen);
            }
            context.fillStyle = "";
            context.lineWidth = 2;
            context.strokeStyle = color;
            context.lineCap = "square";
            context.beginPath();
            context.moveTo(ox, oy);
            context.lineTo(ox + cp.x, oy + cp.y);
            // arrow
            var r = 16;
            var a = Math.atan2(cp.y, cp.x) - Math.PI;
            var da = 30 * (Math.PI/180);
            var p1x = ox + cp.x + Math.cos(a-da)*r;
            var p1y = oy + cp.y + Math.sin(a-da)*r;
            var p2x = ox + cp.x + Math.cos(a+da)*r;
            var p2y = oy + cp.y + Math.sin(a+da)*r;
            context.moveTo(ox + cp.x, oy + cp.y);
            context.lineTo(p1x, p1y);
            context.moveTo(ox + cp.x, oy + cp.y);
            context.lineTo(p2x, p2y);
            context.stroke();
    
            context.restore();
    
        }
    
    }
}
