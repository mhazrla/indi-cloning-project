import { InertiaLink } from "@inertiajs/inertia-react";
import React from "react";
import { Inertia } from "@inertiajs/inertia";

const noArticle = () => {
    return <div>Saat ini belum ada article tersedia</div>;
};

const ArticleCard = (article) => {
    return article ? isArticle(article) : noArticle();
};

const isArticle = ({ id, title, year, user_id, created_at, tags, content }) => {
    return (
        <>
            <div
                className="
                    overflow-hidden
                    shadow-lg
                    transition
                    duration-500
                    ease-in-out
                    transform
                    hover:shadow-2xl
                    rounded-lg
                    md:w-80
                    "
            >
                <img
                    alt="blog photo"
                    src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
                    className="max-h-40 w-full object-cover"
                />
                <div className="bg-white w-full p-4">
                    <a href="#" className="text-green-600 text-2xl font-medium">
                        {title} ({year})
                    </a>
                    <p className="text-gray-800 text-sm font-medium mb-2">
                        A comprehensive guide about online education.
                    </p>
                    <p className="text-gray-600 font-light text-md">
                        {content}...
                        <InertiaLink href={route("article.show", id)}>
                            <span className="inline-flex text-green-600">
                                Read More
                            </span>
                        </InertiaLink>
                    </p>
                    <div
                        className="
                        flex flex-wrap
                        justify-starts
                        items-center
                        py-3
                        border-b-2
                        text-xs text-white
                        font-medium
                    "
                    >
                        {tags.map((tag, i) => {
                            return (
                                <a
                                    href="#"
                                    key={tag.id}
                                    className="m-1 px-2 py-1 rounded bg-green-500"
                                >
                                    #{tag.name}
                                </a>
                            );
                        })}
                    </div>
                    <div className="flex items-center mt-2">
                        <img
                            className="w-10 h-10 object-cover rounded-full"
                            alt="User avatar"
                            src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200"
                        />
                        <div className="pl-2">
                            <div className="font-medium">{user_id}</div>
                            <div className="text-gray-600 text-xs">
                                CTO of Supercars
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ArticleCard;
