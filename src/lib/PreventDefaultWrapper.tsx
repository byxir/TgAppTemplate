import { useEffect } from "react";

const PreventDefaultWrapper = ({
  children,
  className,
  noOverflow = false,
}: {
  children: React.ReactNode;
  className?: string;
  noOverflow?: boolean;
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTo(0, 0);
  }, [children]);
  return (
    <div className="w-full overflow-x-hidden overscroll-y-contain touch-none">
      <div
        className={`w-full h-[120vh] pb-[40vh] ${noOverflow ? "overflow-y-hidden" : "overflow-y-scroll"} overflow-x-hidden`}
      >
        <div className={className}>{children}</div>
      </div>
    </div>
  );
};

export default PreventDefaultWrapper;
