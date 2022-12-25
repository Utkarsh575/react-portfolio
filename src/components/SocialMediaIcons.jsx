import Linkedin from "../../assets/linkedin.svg";
import Github from "../../assets/github.svg";
import Twitter from "../../assets/twitter.svg";
import Instagram from "../../assets/instagram.svg";
import Discord from "../../assets/discord.svg";
const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/utkarsh575
      "
        rel="noreferrer"
        target="_blank"
      >
        <img className="invert w-[30px]" src={Linkedin} alt="" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.github.com/utkarsh575
      "
        rel="noreferrer"
        target="_blank"
      >
        <img className="invert w-[30px] " src={Github} alt="" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.twitter.com/utkarsh575
      "
        rel="noreferrer"
        target="_blank"
      >
        <img className="invert w-[30px]" src={Twitter} alt="" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com/utkarsh575
      "
        rel="noreferrer"
        target="_blank"
      >
        <img className="invert w-[30px]" src={Instagram} alt="" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.discordapp.com/users/319439432006762497
      "
        rel="noreferrer"
        target="_blank"
      >
        <img className="invert w-[30px] translate-y-2" src={Discord} alt="" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
