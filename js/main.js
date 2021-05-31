document.addEventListener("DOMContentLoaded", () => {
    new Glide(".glide", {
      type: "carousel",
      startAt: 0,
      animationTimingFunc: "ease-in-out",
      gap: 100,
      perView: 3
    }).mount();
  
    let prevBtn = document.getElementById("prev");
    let nextBtn = document.getElementById("next");
  
    let background = document.querySelector(".background");
    let indices = document.querySelectorAll(".index");
  
    let bgImgs = ["back.jpg", "shells.jpg", "taxi-cars.jpg", "stolbi.jpg", "clever-girls.jpg", "mega-fish.jpg", ];
  
    let currentIndex = 0;
  
    indices.forEach(index => index.classList.remove("active"));
    indices[currentIndex].classList.add("active");
  
    var myAnimation = new hoverEffect({
      parent: document.querySelector(".background"),
      intensity: 0.3,
      imagesRatio: 1080 / 1920,
      image1: `img/${bgImgs[0]}`,
      image2: `img/${bgImgs[1]}`,
      displacementImage: "img/14.jpg",
      hover: false
    });
  
    var myAnimation2 = new hoverEffect({
      parent: document.querySelector(".background"),
      intensity: 0.3,
      imagesRatio: 1080 / 1920,
      image1: `img/${bgImgs[1]}`,
      image2: `img/${bgImgs[2]}`,
      displacementImage: "img/14.jpg",
      hover: false
    });
  
    var myAnimation3 = new hoverEffect({
      parent: document.querySelector(".background"),
      intensity: 0.3,
      imagesRatio: 1080 / 1920,
      image1: `img/${bgImgs[2]}`,
      image2: `img/${bgImgs[3]}`,
      displacementImage: "img/14.jpg",
      hover: false
    });
  
    var myAnimation4 = new hoverEffect({
      parent: document.querySelector(".background"),
      intensity: 0.3,
      imagesRatio: 1080 / 1920,
      image1: `img/${bgImgs[3]}`,
      image2: `img/${bgImgs[4]}`,
      displacementImage: "img/14.jpg",
      hover: false
    });

    var myAnimation5 = new hoverEffect({
      parent: document.querySelector(".background"),
      intensity: 0.3,
      imagesRatio: 1080 / 1920,
      image1: `img/${bgImgs[4]}`,
      image2: `img/${bgImgs[5]}`,
      displacementImage: "img/14.jpg",
      hover: false
    });

    var myAnimation6 = new hoverEffect({
      parent: document.querySelector(".background"),
      intensity: 0.3,
      imagesRatio: 1080 / 1920,
      image1: `img/${bgImgs[5]}`,
      image2: `img/${bgImgs[0]}`,
      displacementImage: "img/14.jpg",
      hover: false
    });
  
    let distortAnimations = [
      myAnimation,
      myAnimation2,
      myAnimation3,
      myAnimation4,
      myAnimation5,
      myAnimation6,
    ];
  
    function startNextDistortAnimation() {
      let prevIndex = currentIndex;
      currentIndex = (currentIndex + 1) % 6;
      indices.forEach(index => index.classList.remove("active"));
      indices[currentIndex].classList.add("active");
      distortAnimations[prevIndex].next();
      showTextAnimation("next");
      setTimeout(() => {
        let canvas = background.querySelectorAll("canvas");
        background.appendChild(canvas[0]);
        distortAnimations[prevIndex].previous();
      }, 1200);
    }
  
    function startPrevDistortAnimation() {
      currentIndex = currentIndex - 1 < 0 ? 5 : currentIndex - 1;
      indices.forEach(index => index.classList.remove("active"));
      indices[currentIndex].classList.add("active");
      distortAnimations[currentIndex].next();
      showTextAnimation("prev");
      setTimeout(() => {
        let canvas = background.querySelectorAll("canvas");
        background.insertBefore(canvas[canvas.length - 1], background.firstChild);
        distortAnimations[currentIndex].previous();
      }, 500);
    }
  
    nextBtn.addEventListener("click", () => {
      startNextDistortAnimation();
    });
  
    prevBtn.addEventListener("click", () => {
      startPrevDistortAnimation();
    });
  
    let titleDisplacement = 0;
    let descriptionDisplacement = 0;
  
    function showTextAnimation(direction) {
      if (titleDisplacement === 0 && direction === "prev") {
        titleDisplacement = -900;
      } else if (titleDisplacement === -900 && direction === "next") {
        titleDisplacement = 0;
      } else {
        titleDisplacement =
          direction === "next"
            ? titleDisplacement - 180
            : titleDisplacement + 180;
      }
  
      if (descriptionDisplacement === 0 && direction === "prev") {
        descriptionDisplacement = -600;
      } 
      else if(descriptionDisplacement === -600 && direction === "next"){
        descriptionDisplacement = 0;
      }
      else {
        descriptionDisplacement =
          direction === "next" 
            ? descriptionDisplacement - 120
            : descriptionDisplacement + 120;
      }
  
      let title = document.querySelectorAll("#title h4");
      let description = document.querySelectorAll("#description p");
  
      title.forEach(title => {
        TweenMax.to(title, 1, {
          top: `${titleDisplacement}px`,
          ease: Strong.easeInOut
        });
      });
  
      description.forEach((description, index) => {
        let opacity = 0;
        if(index === currentIndex){
          opacity = 1;
        }else {
          opacity = 0;
        }
        TweenMax.to(description, 1, {
          top: `${descriptionDisplacement}px`,
          ease: Strong.easeInOut,
          opacity: opacity
        });
      })
    }
  });
  