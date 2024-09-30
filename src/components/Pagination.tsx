import Utils from "@/utils/utils";
import { useState, useEffect } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Pagination = ({
  totalPages,
  setCurrentPage,
  currentPage,
}: {
  totalPages: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
}) => {
  Utils.logComponent("Pagination rendered");

  const [isPrev, setIsPrev] = useState(true);
  const [isNext, setIsNext] = useState(false);

  useEffect(() => {
    setIsPrev(currentPage === 1);
    setIsNext(currentPage === totalPages);
  }, [currentPage, totalPages]);

  const goToPreviousPage = () => {
    setCurrentPage((prev) => (prev === 1 ? prev : prev - 1));
  };

  const goToNextPage = () => {
    setCurrentPage((prev) => (prev === totalPages ? prev : prev + 1));
  };

  const goToPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const getPaginationGroup = () => {
    const pageNumbers = [];
    const maxVisiblePages = 3; // Adjust this to customize the maximum number of visible pages button

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pageNumbers.push(1, 2, 3, '...', totalPages);
      } else if (currentPage > totalPages - 3) {
        pageNumbers.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
      } else {
        pageNumbers.push(1, '...', currentPage, currentPage + 1, '...', totalPages);
      }
    }

    return pageNumbers;
  };

  return (
    <div className="flex items-center justify-center space-x-2 my-5 md:my-10 ">
      <button
        onClick={goToPreviousPage}
        disabled={isPrev}
        className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-cta-text hover:bg-copy-pagination/10  active:bg-gray-900/20 flex items-center gap-2"
      >
        <AiOutlineLeft />
        Prev
      </button>
      {getPaginationGroup().map((item, index) => (
        <button
          key={index}
          onClick={() => typeof item === "number" && goToPage(item)}
          disabled={item === "..."}
          className={`${
            currentPage === item
              ? "relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs bg-copy-pagination text-cta-text-pagination shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              : "relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-cta-text hover:bg-copy-pagination/10 active:bg-copy-pagination/20"
          } border`}
        >
          {item}
        </button>
      ))}
      <button
        onClick={goToNextPage}
        disabled={isNext}
        className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-cta-text hover:bg-copy-pagination/10 active:bg-gray-900/20 flex items-center gap-2"
      >
        Next
        <AiOutlineRight />
      </button>
    </div>
  );
};

export default Pagination;
