import BannerAdmin from "@/Components/BannerAdmin";
import NavAdmin from "@/Components/NavAdmin";
import React from "react";

export default function Dashboard(props) {
    return (
        <div className="bg-white">
            <NavAdmin user={props.auth.user} />
            <BannerAdmin />
        </div>
    );
}

// import NavAdmin from "@/Components/NavAdmin";
// import React from "react";
// import DataContact from "@/Components/Contact/DataContact";

// export default function Dashboard(props) {
//     return (
//         <div className="bg-white">
//             <NavAdmin user={props.auth.user} />
//             <DataContact contacts={props.contacts} />
//         </div>
//     );
// }
