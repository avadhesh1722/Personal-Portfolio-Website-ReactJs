import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-100 bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8 mt-20">
          <p className="text-4xl font-bold inline border-b-4 border-gray-400">About</p>
        </div>
        <p className="text-xl mt-10">
        ⚡ A 4th year Computer Engineering Student at Dr. D. Y. Patil Institute of Technology, Pimpri
        </p>
        <br />
        <p className="text-xl">
        ⚡ <strong>Contest Rating 1423 </strong> and <strong>2.7⭐</strong>on Leetcode and at Codechef. <strong>Max Rating(1254)</strong>.
        </p>
        <br/>
        <p className="text-xl">
        ⚡ Solved over <strong>600+ problems</strong> of Data Structures and Algorithms across Platforms like <strong><a href="https://leetcode.com/the_invincible_coder/">Leetcode</a></strong> , <strong><a href="https://auth.geeksforgeeks.org/user/avadheshvora2002">Geeks for Geeks</a></strong> And <strong><a href="https://www.codechef.com/users/avadhesh_1722">CodeChef</a></strong>.
        </p>
        <br/>
        <p className="text-xl">
        ⚡  Achieved Marks in <strong>Top 1% tile</strong> in Maharashtra XIIth State Board Examination 2019 with <strong>Percentage of 80.77</strong>.
        </p>
        <br/>
        { <p className="text-xl">
        ⚡  Achieved <strong>All India Rank 5664</strong> and <strong>Intitute rank 31</strong> in <strong>CodeCaze</strong> coding competition organized by Coding Ninjas.
        </p> }
        <p className="text-xl mb-20">
        ⚡  I have learnt <strong>Full Stack Web Development (MERN) 👨‍💻</strong> and also have developed some hands on Projects on the same.
        </p>
        <br/>
      </div>
    </div>
  );
};

export default About;
