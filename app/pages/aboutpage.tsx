import Image from "next/image";
import Link from "next/link";

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row items-center p-8 bg-gray-50 rounded-lg shadow-md">
      {/* Left Section: Profile Image */}
      <div className="flex justify-center md:w-1/3 mb-6 md:mb-0">
        <div className="relative w-48 h-48">
          <Image
            src="/path-to-your-image.jpg"
            alt="Your Image"
            className="rounded-full object-cover"
            layout="fill"
          />
        </div>
      </div>

      {/* Right Section: About Text */}
      <div className="md:w-2/3 md:pl-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
        <h3 className="text-xl font-semibold text-indigo-600 mb-2">5 Years of Experience in Development</h3>
        <p className="text-lg text-gray-700 mb-6">
          I am passionate about web development, creating user-centered designs, and solving complex problems.
          Over the years, I have honed my skills in development and design, working with a variety of technologies to build engaging digital experiences.
        </p>

        <div className="space-x-4 mb-6">
          <button className="bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition">
            My Skills
          </button>
          <button className="bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition">
            Awards
          </button>
          <button className="bg-indigo-600 text-white py-2 px-6 rounded-lg hover:bg-indigo-700 transition">
            Education
          </button>
        </div>

        <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700 mb-6">
          <li>User Experience Design - UI/UX</li>
          <li>Web & User Interface Design - Development</li>
          <li>Interaction Design - Animation</li>
        </ul>

        <div className="mb-6">
          <button className="bg-red-600 text-white py-2 px-6 rounded-lg hover:bg-red-700 transition">
            Download CV
          </button>
        </div>

        <p className="text-lg text-gray-600 italic">
          I began my journey as a developer during college and have grown with the support of mentors. I've worked on numerous projects, continuously refining my skills and learning new technologies.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
