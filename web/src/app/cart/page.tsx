"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
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
  const [orderPlaced, setOrderPlaced] = useState(false);

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

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
  };

  const total = getCartTotal(cartItems);
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const shareViaWhatsApp = () => {
    const itemsList = cartItems
      .map((item) => `${item.title} x${item.quantity} - £${(item.price * item.quantity).toFixed(2)}`)
      .join("%0A");

    const message = `Hi! I'd like to order:%0A%0A${itemsList}%0A%0ATotal: £${total.toFixed(2)}%0A%0APlease send bank transfer details.`;
    window.open(`https://wa.me/971526981013?text=${message}`, "_blank");
  };

  if (isLoading) {
    return (
      <Container className="py-20 text-center">
        <p>Loading cart...</p>
      </Container>
    );
  }

  if (cartItems.length === 0) {
    return (
      <Container className="py-20">
        <Reveal>
          <div className="text-center">
            <h1 className="font-display text-4xl text-navy">Your Cart is Empty</h1>
            <p className="mt-4 text-ink/70">Browse our collection of transformational books.</p>
            <Link
              href="/books"
              className="btn-live mt-8 inline-flex rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-ink"
            >
              Continue Shopping
            </Link>
          </div>
        </Reveal>
      </Container>
    );
  }

  return (
    <Container className="py-20">
      <Reveal>
        <SectionHeader
          eyebrow="Shopping Cart"
          title="Your Selection"
          description={`${itemCount} item${itemCount !== 1 ? "s" : ""} ready for checkout`}
        />
      </Reveal>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_350px]">
        {/* Cart Items */}
        <Reveal>
          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <h2 className="font-display text-2xl text-navy">Order Summary</h2>
            <div className="mt-6 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4 rounded-lg border border-black/10 p-4">
                  {item.coverImageUrl ? (
                    <div className="relative h-24 w-20 overflow-hidden rounded">
                      <Image
                        src={item.coverImageUrl}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="h-24 w-20 rounded bg-gradient-to-br from-navy to-ink" />
                  )}
                  <div className="flex-1">
                    <h3 className="font-semibold text-navy">{item.title}</h3>
                    <p className="text-sm text-ink/70">£{item.price.toFixed(2)}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <button
                        onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                        className="rounded border border-black/10 px-2 py-1 text-sm hover:bg-mist"
                      >
                        −
                      </button>
                      <span className="w-8 text-center text-sm font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                        className="rounded border border-black/10 px-2 py-1 text-sm hover:bg-mist"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-navy">
                      £{(item.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="mt-2 text-xs text-red-600 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Order Sidebar */}
        <Reveal>
          <div className="space-y-6">
            {/* Total */}
            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
              <h3 className="font-display text-xl text-navy">Total</h3>
              <div className="mt-4 space-y-2 border-t border-black/10 pt-4">
                <div className="flex justify-between text-sm">
                  <span>Subtotal:</span>
                  <span className="font-semibold">£{total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Delivery:</span>
                  <span className="font-semibold">Free</span>
                </div>
              </div>
              <div className="mt-4 border-t border-black/10 pt-4">
                <div className="flex justify-between text-lg font-semibold text-navy">
                  <span>Amount Due:</span>
                  <span>£{total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Bank Details */}
            <div className="rounded-2xl border border-gold/30 bg-gold/10 p-6 shadow-sm">
              <h3 className="font-display text-lg text-navy">Bank Transfer</h3>
              <p className="mt-2 text-xs text-ink/70">Pay safely via bank transfer to:</p>

              <div className="mt-4 space-y-3 text-sm">
                <div>
                  <p className="text-xs uppercase tracking-wider text-ink/60">Account Name</p>
                  <p className="font-semibold text-navy">{BANK_DETAILS.accountName}</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-ink/60">IBAN</p>
                  <p className="break-all font-mono text-sm font-bold text-navy">
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
                  <p className="font-semibold text-navy">{BANK_DETAILS.accountNumber}</p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-ink/60">Location</p>
                  <p className="font-semibold text-navy">{BANK_DETAILS.country}</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2">
              <button
                onClick={() => shareViaWhatsApp()}
                className="btn-live w-full rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-700 transition"
              >
                📱 Share via WhatsApp
              </button>

              <button
                onClick={() => {
                  handlePlaceOrder();
                  alert(
                    "Order confirmed! Please transfer the amount to the bank account above and share the payment confirmation on WhatsApp."
                  );
                }}
                className="btn-live w-full rounded-full border border-navy px-5 py-3 text-sm font-semibold text-navy hover:bg-navy hover:text-white transition"
              >
                Continue to Payment
              </button>

              <Link
                href="/books"
                className="btn-live block rounded-full border border-black/20 px-5 py-3 text-center text-sm font-semibold text-ink/70 hover:bg-mist transition"
              >
                Continue Shopping
              </Link>
            </div>

            {/* Order Notes */}
            <div className="rounded-xl border border-black/10 bg-mist p-4 text-xs text-ink/70">
              <p className="font-semibold text-navy">📌 Next Steps:</p>
              <ol className="mt-2 list-inside list-decimal space-y-1">
                <li>Transfer payment to the account above</li>
                <li>Share payment proof on WhatsApp</li>
                <li>Get order confirmation & delivery details</li>
              </ol>
            </div>
          </div>
        </Reveal>
      </div>
    </Container>
  );
}
