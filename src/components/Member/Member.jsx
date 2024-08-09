import PropTypes from "prop-types";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Member = ({ name, post, img, linkedin, github }) => {
  return (
    <div className="flex items-center p-8 sm:w-2/5 lg:w-[31%] border border-gray-800 m-4 rounded-lg">
      <div className="flex items-center">
        <LazyLoadImage
          src={img}
          alt="img"
          effect="blur"
          width={112}
          className="rounded-full"
        />
      </div>
      <div className="text-center flex flex-col gap-2 items-center justify-center w-full">
        <p className="font-semibold">{name}</p>
        {/* <p className="font-semibold">Coding Club</p> */}
        <p className="text-gray-900">{post}</p>
        <div className="flex gap-10 justify-center">
          {github && (
            <a target="_blank" aria-label="Github" href={github}>
              <img alt="github" src="icons/github.svg" />
            </a>
          )}
          {linkedin && (
            <a target="_blank" aria-label="Linkedin" href={linkedin}>
              <img alt="linkedin" src="icons/linkedin.svg" />
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
