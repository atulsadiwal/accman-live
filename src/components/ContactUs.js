const ContactUs = () => {
  return (
    <div className="relative w-full h-[60vh] -mt-2">
      {/* Background Image with Dark Filter */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url("/image/college-friends.jpg")`,
          backgroundAttachment: "fixed",
          filter: "brightness(60%)",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-purple-950 opacity-50"></div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 flex items-center justify-start h-full text-left px-8 sm:px-52 py-8">
        <div className="text-white max-w-4xl">
          <p className="text-xs uppercase tracking-widest mb-2">
            Interested in Joining Us ?
          </p>
          <h1 className="text-xl font-playfair tracking-wider md:text-3xl font-semibold mb-4">
            Join Us For Information About <br />
            New Student Admissions
          </h1>
          <p className="text-[0.65rem] mb-6 ">
            "Embark on a journey of knowledge and opportunity! Join us for an
            insightful session on New <br className="hidden sm:block"/> Student Admissions, where we unravel the
            exciting possibilities that await prospective students. <br className="hidden sm:block"/>Discover our
            unique programs, admission criteria, and the enriching experiences
            that define our <br className="hidden sm:block"/>educational community. Don't miss this chance to
            explore your academic future with us!"
          </p>
          <button className="bg-yellow-500 text-black uppercase text-[0.65rem] tracking-widest px-4 py-2 hover:bg-yellow-600 transition duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
