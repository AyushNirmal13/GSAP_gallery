var tl=gsap.timeline();
tl.from("#nav .item", {
    y:-50,
    opacity:0,
    stagger:0.3,
    duration:1,
    delay:0.4
})

tl.from("#text span", {
    x:-500,
    opacity:0,
    stagger:0.3,
    duration:1
})
tl.from("#content img", {
    x:500,
    rotate:45,
    scale:0,
    opacity:0,
    stagger:0.5,
    duration:1.5
})

tl.from("#end .item", {
    y:50,
    opacity:0,
    duration:1,
    stagger:0.3
})