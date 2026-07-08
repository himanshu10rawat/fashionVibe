import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Modal({
  buttonStyle,
  button,
  header,
  body,
  open,
  onOpenChange,
  onMouseEnter,
  onMouseLeave,
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        type="button"
        className={buttonStyle}
      >
        {button}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="uppercase font-bold">{header}</DialogTitle>
        </DialogHeader>
        {body}
      </DialogContent>
    </Dialog>
  );
}
