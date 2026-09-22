document.addEventListener("DOMContentLoaded", function() {
    var femaleImage = document.getElementById('female-image');
    var indulge = document.getElementById('indulge');
    var headline = document.getElementById('headline');
    var cta = document.getElementById('cta');
    var price = document.getElementById('price');
    var spotifyLogo = document.getElementById('spotify-logo');
    var replayButton = document.getElementById('replay-button');

    function animateFirstBatch() {
        femaleImage.style.opacity = 1;
        indulge.style.opacity = 1;
        indulge.style.left = '30px'; 
        femaleImage.style.display = 'block';
        indulge.style.display = 'block';

        setTimeout(function() {
            indulge.style.left = '-100px'; 
            femaleImage.style.opacity = 0;
            indulge.style.opacity = 0;

            setTimeout(function() {
                indulge.style.display = 'none';
                femaleImage.style.display = 'none';

                headline.style.display = 'block';
                setTimeout(function() {
                    headline.style.opacity = 1;
                    headline.style.left = '15px';

                    setTimeout(function() {
                        price.style.display = 'block';
                        price.style.opacity = 1;

                        setTimeout(function() {
                            cta.style.display = 'block';
                            cta.style.opacity = 1;

                            setTimeout(function() {
                                spotifyLogo.style.right = '0';
                                spotifyLogo.style.opacity = 1;

                                setTimeout(function() {
                                    replayButton.style.opacity = 1; 
                                    replayButton.addEventListener('click', resetAnimations); 
                                }, 1000); 
                            }, 500); 
                        }, 500); 
                    }, 500);
                }, 500); 
            }, 1000); 
        }, 2000); 
    }

    function resetAnimations() {
        var elementsToFadeOut = [headline, cta, price, spotifyLogo, replayButton];
        elementsToFadeOut.forEach(function(element) {
            element.style.transition = 'opacity 0.5s ease-in-out';
            element.style.opacity = 0;
        });

        femaleImage.style.opacity = 1;
        indulge.style.opacity = 1;
        indulge.style.left = '30px';

        setTimeout(function() {
            animateFirstBatch();
        }, 1000);
    }

    animateFirstBatch();
});