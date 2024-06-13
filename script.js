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
  });
  sdCloseBtn.addEventListener("click", () => {
    sideMenu.classList.remove("active");
    menuOverlay.classList.remove("active");
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
