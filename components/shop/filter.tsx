"use client";

import React, { useState } from "react";
import { Search, ChevronDown, ArrowLeft, Filter } from "lucide-react";
import {PreferenceHorizontalIcon} from "hugeicons-react"
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@heroui/react";

interface Category {
  id: string;
  name: string;
  icon: JSX.Element;
}

export const FilterComponent = () => {
  // const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedFiltre, setSelectedFiltre] = React.useState(new Set(["Filtre"]));
  const [selectedCategory, setSelectedCategory] = React.useState(new Set(["Categories"]));

  const selectedCategoryValue = React.useMemo(
    () => Array.from(selectedCategory).join(", ").replace(/_/g, ""),
    [selectedCategory]
  );

  const selectedFiltreValue = React.useMemo(
    () => Array.from(selectedFiltre).join(", ").replace(/_/g, ""),
    [selectedFiltre]
  );

  const categories: Category[] = [
    { id: "shirt", name: "T-shirt", icon: "👕" },
    { id: "pull", name: "Pull", icon: "🧥" },
    { id: "croptop", name: "Crop top", icon: "👚" },
  ];

  const filters = [
    { id: "color", name: "Couleur" },
    { id: "size", name: "Taille" },
    { id: "price", name: "Prix" },
  ];

  return (
    <div className="md:mx-12">
      <div className="">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center gap-4 overflow-x-auto pb-2 scrollbar-hide">
            <div className="flex items-center gap-2">
              <Dropdown>
                <DropdownTrigger>
                  <Button className="capitalize text-white" variant="bordered">
                    {selectedFiltre}<PreferenceHorizontalIcon className="w-4 h-4" />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  disallowEmptySelection
                  aria-label="Filtre"
                  selectedKeys={selectedFiltre}
                  selectionMode="single"
                  variant="flat"
                  onSelectionChange={setSelectedFiltre}
                >
                  {filters.map((filter) => (
                    <DropdownItem key={`${filter.id}`}>
                      {filter.name}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
              {/* {filters.map((filter) => (
                <button
                  key={filter.id}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border-zinc-700 text-zinc-100 border whitespace-nowrap"
                >
                  {filter.name}
                  <ChevronDown className="w-4 h-4" />
                </button>
              ))} */}
            </div>

            <Dropdown>
              <DropdownTrigger>
                <Button className="capitalize text-white" variant="bordered">
                  {selectedCategory}<ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Categories"
                selectedKeys={selectedCategory}
                selectionMode="single"
                variant="flat"
                onSelectionChange={setSelectedCategory}
              >
                {categories.map((category) => (
                  <DropdownItem startContent={`${category.icon}`} key={`${category.id}`}>
                    {category.name}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>

            {/* <ul className=" items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border-zinc-700 text-zinc-100 border whitespace-nowrap">
              {categories.map((category) => (
                <div
                  className="flex flex-col items-center gap-2"
                  key={category.id}
                >
                  <button
                    key={category.id}
                    className="flex rounded-full  items-center gap-2 p-4 bg-zinc-900 hover:bg-zinc-800 border-zinc-700 text-zinc-100 border"
                  >
                    <span className="text-xl">{category.icon}</span>
                  </button>
                  <span className="text-sm text-zinc-100">{category.name}</span>
                </div>
              ))}
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
};
