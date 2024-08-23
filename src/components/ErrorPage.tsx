import React from "react";

type FallbackProps = {
  error: Error;
  reset: () => void;
};

const ErrorPage = (props: FallbackProps) => {
  const { error, reset } = props;

  return (
    <div className="error-page min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-semibold text-red-600 mb-4">Error!! 🌍</h1>
        <p className="text-2xl text-gray-300 font-semibold">{error.message}</p>
        <button className="mt-4" onClick={reset}>
          Reload Page
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
