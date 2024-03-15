let menuTimeline = gsap.timeline({paused: true, reversed: true});
let contTimeline = gsap.timeline({paused: true, reversed: true});
let searchTimeline = gsap.timeline({paused: true, reversed: true});
let openBtn = document.getElementById("burger--open");
let closeBtn = document.getElementById("burger--cloze");
let btnCont = document.getElementById("cloze-btn");
let btnContOpen = document.getElementById('cont-open')
let searchBtn = document.getElementById('search__btn')
menuTimeline
  .fromTo(".header__burger--menu", {display: "none"}, {display: "block"})
  .fromTo(".header__burger--menu", 
          {opacity: 0, top: "-5%"},
          {opacity: 1, top: "0%"}
         )
  .fromTo(".burger--items", 0.5,
          {opacity: 0, transform: "translateY(-20px)"},
          {opacity: 1, transform: "translateY(0px)", delay: 0.1, 
  stagger: 0.1,}, "-=0.7"
         )
openBtn.addEventListener("click", () => menuTimeline.play())
closeBtn.addEventListener("click", () => menuTimeline.reverse())
contTimeline
.fromTo('.open--cont',{display: "none"}, {display: "block"})
.fromTo(".cont-more", {display: "block"}, {display: "none"})
.fromTo(".cont-more", 
{opacity: 1,right:"-5%"},
{opacity: 0,right:"0%"}
)
.fromTo(".cont--items", 0.5,
          {opacity: 1, transform: "translateY(-20px)"},
          {opacity: 0, transform: "translateY(0px)", delay: 0.1, 
  stagger: 0.1,}, "-=0.7"
         )
searchTimeline
.fromTo('.search',{display: "none"}, {display: "block"})
btnCont.addEventListener("click",()=> contTimeline.play())
btnContOpen.addEventListener("click",()=> contTimeline.reverse())
searchBtn.addEventListener("click",()=> {searchTimeline.reversed() ? searchTimeline.play() : searchTimeline.reverse();})

//# sourceMappingURL=main.js.map
