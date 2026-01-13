import svgPaths from "@/assets/svg-paths";

function ArrowDown() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="arrow-down-01">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g id="arrow-down-01">
          <path
            d={svgPaths.p181e3c80}
            id="Vector"
            stroke="var(--stroke-0, #042A17)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

function Dropdown({ label }: { label: string }) {
  return (
    <div
      className="basis-0 bg-white grow  relative rounded-[4px] shrink-0 cursor-pointer"
      data-name="Dropdown"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#042a17] border-solid inset-0 pointer-events-none rounded-[4px]"
      />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[12px] relative w-full">
          <p className="capitalize font-neue-montreal leading-[normal] not-italic relative shrink-0 text-[#042a17] text-[14px] text-center ">
            {label}
          </p>
          <ArrowDown />
        </div>
      </div>
    </div>
  );
}

function Dropdowns() {
  return (
    <div
      className="content-stretch flex flex-col md:flex-row gap-[20px] items-start relative shrink-0 w-full md:w-[527px]"
      data-name="Dropdowns"
    >
      <div className="basis-0 content-stretch flex gap-[10px] grow items-start  overflow-clip relative shrink-0 w-full">
        <Dropdown label="all types" />
      </div>
      <div className="basis-0 content-stretch flex gap-[10px] grow items-start  overflow-clip relative shrink-0 w-full">
        <Dropdown label="all categories" />
      </div>
      <div className="basis-0 content-stretch flex gap-[10px] grow items-start  overflow-clip relative shrink-0 w-full">
        <Dropdown label="all industries" />
      </div>
    </div>
  );
}

function Search() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="search-01">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g id="search-01">
          <path
            d="M17 17L21 21"
            id="Vector"
            stroke="var(--stroke-0, #444444)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d={svgPaths.p3ac10b00}
            id="Vector_2"
            stroke="var(--stroke-0, #444444)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

function SearchBar() {
  return (
    <div
      className="content-stretch flex h-full items-center justify-between pb-[16px] pt-[8px] px-[16px] relative shrink-0 w-full md:w-[361px]"
      data-name="Search bar"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_1px] border-[rgba(68,68,68,0.6)] border-solid inset-0 pointer-events-none"
      />
      <input
        type="text"
        placeholder="Search case studies"
        className="capitalize font-neue-montreal h-full leading-[normal] not-italic relative shrink-0 text-[16px] text-[#444] bg-transparent border-none outline-none w-full placeholder:text-[rgba(68,68,68,0.6)]"
      />
      <Search />
    </div>
  );
}

export default function FilterSection() {
  return (
    <section className="relative w-full">
      <div
        className="container py-[24px] content-stretch flex flex-col gap-[64px] items-center "
        data-name="Title + Filter"
      >
        <div className="content-stretch flex flex-col font-neue-montreal gap-[8px] items-start not-italic relative shrink-0 text-center w-full">
          <p className="leading-[normal] min-w-full relative shrink-0 text-[#d19f43] text-[13px] tracking-[2.6px] uppercase w-full text-center">
            See How Transformation Unfolds
          </p>
          <div className="flex justify-center w-full">
            <p className="capitalize leading-[1.2] relative shrink-0 text-[32px] md:text-[56px] text-black w-full md:w-[1059px] text-center">
              <span>{`Real challenges. Proven approaches. Measurable `}</span>
              <span className="font-test-tiempos-fine not-italic text-[#0c6639]">
                outcomes.
              </span>
            </p>
          </div>
        </div>
        <div
          className="content-stretch flex flex-col md:flex-row gap-[24px] h-auto md:h-[44px] items-start justify-between w-full"
          data-name="Dropdowns + Search"
        >
          <Dropdowns />
          <SearchBar />
        </div>
      </div>
    </section>
  );
}
