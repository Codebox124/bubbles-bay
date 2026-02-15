"use client";

import { useState } from "react";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { services } from "@/data/services";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Navbar onBookClick={() => setIsModalOpen(true)} />

      <main>{children}</main>

      <Footer />

      <BookingModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        services={services}
      />
    </>
  );
}
