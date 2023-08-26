import PropTypes from "prop-types";
import {
  PiSuitcaseSimpleThin,
  PiClockLight,
  PiDotsThreeVerticalBold,
  PiLinkSimpleBold,
} from "react-icons/pi";

const AssessmentCard = ({
  assessment_name,
  assessment_date,
  duration = "00",
  questions = "00",
  no_of_registrations,
}) => {
  return (
    <div className="p-3 border rounded-lg relative md:scale-105 md:min-h-[160px]">
      <div className="flex md:flex-col md:items-start gap-4 md:gap-2">
        <div className="text-2xl rounded-xl bg-violet-200 text-violet-900 p-3">
          <PiSuitcaseSimpleThin />
        </div>
        <div>
          <span className="font-semibold">{assessment_name}</span>
          <div className="flex gap-1 text-sm items-center">
            <span>Job</span>
            <span className="inline-block bg-gray-400 w-[1px] h-3"></span>
            <PiClockLight className="text-gray-400" />
            <span className="text-gray-400">{assessment_date}</span>
          </div>
        </div>
        <div className="text-xl absolute top-3 right-2">
          <PiDotsThreeVerticalBold />
        </div>
      </div>

      <hr className="border bg-gray-400 border-dashed my-4" />

      <div className="font-semibold flex justify-between -mt-1 items-center">
        <div className="flex gap-2">
          <div>
            <div>{duration}</div>
            <div className="font-medium text-xs">Duration</div>
          </div>
          <div>
            <div>{questions}</div>
            <div className="font-medium text-xs">Questions</div>
          </div>
        </div>
        <span className="flex gap-2">
          <button className="border-primary-blue font-semibold flex border rounded-full px-2 text-center items-center gap-1 text-sm">
            <PiLinkSimpleBold />
            <span>Share</span>
          </button>
          {!no_of_registrations ? (
            <div className="flex items-center gap-1">
              <div className="bg-blue-600 border-blue-600 w-7 text-white rounded-full border-2 text-center">
                <span className="text-sm">LP</span>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-1">
              <div className="bg-blue-600 border-white w-7 text-white rounded-full border text-center">
                <span className="text-sm">LP</span>
              </div>
              <div
                className={`bg-purple-600 border-white w-7 text-white rounded-full border text-center -ml-5 ${
                  no_of_registrations?.length > 5 && "hidden"
                }`}
              >
                <span className="text-sm">LP</span>
              </div>
              <div className="bg-pink-600 border-white w-7 text-white rounded-full border text-center -ml-5">
                <span className="text-sm">LP</span>
              </div>
              <h1 className="text-sm md:hidden">{no_of_registrations}</h1>
            </div>
          )}
        </span>
      </div>
    </div>
  );
};

AssessmentCard.propTypes = {
  assessment_name: PropTypes.string.isRequired,
  assessment_date: PropTypes.string.isRequired,
  duration: PropTypes.string,
  questions: PropTypes.string,
  no_of_registrations: PropTypes.string,
};

export default AssessmentCard;
