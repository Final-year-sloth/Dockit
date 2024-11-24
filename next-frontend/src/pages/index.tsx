// src/pages/index.tsx
import LandingPage from "@/LandingPage/page";
import LandingLayout from "@/layouts/LandingLayout";

import React from "react";

const IndexPage = () => {
  return <LandingPage />;
};

// Define the layout for this page using getLayout
IndexPage.getLayout = function getLayout(page: React.ReactNode) {
  return <LandingLayout>{page}</LandingLayout>;
};

export default IndexPage;
