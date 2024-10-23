import { ArrowPathIcon } from "@heroicons/react/24/outline";

const Loader = ({ className, size }: { className?: string; size?: number }) => {
  return (
    <div>
      <ArrowPathIcon
        className={`size-${!size ? "10" : size} text-white animate-spin ${className}`}
      />
    </div>
  );
};

export default Loader;
