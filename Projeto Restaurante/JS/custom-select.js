
const customSelects = document.querySelectorAll(".custom-select");

customSelects.forEach((customSelect) => {
    
    const selectBtn = customSelect.querySelector(".select-button");

    const selectedValue = customSelect.querySelector(".selected-value");
    const optionsList = customSelect.querySelectorAll(".select-dropdown li");

    // add click event to select button
    selectBtn.addEventListener("click", () => {
    // add/remove active class on the container element
    customSelect.classList.toggle("active");
    // update the aria-expanded attribute based on the current state
    selectBtn.setAttribute(
        "aria-expanded",
        selectBtn.getAttribute("aria-expanded") === "true" ? "false" : "true"
    );
    });

    optionsList.forEach((option) => {
        function handler(e) {
          e.preventDefault();
      
          // Click Events
          if (e.type === "click" && e.clientX !== 0 && e.clientY !== 0) {
            selectedValue.textContent = this.children[1].textContent;
            customSelect.classList.remove("active");
            console.log(e.target.control.value);      
          }
          // Key Events
          if (e.key === "Enter") {
            selectedValue.textContent = this.textContent;
            customSelect.classList.remove("active");
            console.log(e.target.value);
          }
        }
      
        option.addEventListener("keyup", handler);
        option.addEventListener("click", handler);
      });
    

});
