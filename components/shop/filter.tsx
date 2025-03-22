"use client";

import React from "react";
import {  ChevronDown,} from "lucide-react";
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
  icon: string;
}

export const FilterComponent = () => {
  const [selectedFiltre, setSelectedFiltre] = React.useState<Set<string>>(new Set(["Filtre"]));
  const [selectedCategory, setSelectedCategory] = React.useState<Set<string>>(new Set(["Categories"]));

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
                    {Array.from(selectedFiltre)[0]}<PreferenceHorizontalIcon className="w-4 h-4" />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  disallowEmptySelection
                  aria-label="Filtre"
                  selectedKeys={selectedFiltre}
                  selectionMode="single"
                  variant="flat"
                  onSelectionChange={(keys) => setSelectedFiltre(new Set(keys as string[]))}
                >
                  {filters.map((filter) => (
                    <DropdownItem key={`${filter.id}`}>
                      {filter.name}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            </div>

            <Dropdown>
              <DropdownTrigger>
                <Button className="capitalize text-white" variant="bordered">
                  {Array.from(selectedCategory)[0]}<ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Categories"
                selectedKeys={selectedCategory}
                selectionMode="single"
                variant="flat"
                onSelectionChange={(keys) => setSelectedCategory(new Set(keys as string[]))}
              >
                {categories.map((category) => (
                  <DropdownItem startContent={`${category.icon}`} key={`${category.id}`}>
                    {category.name}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
};