const imageArray = [
	"https://m.media-amazon.com/images/M/MV5BOWY4ZGM4MWEtOTYxMC00OWE4LTllNWMtYzNjNWIxMTFlYjliXkEyXkFqcGdeQXVyMjg4MDY0MDM@._V1_.jpg",
	"https://m.media-amazon.com/images/M/MV5BMTFmNTI1NGQtYTg1MS00MTg2LWI2NGMtNzdhMTk0OTk1MmZhXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg",
	"https://m.media-amazon.com/images/M/MV5BZGMxYmI2MDAtMjZlMC00YjQyLTljNGYtOGI0YmMwOGE3YWNiXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg",
	"https://pics.filmaffinity.com/Blood_Red_Sky-418181225-large.jpg",
	"https://dreamparkcinemas.com/wp-content/uploads/2021/06/The_Suicide_Squad_Theatrical_Poster-scaled.jpeg",
	"https://m.media-amazon.com/images/M/MV5BYjI3NDg0ZTEtMDEwYS00YWMyLThjYjktMTNlM2NmYjc1OGRiXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
	"https://m.media-amazon.com/images/M/MV5BNGY0NzgzYzctYWQwMC00MzM2LThjNGMtZjFjMWUyNzg0ZmM0XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
	"https://i.redd.it/ajgmd6mdfv271.jpg",
	"https://lh3.googleusercontent.com/proxy/0l4BVpdyJhRNqsnWZ5oasYkRB7CH8JBWHfYr_7p2KJFSIbA-qbU673oEq-Lk043hbcgrooPz0sFhRi3xZSKDRV1kX4uluwarzyaQ",
	"https://m.media-amazon.com/images/M/MV5BOTNjM2Y2ZjgtMDc5NS00MDQ1LTgyNGYtYzYwMTAyNWQwYTMyXkEyXkFqcGdeQXVyMjE4NzUxNDA@._V1_.jpg",
	"https://images.moviesanywhere.com/2b00469fe1009fc7cafaaa50017424b8/9293c194-c954-4a39-83a3-bebb797a13fe.jpg",
	"https://m.media-amazon.com/images/M/MV5BYzc1NjgwNWMtYTBkOS00NmNiLWE3MzktNTgyMGExZDljNjVhXkEyXkFqcGdeQXVyODQwOTA4MDg@._V1_.jpg",
	"https://m.media-amazon.com/images/M/MV5BMzk2ZmYxNTUtODlhMi00NzE2LTkwMTctYjg0ODQ1ZjkyNzJmXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
	"https://musicart.xboxlive.com/7/b87e5100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080",
	"https://m.media-amazon.com/images/M/MV5BZjAzNTI1NGMtMzgzYS00YjVjLWJiYjUtNTRmZDg3ZjNhZGFiXkEyXkFqcGdeQXVyMjUxMTY3ODM@._V1_.jpg",
	"https://m.media-amazon.com/images/M/MV5BNDVhMGNhYjEtMDkwZi00NmQ5LWFkODktYzhiYjY2NTZmYTNhXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
	"https://m.media-amazon.com/images/M/MV5BYzg0NGM2NjAtNmIxOC00MDJmLTg5ZmYtYzM0MTE4NWE2NzlhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
	"https://m.media-amazon.com/images/M/MV5BMTk4NjM0MjI3MV5BMl5BanBnXkFtZTcwNjcxMDYzNg@@._V1_.jpg",
    "https://m.media-amazon.com/images/M/MV5BYTcxYTk3MWQtZThlMS00ZjQ0LTg0NjktNGVkNWM2MTAyYWJmXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
	"https://m.media-amazon.com/images/M/MV5BMjJiYjdjNWEtODNiMS00MTBiLWE4NTAtNGNjMDgxZWQzMTgyXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
	"https://image.tmdb.org/t/p/original/jeNTqOnux7KSulznSh4UdiDlfmV.jpg",
	"https://m.media-amazon.com/images/M/MV5BMTE2ODU4NDEtNmRjNS00OTk1LTg4NmMtNTAzYzVlNzJmYjgzXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
	"https://m.media-amazon.com/images/M/MV5BNGQ2MGQ1ZGQtOTY4MS00ZDA5LWE5YmUtMGE0YTE2YTZiODZkXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_.jpg",
	"https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
	"https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_.jpg",
	"https://m.media-amazon.com/images/M/MV5BZmRhYjIwNmItNzg2Ny00MWMwLWIyMTItMmZkYmM0ODEwOTEyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
	"https://m.media-amazon.com/images/M/MV5BMTkyMzI2MzQ1N15BMl5BanBnXkFtZTgwNDg0MzQxNzE@._V1_.jpg",
    "http://www.popoptiq.com/wp-content/uploads/2012/09/tumblr_ma7g7pY11C1qzdglao1_r3_500.jpg",
	"https://cdn.shopify.com/s/files/1/0969/9128/products/Call_Me_By_Your_Name_-_Hollywood_Movie_Poster_f42a1f8a-a9c0-4fef-b132-d6fe5d862244.jpg?v=1548766737",
	"https://m.media-amazon.com/images/M/MV5BZGU4NmJmMjAtOWVlYi00NzkzLTg2MTQtOGIxODdkZTk2MDU0L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTM5MzI2MDI@._V1_.jpg",
	"https://m.media-amazon.com/images/M/MV5BODgwNDJjMDktNDI3Yy00NDk4LThhODItMDUyNDIyOGU2YjVlXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
	"https://www.joblo.com/assets/images/oldsite/posters/images/full/me_and_earl_and_the_dying_girl.jpg",
	"https://m.media-amazon.com/images/M/MV5BNDA4Mjc0MGMtYmZmYS00YmU4LTk3NzItMDM3NjczYTk3ZDA3XkEyXkFqcGdeQXVyNjg0ODE1ODE@._V1_.jpg",
	"https://m.media-amazon.com/images/I/515fecyh9IL.jpg",
	"https://m.media-amazon.com/images/M/MV5BNzAxYmQzYmYtYjEzYS00ZTFkLWE3NjUtODhjOTQzM2U5ZWI1XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
    "https://m.media-amazon.com/images/M/MV5BMjAwOTA0MDk2OV5BMl5BanBnXkFtZTcwNDg3MzUzMQ@@._V1_FMjpg_UX1000_.jpg",
	"https://m.media-amazon.com/images/M/MV5BNWY4N2ViZDAtMGU0MS00NDliLWE1NjktN2UyNGEyZjA0YzNhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
	"https://m.media-amazon.com/images/M/MV5BMTk5NTEwMzI5OV5BMl5BanBnXkFtZTgwMDQ4ODUwMDE@._V1_.jpg",
    "https://wipfilms.net/wp-content/uploads/2013/03/Oedipus_Rex_AKA_Edipo_re_1967.jpg",
	"https://m.media-amazon.com/images/M/MV5BMjg5ODY2MzcwMF5BMl5BanBnXkFtZTcwODEwNjQ3OQ@@._V1_.jpg",
	"https://m.media-amazon.com/images/M/MV5BZjU3Zjg1MjgtOGEyNS00ZmYxLThlYmItZGY2Mjg1NzJkNTgyXkEyXkFqcGdeQXVyMzg4NDU4OQ@@._V1_.jpg",
    "https://m.media-amazon.com/images/M/MV5BOTFmNDA3ZjMtN2Y0MC00NDYyLWFlY2UtNTQ4OTQxMmY1NmVjXkEyXkFqcGdeQXVyNTg4NDQ4NDY@._V1_.jpg",
	"https://m.media-amazon.com/images/M/MV5BMTM3NzQzMDA5Ml5BMl5BanBnXkFtZTcwODA5NTcyNw@@._V1_.jpg",
    "https://s3.amazonaws.com/criterion-production/films/2b3cb1e242f75f984a61305a512a8417/0IZ7RI0ApmwUqfotR9mOZmFlhsHjvo_original.jpg",
	"https://pics.filmaffinity.com/Close_up-179516308-large.jpg",
    "https://m.media-amazon.com/images/M/MV5BMTMzOTU5NTA0OV5BMl5BanBnXkFtZTcwMjM4ODE0Nw@@._V1_.jpg",
	"https://m.media-amazon.com/images/M/MV5BOTZmMWFhYmQtZDE5YS00YzBlLWJlOGEtYzAwNGU1YzVlYjZlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    "https://icantunseethatmovie.com/wp-content/uploads/2018/05/missionimpossible6_poster.jpg",
    "https://m.media-amazon.com/images/M/MV5BZGNhYTA1ODMtY2M5Yy00MTYwLWFlZmEtNDM4M2I4ZTI2ZmVmXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
	"https://pics.filmaffinity.com/Her-716403893-large.jpg",
    "https://m.media-amazon.com/images/I/61yMI3vSgfL._AC_SY679_.jpg",
	"https://blackgirlnerds.com/wp-content/uploads/2021/06/image002-15.jpg"
];

const image = document.querySelector("img");
const button = document.querySelector("button");

window.onload = () => generateRandomPicture(imageArray);

button.addEventListener("click", () => generateRandomPicture(imageArray));

function generateRandomPicture(array)
{
	let randomNum = Math.floor(Math.random() * array.length); 
	image.setAttribute("src", array[randomNum]);
}