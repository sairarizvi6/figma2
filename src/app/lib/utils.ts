import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines class names using `clsx` for conditional logic 
 * and `tailwind-merge` to handle conflicting Tailwind classes.
 *
 * @param inputs - A list of class values (strings, falsy values, or conditional class names).
 * @returns A single merged and conflict-free class name string.
 */
export function cn(...inputs: ClassValue[]): string {
  // Merge class names, resolving conflicts with tailwind-merge
  return twMerge(clsx(...inputs));
}
