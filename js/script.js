$(document).ready(function() {

    $('#content').fadeIn('slow');

    var spanContainer = $(".skills");
    var spanItems = spanContainer.children("span");
    var currentIndex = 0;

    // Function to add bold and bigger style to a span
    function setBoldAndBiggerStyle(span) {
        span.css({
            "color": "black"
        });
    }

    // Function to reset the style of all spans
    function resetStyle() {
        spanItems.css({
            "color": "#c6c6c6"
        });
    }

    // Rotate through the spans and apply the bold and bigger style
    function rotateSpans() {
        resetStyle();

        var currentSpan = spanItems.eq(currentIndex);
        setBoldAndBiggerStyle(currentSpan);

        currentIndex = (currentIndex + 1) % spanItems.length;
    }

    // Call the rotateSpans function every 1000 seconds
    setInterval(rotateSpans, 1000);

    // Make an AJAX request to load the JSON file
    $.getJSON('./js/projects.json', function(data) {
        // Function to generate a project card from project data
        function generateProjectCard(data) {
            var card = `
                <div class="col-md-4">
                    <div class=" p-2 shadow mb-5 h-100">
                        <h3 class="card-header bold text-white bg-primary">${data["Project Name"]}</h3>
                        <div class="card-body">
                        <img class="d-block user-select-none" width="100%" height="100%" src=${data["image"]} alt=""><br>
                            <h5 class="card-title">Description: </h5>
                            <p class="card-text"> ${data["Description"]}</p>
                            <h5 class="card-title">Technologies Used: </h5>
                            <p class="card-text">${data["Technologies Used"]}</p>
                            <a href="${data.gitlink}" target="_blank class="card-link github-link"><i class="fab fa-github"></i> GitHub Repository</a><br/>
                            ${data.livedemolink ? `<a href="${data.livedemolink}" target="_blank class="card-link"><i class="fas fa-link"></i> Live Demo</a>` : ''}
                        </div>
                    </div>
                </div>
            `;
            return card;
        }

        // Loop through the loaded JSON data and append project cards to the project container
        for (var i = 0; i < data.length; i++) {
            $("#project-container").append(generateProjectCard(data[i]));
        }
    });

    // $('#email-link').click(function(e) {
    //     e.preventDefault(); // Prevent the default behavior of the link
    //     var email = 'shajigholam@myseneca.ca';
    //     var mailtoLink = 'mailto:' + email;
    //     var popupWidth = 600;
    //     var popupHeight = 400;
        
    //     // Open the email link in a pop-up window
    //     window.open(mailtoLink, 'EmailPopup', 'width=' + popupWidth + ',height=' + popupHeight);
    // });
});
// Configuring typing animation
var typed = new Typed(".auto-type", {
    strings: ['Software Developer.', 'Web Developer.', 'Computer Science Enthusiast.'],
    typeSpeed: 40,
    backSpeed: 50,
    loop: true,
    showCursor: false
});
