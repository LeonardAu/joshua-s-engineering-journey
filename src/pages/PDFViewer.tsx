import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const PDFViewer = () => {
  const [searchParams] = useSearchParams();
  const pdfUrl = searchParams.get("file") || "";
  const title = searchParams.get("title") || "PDF Document";

  return (
    <>
      <Helmet>
        <title>{title} | Leonard Joshua Bulawan</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Helmet>
      <div className="w-screen h-screen">
        <iframe
          src={pdfUrl}
          className="w-full h-full border-0"
          title={title}
        />
      </div>
    </>
  );
};

export default PDFViewer;
