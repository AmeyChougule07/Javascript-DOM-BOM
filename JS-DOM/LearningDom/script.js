// Example 1

document.getElementById("changeTextButton").addEventListener("click",function(){
  let paraValue = document.getElementById("myParagraph");
  paraValue.textContent = "This paragraph is changed";
})

// Example 2

document.getElementById("highlightFirstCity").addEventListener("click",function(){
  let firstChild = document.getElementById("citiesList").firstElementChild
  firstChild.classList.add("highlight");
})

// Example 3

document.getElementById("changeOrder").addEventListener("click",function(){
  let type = document.getElementById("coffeeType")
  type.textContent = "Espresso";
})

// Example 4

document.getElementById("addNewItem").addEventListener("click",function(){

  let newItem = document.createElement("li");
  newItem.textContent = "Oats";
  document.getElementById("shoppingList").appendChild(newItem);
})

// Example 5

document.getElementById("removeLastTask").addEventListener("click",function(){
  let list = document.getElementById("taskList");
  list.lastElementChild.remove();
})

// Example 6

document.getElementById("clickMeButton").addEventListener("click",function(){
  alert("Learning DOM manipualation and stuff");
})

// Example 7

document.getElementById("teaList").addEventListener("click",function(event){
  if (event.target && event.target.matches) {
    alert(`You selected: ${event.target.textContent}`)
  }
})


// Example 8

document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting normally

    let feedback = document.getElementById("feedbackInput").value;
    console.log(feedback);

    document.getElementById("feedbackDisplay").textContent = 
      `Feedback is: ${feedback}`;
  });

// Example 9

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("domStatus").textContent = "DOM is fully loaded";
});

//example 10
document
  .getElementById("toggleHighlight")
  .addEventListener("click", function () {
    let descriptionText = document.getElementById("descriptionText");
    descriptionText.classList.toggle("highlight");
});
