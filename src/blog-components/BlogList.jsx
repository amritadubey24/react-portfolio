import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("userBlogs")) || [];
        setBlogs(stored);
    }, []);

    const handleDelete = (slug) => {
        if (!window.confirm("Delete this blog?")) return;

        const filtered = blogs.filter((b) => b.slug !== slug);
        setBlogs(filtered);
        localStorage.setItem("userBlogs", JSON.stringify(filtered));
    };

    const handleEdit = (slug) => {
        navigate(`/add-blog?edit=${slug}`);
    };

    const toggleStatus = (slug) => {
        const updated = blogs.map((b) =>
            b.slug === slug ? { ...b, status: b.status === "Active" ? "Inactive" : "Active" } : b
        );
        setBlogs(updated);
        localStorage.setItem("userBlogs", JSON.stringify(updated));
    };

    return (
        <section className="left_side_text-wrapper bg-gray py-5">
            <div className="container">
                <div className="icc_titleBlock text-end mb-3">
                    <Link to="/add-blog" className="btn btn-primary">
                        Add Blog
                    </Link>
                </div>

                <div className="icc_titleBlock">
                    <h2 className="icc_title">All Blogs!</h2>
                </div>

                <div className="col-lg-12 mb-5">
                    <Table bordered hover responsive>
                        <thead className="table-dark">
                            <tr>
                                <th>#</th>
                                <th>Category</th>
                                <th>Title</th>
                                <th>Date</th>
                                <th>Status</th>
                                <th className="text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {blogs.length ? (
                                blogs.map((blog, idx) => (
                                    <tr key={blog.slug}>
                                        <td>{idx + 1}</td>
                                        <td>{blog.category || "-"}</td>
                                        <td>{blog.title}</td>
                                        <td>{blog.date}</td>
                                        <td>
                                            <Form.Check
                                                type="switch"
                                                id={`status-${blog.slug}`}

                                                checked={blog.status === "Active"}
                                                onChange={() => toggleStatus(blog.slug)}
                                            />
                                        </td>
                                        <td className="text-center">
                                            <div className="actionButton">
                                                {/* View: use Link */}
                                                <Link to={`/blog-view/${encodeURIComponent(blog.slug)}`} className="action-icon view">
                                                    <i className="fas fa-eye"></i>
                                                </Link>

                                                {/* Edit: use button */}
                                                <button
                                                    type="button"
                                                    onClick={() => handleEdit(blog.slug)}
                                                    className="action-icon edit btn btn-link p-0"
                                                >
                                                    <i className="fas fa-pen"></i>
                                                </button>

                                                {/* Delete: use button */}
                                                <button
                                                    type="button"
                                                    onClick={() => handleDelete(blog.slug)}
                                                    className="action-icon delete btn btn-link p-0"
                                                >
                                                    <i className="fas fa-trash"></i>
                                                </button>
                                            </div>

                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="text-center">
                                        No blogs found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </div>
            </div>
        </section>
    );
};

export default BlogList;
