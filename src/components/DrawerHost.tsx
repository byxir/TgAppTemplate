import { Dispatch, SetStateAction } from "react";
import { Drawer, DrawerClose, DrawerContent } from "./ui/drawer";
import { X } from "lucide-react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const DrawerHost = ({
  children,
  open,
  setOpen,
  icon,
  className,
  onClose,
  isTransparentIcon = false,
  bigImage = false,
  title,
  scrollable = false,
}: {
  children?: React.ReactNode;
  open: boolean;
  setOpen?: Dispatch<SetStateAction<boolean>>;
  icon?: string;
  className?: string;
  onClose?: () => void;
  isTransparentIcon?: boolean;
  addPadding?: boolean;
  bigImage?: boolean;
  title?: string;
  scrollable?: boolean;
}) => {
  return (
    <Drawer open={open} onOpenChange={setOpen} onClose={onClose}>
      <DrawerContent
        className={`${scrollable && "overflow-auto scrollable-element"} bg-darkBg pt-6 border-t-2 border-t-pinkAccent trasnsition-all ease-in-out`}
      >
        <div className="relative flex justify-center text-xl font-bold">
          {title}
          <XMarkIcon
            className="absolute right-6 size-6"
            onClick={() => setOpen && setOpen(false)}
          />
        </div>
        {children}
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerHost;
