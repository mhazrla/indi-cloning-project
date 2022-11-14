import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, InertiaLink, Link } from "@inertiajs/inertia-react";
import swal from "sweetalert";
import { Inertia } from "@inertiajs/inertia";

const Dashboard = (props) => {
    const handleDelete = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                Inertia.delete(route("dashboard.destroy", id), {
                    onSuccess: () => swal("Mengkeren! Data udah keapus"),
                });
            }
        });
    };

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-8 w-full">
                {props.articles.map((data, i) => {
                    return (
                        <div
                            className="max-w-7xl mx-auto sm:px-6 lg:px-8 mb-4"
                            key={data.id}
                        >
                            <div className=" bg-white p-6 shadow rounded max-w-7xl mx-auto sm:px-6 lg:px-8">
                                <div className="flex items-center border-b border-gray-200 pb-6">
                                    <img
                                        src="https://cdn.tuk.dev/assets/components/misc/doge-coin.png"
                                        className="w-12 h-12 rounded-full"
                                    />
                                    <div className="flex items-start justify-between w-full">
                                        <div className="pl-3 w-full">
                                            <p className="text-xl font-medium leading-5 text-gray-800">
                                                {data.title} ({data.year})
                                            </p>
                                        </div>
                                        <div className="shrink-0 flex items-center space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                            <InertiaLink
                                                href={route(
                                                    "article.show",
                                                    data.id
                                                )}
                                            >
                                                Detail
                                            </InertiaLink>
                                            <InertiaLink
                                                href={route(
                                                    "dashboard.edit",
                                                    data.id
                                                )}
                                            >
                                                Edit
                                            </InertiaLink>
                                            <button
                                                onClick={handleDelete.bind(
                                                    this,
                                                    data.id
                                                )}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-2 ">
                                    <p className="text-sm leading-5 py-4 text-gray-600">
                                        {data.content}
                                    </p>
                                    <div className="flex">
                                        {data.tags.map((tag, i) => {
                                            return (
                                                <div
                                                    className="py-2 px-4 ml-3 text-xs leading-3 text-indigo-700 rounded-full bg-indigo-100"
                                                    key={tag.id}
                                                >
                                                    #{tag.name}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </AuthenticatedLayout>
    );
};

export default Dashboard;
