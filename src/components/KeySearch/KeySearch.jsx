"use client";
import { Input } from "../ui/input";
import { useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { useState } from "react";
const KeySearch = () => {
const searchParams = useSearchParams();
const { replace } = useRouter();

const [search, setSearch] = useState(
  searchParams.get("search")?.toString() || ""
);
const handleSearch = useDebouncedCallback((value) => {
  const params = new URLSearchParams(searchParams);
  if (value) {
    params.set("search", value);
  } else {
    params.delete("search");
  }
  replace(`/?${params.toString()}`);
}, 500);
return (
  <Input
    type="text"
    placeholder="find a car"
    className="max-w-xs dark:bg-muted"
    onChange={(e) => {
      setSearch(e.target.value);
      handleSearch(e.target.value);
    }}
    value={search}
  />
);
}

export default KeySearch