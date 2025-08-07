import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

interface PdfModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  pdfUrl: string;
  title?: string;
}

export function PdfModal({
  isOpen,
  onOpenChange,
  pdfUrl,
  title
}: PdfModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl w-full h-[90vh] p-0">
        <DialogHeader>
          <DialogTitle className="px-6 pt-6">
            {title || "Tài liệu PDF"}
          </DialogTitle>
        </DialogHeader>
        <div className="h-full w-full px-6 pb-6">
          <iframe
            src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
            className="w-full h-full rounded-lg border"
            title={title}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
