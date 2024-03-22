import { logo } from "../assets";
import { linkedin } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img
          src={logo}
          alt="sum_logo"
          className="h-20 w-27 flex-no-shrink fill-current"
        />
        <button
          type="button"
          onClick={() =>
            window.open("https://github.com/richmondazadze/AI-Summarizer/")
          }
          className="blue_btn font-bold"
        >
          Github
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="blue_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Developed by &copy; (2024){" "}
        <a
          href="https://www.linkedin.com/in/richmond-azadze/"
          className="text-indigo-600 visited:text-gray-600 ..."
          target="blank"
        >
          <span className="text-blue-600 underline-offset-2 flex flex-row">
            <img
              src={linkedin}
              alt="linkedin"
              className="h-7 w-7 fill-current mr-1"
            />
            Richmond Azadze
          </span>
        </a>
      </h2>
      <h2 className="desc">
        Effortlessly summarize lengthy articles with our AI tool by providing
        the URL of the article. Save time while gaining quick insights. Stay
        focused on what matters most with our efficient summarizer,
        revolutionizing the way you consume information.
      </h2>
    </header>
  );
};

export default Hero;
