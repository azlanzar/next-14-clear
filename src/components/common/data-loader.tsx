import { FiLoader } from "react-icons/fi";

const DataLoader = () => {
  return (
    <div className="flex w-full justify-center items-center h-[40vh]">
      <FiLoader className="animate-spin" size={24} />
    </div>
  );
};

export default DataLoader;
