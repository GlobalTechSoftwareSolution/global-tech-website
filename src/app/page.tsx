'use client';

import React, { useState, useRef, useEffect, useCallback } from "react";
import ContactPage from "./contact/page";
import Button from '@/app/button/page';
import Chatbot from '@/app/chatbot/page';
import ClientsPage from '@/app/clints/page'
import Blog_post from "./blogPost/page";
import DigitalShowcase from "@/components/DigitalShowcase";
import Digitalmarketing from "@/components/Digitalmarketing";
import Servicesection from '@/components/Servicesection'

export default function CombinedPage() {
  return (
    <>
      <DigitalShowcase />
      <Servicesection />
      <Digitalmarketing />
      <Blog_post />
      <Chatbot />
      <Button />
      <ClientsPage />
      <ContactPage/>
    </>
  );
}




