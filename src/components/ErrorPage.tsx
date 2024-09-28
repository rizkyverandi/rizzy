import React from "react";
import SectionWrapper from "./SectionWrapper";
import Container from "./Container";

type FallbackProps = {
  error: Error;
  reset: () => void;
};

const ErrorPage = (props: FallbackProps) => {
  const { error, reset } = props;

  return (
    <SectionWrapper >
      <Container>
        <div className="min-h-screen flex flex-col items-center justify-center">
          <h1 className="text-5xl font-semibold text-red-600">
            Error!! 🌍
          </h1>
          <p className="text-2xl text-gray-300 font-semibold">
            {error.message}
          </p>
          {/* <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded" onClick={reset}>
            Reload Page
          </button> */}
        </div>
      </Container>
    </SectionWrapper>
  );
};

export default ErrorPage;
