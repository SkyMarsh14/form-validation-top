const dropdownBtn = document.querySelector(".dropdownBtn");
const dropdownContent = document.querySelector(".dropdown-content");
export default function toggleVisible() {
  dropdownBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdownContent.classList.toggle("visible");
  });
  hideDropdownOnWindowClick();
}

function hideDropdownOnWindowClick() {
  document.addEventListener(
    "click",
    () =>
      dropdownContent.classList.contains("visible") &&
      dropdownContent.classList.remove("visible"),
  );
}
