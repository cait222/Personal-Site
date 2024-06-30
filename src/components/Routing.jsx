import {
    useNavigate,
    Route,
    Routes,
    useLocation,
    Navigate
} from "react-router-dom";

import NoLinkPage from "./NoLinkPage";
import Home from "./Home";
import TeleaphasiaProject from "./TeleaphasiaProject";
import DanceMatProject from "./DanceMatProject";

const Routing = () => {
    let location = useLocation();

    // Ensure we always have a hash in the browser URL
    if (
        location.pathname + location.search + location.hash === "/" &&
        window.location.hash === ""
    ) {
        return <Navigate to="" replace={true} />;
    }

    return (

        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/noLink" element={<NoLinkPage />} />
            <Route path="/teleaphasia" element={<TeleaphasiaProject />} />
            <Route path="/dancemat" element={<DanceMatProject />} />
            <Route path="*" element={<Home />} />
        </Routes>

    );
};

export default Routing;
