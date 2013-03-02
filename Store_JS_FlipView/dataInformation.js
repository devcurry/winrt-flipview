(function () {
    "use strict";

    //The JavaScript Array.

    var trainerArray = [
        { name: "Singapore 01", image: "images/SlideShow/1.jpg", description: "2012" },
        { name: "Singapore 02", image: "images/SlideShow/2.jpg", description: "2012" },
        { name: "Singapore 03", image: "images/SlideShow/3.jpg", description: "2012" },
        { name: "Singapore 04", image: "images/SlideShow/4.jpg", description: "2012" },
        { name: "Singapore 05", image: "images/SlideShow/5.jpg", description: "2012" },
        { name: "Singapore 06", image: "images/SlideShow/6.jpg", description: "2012" },
        { name: "Singapore 07", image: "images/SlideShow/7.jpg", description: "2012" },
        { name: "Singapore 08", image: "images/SlideShow/8.jpg", description: "2012" },
        { name: "Singapore 09", image: "images/SlideShow/9.jpg", description: "2012" },
        { name: "Singapore 10", image: "images/SlideShow/10.jpg", description: "2012" },
        { name: "Singapore 11", image: "images/SlideShow/11.jpg", description: "2012" },
        { name: "Singapore 12", image: "images/SlideShow/12.jpg", description: "2012" },
    ];
    //Define the List from the Array
    var trainersList = new WinJS.Binding.List(trainerArray); //This is the Private data

    //To expose Data publically, define namespace which defines
    //The object containing the Property-Value pair.
    //The property is the public name of the member and the value is variable which contains data

    var trainersInfo =
        {
            trList: trainersList
        };
    WinJS.Namespace.define("TrainersInformation", trainersInfo);

})();