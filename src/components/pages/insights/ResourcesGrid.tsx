import { imgPlaceholder } from "@/assets/images";
import {
  Pagination,
  ResourceCard,
  type ResourceCardProps,
} from "@/components/shared/blocks";

const resources: ResourceCardProps[] = [
  {
    id: 1,
    image: imgPlaceholder,

    label: "Implementation Guide",
    title: "The ETRM Evaluation Framework",
    type: "download",
    link: {
      title: "",
      path: "",
    },
  },
  {
    id: 2,
    image: imgPlaceholder,

    label: "Implementation Guide",
    title: "Knowledge Transfer Playbook",
    type: "download",
    link: {
      title: "",
      path: "",
    },
  },
  {
    id: 3,
    image: imgPlaceholder,
    label: "Industry Insights",
    title: "African Energy Markets Regulatory Update 2025",
    type: "download",
    link: {
      title: "",
      path: "",
    },
  },
  {
    id: 4,
    image: imgPlaceholder,
    label: "Industry Insights",
    title: "The State of ETRM in West Africa",
    type: "download",
    link: {
      title: "",
      path: "",
    },
  },
  {
    id: 5,
    image: imgPlaceholder,

    label: "Assessment Frameworks",
    title: "Cybersecurity Assessment for Trading Operations",
    type: "download",
    link: {
      title: "",
      path: "",
    },
  },
  {
    id: 6,
    image: imgPlaceholder,

    label: "case study",
    title: "Creating a Single Source of Truth for a Leading Gas Trader",
    type: "default",
    link: {
      title: "",
      path: "",
    },
  },
  {
    id: 7,
    image: imgPlaceholder,

    label: "case study",
    title: "Securing Trading Infrastructure for a Power Utility",
    type: "default",
    link: {
      title: "",
      path: "",
    },
  },
  {
    id: 8,
    image: imgPlaceholder,

    label: "whitepaper",
    title: "Building vs. Buying: The ETRM Decision Framework",
    type: "download",
    link: {
      title: "",
      path: "",
    },
  },
  {
    id: 9,
    image: imgPlaceholder,
    label: "whitepaper",
    title: "The True Cost of Manual Trading Operations",
    type: "download",
    link: {
      title: "",
      path: "",
    },
  },
];

interface ResourcesGridProps {
  searchQuery?: string;
  selectedType?: string;
  selectedCategory?: string;
}

export default function ResourcesGrid({
  searchQuery = "",
  selectedType = "All Types",
  selectedCategory = "All Categories",
}: ResourcesGridProps) {
  const filteredData = resources.filter((item) => {
    // Search Filter
    if (
      searchQuery &&
      !item.title.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }

    // Type Filter
    if (selectedType !== "All Types") {
      const typeMap: Record<string, string> = {
        download: "download",
        default: "default",
      };
      if (item.type !== typeMap[selectedType]) return false;
    }

    // Category Filter
    if (selectedCategory !== "All Categories") {
      if (
        !item.label ||
        item.label.toLowerCase() !== selectedCategory.toLowerCase()
      )
        return false;
    }

    return true;
  });

  // Chunk data into groups of 3
  const chunkSize = 3;
  const chunkedData = [];
  for (let i = 0; i < filteredData.length; i += chunkSize) {
    chunkedData.push(filteredData.slice(i, i + chunkSize));
  }

  return (
    <section className="relative w-ful">
      <div
        className="container content-stretch flex flex-col items-center 
      relative w-full pb-[45px] md:pb-[90px] "
        data-name="Grid"
      >
        <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-full mb-[48px]">
          {chunkedData.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="content-stretch flex flex-col md:flex-row gap-[24px] items-center relative shrink-0 w-full"
            >
              {row.map((item) => (
                <div
                  key={item.id}
                  className="basis-0 flex flex-row grow items-center self-stretch shrink-0 w-full"
                >
                  <ResourceCard
                    image={item.image}
                    label={item.label}
                    title={item.title}
                    type={item.type}
                    id={undefined}
                    link={{
                      title: "",
                      path: "",
                    }}
                  />
                </div>
              ))}
              {/* Spacers to maintain alignment for incomplete rows */}
              {row.length < 3 &&
                Array.from({ length: 3 - row.length }).map((_, i) => (
                  <div
                    key={`spacer-${i}`}
                    className="basis-0 flex flex-row grow items-center self-stretch shrink-0 w-full invisible"
                  />
                ))}
            </div>
          ))}
          {filteredData.length === 0 && (
            <div className="w-full text-center py-20 text-gray-500">
              No resources found matching your filters.
            </div>
          )}
        </div>
        <Pagination count={filteredData.length} total={resources.length} />
      </div>
    </section>
  );
}
