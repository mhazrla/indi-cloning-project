import NavAdmin from "@/Components/NavAdmin";
import React from "react";
import DataContact from "@/Components/Contact/DataContact";

export default function ShowContactUs(props) {
    return (
        <div className="bg-white">
            <NavAdmin user={props.auth.user} />
            {/* <DataContact contact={props.contact} /> */}
        </div>
    );
}
