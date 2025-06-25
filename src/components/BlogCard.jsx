import React from "react";
import { Link } from "react-router-dom";
// Import images
import Img1 from "../assets/images/blog-1.jpg";
import Img2 from "../assets/images/blog-2.jpg";
import Img3 from "../assets/images/blog-3.jpg";
import Img4 from "../assets/images/blog-4.jpg";
import Img5 from "../assets/images/blog-5.jpg";
import Img6 from "../assets/images/blog-6.jpg";

/* ─── Blog Data ─── */
const blogPosts = [
    {
        title: "Mastering React for Scalable Front-End Development",
        summary:
            "React isn’t just a library — it’s a mindset. Learn how component-driven development helps scale modern UI efficiently.",
        date: "12 June 2025",
        image: Img1,
        alt: "Mastering React for Scalable Front-End Development",
    },
    {
        title: "AI-Powered UI: How Front-End Developers Can Leverage AI",
        summary:
            "Explore how AI tools like Copilot and Framer AI are enhancing speed, creativity, and accessibility in modern front-end workflows.",
        date: "10 May 2025",
        image: Img2,
        alt: "AI-Powered UI: How Front-End Developers Can Leverage AI",
    },
    {
        title: "AI + SEO: Smarter Optimization for Developers",
        summary:
            "Discover how AI can streamline your technical SEO workflow — from auto-generating meta tags to optimizing site performance.",
        date: "01 May 2025",
        image: Img3,
        alt: "AI + SEO: Smarter Optimization for Developers",
    },
    {
        title: "From HTML to Frameworks: My Journey as a Front-End Developer",
        summary:
            "A personal reflection on how I evolved from building simple layouts to building real-world apps using React and modern stacks.",
        date: "12 April 2025",
        image: Img4,
        alt: "From HTML to Frameworks: My Journey as a Front-End Developer",
    },
    {
        title: "Building Developer Confidence: What Actually Works",
        summary:
            "Confidence isn't built overnight. Here's how small wins, client work, and mentorship helped me grow as a developer.",
        date: "12 April 2025",
        image: Img5,
        alt: "Building Developer Confidence: What Actually Works",
    },
    {
        title: "My Favorite Front-End Tools & Why They Matter",
        summary:
            "Explore my go-to stack — from VS Code and Git to design tools like Figma — and how they improve my workflow and productivity.",
        date: "18 March 2025",
        image: Img6,
        alt: "My Favorite Front-End Tools & Why They Matter",
    },
];

/* ─── Component ─── */
const BlogCard = () => {
    return (
        <section className="card_with_bg_img--wrapper transBG">
            <div className="container">
                <div className="card_with_bg_img--inner">
                    <div className="icc_titleBlock">
                        <h2 className="icc_title">Blog &amp; Insights</h2>
                    </div>

                    <div className="row">
                        {blogPosts.map((post, idx) => (
                            <div key={idx} className="col-md-4 mb-4">
                                <div className="card-wrapper">
                                    <div className="card-image">
                                        <img
                                            src={post.image}
                                            alt={post.alt}
                                            className="img-fluid rounded-top"
                                        />
                                    </div>
                                    <div className="card-content p-4 bg-white rounded-bottom shadow h-100 d-flex flex-column">
                                        <h4 className="mb-2">{post.title}</h4>
                                        <p className="flex-grow-1">{post.summary}</p>
                                        <div className="d-flex align-items-center justify-content-between border-top pt-3 mt-3">
                                            <p className="mb-0 text-muted small">{post.date}</p>
                                            <Link to={`/blog/${idx}`} className="btn btn-sm">
                                                Read More
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BlogCard;
