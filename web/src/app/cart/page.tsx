"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import { CartItem, getCart, removeFromCart, updateCartQuantity, getCartTotal, clearCart } from "@/lib/cartStore";

const BANK_DETAILS = {
  accountName: "Divine Besong Eya",
  bankName: "Emirates NBD | FAB | ADIB",
  iban: "AE430460000034243856001",
  accountNumber: "0034243856001",
  country: "United Arab Emirates",
};

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const formatUsd = (amount: number) => `$${amount.toFixed(2)}`;

  useEffect(() => {
    // Load cart from localStorage on mount
    setCartItems(getCart());
    setIsLoading(false);
  }, []);

  const handleRemoveItem = (itemId: string) => {
    removeFromCart(itemId);
    setCartItems(getCart());
  };

  const handleUpdateQuantity = (itemId: string, quantity: number) => {
    updateCartQuantity(itemId, quantity);
    setCartItems(getCart());
  };

  const total = getCartTotal(cartItems);
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const shareViaWhatsApp = () => {
    const itemsList = cartItems
      .map((item) => `${item.title} x${item.quantity} - ${formatUsd(item.price * item.quantity)}`)
      .join("%0A");

    const message = `Hi! I'd like to order:%0A%0A${itemsList}%0A%0ATotal: ${formatUsd(total)}%0A%0APlease send bank transfer details.`;
    window.open(`https://wa.me/971526981013?text=${message}`, "_blank");
  };

  if (isLoading) {
    return (
      <section className="mx-auto w-full max-w-6xl px-5 py-20 text-center sm:px-8">
        <p className="text-sm uppercase tracking-[0.16em] text-ink/60">Loading cart...</p>
      </section>
    );
  }

  if (cartItems.length === 0) {
    return (
      <>
        <section className="relative overflow-hidden bg-ink pb-16 pt-32 text-white sm:pt-36">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_82%_24%,rgba(181,138,59,0.2),transparent_42%),radial-gradient(ellipse_at_20%_50%,rgba(13,29,51,0.72),transparent_55%)]" />
          <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-gold">Cart</p>
            <h1 className="mt-4 font-display text-5xl leading-[1.02] sm:text-7xl">Your Selection</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/55">Your cart is currently empty. Explore the books collection to add your next leadership read.</p>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
          <div className="border border-black/10 bg-white p-8 text-center sm:p-12">
            <h2 className="font-display text-5xl text-ink">No items yet</h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-ink/70">Once you add books, your cart total and checkout options will appear here.</p>
            <Link href="/books" className="mt-8 inline-flex bg-ink px-7 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-gold">
              Continue Shopping
            </Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <section className="relative overflow-hidden bg-ink pb-16 pt-32 text-white sm:pt-36">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_82%_24%,rgba(181,138,59,0.2),transparent_42%),radial-gradient(ellipse_at_20%_50%,rgba(13,29,51,0.72),transparent_55%)]" />
        <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-gold">Shopping Cart</p>
          <h1 className="mt-4 font-display text-5xl leading-[1.02] sm:text-7xl">Your Selection</h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/55">{itemCount} item{itemCount !== 1 ? "s" : ""} ready for checkout and payment confirmation.</p>
        </div>
      </section>

      <Container className="py-14 sm:py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="border border-black/10 bg-white p-6 sm:p-7">
            <h2 className="font-display text-4xl text-ink">Order Summary</h2>
            <div className="mt-6 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4 border border-black/10 p-4">
                  {item.coverImageUrl ? (
                    <div className="relative h-24 w-20 overflow-hidden bg-ink">
                      <Image src={item.coverImageUrl} alt={item.title} fill className="object-cover" />
                    </div>
                  ) : (
                    <div className="h-24 w-20 bg-gradient-to-br from-navy to-ink" />
                  )}
                  <div className="flex-1">
                    <h3 className="font-display text-3xl leading-tight text-ink">{item.title}</h3>
                    <p className="mt-1 text-sm text-ink/70">{formatUsd(item.price)}</p>
                    <div className="mt-3 flex items-center gap-2">
                      <button onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)} className="border border-black/20 px-3 py-1 text-sm text-ink transition hover:border-gold hover:text-gold">
                        -
                      </button>
                      <span className="w-8 text-center text-sm font-semibold">{item.quantity}</span>
                      <button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)} className="border border-black/20 px-3 py-1 text-sm text-ink transition hover:border-gold hover:text-gold">
                        +
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-ink">{formatUsd(item.price * item.quantity)}</p>
                    <button onClick={() => handleRemoveItem(item.id)} className="mt-2 text-xs uppercase tracking-[0.1em] text-rose-700 transition hover:text-rose-900">
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="border border-black/10 bg-white p-6">
              <h3 className="font-display text-4xl text-ink">Total</h3>
              <div className="mt-4 space-y-2 border-t border-black/10 pt-4">
                <div className="flex justify-between text-sm">
                  <span>Subtotal:</span>
                  <span className="font-semibold text-ink">{formatUsd(total)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Delivery:</span>
                  <span className="font-semibold">Free</span>
                </div>
              </div>
              <div className="mt-4 border-t border-black/10 pt-4">
                <div className="flex justify-between text-lg font-semibold text-ink">
                  <span>Amount Due:</span>
                  <span>{formatUsd(total)}</span>
                </div>
              </div>
            </div>

            <div className="border border-gold/30 bg-[linear-gradient(120deg,rgba(181,138,59,0.12),rgba(245,240,232,0.75))] p-6">
              <h3 className="font-display text-3xl text-ink">Bank Transfer</h3>
              <p className="mt-2 text-xs text-ink/70">Pay safely via bank transfer to:</p>

              <div className="mt-4 space-y-3 text-sm">
                <div>
                  <p className="text-xs uppercase tracking-wider text-ink/60">Account Name</p>
                  <p className="font-semibold text-ink">{BANK_DETAILS.accountName}</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-ink/60">IBAN</p>
                  <p className="break-all font-mono text-sm font-bold text-ink">
                    {BANK_DETAILS.iban}
                  </p>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(BANK_DETAILS.iban);
                      alert("IBAN copied to clipboard!");
                    }}
                    className="mt-1 text-xs text-gold hover:underline"
                  >
                    Copy IBAN
                  </button>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-ink/60">Account Number</p>
                  <p className="font-semibold text-ink">{BANK_DETAILS.accountNumber}</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-ink/60">Location</p>
                  <p className="font-semibold text-ink">{BANK_DETAILS.country}</p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <button onClick={() => shareViaWhatsApp()} className="btn-live w-full bg-ink px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-gold">
                Share via WhatsApp
              </button>

              <button
                onClick={() => {
                  alert(
                    "Order confirmed! Please transfer the amount to the bank account above and share the payment confirmation on WhatsApp."
                  );
                }}
                className="btn-live w-full border border-ink px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-ink transition hover:border-gold hover:text-gold"
              >
                Continue to Payment
              </button>

              <Link
                href="/books"
                className="btn-live block border border-black/20 px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.14em] text-ink/70 transition hover:bg-mist"
              >
                Continue Shopping
              </Link>
            </div>

            <div className="border border-black/10 bg-mist p-4 text-xs text-ink/70">
              <p className="font-semibold uppercase tracking-[0.14em] text-ink">Next Steps</p>
              <ol className="mt-2 list-inside list-decimal space-y-1">
                <li>Transfer payment to the account above</li>
                <li>Share payment proof on WhatsApp</li>
                <li>Get order confirmation & delivery details</li>
              </ol>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
