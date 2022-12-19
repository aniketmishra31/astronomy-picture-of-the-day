const api = "https://api.nasa.gov/planetary/apod?api_key=KM9dvO13B52sQON558QFuabexB86SCdWWsVceRi9";

fetch(api)
  .then((data) => data.json())
  .then((apotdContent) => {

    // extracting useful resources from api
    const title = apotdContent.title;
    const potd = apotdContent.hdurl;
    const dateAndTime = apotdContent.date;
    const explain = apotdContent.explanation;
    const copy = apotdContent.copyright;

    // Querying all the target elememts to be changed 
    const titleEle = document.querySelector("#title");
    const potdImg = document.querySelector("#potd");
    const dateEle = document.querySelector("#date");
    const expEle = document.querySelector("#explanation");
    const copyEle = document.querySelector("#copyright");

    // Updating the elements
    titleEle.innerHTML = title;
    potdImg.src = potd;
    dateEle.innerHTML = "Date: " + dateAndTime;
    expEle.innerHTML = explain;
    copyEle.innerHTML = "Credits: " + copy;
  });