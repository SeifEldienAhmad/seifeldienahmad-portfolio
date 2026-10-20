import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Credential = {
  title: string;
  image: string;
};

export function CredentialPreview({
  credential,
  className,
  thumbnailClassName,
  titleClassName,
}: {
  credential: Credential;
  className: string;
  thumbnailClassName: string;
  titleClassName: string;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          aria-label={`Preview ${credential.title}`}
          className={className}
        >
          <img
            src={credential.image}
            alt=""
            loading="lazy"
            className={thumbnailClassName}
          />
          <span className={titleClassName}>{credential.title}</span>
        </button>
      </DialogTrigger>
      <DialogContent className="w-[calc(100vw-2rem)] max-w-[min(96vw,80rem)] gap-0 overflow-hidden border-white/10 bg-bg-panel p-2 sm:p-4">
        <DialogTitle className="sr-only">{credential.title}</DialogTitle>
        <img
          src={credential.image}
          alt={credential.title}
          className="mx-auto max-h-[82vh] w-full object-contain"
        />
      </DialogContent>
    </Dialog>
  );
}
