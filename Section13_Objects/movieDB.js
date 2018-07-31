var movies = [
	{
		title: "Phantom Menace",
		hasWatched: true,
		rating: 1
	},
	{
		title: "Frozen",
		hasWatched: false,
		rating: 4.5
	},
	{
		title: "Hackers",
		hasWatched: true,
		rating: 5
	}
]
movies.forEach(function(movie){
	var result = "You have ";
	if (movie.hasWatched) {
		result += "watched ";
	}
	else {
		result += "not seen "
	}
	result += movie.title + " - " + movie.rating + " stars"
	console.log(result);
});