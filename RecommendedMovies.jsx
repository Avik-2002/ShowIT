import React from "react";

// Import local images
import JaatImg from "../assets/jaat.jpg";
import kilibiliImg from "../assets/kilibil.jpg";
import PuratonImg from "../assets/pur.jpg";
import DiplomatImg from "../assets/diplomat.jpg";
import sikandarImg from "../assets/sikandar.jpg";


const movies = [
  { title: "Jaat", rating: "9.1/10 • 6.3K Votes", img: JaatImg },
  { title: "Kilibili", rating: "7.4/10 • 190 Votes", img: kilibiliImg },
  { title: "Puraton", rating: "7.6/10 • Early Ratings", img: PuratonImg },
  { title: "The Diplomat", rating: "8.8/10 • 26.6K Votes", img: DiplomatImg },
  { title: "Sikandar", rating: "8.8/10 • 26.6K Votes", img: sikandarImg },
];

export default function RecommendedMovies() {
    return (
      <section className="px-6 mb-12">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Recommended Movies</h2>
          <a href="#" className="text-red-500 hover:underline flex items-center gap-1">
            See All
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
  
        {/* Horizontal scroll container */}
        <div className="flex gap-4 overflow-x-auto scrollbar-hide">
          {movies.map((movie, idx) => (
            <div
              key={idx}
              className="min-w-[200px] bg-white rounded-xl shadow overflow-hidden flex-shrink-0"
            >
              <img
                src={movie.img}
                alt={movie.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-3">
                <h3 className="font-semibold text-lg truncate">{movie.title}</h3>
                <p className="text-sm text-gray-600">{movie.rating}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }