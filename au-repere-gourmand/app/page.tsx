import { Header } from "@/components/Header";
import { WhoWeAre } from "@/components/WhoWeAre";
import { Carte } from "@/components/Carte";
import { Reservation } from "@/components/Reservation";

export default function Home() {
  return (
    <div>
    <Header />
    <WhoWeAre />
    <h2 className="text-3xl mt-20 text-center">Découvrez nos plats délicieux et nos spécialités !</h2>
    <Carte />
    <h2 className="text-3xl mt-20 text-center">Réservez votre table !</h2>
    <Reservation />
    <h2 className="text-3xl mt-20 text-center">Contactez nous !</h2>
    </div>
  );
}
