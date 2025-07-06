import React from 'react';

const Resume = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
          Karan Juneja - Resume
        </h1>
        
        {/* PDF Viewer */}
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
          <iframe
            src="/Resume/Karan Resume Common.pdf"
            className="w-full h-[80vh] md:h-[85vh]"
            title="Karan Juneja Resume"
          />
        </div>
        
        {/* Download Button */}
        <div className="mt-6 text-center">
          <a
            href="/Resume/Karan Resume Common.pdf"
            download="Karan_Juneja_Resume.pdf"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </a>
        </div>
        
        {/* Back to Home */}
        <div className="mt-4 text-center">
          <a
            href="/"
            className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
          >
            ← Back to Portfolio
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume; 