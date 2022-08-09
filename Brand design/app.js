let names = document.getElementById("name")
const submit = document.getElementById("submit")
const welcome1 = document.querySelector(".welcome")
const welcome2 = document.querySelector(".wel-back")
const body = document.querySelector("body")

// const border = document.getElementById('border')
// const  daris = document.getElementById('daris')
// const  text = document.getElementById('text')
// const  explore = document.getElementById('explore')
// const headimg = document.getElementById('head-img')
// const product = document.getElementById('product')
// const arrow1 = document.getElementById("arrow1")
// const arrow2= document.getElementById("arrow2")
// const scroll1 = document.getElementById("scroll1")

gsap.fromTo("#head1", {x: -900, }, {x: 0, opacity:1, duration: 1.5, ease:"back.out",})
gsap.fromTo("#box1", {y: 100, opacity: 0, }, { y:0, opacity:1, duration: "0.9", delay: "0.5",})
gsap.fromTo("#box2", {y: 100, opacity: 0, }, { y:0, opacity:1, duration: "0.9", delay: "0.7",})
gsap.fromTo("#box3", {y: 100, opacity: 0, }, { y:0, opacity:1, duration: "0.9", delay: "1",})
gsap.fromTo("#box4", {y: 100, opacity: 0, }, { y:0, opacity:1, duration: "0.9", delay: "1.3",})
gsap.fromTo("#circles", { scale: 0.5,  opacity: 0, }, { scale:1, opacity:1, duration: "1", delay: "1", ease: "bounce",})
gsap.fromTo("#bit", { y:300, opacity: 0, }, { y: 0, opacity:1, duration: "1", delay: "1.5",})




const hi = document.getElementById("hi")

const getname = ()=>{
    names.value == names
    names.onkeyup = ()=>{
         
}
}
getname()
const welcome = ()=>{
    submit.onclick= ()=>{
        hi.innerHTML = `<h1>Hi! 👋 ${names.value}</h1>`
        body.style.overflow = "hidden"
        welcome1.style.display = "flex"
        welcome2.style.display = "flex"

    }
}
welcome()