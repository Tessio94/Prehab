"use client";

import { useState } from "react";
import { Toaster } from "sonner";
import Intro from "@/components/contact/Intro";
import Info from "@/components/contact/Info";
import Location from "@/components/contact/Location";
import ContactForm from "@/components/contact/ContactForm";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);

  return (
    <>
      <Toaster
        toastOptions={{
          style: {
            color: success ? "#22c55e" : "#ef4444",
            border: success ? "2px solid #22c55e" : "2px solid #ef4444",
          },
        }}
      />
      <Intro />
      <Info />
      <Location />
      <ContactForm setSuccess={setSuccess} />
    </>
  );
};

export default ContactPage;
