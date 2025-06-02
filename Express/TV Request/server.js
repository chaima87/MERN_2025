import express from "express"
import {tvShows} from './models/tv.model.js';

const app = express();
const port = 3000;

app.use(express.json());



// 🔹 GET all tvShow titles only
app.get("/tvshows/titles", (req, res) => {
  const titles = tvShows.map(show => show.tvShow);
  res.json(titles);
});

// 🔹 GET shows by year
app.get("/tvshows/year/:year", (req, res) => {
  const year = parseInt(req.params.year);
  const matches = tvShows.filter(show => show.yearCreated === year);
  res.json(matches);
});

// 🔹 DELETE by title
app.delete("/tvshows/title/:title", (req, res) => {
  const title = req.params.title.toLowerCase();
  const index = tvShows.findIndex(show => show.tvShow.toLowerCase() === title);
  if (index === -1) return res.status(404).json({ message: "Show not found" });

  tvShows.splice(index, 1);
  res.json(tvShows);
});

// 🔹 PATCH starring by title
app.patch("/tvshows/title/:title", (req, res) => {
  const { title } = req.params;
  const update = req.body;

  
  const show = tvShows.find(s => s.tvShow.toLowerCase() === title.toLowerCase());

  if (!show) {
    return res.status(404).json({ message: "Show not found" });
  }

  Object.assign(show, update);

  res.json({ message: "Show updated", data: show });
});

// 🔹 NINJA BONUS: POST your favorite show
app.post("/tvshows", (req, res) => {
  const { tvShow, yearCreated, genre, starring } = req.body;
  const newShow = {
    id: tvShows.length ? tvShows[tvShows.length - 1].id + 1 : 1,
    tvShow,
    yearCreated,
    genre,
    starring
  };
  tvShows.push(newShow);
  res.status(201).json(newShow);
});

// ✅ View all shows (check persistence after PUT/PATCH/DELETE)
app.get("/tvshows", (req, res) => {
  res.json(tvShows);
});


app.listen (port, ()=> console.log("listening on port:" + port))


// verify on Postmon:

// View all titles	                GET	          http://localhost:3000/tvshows/titles
// Get shows from 2016	            GET	          http://localhost:3000/tvshows/year/2016	
// Delete “The Office”	            DELETE	      http://localhost:3000/tvshows/title/The Office
// Update "You" starring	          PATCH	        http://localhost:3000/tvshows/title/You	{ "starring": ["New Actor"] }
// Add a new show	                  POST	        http://localhost:3000/tvshows	{ "tvShow": "My Show", "yearCreated": 2025, "genre": "Thriller", "starring": ["Me", "You"] }
// Confirm all shows after edits   	GET	          http://localhost:3000/tvshows