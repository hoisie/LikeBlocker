
blockers = [
    /platform.twitter.com\/widgets.js/,
    /twitter.com\/widgets\/tweet_button.html/,
    /linkedin.com\/analytics/,
    /platform.linkedin.com\/in.js/,
    /platform.linkedin.com\/js\/nonSecureAnonymousFramework/,
    /connect.facebook.net\/en_US\/all.js/,
    /facebook.com\/plugins\/like/,
    /plusone.google.com/,
    /googleapis.client__plusone.js/,
    /plusone.*png/,
    /sharethis.com/,
    /stumbleupon.com\/.*badge/,
    /cdn.stumble-upon.com/
]

document.addEventListener("beforeload", function(event) {
   for (var i = 0; i < blockers.length; i++) {
       var blocker = blockers[i];
        if (event.url.match(blocker)) {
            event.preventDefault();
            return false;
        }
    }
}, true);
