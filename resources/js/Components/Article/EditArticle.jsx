import React from "react";
import Navbar from "@/Components/Navbar";

export default function EditArticle(props) {
    return (
        <section className="relative bg-[url(https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)] bg-cover bg-center bg-no-repeat">
            <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25">
                <Navbar user={props.auth.user} />
                <h1 className="text-2xl text-center text-bold pt-3 pb-2">
                    EDIT POST
                </h1>
                <div className="card items-center justify-center">
                    <div className="card-body block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <strong className="label-text">Title</strong>
                            </label>
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-xs"
                            />
                            <label className="label">
                                <strong className="label-text">
                                    Description
                                </strong>
                            </label>
                            <textarea
                                id="message"
                                rows="4"
                                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Your message..."
                            ></textarea>
                            <label className="label">
                                <strong className="label-text">Image</strong>
                            </label>
                            <input
                                type="file"
                                className="file-input w-full max-w-xs"
                            />
                            <div className="pt-5 space-x-2">
                                <button className="btn btn-primary">
                                    Submit
                                </button>
                                <button className="btn btn-primary">
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
