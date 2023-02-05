/**
 * @license
 * Copyright (c) 2022. EasyMetaHub, LLC - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 */


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from "react";
import SideBar from "./SideBar";
import NLPContent from "./NLPContent";

export default function Layout() {

        return (
            <>
                <div className={'App'}>
                    <SideBar />
                    <NLPContent />
                </div>
            </>
        );
}
