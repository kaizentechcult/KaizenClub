import PropTypes from "prop-types";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Slide from "../../components/Slider/slider";
import GitHubIcon from "@mui/icons-material/GitHub";
// import

const Member = ({ name, post, img, linkedin, github }) => {
  return (
    <Slide>
      <div className="mb-10 card bg-slate-800 rounded-[1rem] w-[20rem]  p-4 flex-col items-center justify-center hover:bg-slate-700 transition-all duration-300">
        <img src={img} alt="img" className="rounded-full h-[12rem] m-auto" />
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
    </Slide>
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
