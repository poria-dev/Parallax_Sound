const sec1 = document.querySelector(".sec1")
const spans = document.querySelectorAll("#text1>span")
const img1 = document.querySelector(".img1>img")
const parent_img1 = document.querySelector(".img1")
const text2 = document.querySelectorAll("#text2>span")
const wallback = document.querySelector(".wallback")
const sec2 = document.querySelector(".sec2")
let heightsec = sec1.scrollHeight
console.log(heightsec);

let flag = 0
let imgChange = false
let imgChange2 = false



addEventListener("scroll", () => {

    let x = scrollY
    let progress = x / heightsec




    // test down and up ====

    if (x > flag) {


        // fix sec 2 after sec 1 ======


        if (x > 5636 && x < 7000) {

            sec2.classList.add("fix")
            sec1.classList.remove("fix")


        } else {
            sec2.classList.remove("fix")
            
        }





        // img1 scale ===

        if (x > 300 && x < 3000) {

            let imgProgress = (x - 300) / 2700

            imgProgress = Math.max(0, Math.min(1, imgProgress))

            img1.style.src = "../img/headphones_1.webp"
            img1.style.opacity = 1
            img1.style.scale = `${5 - (imgProgress * 4)}`
            img1.style.transform = `translateY(${imgProgress * 80}px) rotate(${imgProgress * -8}deg)`


            // img 2 in page
        } else if (x > 3000 && x < 4000) {

            let imgProgress = (x - 3000) / 1000

            imgProgress = Math.max(0, Math.min(1, imgProgress))

            img1.src = "../img/0018.webp"

            img1.style.opacity = imgProgress
            img1.style.scale = `${0.4 + (imgProgress * 0.15)}`
            img1.style.transform = `translateY(${80 - (imgProgress * 80)}px) rotate(${-8 + (imgProgress * 8)}deg)`

            // img 1 back and remove img2
        } else if (x > 4000 && x < 4500) {

            let imgProgress = (x - 4000) / 500

            imgProgress = Math.max(0, Math.min(1, imgProgress))

            img1.style.opacity = 0.8
            img1.style.scale = 0.5
            img1.style.transform = `translateY(0px) rotate(0deg)`

        }



        //wall back start ====

        if (x > 4600 && x < 5000) {

            let wall = (x - 4600) / 400

            wall = Math.max(0, Math.min(1, wall))

            wallback.style.clipPath = `inset(${100 - (wall * 100)}% 0 0 0)`

            let r = 255 - (255 * wall)
            let g = 255 - (255 * wall)
            let b = 255 - (255 * wall)

            text2.forEach((val) => {
                val.style.color = "#050505"
                val.style.textShadow = "0 0 18px rgba(0, 0, 0, 0.18)"
            })

        } else if (x >= 5000) {

            wallback.style.clipPath = `inset(0% 0 0 0)`

            text2.forEach((val) => {
                val.style.color = "#050505"
                val.style.textShadow = "0 0 18px rgba(0, 0, 0, 0.18)"
            })

        }

    } else {




        // img1 scale ===

        if (x > 300 && x < 3000) {

            let imgProgress = (x - 300) / 2700

            imgProgress = Math.max(0, Math.min(1, imgProgress))

            img1.src = "../img/headphones_1.webp"

            img1.style.opacity = 1
            img1.style.scale = `${5 - (imgProgress * 4)}`
            img1.style.transform = `translateY(${imgProgress * 80}px) rotate(${imgProgress * -8}deg)`


            // img 2 in page
        } else if (x > 3000 && x < 4000) {

            let imgProgress = (x - 3000) / 1000

            imgProgress = Math.max(0, Math.min(1, imgProgress))

            img1.src = "../img/0018.webp"
            img1.style.opacity = imgProgress
            img1.style.scale = `${0.4 + (imgProgress * 0.15)}`
            img1.style.transform = `translateY(${80 - (imgProgress * 80)}px) rotate(${-8 + (imgProgress * 8)}deg)`

            // img 1 back and remove img2
        } else if (x > 4000 && x < 4500) {

            let imgProgress = (x - 4000) / 500

            imgProgress = Math.max(0, Math.min(1, imgProgress))

            img1.src = "../img/0018.webp"

            img1.style.opacity = 1
            img1.style.scale = 0.5
            img1.style.transform = `translateY(0px) rotate(0deg)`


        }

        // wall text color ====

        if (x > 4600 && x < 5000) {

            let wall = (x - 4600) / 400

            wall = Math.max(0, Math.min(1, wall))

            wallback.style.clipPath = `inset(${100 - (wall * 100)}% 0 0 0)`

            let r = 255
            let g = 255 - (90 * wall)
            let b = 255 - (255 * wall)

            text2.forEach((val) => {
                val.style.color = `rgb(${r}, ${g}, ${b})`
                val.style.textShadow = `0 0 ${8 + (wall * 18)}px rgba(255, 138, 0, ${wall * 0.45})`
            })

        } else if (x <= 4600) {

            wallback.style.clipPath = `inset(100% 0 0 0)`

            text2.forEach((val) => {
                val.style.color = "#ffffff"
                val.style.textShadow = "0 0 0px rgba(255, 138, 0, 0)"
            })

        }



    }


    // fix sec1 ======

    if (x < 8000) {

        sec1.classList.add("fix")

    } else {
        sec1.classList.remove("fix")
    }



    // fix reset

    if (x == 0) {

        spans.forEach((val) => {
            val.style.opacity = 1
        })


        img1.style.scale = 5

        text2.forEach((val) => {
            val.style.opacity = 0
        })

        img1.style.opacity = 1
        img1.src = "../img/headphones_1.webp"

        imgChange = false
        imgChange2 = false

        img1.style.transform = `translateY(0px) rotate(0deg)`

    }


    // opacity 1 === 

    if (x > 300 && x < 2000) {

        let textProgress = (x - 300) / 1700

        spans.forEach((val, index) => {

            let delay = index * 0.08

            let opacity = 1 - ((textProgress - delay) / (1 - delay))

            opacity = Math.max(0, Math.min(1, opacity))

            val.style.opacity = opacity

        })



    } else if (x > 2000) {

        spans.forEach((val) => {
            val.style.opacity = 0
        })

    }



    // opacity 2


    if (x > 2000 && x < 3000) {

        let op2 = (x - 2000) / 1000

        text2.forEach((val, index) => {

            let delay = index * 0.07

            let opacity = (op2 - delay) / (1 - delay)

            opacity = Math.max(0, Math.min(1, opacity))

            val.style.opacity = opacity


        })

    } else if (x < 2000) {
        text2.forEach((item) => {
            item.style.opacity = 0
        })
    }

    console.log(x);

    flag = x

})