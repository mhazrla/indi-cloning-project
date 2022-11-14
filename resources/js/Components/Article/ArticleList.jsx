import React from "react";
import ArticleCard from "./ArticleCard";

function ArticleList({ article }) {
    return (
        <div className="mx-auto pt-10 mb-36 ">
            <div className="text-center">
                <h1 className="font-bold text-2xl">New Updates</h1>
            </div>
            <div className="flex justify-center flex-col md:flex-row gap-10 md:gap-5 pt-10 px-10 ">
                {article.map((data, i) => {
                    return <ArticleCard key={i} {...data} />;
                })}
            </div>
        </div>
    );
}

export default ArticleList;
