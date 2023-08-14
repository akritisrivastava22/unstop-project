import { AiOutlinePlus } from "react-icons/Ai";
import { RxEnvelopeClosed } from "react-icons/Rx";
import { AiOutlineClockCircle } from "react-icons/Ai";
import { BsThreeDotsVertical } from "react-icons/Bs";
import { RxDividerVertical } from "react-icons/Rx";
import { AiOutlineLink } from "react-icons/Ai";

const Assessments = () => {
  return (
    <>
      {/* New Assessment Box */}
      <div className="bg-slate-100  flex flex-col items-center border-2 rounded-lg py-7 mx-5 border-dotted mt-6">
        <div className="text-3xl rounded-full bg-white py-3 px-3">
          <AiOutlinePlus />
        </div>
        <div className="font-semibold items-center text-lg">New Assessment</div>
        <div className="text-xs  mx-8 mt-2">
          From here you can add questions of multiple types like MCQs,
          subjective (text or paragraph)!
        </div>
      </div>

      {/* First Assessment Box */}
      <div className="mt-5 border-2 mx-5 px-5 py-3 rounded-xl">
        <div className="flex justify-between ">
          <div className="flex gap-3">
            <div className="text-2xl border-2 rounded-xl bg-purple-100 text-indigo-500 py-3 px-3">
              <RxEnvelopeClosed />
            </div>
            <div>
              <span className="font-semibold">Math Assessment</span>
              <div className="flex gap-1 ">
                <div className="">Job</div>
                <div className=" text-xl text-gray-400 ">
                  <RxDividerVertical />
                </div>
                <div className="-ml-2 flex items-center gap-1 text-gray-400">
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
        <hr className=" border-1  text-xl bg-slate-400 border-dashed mt-4" />

        <div className="text-xs  font-semibold flex  justify-between">
          <div className="flex gap-2 mt-2">
            <div className="">
              <div>00</div>
              <div className="font-medium">Duration</div>
            </div>
            <div className="">
              <div>00</div>
              <div className="font-medium">Questions</div>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="border-stone-400 font-semibold flex border-2 rounded-full text-xs px-2 text-center mt-2 mb-1 items-center gap-1">
              <AiOutlineLink />
              <button type="button" class=" ">
                Share
              </button>
            </div>
            <div className="mt-1 bg-blue-600 border-blue-600 text-white rounded-full border-2 px-2 py-2">
              <span className="">LP</span>
            </div>
          </div>
        </div>
      </div>

      {/* Second Assessment Box */}
      <div className="mt-5 border-2 mx-5 px-5 py-3 rounded-xl">
        <div className="flex justify-between ">
          <div className="flex gap-3">
            <div className="text-2xl border-2 rounded-xl bg-purple-100 text-indigo-500 py-3 px-3">
              <RxEnvelopeClosed />
            </div>
            <div>
              <span className="font-semibold">Math Assessment</span>
              <div className="flex gap-1 ">
                <div className="">Job</div>
                <div className=" text-xl text-gray-400 ">
                  <RxDividerVertical />
                </div>
                <div className="-ml-2 flex items-center gap-1 text-gray-400">
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
        <hr className=" border-1  text-xl bg-slate-400 border-dashed mt-4" />

        <div className="text-xs  font-semibold flex  justify-between">
          <div className="flex gap-2 mt-2">
            <div className="">
              <div>00</div>
              <div className="font-medium">Duration</div>
            </div>
            <div className="">
              <div>00</div>
              <div className="font-medium">Questions</div>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="border-stone-400 font-semibold flex border-2 rounded-full text-xs px-2 text-center mt-2 mb-1 items-center gap-1">
              <AiOutlineLink />
              <button type="button" class=" ">
                Share
              </button>
            </div>
            <div className="mt-1 bg-blue-600 border-blue-600 text-white rounded-full border-2 px-2 py-2">
              <span className="">LP</span>
            </div>
          </div>
        </div>
      </div>

      {/* Third Assessment Box */}
      <div className="mt-5 border-2 mx-5 px-5 py-3 rounded-xl">
        <div className="flex justify-between ">
          <div className="flex gap-3">
            <div className="text-2xl border-2 rounded-xl bg-purple-100 text-indigo-500 py-3 px-3">
              <RxEnvelopeClosed />
            </div>
            <div>
              <span className="font-semibold">Math Assessment</span>
              <div className="flex gap-1 ">
                <div className="">Job</div>
                <div className=" text-xl text-gray-400 ">
                  <RxDividerVertical />
                </div>
                <div className="-ml-2 flex items-center gap-1 text-gray-400">
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
        <hr className=" border-1  text-xl bg-slate-400 border-dashed mt-4" />

        <div className="text-xs  font-semibold flex  justify-between">
          <div className="flex gap-2 mt-2">
            <div className="">
              <div>00</div>
              <div className="font-medium">Duration</div>
            </div>
            <div className="">
              <div>00</div>
              <div className="font-medium">Questions</div>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="border-stone-400 font-semibold flex border-2 rounded-full text-xs px-2 text-center mt-2 mb-1 items-center gap-1">
              <AiOutlineLink />
              <button type="button" class=" ">
                Share
              </button>
            </div>
            <div className="mt-1 bg-blue-600 border-blue-600 text-white rounded-full border-2 px-2 py-2">
              <span className="">LP</span>
            </div>
          </div>
        </div>
      </div>

      {/* Fourth Assessment Box */}
      <div className="mt-5 border-2 mx-5 px-5 py-3 rounded-xl">
        <div className="flex justify-between ">
          <div className="flex gap-3">
            <div className="text-2xl border-2 rounded-xl bg-purple-100 text-indigo-500 py-3 px-3">
              <RxEnvelopeClosed />
            </div>
            <div>
              <span className="font-semibold">Math Assessment</span>
              <div className="flex gap-1 ">
                <div className="">Job</div>
                <div className=" text-xl text-gray-400 ">
                  <RxDividerVertical />
                </div>
                <div className="-ml-2 flex items-center gap-1 text-gray-400">
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
        <hr className=" border-1  text-xl bg-slate-400 border-dashed mt-4" />

        <div className="text-xs  font-semibold flex  justify-between">
          <div className="flex gap-2 mt-2">
            <div className="">
              <div>00</div>
              <div className="font-medium">Duration</div>
            </div>
            <div className="">
              <div>00</div>
              <div className="font-medium">Questions</div>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="border-stone-400 font-semibold flex border-2 rounded-full text-xs px-2 text-center mt-2 mb-1 items-center gap-1">
              <AiOutlineLink />
              <button type="button" class=" ">
                Share
              </button>
            </div>
            <div className="mt-1 bg-blue-600 border-blue-600 text-white rounded-full border-2 px-2 py-2">
              <span className="">LP</span>
            </div>
          </div>
        </div>
      </div>

      {/* Fifth Assessment Box */}
      <div className="mt-5 border-2 mx-5 px-5 py-3 rounded-xl">
        <div className="flex justify-between ">
          <div className="flex gap-3">
            <div className="text-2xl border-2 rounded-xl bg-purple-100 text-indigo-500 py-3 px-3">
              <RxEnvelopeClosed />
            </div>
            <div>
              <span className="font-semibold">Math Assessment</span>
              <div className="flex gap-1 ">
                <div className="">Job</div>
                <div className=" text-xl text-gray-400 ">
                  <RxDividerVertical />
                </div>
                <div className="-ml-2 flex items-center gap-1 text-gray-400">
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
        <hr className=" border-1  text-xl bg-slate-400 border-dashed mt-4" />

        <div className="text-xs  font-semibold flex  justify-between">
          <div className="flex gap-2 mt-2">
            <div className="">
              <div>00</div>
              <div className="font-medium">Duration</div>
            </div>
            <div className="">
              <div>00</div>
              <div className="font-medium">Questions</div>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="border-stone-400 font-semibold flex border-2 rounded-full text-xs px-2 text-center mt-2 mb-1 items-center gap-1">
              <AiOutlineLink />
              <button type="button" class=" ">
                Share
              </button>
            </div>
            <div className="mt-1 bg-blue-600 border-blue-600 text-white rounded-full border-2 px-2 py-2">
              <span className="">LP</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sixth Assessment Box */}
      <div className="mt-5 border-2 mx-5 px-5 py-3 rounded-xl">
        <div className="flex justify-between ">
          <div className="flex gap-3">
            <div className="text-2xl border-2 rounded-xl bg-purple-100 text-indigo-500 py-3 px-3">
              <RxEnvelopeClosed />
            </div>
            <div>
              <span className="font-semibold">Math Assessment</span>
              <div className="flex gap-1 ">
                <div className="">Job</div>
                <div className=" text-xl text-gray-400 ">
                  <RxDividerVertical />
                </div>
                <div className="-ml-2 flex items-center gap-1 text-gray-400">
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
        <hr className=" border-1  text-xl bg-slate-400 border-dashed mt-4" />

        <div className="text-xs  font-semibold flex  justify-between">
          <div className="flex gap-2 mt-2">
            <div className="">
              <div>00</div>
              <div className="font-medium">Duration</div>
            </div>
            <div className="">
              <div>00</div>
              <div className="font-medium">Questions</div>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="border-stone-400 font-semibold flex border-2 rounded-full text-xs px-2 text-center mt-2 mb-1 items-center gap-1">
              <AiOutlineLink />
              <button type="button" class=" ">
                Share
              </button>
            </div>
            <div className="mt-1 bg-blue-600 border-blue-600 text-white rounded-full border-2 px-2 py-2">
              <span className="">LP</span>
            </div>
          </div>
        </div>
      </div>

      {/* Seventh Assessment Box */}
      <div className="mt-5 border-2 mx-5 px-5 py-3 rounded-xl mb-5">
        <div className="flex justify-between ">
          <div className="flex gap-3">
            <div className="text-2xl border-2 rounded-xl bg-purple-100 text-indigo-500 py-3 px-3">
              <RxEnvelopeClosed />
            </div>
            <div>
              <span className="font-semibold">Math Assessment</span>
              <div className="flex gap-1 ">
                <div className="">Job</div>
                <div className=" text-xl text-gray-400 ">
                  <RxDividerVertical />
                </div>
                <div className="-ml-2 flex items-center gap-1 text-gray-400">
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
        <hr className=" border-1  text-xl bg-slate-400 border-dashed mt-4" />

        <div className="text-xs  font-semibold flex  justify-between">
          <div className="flex gap-2 mt-2">
            <div className="">
              <div>00</div>
              <div className="font-medium">Duration</div>
            </div>
            <div className="">
              <div>00</div>
              <div className="font-medium">Questions</div>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="border-stone-400 font-semibold flex border-2 rounded-full text-xs px-2 text-center mt-2 mb-1 items-center gap-1">
              <AiOutlineLink />
              <button type="button" class=" ">
                Share
              </button>
            </div>
            <div className="mt-1 bg-blue-600 border-blue-600 text-white rounded-full border-2 px-2 py-2">
              <span className="">LP</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Assessments;
