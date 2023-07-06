window.addEventListener("load", () => {

    document.getElementById("slide3-new").addEventListener("click", goToNew);
    document.getElementById("slide1-moving-forward").addEventListener("click", goToMovingForward);
    document.getElementById("credit-gif").addEventListener("click", showCredit);
    document.getElementById("slide6-roles").addEventListener("click", goToRoles);

    //בדיקה האם זאת פעם ראשונה שהמשתמש נכנס לאתר או שהוא כבר היה בו ורק חזר אחורה אל העמוד הראשי
    if(sessionStorage.getItem("seenVideo") === null) {
        setTimeout(() => {
            sessionStorage.setItem("seenVideo", "true");
        }, 7000);

    }
    else {
        document.getElementById("container").style.animation = "";
        document.getElementById("container").style.opacity = "1";
        document.getElementById("start-anim").style.visibility = "hidden";
        document.getElementById("start-anim2").style.visibility = "hidden";
    }

    setTimeout(() => {
        document.getElementById("start-anim2").style.animation = "";
        document.getElementById("start-anim2").style.cssText = "    top: 40%; right: 0%; transform: translate(-50%, -50%); rotate: 0deg;"
    }, 5900);

    setTimeout(() => {

        document.getElementById("start-anim2").style.animation = "showVideoPic 2s forwards";
    }, 6000);

    setTimeout(() => {
        document.getElementById("start-anim2").style.visibility = "hidden";
    }, 8000);


    
})

function goToNew() {
    window.location.href = "cards/new/new.html";
}

function goToMovingForward() {
    window.location.href = "cards/movingForward/movingForward.html";
}

function goToRoles() {
    window.location.href = "cards/roles/roles.html";
}

//מראה ומחביאה את הקרדיטים לפי לחיצה
function showCredit() {
    if(document.getElementById("credit-gif").getAttribute("name") === "0") {
        console.log("hi");
        document.getElementById("credit-img").style.animation = "showGifAnim 0.5s forwards";
        document.getElementById("blur-div").style.display = "block";
        document.getElementById("credit-gif").setAttribute("name", "1")
    }
    
    else {
        document.getElementById("credit-img").style.animation = "hideGifAnim 0.5s forwards";
        document.getElementById("blur-div").style.display = "none";
        document.getElementById("credit-gif").setAttribute("name", "0")
    }
}

//קוד שהעתקתי מהאינטרנט שמפעיל את הקרוסלה
const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});

const autoSlide = () => {
    // if there is no image left to scroll then return from here
    if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;

    positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
    let firstImgWidth = firstImg.clientWidth + 14;
    // getting difference value that needs to add or reduce from carousel left to take middle img center
    let valDifference = firstImgWidth - positionDiff;

    if(carousel.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    // if user is scrolling to the left
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}

const dragStart = (e) => {
    // updatating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    // scrolling images/carousel to left according to mouse pointer
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");

    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);