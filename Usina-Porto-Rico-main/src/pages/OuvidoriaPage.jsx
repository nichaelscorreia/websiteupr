import React from "react";

const OUVIDORIA_URL = "https://canalescutaupr.onrender.com/";

function OuvidoriaPage() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-white dark:bg-gray-900">
      <iframe
        src={OUVIDORIA_URL}
        title="Ouvidoria Usina Porto Rico"
        className="block min-h-[calc(100vh-5rem)] w-full border-0"
      />
    </main>
  );
}

export default OuvidoriaPage;