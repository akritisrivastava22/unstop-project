import { AiOutlinePlus } from "react-icons/Ai";
import { RxEnvelopeClosed } from "react-icons/Rx";
import { AiOutlineClockCircle } from "react-icons/Ai";
import { BsThreeDotsVertical } from "react-icons/Bs";
import { RxDividerVertical } from "react-icons/Rx";
import { AiOutlineLink } from "react-icons/Ai";
import NewAssessmentModal from "./NewAssessmentModal";
import { useState } from "react";

const Assessments = () => {
  const [assessmentModal, setAssessmentModal] = useState(false);
  return (
    <>
      {/* New Assessment Box */}
      <div
        onClick={() => setAssessmentModal(true)}
        className="bg-slate-100  flex flex-col items-center border-2 rounded-lg py-7 mx-5 border-dotted mt-6"
      >
        <div className="text-3xl rounded-full bg-white py-3 px-3">
          <AiOutlinePlus />
        </div>
        <div className="font-semibold items-center text-lg">New Assessment</div>
        <div className="text-xs  mx-8 mt-2">
          From here you can add questions of multiple types like MCQs,
          subjective (text or paragraph)!
        </div>
      </div>
      {assessmentModal && (
        <NewAssessmentModal
          assessmentModal={assessmentModal}
          closeModal={() => setAssessmentModal(false)}
        />
      )}
    </>
  );
};

export default Assessments;
