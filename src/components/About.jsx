import blogImg from "/blogs.jpg";
import Header from "./Header";

const About = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="flex justify-center px-5 mt-10">
        <img src={blogImg} alt="" />
      </div>
      <div>
        <p className="text-xl font-bold mt-10 px-5 text-center ">
          Our <span className="text-blue-700">blog</span> website is designed to
          be a vibrant platform where users can share their ideas, stories, and
          expertise with a broad audience. Here, anyone can create an account to
          start writing posts on topics they're passionate about, ranging from
          personal experiences to professional insights. Readers can easily
          navigate through various categories, leave comments, and engage in
          discussions, fostering a sense of community. Additionally, the website
          allows users to follow their{" "}
          <span className="text-blue-700">favourite</span> bloggers, receive
          notifications about new posts, and share content on social media,
          ensuring that interesting and valuable information reaches a wider
          audience. Our mission is to create a space where{" "}
          <span className="text-blue-700">voices</span> can be heard,
          connections can be made, and knowledge can be shared freely.
        </p>
      </div>
    </div>
  );
};

export default About;
