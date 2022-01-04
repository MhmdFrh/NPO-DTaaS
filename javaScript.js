// document.addEventListener('scroll' , function(){
//     document.getElementById("logo").style.height = "150%";
//     document.getElementById("logo").style.width = "25%";
// })



document.getElementById("open-close-btn").addEventListener('click', function () {

    let navHeight = document.getElementById("real-slide-bar").offsetHeight;
    let dispalySection = document.querySelectorAll(".slide-bar-horizontal-sections");
    let bergirBtn = document.getElementById("btn-icon");

    if (navHeight == 0) {
        bergirBtn.className = "fa fa-times";
        document.getElementById("real-slide-bar").style.height = "90vh";
        setTimeout(() => {
            dispalySection.forEach(function (ele) {
                ele.style.display = "block";
            })
        }, 100);

    } else {
        bergirBtn.className = "fa fa-bars";
        document.getElementById("real-slide-bar").style.height = "0vh";
        dispalySection.forEach(function (ele) {
            ele.style.display = "none";
        })
        
    }

})



// dispaly the sections of the slide bar 
let slidNavBarSection = document.querySelectorAll(".slide-bar-horizontal-sections");

slidNavBarSection.forEach(function (ele) {
    ele.querySelector(".slide-bar-content").addEventListener('click', function () {

        let optionsDispaly = ele.querySelector(".slide-bar-sections-options").style.display;

        if (optionsDispaly == "none") {
            ele.querySelector(".slide-bar-sections-options").style.display = "block";
            ele.querySelector(".iconrotat").style.transform = "rotate(180deg)";
        } else {
            ele.querySelector(".slide-bar-sections-options").style.display = "none";
            ele.querySelector(".iconrotat").style.transform = "rotate(0deg)";
        }

    })
})
