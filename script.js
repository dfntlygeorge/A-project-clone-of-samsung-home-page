// Wait for the DOM to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function () {
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

  const hamMenu = document.querySelector(".ham-menu");
  const sideMenu = document.querySelector(".side-menu");
  const menuOverlay = document.querySelector(".menu-overlay");
  const sdCloseBtn = document.querySelector(".side-close-btn");

  hamMenu.addEventListener("click", () => {
    sideMenu.classList.add("active");
    menuOverlay.classList.add("active");
    this.body.style.overflowY = "hidden";
  });
  sdCloseBtn.addEventListener("click", () => {
    sideMenu.classList.remove("active");
    menuOverlay.classList.remove("active");
    this.body.style.overflowY = "auto";
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
      shiftingMenu.style.overflowY = "scroll";
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

  // FEATURE: Hero Slider

  // let slider = document.querySelector(".slider .slides");
  // let slideItems = document.querySelectorAll(".slider .slides .slide");
  // let slideNext = document.getElementById("next");
  // let slidePrev = document.getElementById("prev");
  // let dots = document.querySelectorAll(".slider .dots li");

  // let lengthItems = slideItems.length - 1;
  // let active = 0;

  // slideNext.onclick = function () {
  //   active = active + 1 <= lengthItems ? active + 1 : 0;
  //   reloadSlider();
  // };
  // slidePrev.onclick = function () {
  //   active = active - 1 >= 0 ? active - 1 : lengthItems;
  //   reloadSlider();
  // };
  // let refreshInterval = setInterval(() => {
  //   slideNext.click();
  // }, 3000);
  // function reloadSlider() {
  //   slider.style.left = -slideItems[active].offsetLeft + "px";
  //   //
  //   let last_active_dot = document.querySelector(".slider .dots li.active");
  //   last_active_dot.classList.remove("active");
  //   dots[active].classList.add("active");

  //   clearInterval(refreshInterval);
  //   refreshInterval = setInterval(() => {
  //     slideNext.click();
  //   }, 5000);
  // }

  // dots.forEach((li, key) => {
  //   li.addEventListener("click", () => {
  //     active = key;
  //     reloadSlider();
  //   });
  // });
  // window.onresize = function (event) {
  //   reloadSlider();
  // };

  // GPT CODE

  let slider = document.querySelector(".slider .slides");
  let slideItems = document.querySelectorAll(".slider .slides .slide");
  let slideNext = document.getElementById("next");
  let slidePrev = document.getElementById("prev");
  let dots = document.querySelectorAll(".slider .dots li"); // controls

  let lengthItems = slideItems.length - 1;
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
    slider.style.left = -slideItems[active].offsetLeft + "px";
    let last_active_dot = document.querySelector(".slider .dots li.active");
    last_active_dot.classList.remove("active");
    dots[active].classList.add("active");

    stopSlider();
    startSlider();
  }

  dots.forEach((li, key) => {
    li.addEventListener("click", () => {
      active = key;
      reloadSlider();
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

  // Samsung exclusive slider
  const ecContainer = document.querySelector(".ecards");
  const eprev = document.querySelector(".eprev");
  const enext = document.querySelector(".enext");
  const eScrollAmount = 400;

  function updateButtonVisibility() {
    // Check if there's room to scroll left
    if (ecContainer.scrollLeft === 0) {
      eprev.style.display = "none";
    } else {
      eprev.style.display = "block";
    }

    // Check if there's room to scroll right
    if (
      ecContainer.scrollLeft + ecContainer.clientWidth >=
      ecContainer.scrollWidth
    ) {
      enext.style.display = "none";
    } else {
      enext.style.display = "block";
    }
  }

  // Initial check to set the button visibility on page load
  updateButtonVisibility();

  eprev.addEventListener("click", () => {
    ecContainer.scrollBy({
      top: 0,
      left: -eScrollAmount,
      behavior: "smooth",
    });
    setTimeout(updateButtonVisibility, 300);
  });

  enext.addEventListener("click", () => {
    ecContainer.scrollBy({
      top: 0,
      left: eScrollAmount,
      behavior: "smooth",
    });
    setTimeout(updateButtonVisibility, 300);
  });

  ecContainer.addEventListener("scroll", updateButtonVisibility);

  //-----TO BE DELETED-----
  // Get all the dropdown menus
  // const ddMenus = document.querySelectorAll(".dropdown-menu");

  // // Add mouseenter and mouseleave event listeners to each dropdown menu
  // ddMenus.forEach((ddMenu) => {
  //   ddMenu.addEventListener("mouseenter", () => {
  //     // Add "active" class when mouse enters the dropdown menu
  //     ddMenu.classList.add("active");
  //   });

  //   ddMenu.addEventListener("mouseleave", () => {
  //     // Remove "active" class when mouse leaves the dropdown menu
  //     ddMenu.classList.remove("active");
  //   });
  // });

  // // Select all elements with the class name 'dropdown-menu'
  // const dropdownMenus = document.querySelectorAll(".dropdown-content");

  // // Iterate over each 'dropdown-menu' element
  // dropdownMenus.forEach((menu) => {
  //   // Get the number of child elements within the current 'dropdown-menu'
  //   const childCount = menu.children.length;

  //   // Set the grid-template-columns property dynamically
  //   // This creates a grid with a number of columns equal to the number of child elements
  //   // Each column will have a minimum width that fits its content (min-content)
  //   // and can expand to fill the available space equally (1fr)
  //   menu.style.gridTemplateColumns = `repeat(${childCount}, minmax(min-content, 1fr))`;
  // });
});
