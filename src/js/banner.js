        let slideIndex = 0;
        let myTimeout;
        showSlides();

        function showSlides() {
            let i;
            let slides = document.getElementsByClassName("banner");
            let myTimeout = setTimeout(showSlides, 2000);

            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
            }
            slideIndex++;
            if (slideIndex > slides.length) {slideIndex = 1}
            slides[slideIndex-1].style.display = "block";
            myTimeout;
            }
