import React from "react";
import Header from '../../components/Header'

import Selleroc from "../../components/Seller/Sellerorder/Selleroc"
export default function AdminOrder() {
    return (
        <div className=" flex-1">
            <div className="main flex w-[1200px] mx-auto">
                <Selleroc />
            </div>
        </div>
    );
}
