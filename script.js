// Wait for the DOM to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function (event) {
  // General Variables
  // -----Overlay effect for dropdown menu-----
  const dropdownMenus = document.querySelectorAll(".dropdown-menu");

  // Select the nav-overlay element
  const navOverlay = document.querySelector(".nav-overlay");

  // Add event listeners to each dropdown-menu
  dropdownMenus.forEach((dropdown) => {
    dropdown.addEventListener("mouseenter", () => {
      navOverlay.classList.add("active");
    });

    dropdown.addEventListener("mouseleave", () => {
      navOverlay.classList.remove("active");
    });
  });

  // FEATURE: SEARCH POPOUT

  // Selecting multiple search buttons
  const searchBtns = document.querySelectorAll("#nav-search-btn");
  const searchOverlay = document.querySelector(".search-overlay");
  const searchContainer = document.querySelector(".search-container");
  const closeBtn = document.querySelector(".close-btn");

  // Add click event listener to each search button
  searchBtns.forEach((searchBtn) => {
    searchBtn.addEventListener("click", () => {
      searchOverlay.classList.add("active");
      searchContainer.classList.add("active");
    });
  });
  // Add click event listener to close button
  closeBtn.addEventListener("click", () => {
    searchOverlay.classList.remove("active");
    searchContainer.classList.remove("active");
  });

  // FEATURE: HAMBURGER MENU

  // FEATURE: HAMBURGER MENU

  const hamMenu = document.querySelector(".ham-menu");
  const sideMenu = document.querySelector(".side-menu");
  const menuOverlay = document.querySelector(".menu-overlay");
  const sdCloseBtn = document.querySelector(".side-close-btn");

  hamMenu.addEventListener("click", () => {
    sideMenu.classList.add("active");
    menuOverlay.classList.add("active");

    if (window.innerWidth <= 799) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 799) {
      sdCloseBtn.click();
    } else if (sideMenu.classList.contains("active")) {
      document.body.style.overflowY = "hidden";
    }
  });

  sdCloseBtn.addEventListener("click", () => {
    sideMenu.classList.remove("active");
    menuOverlay.classList.remove("active");
    document.body.style.overflowY = "auto";
  });

  const sidedownMenus = document.querySelectorAll(".sidedown-menu");
  const shiftingMenu = document.querySelector(".shifting");
  const backBtn = document.querySelector(".back-btn");

  sidedownMenus.forEach((sidedownMenu) => {
    sidedownMenu.addEventListener("click", () => {
      sidedownMenu.classList.add("active");
      backBtn.classList.add("active");
      shiftingMenu.style.overflowY = "hidden";
    });
  });

  backBtn.addEventListener("click", () => {
    sidedownMenus.forEach((sidedownMenu) => {
      sidedownMenu.classList.remove("active");
      backBtn.classList.remove("active");
      shiftingMenu.style.overflowY = "auto";
    });
  });

  // Dropside dapat kase
  const sdMenus = document.querySelectorAll(".sd-menu");

  sdMenus.forEach((sdMenu) => {
    sdMenu.addEventListener("click", () => {
      // Check if the clicked FAQ is already active
      const isActive = sdMenu.classList.contains("active");

      // Remove active class from all FAQs
      sdMenus.forEach((item) => {
        item.classList.remove("active");
      });

      // If the clicked FAQ was not active, activate it
      if (!isActive) {
        sdMenu.classList.add("active");
      }
    });
  });

  // HERO SLIDER

  let slider = document.querySelector(".slider .slides");
  let heroSlideItems = document.querySelectorAll(".slider .slides .slide");
  let slideNext = document.getElementById("next");
  let slidePrev = document.getElementById("prev");
  let dots = document.querySelectorAll(".slider .dots li"); // controls

  let lengthItems = heroSlideItems.length - 1;
  let active = 0;
  let refreshInterval = 6000;

  function startSlider() {
    refreshInterval = setInterval(() => {
      slideNext.click();
    }, 5000);
  }

  function stopSlider() {
    clearInterval(refreshInterval);
  }

  slideNext.onclick = function () {
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
  };

  slidePrev.onclick = function () {
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
  };

  function reloadSlider() {
    slider.style.left = -heroSlideItems[active].offsetLeft + "px";
    let last_active_dot = document.querySelector(".slider .dots li.active");
    last_active_dot.classList.remove("active");
    dots[active].classList.add("active");

    stopSlider();
    startSlider();
  }

  dots.forEach((li, key) => {
  li.addEventListener("mouseenter", () => {
    // Stop the slider when mouse enters the dot
    stopSlider();
  });

  li.addEventListener("mouseleave", () => {
    // Start the slider again when mouse leaves the dot
    startSlider();
  });

  li.addEventListener("click", () => {
    active = key;
    reloadSlider();

    // Stop the slider when a dot is clicked
    stopSlider();
  });
});


  window.onresize = function (event) {
    reloadSlider();
  };

  // Add mouseenter and mouseleave events
  slider.addEventListener("mouseenter", stopSlider);
  slider.addEventListener("mouseleave", startSlider);

  // Start the slider initially
  startSlider();

  function setupTabSwitching(sectionId) {
    const section = document.getElementById(sectionId);
    const tabBtns = section.querySelectorAll(".tab-btn");
    const allContent = section.querySelectorAll(".product-slide");

    tabBtns.forEach((tab, index) => {
      tab.addEventListener("click", (e) => {
        tabBtns.forEach((tab) => {
          tab.classList.remove("active");
        });
        tab.classList.add("active");

        allContent.forEach((content) => {
          content.classList.remove("active");
        });
        allContent[index].classList.add("active");
      });
    });

    const tabBox = section.querySelector(".tab-btns");

    const scrollAmount = 100; // Adjust this value to control how much it scrolls on each click

    tabBox.addEventListener("click", (e) => {
      const { clientWidth, scrollWidth, scrollLeft } = tabBox;
      const clickPosition = e.clientX - tabBox.getBoundingClientRect().left;
      const threshold = clientWidth * 0.45; // 45% of the tabBox width

      if (clickPosition >= clientWidth - threshold) {
        // Click is in the last 45%, scroll to the right
        const newScrollLeft = Math.min(
          scrollLeft + scrollAmount,
          scrollWidth - clientWidth
        );
        tabBox.scrollTo({ left: newScrollLeft, behavior: "smooth" });
      } else if (clickPosition <= threshold) {
        // Click is in the first 45%, scroll to the left
        const newScrollLeft = Math.max(scrollLeft - scrollAmount, 0);
        tabBox.scrollTo({ left: newScrollLeft, behavior: "smooth" });
      }
    });
  }

  // Initialize for different sections
  setupTabSwitching("featured");
  setupTabSwitching("mobile");
  setupTabSwitching("tvsounds");
  setupTabSwitching("home-app");

 
  class Slider {
    constructor(
      containerSelector,
      itemSelector,
      prevButtonSelector,
      nextButtonSelector
    ) {
      this.slideContainer = document.querySelector(containerSelector);
      this.slideItems = document.querySelectorAll(itemSelector);
      this.rPrev = document.querySelector(prevButtonSelector);
      this.rNext = document.querySelector(nextButtonSelector);

      this.slideItemCount = this.slideItems.length;
      this.slidesToShow;
      this.currentIndex = 0;

      this.updateSlidesToShow();
      this.updateSlider();
      this.updateButtonVisibility();

      this.rNext.onclick = this.moveToNextSlide.bind(this);
      this.rPrev.onclick = this.moveToPrevSlide.bind(this);
      this.slideContainer.addEventListener(
        "scroll",
        this.updateButtonVisibility.bind(this)
      );

      window.onresize = () => {
        this.updateSlidesToShow();
        this.updateSlider();
      };
    }

    updateButtonVisibility() {
      if (this.currentIndex === 0) {
        this.rPrev.style.display = "none";
      } else {
        this.rPrev.style.display = "block";
      }

      if (this.currentIndex >= this.slideItemCount - this.slidesToShow) {
        this.rNext.style.display = "none";
      } else {
        this.rNext.style.display = "block";
      }
    }

    updateSlidesToShow() {
      const screenWidth = window.innerWidth;
      if (screenWidth < 600) {
        this.slidesToShow = 2;
      } else if (screenWidth < 1024) {
        this.slidesToShow = 3;
      } else {
        this.slidesToShow = 4;
      }
    }

    getItemWidth() {
      const gap = parseFloat(
        window.getComputedStyle(this.slideContainer).columnGap || 0
      );
      return this.slideItems[0].offsetWidth + gap;
    }

    moveToNextSlide() {
      if (this.currentIndex < this.slideItemCount - this.slidesToShow) {
        this.currentIndex += 1;
      }
      this.updateSlider();
    }

    moveToPrevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex -= 1;
      }
      this.updateSlider();
    }

    updateSlider() {
      const itemWidth = this.getItemWidth();
      this.slideContainer.style.transform = `translateX(${
        -this.currentIndex * itemWidth
      }px)`;
      this.updateButtonVisibility();
    }
  }

  // Usage
  const slider1 = new Slider(
    ".slide-container",
    ".slide-item",
    "#r-prev",
    "#r-next"
  );
  // Add more sliders as needed
  const slider2 = new Slider(".ecards", ".e-card", "#eprev", "#enext");

  const slidesStory = document.querySelectorAll(".sty-slide");
  const dotsStory = document.querySelectorAll(".sdot");
  let currentSlide = 0;

  function updateActiveSlide(index) {
    slidesStory.forEach((slide, i) => {
      slide.style.transform = `translateX(-${index * 100}%)`;
      dots[i].classList.toggle("active", i === index);
    });
  }

  dotsStory.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      // Remove active class from all dots
      dotsStory.forEach((d) => d.classList.remove("active"));

      // Add active class to the clicked dot
      dot.classList.add("active");

      currentSlide = index;
      updateActiveSlide(currentSlide);
    });
  });

  // Initialize the first slide
  updateActiveSlide(currentSlide);

  // Color options

  document.querySelectorAll(".product-nav button").forEach((button) => {
    button.addEventListener("click", function () {
      // Remove active class from all buttons
      document
        .querySelectorAll(".product-nav button")
        .forEach((btn) => btn.classList.remove("active"));
      // Add active class to the clicked button
      this.classList.add("active");

      // Hide all images
      document
        .querySelectorAll(".product-img")
        .forEach((img) => img.classList.add("hide"));

      // Get the color from the clicked button and show the corresponding image
      const color = this.getAttribute("data-color");
      document.querySelector(`.product-img.${color}`).classList.remove("hide");

      // Update color text in the form
      document
        .querySelectorAll(".color-option span")
        .forEach((span) => span.classList.remove("active"));
      document
        .querySelector(`.color-option span[data-color="${color}"]`)
        .classList.add("active");
    });
  });

  // story

  const stitles = document.querySelectorAll(".stitle");
  const images = document.querySelectorAll(".si-img");
  let currentActive = document.querySelector(".stitle.active");
  let currentActiveIndex = Array.from(stitles).indexOf(currentActive);

  stitles.forEach((stitle, index) => {
    stitle.addEventListener("mouseenter", () => {
      if (currentActive !== stitle) {
        if (currentActive) {
          currentActive.classList.remove("active");
          toggleImageClass(currentActiveIndex, false);
        }
        stitle.classList.add("active");
        toggleImageClass(index, true);
        currentActive = stitle;
        currentActiveIndex = index;
      }
    });
  });

  function toggleImageClass(index, add) {
    if (add) {
      images[index].classList.add("active");
    } else {
      images[index].classList.remove("active");
    }
  }

  // Searchbarlast

  // Select all elements with class name .searchbarlast
