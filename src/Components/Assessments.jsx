import { AiOutlinePlus } from "react-icons/Ai";
import { RxEnvelopeClosed } from "react-icons/Rx";
import { AiOutlineClockCircle } from "react-icons/Ai";
import { BsThreeDotsVertical } from "react-icons/Bs";

const Assessments = () => {
  return (
    <>
      <div className="bg-slate-100  flex flex-col items-center border-2 rounded-lg py-7 mx-5 border-dotted mt-8">
        <div className="text-3xl rounded-full bg-white py-3 px-3">
          <AiOutlinePlus />
        </div>
        <div className="font-semibold items-center text-lg">New Assessment</div>
        <div className="text-xs  mx-8 mt-2">
          From here you can add questions of multiple types like MCQs,
          subjective (text or paragraph)!
        </div>
      </div>
      <div className="mt-5 border-2 mx-5 px-5 py-6 rounded-lg">
        <div className="flex justify-between ">
          <div className="flex gap-3">
            <div className="text-2xl border-2 rounded-xl bg-purple-100 text-indigo-500 py-3 px-3">
              <RxEnvelopeClosed />
            </div>
            <div>
              <span className="font-semibold">Math Assessment</span>
              <div className="flex gap-3">
                <div>Job</div>
                <div className="flex items-center gap-1 text-gray-400">
                  <span>
                    <AiOutlineClockCircle />
                  </span>
                  <span>20 Apr 23</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-xl">
            <BsThreeDotsVertical />
          </div>
        </div>
        <hr className="border-2 text-xl bg-slate-400 border-dashed mt-4" />
        <div>
          <div></div>
        </div>
      </div>
    </>
  );
};
//cremaffin plus
export default Assessments;
