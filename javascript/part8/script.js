//example-1 Accessing DOM Elements
document
  .getElementById("changeTextButton") //now i have a reference for this button;
  .addEventListener("click", function () {
    let para = document.getElementById("myParagraph");
    // console.log(para.textContent);
    para.textContent = "this is a changed paragraph!!";
  });

//example-2 Traversing the DOM
document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    let citiesList = document.getElementById("citiesList");
    citiesList.firstElementChild.classList.add("highlight");
  });

//example-3 Manipulating DOM Elements
document.getElementById("changeOrder").addEventListener("click", function () {
  let type = document.getElementById("coffeeType");
  type.textContent = "Espresso";
  type.classList.add("highlight");
  type.style.padding = "5px";
});

//example-4 Creating and Inserting Elements
document.getElementById("addNewItem").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "Eggs";
  document.getElementById("shoppingList").appendChild(newItem);
});

//example-5 Removing DOM Elements
document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    document.getElementById("taskList").lastElementChild.remove();
  });

//example 6
document
  .getElementById("clickMeButton")
  .addEventListener("dblclick", function () {
    alert("Dom Event Handling in Play!");
  });

//example 7
document.getElementById("teaList").addEventListener("click", function (event) {
  // console.log(event.target)
  if (event.target && event.target.matches(".teaItem")) {
    // alert(event.target.textContent);
    event.target.classList.add("highlight");
  }
});

//example 8
document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    // console.log(feedback);
    // document.getElementById("feedbackDisplay").textContent =
    //   "Form submitted successfully!";
    document.getElementById(
      "feedbackDisplay"
    ).textContent = `Feeback is: ${feedback}`;
    document.getElementById("feedbackDisplay").style.backgroundColor =
      "lightblue";
  });

//example 9
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent = "DOM loaded successfully";
});

//example 10;
document
  .getElementById("toggleHighlight")
  .addEventListener("click", function () {
    let descriptionText = document.getElementById("descriptionText");
    descriptionText.style.color = "green";
  });
