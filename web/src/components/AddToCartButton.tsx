"use client";

import { useState } from "react";
import Link from "next/link";
import { addToCart } from "@/lib/cartStore";

type AddToCartProps = {
  id: string;
  title: string;
  price: number;
  slug: string;
  coverImageUrl?: string;
};

export function AddToCartButton({ id, title, price, slug, coverImageUrl }: AddToCartProps) {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      id,
      title,
      price,
      slug,
      coverImageUrl,
    });
    setIsAdded(true);

    // Reset the button state after 2 seconds
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={handleAddToCart}
        className={`btn-live rounded-full px-4 py-2 text-sm font-semibold transition ${
          isAdded
            ? "bg-emerald-600 text-white"
            : "bg-gold text-ink hover:bg-[#c39a4d]"
        }`}
      >
        {isAdded ? "✓ Added!" : "Add to Cart"}
      </button>

      <Link
        href="/cart"
        className="btn-live rounded-full border border-navy px-4 py-2 text-sm font-semibold text-navy hover:bg-navy hover:text-white transition"
      >
        View Cart
      </Link>
    </div>
  );
}
