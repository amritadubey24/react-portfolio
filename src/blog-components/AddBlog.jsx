import React, { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

const AddBlog = () => {
    const [category, setCategory] = useState("");
    const [title, setTitle] = useState("");
    const [sub_title, setSubTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(""); // Base64 string
    const [alt, setAlt] = useState("");

    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const editingSlug = searchParams.get("edit");

    useEffect(() => {
        if (editingSlug) {
            const stored = JSON.parse(localStorage.getItem("userBlogs")) || [];
            const blog = stored.find((b) => b.slug === editingSlug);
            if (blog) {
                setCategory(blog.category);
                setTitle(blog.title);
                setSubTitle(blog.sub_title);
                setDescription(blog.content);
                setImage(blog.image || "");
                setAlt(blog.alt || "");
            }
        }
    }, [editingSlug]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onloadend = () => {
            setImage(reader.result); // base64 image string
        };
        reader.readAsDataURL(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title || !sub_title || !description || !category || !alt || !image) {
            alert("All fields including image and alt text are required.");
            return;
        }

        const slug = title
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, "");
        const date = new Date().toLocaleDateString();

        const blogData = {
            category,
            title,
            sub_title,
            content: description,
            summary: description.slice(0, 120) + "...",
            date,
            slug,
            image,
            alt,
            status: "Active",
        };

        let existing = JSON.parse(localStorage.getItem("userBlogs")) || [];

        if (editingSlug) {
            existing = existing.map((b) => (b.slug === editingSlug ? blogData : b));
        } else {
            existing.push(blogData);
        }

        localStorage.setItem("userBlogs", JSON.stringify(existing));

        setCategory("");
        setTitle("");
        setSubTitle("");
        setDescription("");
        setImage("");
        setAlt("");

        alert(editingSlug ? "Blog updated!" : "Blog added!");
        navigate("/all-blog");
    };

    return (
        <section className="icc_contactForm--wrapper py-5">
            <div className="container">
                <div className="icc_titleBlock text-end mb-3">
                    <Link to="/all-blog" className="btn btn-primary">Back To List Page</Link>
                </div>
                <div className="icc_titleBlock">
                    <h2 className="icc_title">{editingSlug ? "Edit Blog" : "Add Blog"}</h2>
                </div>

                <div className="icc_contactForm--inner">
                    <div className="icc_contactForm--block">
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="icc_formBlock">
                                        <label>Select Category</label>
                                        <select
                                            className="form-select"
                                            value={category}
                                            onChange={(e) => setCategory(e.target.value)}
                                            required
                                        >
                                            <option value="">-- Select --</option>
                                            <option value="UI/UX">UI/UX</option>
                                            <option value="React">React</option>
                                            <option value="AI">AI</option>
                                            <option value="AI/SEO">AI/SEO</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="icc_formBlock">
                                        <label>Title</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Blog Title"
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12">
                                    <div className="icc_formBlock">
                                        <label>Sub Title</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Blog Sub Title"
                                            value={sub_title}
                                            onChange={(e) => setSubTitle(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="icc_formBlock">
                                        <label>Image</label>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            className="form-control"
                                            onChange={handleImageChange}
                                        />
                                        {image && (
                                            <img
                                                src={image}
                                                alt={alt}
                                                className="img-thumbnail mt-2"
                                                style={{ maxWidth: "120px" }}
                                            />
                                        )}
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="icc_formBlock">
                                        <label>Image Alt</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter Image Alt Text"
                                            value={alt}
                                            onChange={(e) => setAlt(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="icc_formBlock">
                                        <label>Description</label>
                                        <textarea
                                            className="form-control"
                                            rows="5"
                                            placeholder="Start writing here..."
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                            required
                                        ></textarea>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="icc_formBlock mb-0 text-center">
                                        <button type="submit" className="btn btn-primary">
                                            {editingSlug ? "Update Blog" : "Create Blog"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddBlog;
