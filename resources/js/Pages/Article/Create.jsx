import React, { useRef, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";
import swal from "sweetalert";

const CreateArticle = (props) => {
    var article = props.article;
    const [values, setValues] = useState({
        title: article?.title || "",
        year: article?.year || "",
        tags: props?.tags || "",
        content: article?.content || "",
    });

    const [error] = useState({
        title: "",
        year: "",
        tags: "",
        content: "",
    });

    const imageRef = useRef();

    const styles = {
        classNameAlert: "text-sm text-red-600",
        classNameInput:
            "rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300",
    };

    const handleChange = (e) => {
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));

        switch (key) {
            case "year":
                error.year = value.length < 4 ? "Tahun tidak valid" : "";
                break;

            default:
                break;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();

        for (let key in values) {
            formData.append(key, values[key]);
        }

        formData.append("image", imageRef.current.files[0]);

        Inertia.post(route("dashboard.store"), formData, {
            onSuccess: (page) => {
                swal("Kamu kewren!", "Article udah diaplot", "success");
            },
            onError: (errors) => {
                swal("Kamu gagal kewren", "Article gagal diaplot", "error");
            },
        });
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append("id", article.id);

        for (let key in values) {
            formData.append(key, values[key]);
        }

        formData.append("image", imageRef.current.files[0]);
        formData.append("_method", "patch");
        Inertia.post(route("dashboard.update", article.id), formData, {
            onSuccess: (page) => {
                swal("Kamu kewren!", "Article udah diupdate yak", "success");
            },
            onError: (errors) => {
                swal(
                    "Kamu gagal kewren",
                    "Article gagal ddiupdate nih",
                    "error"
                );
            },
        });
    };

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    {article ? "Edit Article" : "Create Article"}
                </h2>
            }
        >
            <Head title="Create Article" />

            <section className="relative bg-[url(https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)] bg-cover bg-center bg-no-repeat">
                <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25">
                    <form
                        className="flex flex-wrap gap-3 w-full p-5 "
                        onSubmit={article ? handleUpdate : handleSubmit}
                        method="post"
                        encType="multipart/form-data"
                    >
                        <label
                            className="relative flex-1 flex flex-col"
                            htmlFor="title"
                        >
                            <span className="font-bold mb-3">Title</span>
                            <input
                                className={styles.classNameInput}
                                type="text"
                                id="title"
                                name="title"
                                placeholder="Title"
                                value={values.title}
                                onChange={handleChange}
                            />

                            {props.errors.title && (
                                <small className={styles.classNameAlert}>
                                    {props.errors.title}
                                </small>
                            )}

                            <div className={styles.classNameAlert}>
                                {error.title}
                            </div>
                        </label>

                        <label
                            className="relative flex-1 flex flex-col"
                            htmlFor="year"
                        >
                            <span className="font-bold flex items-center gap-3 mb-3">
                                Year
                            </span>
                            <input
                                className={styles.classNameInput}
                                type="number"
                                id="year"
                                name="year"
                                placeholder="2010"
                                value={values.year}
                                onChange={handleChange}
                            />

                            {props.errors.year && (
                                <small className={styles.classNameAlert}>
                                    {props.errors.year}
                                </small>
                            )}

                            <div className={styles.classNameAlert}>
                                {error.year}
                            </div>
                        </label>

                        <label
                            className="relative flex-1 flex flex-col"
                            htmlFor="tags"
                        >
                            <span className="font-bold mb-3">Tags</span>
                            <input
                                className={styles.classNameInput}
                                type="text"
                                id="tags"
                                name="tags"
                                placeholder="Tag1#Tag2#Tag3"
                                value={values.tags}
                                onChange={handleChange}
                            />

                            {props.errors.tags && (
                                <small className={styles.classNameAlert}>
                                    {props.errors.tags}
                                </small>
                            )}

                            <div className={styles.classNameAlert}>
                                {error.tags}
                            </div>
                        </label>

                        <label
                            className="relative w-full flex flex-col"
                            htmlFor="content"
                        >
                            <div className="form-control">
                                <span className="font-bold mb-3">Content</span>
                                <textarea
                                    className="textarea textarea-bordered h-24 bg-white border-gray-200 placeholder-gray-300"
                                    placeholder="Nganu nganu"
                                    id="content"
                                    name="content"
                                    value={values.content}
                                    onChange={handleChange}
                                ></textarea>

                                {props.errors.content && (
                                    <small className={styles.classNameAlert}>
                                        {props.errors.content}
                                    </small>
                                )}

                                <div className={styles.classNameAlert}>
                                    {error.content}
                                </div>
                            </div>
                        </label>

                        <label
                            className="relative w-full flex flex-col"
                            htmlFor="image"
                        >
                            <span className="font-bold mb-3">Image</span>
                            <input
                                className="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300 bg-white"
                                type="file"
                                id="image"
                                name="image"
                                ref={imageRef}
                            />

                            {props.errors.image && (
                                <small className={styles.classNameAlert}>
                                    {props.errors.image}
                                </small>
                            )}
                        </label>

                        <button className="btn btn-block bg-red-600 text-white">
                            Submit
                        </button>
                    </form>
                </div>
            </section>
        </AuthenticatedLayout>
    );
};

export default CreateArticle;
