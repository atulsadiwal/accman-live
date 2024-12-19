import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const achievers = {
    alumni: [
        {
            name: "John Doe",
            content: "ACCMAN transformed my career trajectory! The skills I gained in leadership and strategic thinking have helped me climb the corporate ladder faster than I ever imagined. The rigorous academic curriculum, combined with hands-on experience, prepared me to tackle real-world challenges.",
            image: "/image/alumini/student1.PNG",
            designation: "Marketing Manager",
        },
        {
            name: "Jane Smith",
            content: "The courses were top-notch and relevant. The faculty at ACCMAN have industry experience, which makes the learning experience practical and highly relevant to the ever-evolving business world. I was also able to build a network that proved valuable in my career.",
            image: "/image/alumini/student2.PNG",
            designation: "Marketing Manager",
        },
        {
            name: "Michael Lee",
            content: "A truly life-changing experience! The collaborative environment at ACCMAN allowed me to connect with people from diverse backgrounds, and the projects we worked on prepared me for a successful career in the tech industry. The support from professors was invaluable throughout my journey.",
            image: "/image/alumini/student3.PNG",
            designation: "Software Engineer",
        },
        {
            name: "Aisha Khan",
            content: "ACCMAN’s global curriculum and excellent mentorship helped me secure my dream job. The exposure to international case studies and the opportunity to attend global business events really opened my eyes to new possibilities. I also received invaluable guidance from my mentors, who helped me chart a clear career path.",
            image: "/image/alumini/student4.PNG",
            designation: "Financial Analyst",
        },
        {
            name: "David Roberts",
            content: "The emphasis on leadership and innovation prepared me to lead teams effectively. ACCMAN’s focus on developing leadership qualities, coupled with a solid foundation in business fundamentals, gave me the confidence to take on challenging projects and lead initiatives in my current role as an entrepreneur.",
            image: "/image/alumini/student5.PNG",
            designation: "Entrepreneur",
        },
    ],
    students: [
        {
            name: "Emily Chen",
            content: "I gained so much practical knowledge here. ACCMAN’s approach to education emphasizes real-world experience. The various workshops, group projects, and internships I participated in were instrumental in building my skills and boosting my confidence.",
            image: "/image/alumini/student6.PNG",
        },
        {
            name: "Chris Brown",
            content: "Supportive faculty and excellent resources. ACCMAN not only provides world-class facilities but also has a faculty that genuinely cares about students’ success. Their guidance during my academic journey helped me refine my skills and pursue my passion in business management.",
            image: "/image/alumini/student5.PNG",
        },
        {
            name: "Sara Wilson",
            content: "Loved every moment of my journey at ACCMAN. From the inspiring professors to the diverse student body, every experience here has shaped me into a more knowledgeable and well-rounded individual. The college gave me all the tools I needed to succeed, both academically and personally.",
            image: "/image/alumini/student4.PNG",
        },
        {
            name: "Rajiv Patel",
            content: "The hands-on projects and internships gave me industry-level experience. ACCMAN’s practical approach to education allowed me to apply theoretical knowledge to real-world scenarios. The networking opportunities and internships at top companies have set me on a solid path toward my career goals.",
            image: "/image/alumini/student3.PNG",
        },
        {
            name: "Fatima Noor",
            content: "ACCMAN fostered a community where I could excel both academically and personally. The inclusive environment encouraged me to challenge myself and grow. The relationships I built here have proven invaluable in my career, and the academic rigor has set a high standard for my professional life.",
            image: "/image/alumini/student1.PNG",
        },
    ],
    aboutCollege: [
        {
            title: "State-of-the-Art Infrastructure",
            description:
                "ACCMAN Business School boasts modern facilities equipped with cutting-edge technology to support both academic and extracurricular pursuits. The campus includes advanced computer labs, collaborative learning spaces, a well-equipped library, and recreational areas, ensuring students have the tools they need to succeed. Our infrastructure is designed to create an environment that fosters creativity, innovation, and academic excellence.",
        },
        {
            title: "Global Opportunities",
            description:
                "Through international exchange programs and partnerships, students gain exposure to global business environments. ACCMAN offers students the chance to study abroad and engage with leading business schools worldwide, helping them develop a global perspective and broaden their career opportunities. These international experiences allow students to become adaptable and competitive in the global job market.",
        },
        {
            title: "Industry-Driven Curriculum",
            description:
                "Our programs are designed in collaboration with industry experts, ensuring that students are well-prepared for the challenges of the corporate world. The curriculum incorporates the latest trends and practices from the business world, and is constantly updated to meet the changing needs of the industry. From case studies to internships, students receive a holistic education that prepares them for success.",
        },
        {
            title: "Personalized Mentorship",
            description:
                "Students benefit from one-on-one mentorship programs that focus on their individual career goals and personal growth. Our faculty members, as well as alumni mentors, guide students in navigating their academic journey, providing career advice, and offering insight into various industries. This personalized mentorship helps students align their passions with their career goals and achieve success in their chosen fields.",
        },
        {
            title: "Strong Alumni Network",
            description:
                "Our alumni community spans the globe, providing valuable connections and opportunities for current students. The strong and active alumni network serves as a powerful resource for students seeking internships, job placements, and professional development. Alumni frequently return to campus to share their insights, providing students with real-world advice and opportunities for collaboration.",
        },
        {
            title: "Holistic Development Approach",
            description:
                "At ACCMAN, we believe in nurturing well-rounded individuals. Beyond academics, our focus is on developing soft skills such as communication, leadership, teamwork, and emotional intelligence. With a wide range of clubs, activities, and events available, students are encouraged to engage in extracurricular activities that enhance their personal development and prepare them for leadership roles in the future.",
        },
    ],
};


