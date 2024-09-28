import { mock } from "node:test";
import React, { useState } from "react";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";

//TODO: Replace with real data
const mockData = [
  {
    main: "Rincian Perhitungan Biaya Membangun Kost 20 Kamar",
    sub: [
      {
        main: "Biaya persiapan dan perizinan membangun kost 20 kamar",
        sub: [],
      },
      {
        main: "Desain dan arsitektur",
        sub: [],
      },
      {
        main: "Biaya bahan bangunan untuk membangun kost 20 kamar",
        sub: [],
      },
      {
        main: "Tenaga kerja",
        sub: [],
      },
    ],
  },
  {
    main: "Perhitungan Biaya Total Membangun Kost 20 Kamar",
    sub: [],
  },
  {
    main: "Beberapa Aspek Penting yang Perlu Diperhatikan",
    sub: [],
  },
  {
    main: "Bangun Bisnis Kost Bersama Rukita",
    sub: [],
  },
  {
    main: "Bagaimana dengan design kost Anda?",
    sub: [],
  },
];

const TableOfContent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = (event: any) => {
    setIsOpen(event.target.open);
  };

  return (
    <div className="bg-toc py-4 px-7 rounded-lg shadow-md">
      <details onToggle={toggleOpen} open className="group">
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
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease",
              marginLeft: "10px",
            }}
            size={25} // Adjust the size as needed
          />
        </summary>
        <nav className="text-cta-text text-sm mt-3 markdown-toc px-4">
          <ol className="list-decimal list-inside space-y-2 ">
            {mockData.map((data, index) => {
              return (
                <li key={index}>
                  <a href={`#${data.main.replace(/\s+/g, "_")}`} className="underline font-medium">
                    {data.main}
                  </a>
                  <ol className="list-decimal list-inside ml-6 space-y-2 text-cta-text">
                    {data.sub.map((value, key) => {
                      return (
                        <li key={key}>
                          <a href={`#${value.main.replace(/\s+/g, "_")}`} className="underline font-medium">
                            {value.main}
                          </a>
                        </li>
                      );
                    })}
                  </ol>
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
