//your code here!

document.addEventListener("DOMContentLoaded", function () {
  const list = document.getElementById("infi-list");
  
  // Function to add a specified number of list items
  function addItems(count) {
    for (let i = 0; i < count; i++) {
      const li = document.createElement("li");
      li.textContent = `List Item ${list.children.length + 1}`;
      list.appendChild(li);
    }
  }

  // Add 10 list items by default
  addItems(10);

  // Function to handle scroll events
  function handleScroll() {
    if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
      // If user reaches the end of the list, add 2 more list items
      
    }
  }

  // Event listener for scroll
  list.addEventListener("scroll", handleScroll);
});