const searchBars = document.querySelectorAll(".searchbarlast");

searchBars.forEach(searchBar => {
  const searchyInput = searchBar.querySelector(".searchy-input");
  const searchyCloseButton = searchBar.querySelector(".searchy-closebtn");
  const searchyButton = searchBar.querySelector(".searchy-btn");

  searchyInput.addEventListener("input", () => {
    if (searchyInput.value.length > 0) {
      searchyCloseButton.classList.remove("hide");
    } else {
      searchyCloseButton.classList.add("hide");
    }
  });

  searchyCloseButton.addEventListener("click", () => {
    searchyInput.value = "";
    searchyCloseButton.classList.add("hide");
  });

  const redirectToSearchPage = () => {
    const query = searchyInput.value.trim();
    if (query.length > 0) {
      // Replace `#` with your actual search page URL or logic
      window.location.href = `#`;
    }
  };

  searchyButton.addEventListener("click", redirectToSearchPage);

  searchyInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      redirectToSearchPage();
    }
  });
});


  // Footer dropdown

  const navDds = document.querySelectorAll(".navdd");

  navDds.forEach((navdd) => {
    navdd.addEventListener("click", () => {
      if (navdd.classList.contains("active")) {
        // If the clicked element is already active, remove the active class
        navdd.classList.remove("active");
      } else {
        // Remove 'active' class from all navdd elements
        navDds.forEach((navdd) => navdd.classList.remove("active"));

        // Add 'active' class to the clicked navdd element
        navdd.classList.add("active");
      }
    });
  });
});
