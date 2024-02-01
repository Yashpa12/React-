import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Header from "../components/header";
import Footer from "../components/footer";
import Sidebar from "../components/Sidebar";
import CreatePost from "../components/CreatePost";


import PostList from "../components/PostList";
import { useState } from "react";
import PostlistProvider from "../store/post-list-data";

function App() {
  const [selectBar, setselectBar] = useState("Home");

  return (
<PostlistProvider>
      <div className="app-con">
        <Sidebar selectBar={selectBar} setselectBar={setselectBar}></Sidebar>
        <div className="content">
          <Header></Header>
          {selectBar === "Home" ? (
            <PostList></PostList>
          ) : (
            <CreatePost></CreatePost>
          )}

          <Footer></Footer>
        </div>
      </div>
      </PostlistProvider>
  );
}

export default App;
