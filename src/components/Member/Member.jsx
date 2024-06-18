import PropTypes from "prop-types";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Member = ({ name, post, img, linkedin, github }) => {
  return (
    <div className="flex flex-col h-[30rem] pb-10 md:pb-0 justify-evenly md:hover:bg-slate-800 w-full sm:w-2/5 lg:w-[30%] border border-gray-800 m-1 rounded-lg">
      <div>
        <img src={img} alt="img" className="rounded-full w-[12rem] m-auto" />
      </div>
      <div className="text-center text-white flex flex-col gap-4">
        <p className="font-semibold">{name}</p>
        <p className="font-semibold">Coding Club</p>
        <p className="text-gray-300">{post}</p>
        <div className="flex gap-10 justify-center">
          {github && (
            <a aria-label="Github" href={github}>
              <GitHubIcon />
            </a>
          )}
          {linkedin && (
            <a aria-label="Linkedin" href={linkedin}>
              <LinkedInIcon />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
Member.propTypes = {
  name: PropTypes.string.isRequired,
  post: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  linkedin: PropTypes.string,
  github: PropTypes.string,
};

export default Member;
