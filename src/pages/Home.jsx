import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Users, Trash2, Award, Menu, X } from "lucide-react";
import heroBg from "../images/bg-hero.avif";
import beach from "../images/beach.avif";
import pounds from "../images/pounds.avif";
import volunteer from "../images/volunteer.avif";
import turtle from "../images/turtle.avif";

const CoastalCleanupWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const navItems = [
    "Click edit and create your own amazing website",
    "Read More",
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation Bar */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
              className="flex-shrink-0"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-xl font-bold text-blue-600">WIX</h2>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-300 relative"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {item}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 origin-left"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.button
              className="hidden lg:block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Edit this site
            </motion.button>

            {/* Mobile menu button */}
            <motion.div
              className="lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600 transition-colors duration-300"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className="lg:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMenuOpen ? 1 : 0,
            height: isMenuOpen ? "auto" : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: isMenuOpen ? 1 : 0,
                  x: isMenuOpen ? 0 : -20,
                }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </motion.a>
            ))}
            <motion.button
              className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium text-sm transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isMenuOpen ? 1 : 0,
                y: isMenuOpen ? 0 : 20,
              }}
              transition={{ duration: 0.3, delay: 0.5 }}
              onClick={() => setIsMenuOpen(false)}
            >
              Edit this site
            </motion.button>
          </div>
        </motion.div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section
        className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center text-center text-white overflow-hidden"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-white/10"></div>
        <motion.div
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-blue-900 font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Community
            <br />
            Coastal Cleanup
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl mb-8 opacity-20 font-bold text-blue-900 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Take Action Today
          </motion.p>
          <motion.button
            className="bg-blue-800 hover:bg-blue-900 text-white px-6 sm:px-8 py-3 sm:py-4 lg:mt-10 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join the movement
          </motion.button>
        </motion.div>
      </motion.section>

      {/* Statistics Section */}
      <motion.section
        className="py-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Beach Cleanups */}
          <motion.div
            className="relative h-80 lg:h-[600px] bg-cover bg-center group overflow-hidden"
            style={{
              backgroundImage: `url(${beach})`,
            }}
            aria-label="Community Coastal Cleanup"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4 sm:p-8 text-center">
              <motion.div
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                120
              </motion.div>
              <motion.div
                className="font-bold text-lg md:text-2xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Beach
                <br />
                Cleanups
              </motion.div>
            </div>
          </motion.div>

          {/* Pounds of Trash */}
          <motion.div
            className="relative h-80 lg:h-[600px] bg-gradient-to-br from-teal-500 to-blue-600 group overflow-hidden"
            whileHover={{ scale: 1.02 }}
            style={{
              backgroundImage: `url(${pounds})`,
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4 sm:p-8 text-center">
              <motion.div
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                60K
              </motion.div>
              <motion.div
                className="font-bold text-lg md:text-2xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                Pounds of
                <br />
                Trash
                <br />
                Removed
              </motion.div>
            </div>
          </motion.div>

          {/* Volunteers */}
          <motion.div
            className="relative h-80 lg:h-[600px] bg-cover bg-center group overflow-hidden"
            style={{
              backgroundImage: `url(${volunteer})`,
            }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-4 sm:p-8 text-center">
              <motion.div
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                600
              </motion.div>
              <motion.div
                className="font-bold text-lg md:text-2xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                Volunteers
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* What We Do Section */}
      <motion.section
        className="py-12 sm:py-16 lg:py-24 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 sm:mb-32"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            What We Do
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Beach Cleanups */}
            <motion.div
              className="text-center group"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-16 h-16 sm:w-32 sm:h-32 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-16 group-hover:bg-blue-200 transition-colors duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Trash2 className="w-6 h-6 sm:w-16 sm:h-16 text-blue-600" />
              </motion.div>
              <h3 className="text-lg sm:text-2xl font-bold text-blue-900 mb-3 sm:mb-8">
                Beach Cleanups
              </h3>
              <p className="text-blue-800 leading-relaxed text-sm sm:text-base">
                Join organized community events to clean up our beautiful
                beaches. Every piece of trash removed makes a difference for
                marine life and our environment.
              </p>
            </motion.div>

            {/* Raising Awareness */}
            <motion.div
              className="text-center group"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-16 h-16 sm:w-32 sm:h-32 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-16 group-hover:bg-blue-200 transition-colors duration-300"
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                <Award className="w-6 h-6 sm:w-16 sm:h-16 text-blue-600" />
              </motion.div>
              <h3 className="text-lg sm:text-2xl font-bold text-blue-900 mb-3 sm:mb-8">
                Raising Awareness
              </h3>
              <p className="text-blue-800 leading-relaxed text-sm sm:text-base">
                Educate communities about the impact of ocean pollution and
                promote sustainable practices that protect our coastal
                ecosystems for future generations.
              </p>
            </motion.div>

            {/* Building a Community */}
            <motion.div
              className="text-center group"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-16 h-16 sm:w-32 sm:h-32 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-16 group-hover:bg-blue-200 transition-colors duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Users className="w-6 h-6 sm:w-16 sm:h-16 text-blue-600" />
              </motion.div>
              <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-3 sm:mb-8">
                Building a Community
              </h3>
              <p className="text-blue-800 leading-relaxed text-sm sm:text-base">
                Connect like-minded individuals who care about environmental
                protection. Together we create lasting change through collective
                action and shared responsibility.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* How Does It Work Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        {/* Text content */}
        <motion.div
          className="bg-gray-50 p-6 sm:p-8 lg:p-16 flex flex-col justify-center order-2 lg:order-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-xl sm:text-2xl md:text-4xl font-bold text-blue-900 mb-4 sm:mb-6"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            How Does It Work?
          </motion.h3>

          <motion.div
            className="space-y-3 sm:space-y-4 text-blue-800"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.p
              variants={fadeInUp}
              className="leading-relaxed text-sm sm:text-base"
            >
              Our community-driven approach makes beach cleanups accessible and
              impactful. We organize regular cleanup events where volunteers
              gather to remove trash and debris from coastal areas.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="leading-relaxed text-sm sm:text-base"
            >
              Each cleanup event is carefully planned with proper safety
              equipment and waste disposal coordination. We track our impact
              through detailed data collection, measuring pounds of trash
              removed and areas cleaned.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="leading-relaxed text-sm sm:text-base"
            >
              Beyond cleanups, we focus on education and awareness. Participants
              learn about marine ecosystem protection, sustainable practices,
              and how individual actions contribute to larger environmental
              solutions.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="leading-relaxed text-sm sm:text-base"
            >
              Join us in creating cleaner, healthier coastal environments. Every
              volunteer makes a meaningful difference in preserving our oceans
              for future generations.
            </motion.p>
          </motion.div>

          <motion.button
            className="mt-6 sm:mt-8 hover:bg-blue-900 hover:text-white text-blue-800 border border-blue-800 px-6 sm:px-8 py-3 sm:py-4 font-semibold inline-flex items-center gap-2 self-start transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm sm:text-base"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            Act Now
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </motion.button>
        </motion.div>

        {/* Turtle image */}
        <motion.div
          className="bg-cover bg-center h-64 sm:h-80 lg:h-auto relative overflow-hidden group order-1 lg:order-2"
          style={{
            backgroundImage: `url(${turtle})`,
          }}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </motion.div>
      </section>

      {/* Image Gallery Section */}
      <motion.section
        className="py-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-2 lg:grid-cols-3 h-64 sm:h-80 lg:h-[900px]">
          {/* Two people cleaning beach */}
          <motion.div
            className="bg-cover bg-center relative overflow-hidden group"
            style={{
              backgroundImage: `url(${pounds})`,
            }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>

          {/* Ocean waves */}
          <motion.div
            className="bg-cover bg-center relative overflow-hidden group"
            style={{
              backgroundImage: `url(${volunteer})`,
            }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>

          {/* Beach with trash */}
          <motion.div
            className="bg-cover bg-center relative overflow-hidden group"
            style={{
              backgroundImage: `url(${beach})`,
            }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>

          {/* Hand picking up trash */}
          <motion.div
            className="bg-cover bg-center relative overflow-hidden group"
            style={{
              backgroundImage: `url(${turtle})`,
            }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>
        </div>
      </motion.section>

      {/* Mailing list signup section */}
      <section className="">
        <motion.div
          className="p-6 sm:p-8 lg:p-16 flex flex-col justify-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-xl sm:text-2xl md:text-5xl font-bold text-blue-900 mb-4 sm:mb-6 text-center"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            Sign up to Our Mailing List
          </motion.h3>

          <motion.form
            className="space-y-3 sm:space-y-4 max-w-5xl mx-auto w-full"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            onSubmit={(e) => e.preventDefault()}
          >
            <motion.div
              className="flex gap-4 w-full items-center"
              variants={fadeInUp}
            >
              <div className="w-full">
                <label htmlFor="firstName" className="text-blue-900 text-sm">
                  First Name *
                </label>
                <input
                  type="text"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border-b border-blue-900 outline-none transition-all duration-300 text-sm sm:text-base"
                />
              </div>
              <div className="w-full">
                <label htmlFor="firstName" className="text-blue-900 text-sm">
                  Last Name *
                </label>
                <input
                  type="text"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border-b border-blue-900 outline-none transition-all duration-300 text-sm sm:text-base"
                />
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="w-full">
                <label htmlFor="firstName" className="text-blue-900 text-sm">
                  Email Address *
                </label>
                <input
                  type="text"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border-b border-blue-900 outline-none transition-all duration-300 text-sm sm:text-base"
                />
              </div>
            </motion.div>

            <motion.div
              className="flex gap-2 text-blue-900 items-center"
              variants={fadeInUp}
            >
              <input type="checkbox" name="" id="" />
              Yes, subscribe me to your newsletter
            </motion.div>

            <motion.button
              type="submit"
              className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 sm:py-4 font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg"
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Submit
            </motion.button>
          </motion.form>

          <motion.p
            className="text-xs sm:text-sm text-gray-500 text-center mt-3 sm:mt-4 max-w-md mx-auto"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            By subscribing you agree to our privacy policy and provide consent
            to receive updates from us.
          </motion.p>
        </motion.div>
      </section>
    </div>
  );
};

export default CoastalCleanupWebsite;
