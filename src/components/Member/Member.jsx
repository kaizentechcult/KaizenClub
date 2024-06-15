import PropTypes from "prop-types";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Member = ({ name, post, img, linkedin, github }) => {
  return (
    <div className="card bg-slate-800 rounded-[1rem] w-fit  p-8 flex-col items-center justify-center hover:bg-slate-700 transition-all duration-300">
      <img src={img} alt="img" className="rounded-full w-64 m-auto" />
      <div className="text-center pt-10 text-white">
        <p className="font-semibold">{name}</p>
        <p className="text-gray-300">{post}</p>
        <div className="flex gap-2 justify-center">
          {github && (
            <a href={github}>
              <GitHubIcon />
            </a>
          )}
          {linkedin && (
            <a href={linkedin}>
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
