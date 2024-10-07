import React, { useState } from "react";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";


const TableOfContent = ({
  data,
}: {
  data: {
    main: string;
    sub: {
      main: string;
      sub: never[];
    }[];
  }[];
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleOpen = (event: React.SyntheticEvent<HTMLDetailsElement>) => {
    const detailsElement = event.currentTarget;
    setIsOpen(detailsElement.open);
  };

  return (
    <div className="bg-toc py-4 px-7 rounded-lg shadow-md">
      <details onToggle={toggleOpen} open={isOpen} className="group">
        <summary
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          className="text-base font-semibold cursor-pointer"
        >
          Contents
          <MdOutlineArrowDropDownCircle
            style={{
              //transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease",
              marginLeft: "10px",
            }}
            size={25} // Adjust the size as needed
            className="arrow-icon"
          />
        </summary>
        <nav className="text-cta-text text-sm mt-3 markdown-toc px-4">
          <ol className="list-decimal list-inside space-y-3">
            {data.map((data, index) => {
              return (
                <li key={index}>
                  <a
                    href={`#${data.main.replace(/\s+/g, "_")}`}
                    className="underline font-medium"
                  >
                    {data.main}
                  </a>
                  {data.sub.length > 0 && (
                    <ol className="list-decimal list-inside ml-6 mt-3 space-y-3 text-cta-text">
                      {data.sub.map((value, key) => {
                        return (
                          <li key={key}>
                            <a
                              href={`#${value.main.replace(/\s+/g, "_")}`}
                              className="underline font-medium"
                            >
                              {value.main}
                            </a>
                          </li>
                        );
                      })}
                    </ol>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </details>
    </div>
  );
};

export default TableOfContent;
