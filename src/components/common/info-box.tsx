import { FiInfo } from "react-icons/fi";

const InfoBox = ({ message }: { message: string }) => {
  return (
    <div className="flex my-4 text-gray-500 items-center gap-2 px-3 py-2 rounded-md shadow-sm border-[1px] border-slate-100">
      <FiInfo size={20} />
      <p className="text-sm">{message}</p>
    </div>
  );
};

export default InfoBox;
