import { useState } from "react";
import { Link } from "react-router-dom";
import { AlertTriangle, ArrowLeft, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@/assets/letter-white.png";

const DeleteAccount = () => {
  const [email, setEmail] = useState("");

  const handleDeleteAccount = () => {
    alert(
      `Account associated with ${email} has been deleted. Thanks for your time using Bulked app, hope to see you again!`,
    );
  };

  return (
    <div className="min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0">
        <div className="grid-fade absolute inset-x-0 top-0 h-[520px] opacity-50" />
        <div className="absolute left-[10%] top-20 h-52 w-52 rounded-full bg-primary/16 blur-[110px]" />
        <div className="absolute right-[12%] top-28 h-60 w-60 rounded-full bg-accent/14 blur-[120px]" />
      </div>

      <main className="relative flex min-h-screen items-center justify-center px-6 py-12">
        <div className="surface-panel w-full max-w-xl rounded-lg p-6 sm:p-8">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between gap-4">
              <img src={logo} alt="Bulked" className="h-7 w-auto" />
              <span className="eyebrow-pill">
                <AlertTriangle size={12} className="text-primary" />
                Account removal
              </span>
            </div>

            <div>
              <h1 className="text-balance text-3xl font-extrabold leading-tight sm:text-4xl">
                Delete your Bulked account
              </h1>
              <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
                Use the email tied to your account to confirm deletion. This page now matches
                the rest of the product visually, but the flow stays intentionally simple.
              </p>
            </div>

            <div className="glass-card rounded-lg p-4">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-lg border border-destructive/30 bg-destructive/10 text-destructive">
                  <Trash2 size={18} />
                </div>
                <div>
                  <p className="text-sm font-semibold">Before you continue</p>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    Account deletion is permanent. Make sure you are entering the right email
                    address before confirming.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <label htmlFor="email" className="text-sm font-medium text-foreground/90">
                Account email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 border-border/80 bg-white/[0.03]"
              />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="hero-outline" size="lg" className="flex-1 gap-2">
                <Link to="/">
                  <ArrowLeft size={16} />
                  Return home
                </Link>
              </Button>
              <Button
                onClick={handleDeleteAccount}
                variant="destructive"
                size="lg"
                className="flex-1 gap-2"
                disabled={!email.trim()}
              >
                <Trash2 size={16} />
                Delete account
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DeleteAccount;
