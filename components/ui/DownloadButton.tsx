import React from "react";

const DownloadButton: React.FC = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "./Yashwanth_HS_Resume.pdf";
    link.download = "Yashwanth_HS_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button onClick={handleDownload} className="text-blue-400">
      Download Resume ⬇️
    </button>
  );
};

export default DownloadButton;