const Alumini = () => {
    const [selectedCategory, setSelectedCategory] = useState("alumni");
    const [scrollPosition, setScrollPosition] = useState(0);
    const [scrollHeight, setScrollHeight] = useState(0);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setScrollPosition(0); // Reset scroll position when category changes
    };

    useEffect(() => {
        const container = document.getElementById("testimonialContainer");
        const updateScrollInfo = () => {
            const position = container.scrollTop;
            const height = container.scrollHeight - container.clientHeight;
            setScrollPosition(position);
            setScrollHeight(height);
        };

        container.addEventListener("scroll", updateScrollInfo);
        return () => container.removeEventListener("scroll", updateScrollInfo);
    }, []);

    return (
        <>
            <section className="min-h-screen flex items-center justify-center bg-black text-white p-5">
                <div className="container mx-auto px-10 flex flex-col md:flex-row ">
                    {/* Left Side: Heading, Description, Buttons */}
                    <div className="md:w-1/2 space-y-10 mr-12 p-5">
                        <h2 className="text-purple-400 text-lg">Alumini</h2>
                        <h1 className="text-4xl md:text-4xl font-bold leading-tight">
                            Discover why students and professionals praise their transformative
                            experiences at ACCMAN Business School.
                        </h1>
                        <div className="space-x-4">
                            <button
                                className={`py-2 px-4 rounded ${selectedCategory === "alumni"
                                    ? "bg-purple-500 text-white"
                                    : "bg-gray-700"
                                    }`}
                                onClick={() => handleCategoryChange("alumni")}
                            >
                                What Our Alumni Says
                            </button>
                            <button
                                className={`py-2 px-4 rounded ${selectedCategory === "students"
                                    ? "bg-purple-500 text-white"
                                    : "bg-gray-700"
                                    }`}
                                onClick={() => handleCategoryChange("students")}
                            >
                                What Our Student Says
                            </button>
                        </div>
                    </div>

                    {/* Right Side: Single Testimonial Scroll */}
                    <div className="md:w-1/2 lg:w-1/3 relative h-[60vh] flex bg-gradient-to-t from-gray-900 via-black to-gray-800 rounded-lg p-4 shadow-lg">
                        <div
                            id="testimonialContainer"
                            className="relative w-full h-full overflow-y-scroll snap-y snap-mandatory"
                            style={{
                                scrollBehavior: "smooth",
                                scrollbarWidth: "none", // For Firefox
                            }}
                        >
                            {/* Hide Default Scrollbar */}
                            <style jsx>{`
              #testimonialContainer::-webkit-scrollbar {
                display: none; /* For Chrome, Safari, and Opera */
              }
            `}</style>

                            {achievers[selectedCategory].map((testimonial, index) => (
                                <motion.div
                                    key={index}
                                    className="p-6 mb-8 bg-gray-700 rounded-lg shadow-lg h-full flex flex-col snap-center"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5 }}
                                    viewport={{ once: false, margin: "0px 0px -200px 0px" }}
                                >
                                    {/* Image and Name Section */}
                                    <div className="flex items-start mb-4">
                                        {/* Image */}
                                        <div className="w-24 h-24">
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="w-full h-full object-cover rounded-full shadow-lg"
                                            />
                                        </div>
                                        {/* Name */}
                                        <div className="ml-4 flex-1">
                                            <h3 className="text-xl font-semibold text-left">
                                                {testimonial.name}
                                            </h3>
                                            {testimonial.designation && (
                                                <p className="text-sm text-gray-400 text-left mt-1">
                                                    {testimonial.designation}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <p className="text-lg italic text-center">
                                        "{testimonial.content}"
                                    </p>
                                </motion.div>

                            ))}
                        </div>
                        {/* Gradient Scrollbar */}
                        <div className="relative flex flex-col justify-between items-center w-2 bg-gray-700 rounded-full ml-2">
                            <div
                                className="absolute top-0 left-0 w-full rounded-full"
                                style={{
                                    height: `${(scrollPosition / scrollHeight) * 100}%`,
                                    background: "linear-gradient(to right, cyan, blue)",
                                    transition: "height 0.2s ease-in-out",
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Alumini;
