import {v4 as uuidV} from "uuid"

// Create an Object Array with Navigation Details
export const navBar = [
    {
        id: uuidV(),
        title: "Home",
        url: "/"
    },

    {
        id: uuidV(),
        title: "Portfolio",
        url: "/portfolio"
    },

    {
        id: uuidV(),
        title: "Skills",
        url: "/skills"
    },

    {
        id: uuidV(),
        title: "Contact",
        url: "/contact"
    },
]