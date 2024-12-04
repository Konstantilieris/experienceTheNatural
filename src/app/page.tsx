import { Suspense } from "react";
import { AuroraHero } from "./components/ui/AuroraHero";

export default function Home() {
  return (
    <div className="h-full overflow-hidden bg-dark-100">
      <Suspense fallback={<div>Loading...</div>}>
        <AuroraHero />
      </Suspense>
    </div>
  );
}
