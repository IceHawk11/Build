"use client";

import { useState } from "react";
import LaunchesMenu from "./menus/launches-menu";
import CommunityMenu from "./menus/community-menu";
import NewsMenu from "./menus/news-menu";
import { Link } from "../Link";
import { useNavigate } from "react-router";
import useScrollToTopNavigate from "../routes/route";


const Menu = () => {

    const router = useScrollToTopNavigate();

    const handleHomepageClick = () => {
        router('/home');
    }

    const handleCategoriesClick = () => {
        router('/categories');
    }
    const handleDiscussionsClick = () => {
        router('/discussions');
    }

    const handleSponsorClick = () => {
        router('/advertise');
    }
    const handleNewsLetterClick = () => {
        router('/newsletter');
    }
    const handleChangelogClick = () => {
        router('/changelog');
    }

    const [showLaunchesMenu, setShowLaunchesMenu] = useState(false);
    const [showCommunityMenu, setShowCommunityMenu] = useState(false);
    const [showNewsMenu, setShowNewsMenu] = useState(false);

    return (
        <div className="hidden lg:flex items-center relative">
            <div className="space-x-6 text-gray-500 flex items-center">
                <div
                    onMouseEnter={() => setShowLaunchesMenu(true)}
                    onMouseLeave={() => setShowLaunchesMenu(false)}
                    onClick={handleHomepageClick}
                    className="hover:cursor-pointer hover:text-red-500"
                >
                    Home {/*{showLaunchesMenu && <LaunchesMenu />}*/}
                </div>
                <div onClick={handleCategoriesClick} className="hover:text-red-500 hover:cursor-pointer">
                    Products
                </div>

                <div
                    onMouseEnter={() => setShowNewsMenu(true)}
                    onMouseLeave={() => setShowNewsMenu(false)}
                    className="hover:cursor-pointer hover:text-red-500"
                    onClick={handleNewsLetterClick}
                >
                    NewsLetter {/*{showNewsMenu && <NewsMenu/>}*/}
                </div>
                <div onClick={handleChangelogClick} className="hover:text-red-500 hover:cursor-pointer">
                    ChangeLog
                </div>
                <div
                    onMouseEnter={() => setShowCommunityMenu(true)}
                    onMouseLeave={() => setShowCommunityMenu(false)}
                    onClick={handleDiscussionsClick}
                    className="hover:cursor-pointer hover:text-red-500"
                >
                    Discussion {/*showCommunityMenu && <CommunityMenu/>*/}
                </div>

                <div onClick={handleSponsorClick} className="hover:text-red-500 hover:cursor-pointer">
                    Advertise
                </div>
            </div>

        </div>
    );
}

export default Menu;