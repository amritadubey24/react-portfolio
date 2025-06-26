import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const BlogDetail = () => {
    const { slug } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const blogs = JSON.parse(localStorage.getItem("userBlogs")) || [];
        const found = blogs.find((b) => b.slug === slug);
        if (found) setBlog(found);
    }, [slug]);

    if (!blog) {
        return (
            <div className="container py-5 text-center">
                <h2>Blog not found</h2>
                <Link to="/all-blog" className="btn btn-secondary mt-3">Back to Blogs</Link>
            </div>
        );
    }

    return (
        <>
            <section className="left_side_text-wrapper">
                <div className="container">
                    <div className="left_side_text_inner">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="icc_titleBlock left-side-about">
                                    <h2 className="icc_title">{blog.title}</h2>
                                    <p className="icc_subTitle"><strong>Category :</strong> {blog.category}</p>
                                    <p className="icc_subTitle">{blog.sub_title}</p>
                                    {blog.image && (
                                        <img src={blog.image} alt={blog.alt} className="img-fluid mt-5" width="300" height="300" />
                                    )}
                                    <p className="icc_subTitle">{blog.content}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
};

export default BlogDetail;
