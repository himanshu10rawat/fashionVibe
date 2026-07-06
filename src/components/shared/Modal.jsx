import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Modal({ button, header, body, open, onOpenChange }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger
        type="button"
        className="capitalize border border-gray-200 py-2.5 px-5 rounded-full text-gray-800 text-sm flex items-center gap-2 bg-white cursor-pointer transition-colors duration-200 hover:bg-gray-100"
      >
        {button}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{header}</DialogTitle>
        </DialogHeader>
        {body}
      </DialogContent>
    </Dialog>
  );
}
