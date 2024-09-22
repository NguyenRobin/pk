import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// `cn` combines `clsx` for conditional class names with `twMerge` to optimize and deduplicate Tailwind CSS classes.
// 1) `inputs` are passed to `clsx`, which handles conditional class names and object syntax.
// 2) The result is then passed to `twMerge`, which merges and deduplicates conflicting Tailwind CSS classes.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
