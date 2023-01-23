import { useState } from "react";
import { MenuDesk } from "../menu/desktop";
import "./style.sass"
import { MenuMobile } from "../menu/mobile";

export const Header = () => {

    return (
        <>
            <header className="Header">
                {window.innerWidth > 768 ? <MenuDesk /> : <MenuMobile />}
            </header>
        </>
    );
};