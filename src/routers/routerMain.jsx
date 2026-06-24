import { createBrowserRouter } from "react-router";

import App from '../App'
import Main from "../assets/components/main/Main";
import FormPage from "../assets/pages/form/formPage";
import Comments from "../assets/pages/comments/Comments";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Main />
            },

            {
                path: "form",
                element: <FormPage />
            },

            {
                path: "comments",
                element: <Comments />
            }
        ]
    }
], {
    basename: '/Area/'
})