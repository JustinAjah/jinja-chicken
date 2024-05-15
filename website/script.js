
const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list")
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button")
    const sliderScrollbar = document.querySelector(".container .slider-scrollbar")
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb")
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth
    
    scrollbarThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX
        const thumbPosition = scrollbarThumb.offsetLeft
        const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth
        

        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX
            const newThumbPosition = thumbPosition + deltaX
            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition))
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft
            
            scrollbarThumb.style.left = `${boundedPosition}px`
            imageList.scrollLeft = scrollPosition
        }

        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove)
            document.removeEventListener("mouseup", handleMouseUp)
        }

        document.addEventListener("mousemove", handleMouseMove)
        document.addEventListener("mouseup", handleMouseUp)
    })

    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1
            const scrollAmount = imageList.clientWidth * direction
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" })
        })
    })

    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex"
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex"
    }

    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth)
        scrollbarThumb.style.left = `${thumbPosition}px`
    }

    imageList.addEventListener("scroll", () => {
        updateScrollThumbPosition()
        handleSlideButtons()
    })
}
window.addEventListener("resize", initSlider)
window.addEventListener("load", initSlider)

// Social media
const linkToInstagram = () => {
    window.location.href = "https://www.instagram.com/davinsoeleman/?hl=en"
}

// scroll horizontally
const container = document.querySelector(".slider-wrapper .image-list");
container.addEventListener("wheel", function (e) {
    if (e.deltaY > 0) {
        container.scrollLeft += 800;
        e.preventDefault();
    } else {
        container.scrollLeft -= 800;
        e.preventDefault();
    }
});

container.style.scrollBehavior = "smooth"

// section button

const sButton1 = () => {
    window.location.href = "women.html"
}

const sButton2 = () => {
    window.location.href = "men.html"
}

const sButton3 = () => {
    window.location.href = "accessories.html"
}
