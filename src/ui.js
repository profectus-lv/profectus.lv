const slideLeftSidebar = () => {
    const elSidebar = document.getElementById("sidebar");
    const elRightArea = document.getElementById("right-area");
    elSidebar.classList.toggle("-translate-x-60");
    elSidebar.classList.toggle("translate-x-0");
    elRightArea.classList.toggle("translate-x-60");
};

export { slideLeftSidebar };
