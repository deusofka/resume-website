// Add smooth scrolling without delay to links in the header
$("header a, div.overlay a").on("click", function(event) {
  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 66
      },
      800,
      function() {
        // Add hash (#) to URL when done scrolling (default click behavior)
        // window.location.hash = hash;
      }
    );
  } // End if
});

$("main a").on("click", function(event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $("html, body")
      .delay(125)
      .animate(
        {
          scrollTop: $(hash).offset().top - 66
        },
        800,
        function() {}
      );
  }
});
