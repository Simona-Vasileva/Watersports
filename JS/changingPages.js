(function () {

    let homePage = document.getElementById("homePage");
    let coursesPage = document.getElementById("coursesPage");
    let pricesAndPackagesPage = document.getElementById("pricesAndPackagesPage");
    let aboutUsPage = document.getElementById("aboutUsPage");
    let reviewsPage = document.getElementById("reviews");



    let handleHashChange = function () {
        let hash = location.hash.slice(1);
        switch (hash) {
            case "home":
                homePage.style.display = "block";
                coursesPage.style.display = "none";
                pricesAndPackagesPage.style.display = "none";
                aboutUsPage.style.display = "none";
                cartPage.style.display = "none";
                reviewsPage.style.display = "none";
                break;

            case "courses":
                homePage.style.display = "none";
                coursesPage.style.display = "block";
                pricesAndPackagesPage.style.display = "none";
                aboutUsPage.style.display = "none";
                cartPage.style.display = "none";
                reviewsPage.style.display = "none";
                break;

            case "prices":
                homePage.style.display = "none";
                coursesPage.style.display = "none";
                pricesAndPackagesPage.style.display = "block";
                aboutUsPage.style.display = "none";
                cartPage.style.display = "none";
                reviewsPage.style.display = "none";
                break;

            case "about":
                homePage.style.display = "none";
                coursesPage.style.display = "none";
                pricesAndPackagesPage.style.display = "none";
                aboutUsPage.style.display = "block";
                cartPage.style.display = "none";
                reviewsPage.style.display = "none";
                break;

            case "cart":
                homePage.style.display = "none";
                coursesPage.style.display = "none";
                pricesAndPackagesPage.style.display = "none";
                aboutUsPage.style.display = "none";
                cartPage.style.display = "block";
                reviewsPage.style.display = "none";
                break;

            case "reviews":
                homePage.style.display = "none";
                coursesPage.style.display = "none";
                pricesAndPackagesPage.style.display = "none";
                aboutUsPage.style.display = "none";
                cartPage.style.display = "none";
                reviewsPage.style.display = "block";
                break;
            default:
                homePage.style.display = "block";
                coursesPage.style.display = "none";
                pricesAndPackagesPage.style.display = "none";
                aboutUsPage.style.display = "none";
                cartPage.style.display = "none";
                reviewsPage.style.display = "none";
                break;
        }
    }

    window.addEventListener("load", handleHashChange);
    window.addEventListener("hashchange", handleHashChange);



})();