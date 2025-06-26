import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogData";

/* ─── Component ─── */
const BlogIndex = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("userBlogs")) || [];
        setBlogs(stored.filter(blog => blog.status === "Active"));
    }, []);

    return (
        <section className="card_with_bg_img--wrapper transBG">
            <div className="container">
                <div className="card_with_bg_img--inner">
                    <div className="icc_titleBlock text-end">
                        <Link to="/all-blog" className="btn btn-primary"> Go To Blog List</Link>
                    </div>
                    <div className="icc_titleBlock">
                        <h2 className="icc_title">Blog &amp; Insights</h2>
                    </div>

                    <div className="row">
                        {blogs.length ? (
                            blogs.map((blog, idx) => (
                                <div key={blog.slug} className="col-md-4 mb-4">
                                    <div className="card-wrapper remove-hover">
                                        <div className="card-image">
                                            <img
                                                src={blog.image}
                                                alt={blog.alt}
                                                className="img-fluid rounded-top"
                                            />
                                        </div>
                                        <div className="card-content p-4 bg-white rounded-bottom shadow h-100 d-flex flex-column">
                                            <h4 className="mb-2">{blog.title}</h4>
                                            <p className="flex-grow-1">{blog.summary}</p>
                                            <div className="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
                                                <p className="mb-0 text-muted small">{blog.date}</p>
                                                <Link to={`/blog/${blog.slug}`} className="btn btn-sm">
                                                    Read More
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>Not Found</p>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BlogIndex;
