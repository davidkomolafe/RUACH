import { React, Suspense } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/LogIn";
import LoginPage from "./Pages/Login/LoginPage";
import SignupPage from "./Pages/Signup/SignupPage";
import PasswordReset from "./Pages/PasswordReset/PasswordReset";
import Library from "./Pages//Library/Library";
import Podcast from "./Pages/Podcast/Podcast";
import Playlist from "./Pages/Library/Playlist/Playlist";
import Downloads from "./Pages/Library/Downloads/Downloads";
import History from "./Pages/Library/History/History";
import Artists from "./Pages/Library/Artists/Artists";
import Stats from "./Pages/Library/Stats/Stats";
import Subscriptions from "./Pages/Library/Subscriptions/Subscriptions";
import SearchPage from "./Pages/Search/SearchPage";

import { Provider } from "react-redux";
import store from "./states/store";
import { AppProvider } from "./states/Context";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <AppProvider>
          <Router>
            <Suspense fallback={<div>loading..</div>}>
              <Routes>
                <Route path="/*" element={<Home />} />
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/login/auth" element={<LoginPage />} />
                <Route path="/signup/auth" element={<SignupPage />} />
                <Route path="/password-reset" element={<PasswordReset />} />
                <Route path="/podcast" element={<Podcast />} />
                <Route path="/library" element={<Library />} />
                <Route path="/playlist" element={<Playlist />} />
                <Route path="/downloads" element={<Downloads />} />
                <Route path="/history" element={<History />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/artists" element={<Artists />} />
                <Route path="/subscriptions" element={<Subscriptions />} />
                <Route path="/stats" element={<Stats />} />

                {/* <Route path="/songs/:id" element={<SongDetails />} /> */}
                {/* <Route path="/artists/:id" element={<ArtistProfile />} /> */}
                {/* <Route path="/nowplaying" element={<NowPlaying />} /> */}
              </Routes>
            </Suspense>
          </Router>
        </AppProvider>
      </Provider>
    </>
  );
};

export default App;
