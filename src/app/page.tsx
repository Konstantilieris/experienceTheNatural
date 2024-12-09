import { AuroraHero } from "../components/ui/AuroraHero";

export default function Home() {
  return (
    <div className="h-[calc(100dvh)] overflow-hidden bg-dark-100 inset-0 absolute">
      <AuroraHero />
    </div>
  );
}
