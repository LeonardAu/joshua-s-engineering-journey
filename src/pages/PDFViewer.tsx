import { useSearchParams } from "react-router-dom";

const PDFViewer = () => {
  const [searchParams] = useSearchParams();
  const pdfUrl = searchParams.get("file") || "";
  const title = searchParams.get("title") || "PDF Document";

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="bg-primary/10 p-4 text-center">
        <h1 className="text-lg font-semibold text-primary">{title}</h1>
      </div>
      <iframe
        src={pdfUrl}
        className="flex-1 w-full"
        style={{ height: "calc(100vh - 60px)" }}
        title={title}
      />
    </div>
  );
};

export default PDFViewer;
