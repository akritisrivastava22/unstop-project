import PropTypes from "prop-types";
import { RxCross2 } from "react-icons/Rx";

const SkillButton = ({ skillName }) => {
  return (
    <div className="flex items-center gap-1 bg-blue-100 py-1 px-2 rounded-full text-xs font-semibold">
      <span>{skillName}</span>
      <span>
        <RxCross2 />
      </span>
    </div>
  );
};

export default SkillButton;

SkillButton.propTypes = {
  skillName: PropTypes.string.isRequired,
};
