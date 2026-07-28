import MobileHome from "@/components/mobile/MobileHome";
import DesktopHome from "@/components/desktop/DesktopHome";
import { ClientPreloader } from "@/components/ui/ClientPreloader";

export default function Home() {
  return (
    <ClientPreloader>
      <MobileHome />
      <DesktopHome />
    </ClientPreloader>
  );
}
