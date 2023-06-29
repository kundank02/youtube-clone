import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Feeder from "./components/Feeder";
import SearchResult from "./components/SearchResult";
import VideoDetails from "./components/VideoDetails";
import { ContextApi } from "./context/ContextApi";

const App = () => {
    return (
        <ContextApi>
            <BrowserRouter>
                <div className="flex flex-col h-full bg-neutral-900">
                    <Header />
                    <Routes>
                        <Route path="/" exact element={<Feeder />} />
                        <Route
                            path="/searchResult/:searchQuery"
                            element={<SearchResult />}
                        />
                        <Route path="/video/:id" element={<VideoDetails />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </ContextApi>
    );
};

export default App;