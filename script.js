// Wait for the DOM to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function () {
  // Select all elements with the class name 'dropdown-menu'
  const dropdownMenus = document.querySelectorAll(".dropdown-content");

  // Iterate over each 'dropdown-menu' element
  dropdownMenus.forEach((menu) => {
    // Get the number of child elements within the current 'dropdown-menu'
    const childCount = menu.children.length;

    // Set the grid-template-columns property dynamically
    // This creates a grid with a number of columns equal to the number of child elements
    // Each column will have a minimum width that fits its content (min-content)
    // and can expand to fill the available space equally (1fr)
    menu.style.gridTemplateColumns = `repeat(${childCount}, minmax(min-content, 1fr))`;
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
});
