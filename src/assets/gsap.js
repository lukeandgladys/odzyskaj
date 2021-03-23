gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);



gsap.from("h1", {duration: 1, opacity: 0, x: 300});
gsap.from("h2", {delay: 1, duration: 2, opacity: 0});

gsap.from("img#menu", {duration: 1, opacity: 0, x: -300});








gsap.to(".indexStart, .indexStart p, .indexStart h3, #pasekIndex, #pasekIndex h1 a ", {scrollTrigger: {trigger:"#pierwszy",
start: "top center",
end: "bottom center",
toggleActions: "restart none reverse none"


},
duration: 1, opacity: 1, color: "#000", backgroundColor: '#fff'});








var menu = document.getElementById("menu")
menu.onclick = function menuWjazd() {

gsap.to(window, {duration: 0.7, scrollTo:"#top"});

document.getElementById("nav").className = 'jest';
document.getElementById("nav").className = 'bialoczarny';
document.getElementById("menu").className = 'niema';
document.getElementById("close").className = 'jest';
gsap.from("img#close", {duration: 1, opacity: 0, x: 300});
gsap.from("nav", {duration:0.7, opacity:0 ,  y: -2000});
gsap.from("nav ul li ul ", {delay:0.7, duration:0.7, opacity:0 ,stagger: 0.1,  x: -80  });
gsap.from("nav ul li ul li", {delay:0.7, duration:0.6, opacity:0 ,stagger: 0.02,  x: 25  });
// gsap.to("nav", {duration: 1,delay: 1, backgroundColor: "#000", color: "#fff"  })
gsap.to("nav", { backgroundColor: "#fff", color: "#000"  })

}

var close = document.getElementById("close")
close.onclick = function menuWyjazd() {
document.getElementById("nav").className = 'niema';
document.getElementById("menu").className = 'jest';
document.getElementById("close").className = 'niema';
gsap.from("h1", {duration: 1, opacity: 0, x: 300});
gsap.from("img#menu", {duration: 1, opacity: 0, x: -300});
}
// menu.onmouseover = function logo(){
// gsap.from("h1", {duration: 1, opacity: 0, x: 300});
// document.getElementById("menup").className = 'jest';
// }



var down = document.getElementById("down")
down.onclick = function down() {
gsap.to(window, {duration: 0.7, scrollTo:"#pierwszy"});
}
