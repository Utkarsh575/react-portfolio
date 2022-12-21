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
        <img className="invert w-[30px]" src="./src/assets/linkedin.svg" alt="" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.github.com/utkarsh575
      "
        rel="noreferrer"
        target="_blank"
      >
        <img className="invert w-[30px] " src="./src/assets/github.svg" alt="" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.twitter.com/utkarsh575
      "
        rel="noreferrer"
        target="_blank"
      >
        <img className="invert w-[30px]" src="./src/assets/twitter.svg" alt="" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com/utkarsh575
      "
        rel="noreferrer"
        target="_blank"
      >
        <img className="invert w-[30px]" src="./src/assets/instagram.svg" alt="" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.discordapp.com/users/319439432006762497
      "
        rel="noreferrer"
        target="_blank"
      >
        <img
          className="invert w-[30px] translate-y-2"
          src="./src/assets/discord.svg"
          alt=""
        />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
