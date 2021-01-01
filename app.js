const flightPath = {
    curviness: 1.25,
    autoRotate: true,
    values: [
        {x:100 , y: -20},
        {x:200 , y: 0},
        {x:150, y:40},
        {x:250,y : -100},
        {x:350, y: -50},
        {x:600, y:100},
        {x:800, y:0},
        {x: window.innerWidth, y: -50}

    ]
};

const tween = new TimelineLite();
    
tween.add(
    TweenLite.to(".camera",1,{
        bezier: flightPath,
        
        
    })
);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: ".animation",
    duration: 5000,
    triggerHook: 0
})

 .setTween(tween)
 .addIndicators()
 .setPin(".camera")
 .addTo(controller);