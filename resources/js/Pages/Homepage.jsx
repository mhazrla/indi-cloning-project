import Banner from "@/Components/Banner";
import MovieList from "@/Components/Movie/MovieList";
import Navbar from "@/Components/Navbar";
import Paginator from "@/Components/Paginator";
import React from "react";

function Homepage(props) {
    return (
        <div className="bg-white">
            <Navbar user={props.auth.user} />
            <Banner />

            <MovieList />
        </div>
    );
}

export default Homepage;
