//This is the javascript, when user click on navigation links then the visit to that section and background-color of nevigation link is changed. 
// Select all section links in the navbar
const sectionLinks = document.querySelectorAll(".sectionlinks");

// Loop through each section link and add click event listener
sectionLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        // Remove yellow background color from all section links
        sectionLinks.forEach(function(link) {
            link.style.backgroundColor = "";
            link.style.color = "";
        });

        // Change background color of the clicked section link to yellow
        this.style.backgroundColor = "#fca311";
        this.style.color = "#000";
    });
});

//JavaScript function to achieve Reach on top when button click.

function goToTop() {
    window.scrollTo(0, 0);
}


// calling this function on the element where you want the click action to trigger it.
document.getElementById("goToTopButton").addEventListener("click", goToTop);


// when user click any link taggle menu get Dissappear
    document.querySelectorAll('.sectionlinks').forEach(item => {
        item.addEventListener('click', () => {
            document.getElementById('toggler').checked = false;
        });
    });


