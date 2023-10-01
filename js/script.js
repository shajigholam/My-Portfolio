$(document).ready(function() {
    // Hide content initially
    $('#content').hide();

    // Show content after 3 seconds
    setTimeout(function() {
        $('#loading-overlay').fadeOut('slow', function() {
            // Animation complete, show the content
            $('#content').fadeIn('slow');
        });
    }, 3000);

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
                    <div class="card project-card shadow mb-1">
                        <div class="card-body">
                            <h3 class="card-title">${data["Project Name"]}</h3>
                            <p class="card-text">Description: ${data["Description"]}</p>
                            <p class="card-text">Technologies Used: ${data["Technologies Used"]}</p>
                            <a href="${data.gitlink}" class="github-link"><i class="fab fa-github"></i> GitHub Repository</a><br/>
                            <a href="${data.livedemolink}" class=""><i class="fas fa-link"></i> Live Demo</a>
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
    
    $('a.email-link').click(function(e) {
        e.preventDefault(); // Prevent the default behavior of the link
        var email = 'shajigholam@myseneca.ca';
        var mailtoLink = 'mailto:' + email;
        var popupWidth = 600;
        var popupHeight = 400;
        
        // Open the email link in a pop-up window
        window.open(mailtoLink, 'EmailPopup', 'width=' + popupWidth + ',height=' + popupHeight);
    });
});
