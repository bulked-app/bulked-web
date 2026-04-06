import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const DeleteAccount = () => {
  const [email, setEmail] = useState("");

  const handleDeleteAccount = () => {
    alert(
      `Account associated with ${email} has been deleted. Thanks for your time using Bulked app, hope to see you again!`,
    );
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">Delete Account</h1>
        <p className="mb-4 text-xl text-muted-foreground">
          Are you sure you want to delete your account?
        </p>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4 border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        />
        <p className="gap-4 flex justify-center">
            <button
              onClick={handleDeleteAccount}
              className="rounded bg-destructive px-4 py-2 text-sm text-white hover:bg-destructive/90"
            >
              Delete Account
            </button>
          <a
            href="/"
            className=" rounded bg-black px-4 py-2 text-sm text-white"
          >
            Return to Home
          </a>
        </p>
      </div>
    </div>
  );
};

export default DeleteAccount;
