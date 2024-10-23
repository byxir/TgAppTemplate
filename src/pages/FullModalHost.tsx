import { Dialog, DialogContent } from "../components/ui/dialog";

export const FullModalHost = ({
  open,
  setOpen,
  children,
}: {
  open: boolean;
  setOpen: any;
  children: React.ReactNode;
}) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-[90vw] h-[95vh] font-man p-4 bg-neutral-900 rounded-3xl">
        {children}
      </DialogContent>
    </Dialog>
  );
};
