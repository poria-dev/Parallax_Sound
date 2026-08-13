const sec1 = document.querySelector(".sec1")
const sec1Wrap = document.querySelector(".sec1-wrap")
const spans = document.querySelectorAll("#text1>span")
const img1 = document.querySelector(".img1>img")
const parent_img1 = document.querySelector(".img1")
const text2 = document.querySelectorAll("#text2>span")
const wallback = document.querySelector(".wallback")
const sec2 = document.querySelector(".sec2")

let heightsec = sec1Wrap.offsetHeight


let flag = 0
let imgChange = false
let imgChange2 = false
let some = 0


// sec 1 selectors ======================




addEventListener("scroll", () => {

    let x = scrollY
    let progress = x / heightsec




    // test down and up ====

    if (x > flag) {


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


    //   end sec 1 =========================== 

    // ==============================================

    // =========================================


    const center_text = document.getElementById("center_text")

    const sec2Wrap = document.querySelector(".sec2-wrap")

    const sec2_img1 = document.querySelector(".sec2_img1>img")

    const groupsec2 = document.querySelector(".groupsec2")

    const groupsec3 = document.querySelector(".groupsec3")

    const groupsec4 = document.querySelector(".groupsec4")

    const text_org_sec2 = document.querySelector(".text_org_sec2")

    const div1 = document.querySelector(".text_org_sec2>.div1")

    const div2 = document.querySelector(".text_org_sec2>.div2")

    const img2_sec2 = document.querySelector(".img2_sec2")

    const img3_sec2 = document.querySelector(".img3_sec2")


    let heightsec2 = sec2Wrap.offsetHeight


    // sec 2 selectors ===================

    let progress2 = (x - 7000) / 3000

    progress2 = Math.max(0, Math.min(1, progress2))


    // down and up ====

    if (x > flag) {

        if (x > 7600 && x < 9400) {

            let scaleProgress = (x - 7600) / 1800

            scaleProgress = Math.max(0, Math.min(1, scaleProgress))

            center_text.style.scale = `${1 + (scaleProgress * 2.5)}`

        }

    } else {

        if (x > 7600 && x < 9400) {

            let scaleProgress = (x - 7600) / 1800

            scaleProgress = Math.max(0, Math.min(1, scaleProgress))

            center_text.style.scale = `${1 + (scaleProgress * 4)}`

        }

    }


    // fixsator ======

    if (x <= 7000) {

        center_text.style.opacity = 0.2
        center_text.style.scale = 1

    }


    // opacity center text

    if (x > 7000 && x < 9400) {

        let opacityProgress = (x - 7000) / 2400

        opacityProgress = Math.max(0, Math.min(1, opacityProgress))

        center_text.style.opacity = `${0.2 - (opacityProgress * 0.2)}`

    } else if (x >= 9400 && x < 10000) {

        let opacityProgress = (x - 9400) / 600

        opacityProgress = Math.max(0, Math.min(1, opacityProgress))

        center_text.style.opacity = `${0 - opacityProgress}`

    } else if (x >= 10000) {

        center_text.style.opacity = 0

    }







    // img in page sec 2 ============================

    if (x < 9350) {

        sec2_img1.parentElement.style.opacity = 0
        sec2_img1.parentElement.style.width = "100%"
        sec2_img1.parentElement.style.left = "0"

        sec2_img1.style.clipPath =
            "inset(0 50% 0 50%)"

    }


    // img open center =========

    if (x >= 9350 && x <= 11300) {

        sec2_img1.parentElement.style.opacity = 1
        sec2_img1.parentElement.style.width = "100%"
        sec2_img1.parentElement.style.left = "0"

        let progress = (x - 9350) / 1950

        progress = Math.max(0, Math.min(1, progress))

        let left = 50 - (progress * 50)
        let right = 50 - (progress * 50)

        sec2_img1.style.clipPath =
            `inset(0 ${right}% 0 ${left}%)`

    }


    // img full ==============

    if (x > 11300) {

        sec2_img1.style.clipPath =
            "inset(0 0 0 0)"

    }


    // cut img to 50% ===============

    if (x > 11300 && x < 12500) {

        let progress = (x - 11300) / 1200

        progress = Math.max(0, Math.min(1, progress))

        let width = 100 - (progress * 50)

        sec2_img1.parentElement.style.width =
            `${width}%`

        sec2_img1.parentElement.style.left = "0"

    }


    // img after cut ........

    if (x >= 12500) {

        sec2_img1.parentElement.style.width = "50%"
        sec2_img1.parentElement.style.left = "0"

        sec2_img1.style.clipPath =
            "inset(0 0 0 0)"

    }





    //  text after img 50% :) .....................................


    if (x > 12500 && x < 15000) {

        text_org_sec2.style.opacity = 1

        let progress = (x - 12500) / 2500

        progress = Math.max(0, Math.min(1, progress))


        // div1 

        if (progress < 0.35) {

            let p = progress / 0.35

            p = Math.max(0, Math.min(1, p))

            let y = 150 - (p * 150)

            div1.style.transform =
                `translate(-50%, ${y}%)`

        }


        // div1 stay 

        else {

            div1.style.transform =
                `translate(-50%, -50%)`

        }

    }


    // reset 

    if (x <= 12500) {

        text_org_sec2.style.opacity = 0

        div1.style.transform =
            `translate(-50%, 150%)`

    }


    // final 

    if (x >= 14500) {

        text_org_sec2.style.opacity = 1

        div1.style.transform =
            `translate(-50%, -50%)`

    }





    // img change sec 2 .........


    if (x > 12000 && x < 14500) {

        let progress = (x - 12000) / 2500

        img2_sec2.style.clipPath =
            `inset(${100 - progress * 100}% 0 0 0)`

        img3_sec2.style.clipPath =
            `inset(100% 0 0 0)`


        groupsec2.style.opacity = 1 - progress

        groupsec2.style.transform =
            `translate(-50%, -50%) scale(${1 - progress * 0.3})`


        groupsec3.style.opacity = progress


        groupsec3.style.transform =
            `translate(-50%, -50%) scale(${0.7 + progress * 0.3})`

        groupsec4.style.opacity = 0
    }


    else if (x >= 14500 && x < 17000) {

        let progress = (x - 14500) / 2500

        img2_sec2.style.clipPath =
            `inset(0 0 0 0)`

        img3_sec2.style.clipPath =
            `inset(${100 - progress * 100}% 0 0 0)`


        // text 2 hidden
        groupsec3.style.opacity = 1 - progress
        groupsec3.style.transform =
            `translate(-50%, calc(-50% - ${progress * 30}px))`


        // text3 show
        groupsec4.style.opacity = progress
        groupsec4.style.transform =
            `translate(-50%, calc(-50% + ${(1 - progress) * 30}px))`


        // text 1 hidden
        groupsec2.style.opacity = 0
    }


    // resett1

    else if (x <= 12000) {

        img2_sec2.style.clipPath =
            `inset(100% 0 0 0)`

        img3_sec2.style.clipPath =
            `inset(100% 0 0 0)`


        groupsec2.style.opacity = 1
        groupsec3.style.opacity = 0
        groupsec4.style.opacity = 0

        groupsec2.style.transform =
            `translate(-50%, -50%)`
    }

    // reset2
    else if (x >= 17000) {

        img2_sec2.style.clipPath =
            `inset(0 0 0 0)`

        img3_sec2.style.clipPath =
            `inset(0 0 0 0)`


        groupsec2.style.opacity = 0
        groupsec3.style.opacity = 0
        groupsec4.style.opacity = 1

        groupsec4.style.transform =
            `translate(-50%, -50%)`
    }






    // sec3 start -----.-.-.-.--.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
    // =============================
    // =========================


    const phone1 = document.querySelector(".phone1 > img")
    const boxabout = document.querySelector(".boxabout > div")


    // selects sec 3 ===========================




    if (x > 17750 && x < 19250) {

        let progress = (x - 17750) / 1500


        // phone
        phone1.style.top =
            `${-90 + progress * 35}%`

        phone1.style.transform =
            `rotate(${progress * 5}deg) scale(${1 + progress * 0.18})`


        // box
        boxabout.style.opacity = progress

        boxabout.style.transform =
            `translateY(${(-120 + progress * 120)}px) rotate(${progress * 1.5}deg)`
    }

    // reset1 
    else if (x <= 17750) {

        phone1.style.top = "-90%"

        phone1.style.transform =
            "rotate(0deg) scale(1)"

        boxabout.style.opacity = 0

        boxabout.style.transform =
            "translateY(-120px) rotate(0deg)"
    }

    // reset 2

    else if (x >= 19250) {

        phone1.style.top = "-55%"

        phone1.style.transform =
            "rotate(5deg) scale(1.18)"

        boxabout.style.opacity = 1

        boxabout.style.transform =
            "translateY(0) rotate(1.5deg)"
    }



    

    console.log(x)

    flag = x

})