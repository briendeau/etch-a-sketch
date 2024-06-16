const container = document.getElementById("container");
const button = document.querySelector("button");

// Function to create a grid with specified size
function makeGrid(gridSize = 16) {
  container.innerHTML = ""; // Clear existing grid before creating a new one

  // Calculate individual square size based on container width
  const containerWidth = container.clientWidth;
  const squareSize = Math.floor(containerWidth / gridSize);

  // Create grid container with Flexbox layout for wrapping squares
  container.style.display = "flex";
  container.style.flexWrap = "wrap";

  // Generate squares and apply styles
  for (let i = 0; i < gridSize * gridSize; i++) {
    const squareDiv = document.createElement("div");
    squareDiv.classList.add("square"); // Add class for styling (CSS)

    // Set square size dynamically using template literals
    squareDiv.style.width = `${squareSize}px`;
    squareDiv.style.height = `${squareSize}px`;

    // Add hover effect using box-sizing for consistent rendering
    squareDiv.style.boxSizing = "border-box"; // Ensure border is included in width/height
    squareDiv.addEventListener("mouseover", () => {
      let red = Math.floor(Math.random() * 256);
      let green = Math.floor(Math.random() * 256);
      let blue = Math.floor(Math.random() * 256);
      squareDiv.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`; // Change background color on hover
    });

    // Add optional border for better visibility
    // squareDiv.style.border = "1px solid lightgray";

    container.appendChild(squareDiv);
  }
}

// Event listener for button click (prompt for new grid size)
button.addEventListener("click", () => {
  let newSize = prompt("Enter number of squares per side (max 100):");
  if (newSize > 100) {
    newSize = prompt("Enter number of squares per side (max 100):");
  }
  makeGrid(newSize);
});

// Call makeGrid to create initial 16x16 grid on page load
makeGrid();
