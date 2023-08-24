import { AiOutlinePlus } from "react-icons/Ai";
import NewAssessmentModal from "./NewAssessmentModal";
import { useState } from "react";
import AssessmentCard from "./AssesmentCard";
import { IoMdAdd } from "react-icons/Io";

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
      <div className="mt-4 pb-8 grid lg:grid-cols-3 md:gap-6 lg:gap-10 gap-4 items-center mx-4">
        <AssessmentCard
          assessment_name={"Math Assessment"}
          assessment_date={"20 Apr 23"}
          duration={"00"}
          questions={"00"}
        />
        <AssessmentCard
          assessment_name={"Math Assessment"}
          assessment_date={"20 Apr 23"}
          duration={"00"}
          questions={"00"}
          no_of_registrations={"+324"}
        />
        <div className="grid gap-4 md:hidden">
          <AssessmentCard
            assessment_name={"Math Assessment"}
            assessment_date={"20 Apr 23"}
            duration={"00"}
            questions={"00"}
            no_of_registrations={"+324"}
          />
          <AssessmentCard
            assessment_name={"Math Assessment"}
            assessment_date={"20 Apr 23"}
            duration={"00"}
            questions={"00"}
            no_of_registrations={"+324"}
          />
          <AssessmentCard
            assessment_name={"Math Assessment"}
            assessment_date={"20 Apr 23"}
            duration={"00"}
            questions={"00"}
            no_of_registrations={"+324"}
          />
          <AssessmentCard
            assessment_name={"Math Assessment"}
            assessment_date={"20 Apr 23"}
            duration={"00"}
            questions={"00"}
            no_of_registrations={"+324"}
          />
          <AssessmentCard
            assessment_name={"Math Assessment"}
            assessment_date={"20 Apr 23"}
            duration={"00"}
            questions={"00"}
            no_of_registrations={"+324,4090"}
          />
        </div>
      </div>
      <div
        onClick={() => setAssessmentModal(true)}
        className="fixed bottom-4 right-4 z-30 text-3xl bg-blue-400 rounded-full p-2 text-white"
      >
        <IoMdAdd />
      </div>
    </>
  );
};

export default Assessments;
