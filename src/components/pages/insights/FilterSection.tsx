import svgPaths from "@/assets/svg-paths";

function ArrowDown() {
  return (
    <div className="relative  size-[20px]" data-name="arrow-down-01">
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

function Dropdown({
  label,
  value,
  onClick,
}: {
  label: string;
  value: string;
  onClick?: () => void;
}) {
  return (
    <div
      className="basis-0 bg-white grow  relative rounded-[4px]  cursor-pointer"
      data-name="Dropdown"
      onClick={onClick}
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#042a17] border-solid inset-0 pointer-events-none rounded-[4px]"
      />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[12px] relative w-full">
          <p className="capitalize font-neue-montreal leading-[normal] not-italic relative  text-[#042a17] text-[14px] text-center ">
            {value && value !== label ? value : label}
          </p>
          <ArrowDown />
        </div>
      </div>
    </div>
  );
}

function Search() {
  return (
    <div className="relative  size-[24px]" data-name="search-01">
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

function SearchBar({
  value,
  onChange,
}: {
  value: string;
  onChange: (val: string) => void;
}) {
  return (
    <div
      className="content-stretch flex h-full items-center justify-between pb-[16px] pt-[8px] px-[16px] relative  w-full md:w-[361px]"
      data-name="Search bar"
    >
      <div
        aria-hidden="true"
        className="absolute border-[0px_0px_1px] border-[rgba(68,68,68,0.6)] border-solid inset-0 pointer-events-none"
      />
      <input
        type="text"
        className="font-neue-montreal leading-[normal] not-italic relative  text-[16px] text-[#444] bg-transparent border-none outline-none w-full placeholder:text-[rgba(68,68,68,0.6)]"
        placeholder="Search resources"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <Search />
    </div>
  );
}

interface FilterSectionProps {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  selectedType: string;
  setSelectedType: (val: string) => void;
  selectedCategory: string;
  setSelectedCategory: (val: string) => void;
}

export default function FilterSection({
  searchQuery,
  setSearchQuery,
  selectedType,
  setSelectedType,
  selectedCategory,
  setSelectedCategory,
}: FilterSectionProps) {
  // Simple toggle logic for demo purposes - in a real app would have a dropdown menu
  const cycleType = () => {
    if (selectedType === "All Types") setSelectedType("Download");
    else if (selectedType === "Download") setSelectedType("Case Study");
    else setSelectedType("All Types");
  };

  const cycleCategory = () => {
    const cats = [
      "All Categories",
      "Implementation Guide",
      "Industry Insights",
      "Assessment Frameworks",
      "Whitepaper",
    ];
    const idx = cats.indexOf(selectedCategory);
    setSelectedCategory(cats[(idx + 1) % cats.length]);
  };

  return (
    <section className="relative w-full">
      <div
        className="container content-stretch flex flex-col font-neue-montreal 
      gap-[8px] items-start not-italic relative  text-center w-full py-[45px] md:py-[90px]"
      >
        <p
          className="leading-[normal] min-w-full relative  text-[#d19f43] 
        text-[13px] tracking-[2.6px] uppercase w-full text-center"
        >
          Industry news & expert insights
        </p>
        <div className="flex justify-center w-full">
          <p
            className="capitalize leading-[1.2] relative  text-[32px] md:text-[56px]
           text-black w-full md:w-[1059px] text-center"
          >
            Insights to Guide
            <br />
            <span>Your </span>
            <span className="font-test-tiempos-fine not-italic text-[#0c6639]">
              Transformation
            </span>
          </p>
        </div>
      </div>
      <div
        className="container content-stretch flex flex-col md:flex-row gap-[24px]
       h-auto items-start justify-between  mb-[45px]"
        data-name="Dropdowns + Search"
      >
        <div
          className="content-stretch flex flex-col md:flex-row gap-[20px] items-start relative  w-full md:w-[336px]"
          data-name="Dropdowns"
        >
          <div className="basis-0 content-stretch flex gap-[10px] grow items-start  overflow-clip relative  w-full">
            <Dropdown
              label="all types"
              value={selectedType.toLowerCase()}
              onClick={cycleType}
            />
          </div>
          <div className="basis-0 content-stretch flex gap-[10px] grow items-start  overflow-clip relative  w-full">
            <Dropdown
              label="all Categories"
              value={selectedCategory}
              onClick={cycleCategory}
            />
          </div>
        </div>
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
      </div>
    </section>
  );
}
