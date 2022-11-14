import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import ArticleList from "@/Components/Article/ArticleList";

export default function Article(props) {
    return (
        <div className="bg-slate-50">
            <Navbar user={props.auth.user} />
            <ArticleList article={props.article} />
            <Footer />
        </div>
    );
}
