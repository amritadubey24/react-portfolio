import React from "react";
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Works from "./components/Works";
import Services from "./components/Services";
import About from "./pages/About";
import BlogCard from "./blog-components/BlogIndex";
import BlogDetail from "./blog-components/BlogDetail";
import BlogList from "./blog-components/BlogList";
import AddBlog from "./blog-components/AddBlog";
import BlogView from "./blog-components/BlogView";



function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/works" element={<Works showAll={true} />} />
        <Route path="/blogs" element={<BlogCard />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/all-blog" element={<BlogList />} />
        <Route path="/add-blog" element={<AddBlog />} />
        <Route path="/blog-view/:slug" element={<BlogView />} />

        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>

      <Footer />
    </>
  );
}

export default App;
