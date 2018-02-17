console.log("script loaded");
let numbers = [1, 2, 3, 4];
let newNumbers = [];

for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 !== 0) {
        newNumbers[i] = numbers[i] * 2;
    }
}

console.log("The doubled numbers are", newNumbers);




let oddNumbers = numbers.filter(x=>x%2!==0);
doubledOddNumbers=oddNumbers.map(x=>x*2);
console.log(doubledOddNumbers);



function fetchJsonData(url, callBackFunction) {
    const request = new XMLHttpRequest();
    request.addEventListener('load', function() {
        callBackFunction(JSON.parse(request.responseText));
    });

    request.open('get', url);
    request.send();
}
const resultHolder = document.querySelector("ul");
const totalAverage = document.querySelector("#movieAverage");
const goodMovies = document.querySelector("#goodMovies");
fetchJsonData("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json", function(jsonData) {
    console.log(jsonData);
    movies=jsonData;
    let arrRatings = [];
        for (let i = 0; i < movies.length; i++) {
            arrRatings.push(movies[i].rating);
        }
        totalAverage.addEventListener("click",function(){
            let totalRating = document.getElementById("total");
let averageRating = arrRatings.reduce((total, rating) => total + rating) / arrRatings.length;
console.log(averageRating);

       totalRating.innerHTML = "Average movie rating is " + averageRating.toFixed(2);
        });
// count of good movies
goodMovies.addEventListener("click",function(){
    let goodRating = document.getElementById("gmovies");
let goodMoviesCount = 0;
        movies.reduce((total,rating) => {
            return goodMoviesCount = total + (rating.rating >= 7);        
        },0);
        console.log(goodMoviesCount);
        gmovies.innerHTML = "There are " + goodMoviesCount+ ' good movies.';
    });
    averageMovies.addEventListener("click",function(){
        let average = document.getElementById("average");
        let averageMoviesCount = 0;
        movies.reduce((acc,value) => {
           return averageMoviesCount = acc + (value.rating >= 4 && value.rating <7);
        },0);

console.log(averageMoviesCount);
average.innerHTML = "Average movie count is " + averageMoviesCount;
    });

    badMovies.addEventListener("click",function(){
        let average = document.getElementById("bMovies");
let badMoviesCount = 0;
        movies.reduce((acc,value) => {
            return badMoviesCount = acc + (value.rating < 4);
        },0);
        console.log(badMoviesCount);
        bMovies.innerHTML = "There are " + badMoviesCount +' bad movies';
    });

    searching.addEventListener("click",function(){
        let average = document.getElementById("searchMovies");
        let keyWords = ["The", "dog", "who", "is", "not", "a", "man"];
        const searching = movies.filter((movieTitle)=>{
            const moviesTitle = movieTitle.title.split(/[^\w]/);
            return keyWords.some(keyWord => moviesTitle.includes(keyWord));
        });
        console.log(searching.length); 
        searchMovies.innerHTML = "There are " + searching.length +' count of keywords: ["The", "dog", "who", "is", "not", "a", "man"]';
    });

    oldMoviesbtn.addEventListener("click",function(){
        let average = document.getElementById("oldMovies");
        let oldMoviesCount = 0;
        movies.reduce((acc,count) => {
            return oldMoviesCount = acc + (count.year >= 1980 && count.year <= 1989);
        },0);
        console.log(oldMoviesCount); 
        oldMovies.innerHTML = "There are " + oldMoviesCount +' bad movies.';
    });
});
