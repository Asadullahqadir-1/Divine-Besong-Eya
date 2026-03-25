"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getCart } from "@/lib/cartStore";

export function CartIcon() {
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    // Get initial cart count
    const cart = getCart();
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    setItemCount(count);

    // Listen for storage changes (cart updates from other components)
    const handleStorageChange = () => {
      const updatedCart = getCart();
      const newCount = updatedCart.reduce((sum, item) => sum + item.quantity, 0);
      setItemCount(newCount);
    };

    window.addEventListener("storage", handleStorageChange);

    // Also listen for custom cart update event
    window.addEventListener("cartUpdated", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("cartUpdated", handleStorageChange);
    };
  }, []);

  return (
    <Link
      href="/cart"
      className="btn-live relative rounded-full border border-navy px-4 py-2 text-sm font-semibold text-navy hover:bg-navy hover:text-white transition flex items-center gap-1"
    >
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m10-9l2 9m-9 0h12m0 0a1 1 0 11-2 0 1 1 0 012 0zm-8 0a1 1 0 11-2 0 1 1 0 012 0z"
        />
      </svg>
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-gold text-xs font-bold text-ink">
          {itemCount}
        </span>
      )}
    </Link>
  );
}
