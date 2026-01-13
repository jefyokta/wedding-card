import { toast } from "sonner";
import { Screen } from "./screen";
import { CreditCard, MapPin, Gift as GiftIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./../components/ui/dialog";

export const Gift = () => {
  const copyRekening = async () => {
    if (typeof window === "undefined") return;

    await navigator.clipboard.writeText(
      "BCA 1234567890 a.n. Jefy & Pasangan"
    );

    toast.success("Nomor rekening berhasil disalin 🤍", {
      position: "top-center",
      className: "rounded-xl bg-white text-[#000035]",
    });
  };

  return (
    <Screen className="flex items-center justify-center px-6">
      <div className="relative max-w-md w-full text-center">

 
        <div className="rounded-3xl bg-white/5 backdrop-blur-md border border-white/20 px-6 py-10 space-y-6 shadow-2xl">
          <h1 className="text-white text-3xl font-serif tracking-wide">
            Send a Gift
          </h1>

          <div className="w-12 h-px bg-white/40 mx-auto" />

          <p className="text-white/80 leading-relaxed text-sm px-2">
            Doa restu Anda merupakan karunia yang sangat berarti bagi kami.
            Namun apabila memberi adalah ungkapan tanda kasih Anda,
            kami dengan senang hati menerimanya.
          </p>

          <div className="space-y-3 pt-4">
            <button
              onClick={copyRekening}
              className="
                w-full
                rounded-full
                bg-white
                py-3
                space-x-2
                text-[#000035]
                flex
                justify-center
                items-center
                font-medium
                tracking-wide
                transition
                active:scale-95
              "
            >
              <CreditCard className="w-5 h-5" />
              <span>Transfer Bank</span>
            </button>

            <Dialog>
              <DialogTrigger asChild>
                <button
                  className="
                    w-full
                    rounded-full
                    border
                    border-white/40
                    py-3
                    space-x-2
                    text-white
                    flex
                    justify-center
                    items-center
                    font-medium
                    tracking-wide
                    transition
                    active:scale-95
                  "
                >
                  <GiftIcon className="w-5 h-5" />
                  <span>Kirim Kado</span>
                </button>
              </DialogTrigger>

              <DialogContent className="rounded-2xl">
                <DialogHeader>
                  <DialogTitle className="text-center">
                    Kirim Kado Anda
                  </DialogTitle>

                  <DialogDescription className="text-center space-y-4 pt-4">
                    {/* <div className="flex justify-center text-[#000035]">
                      <MapPin className="w-6 h-6" />
                    </div> */}

                    <p className="text-sm text-slate-600 leading-relaxed">
                      Apabila Anda berkenan mengirimkan kado secara fisik,
                      dapat dikirimkan ke alamat berikut:
                    </p>

                    <div className="rounded-xl bg-slate-100 px-4 py-3 text-sm font-medium text-slate-700">
                      Jl. Contoh Alamat No. 123<br />
                      Kecamatan Contoh, Kota Contoh<br />
                      12345
                    </div>

                    <p className="text-xs text-slate-500">
                      Mohon konfirmasi terlebih dahulu sebelum pengiriman 🙏
                    </p>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <p className="mt-6 text-white/60 text-sm">
          Terima kasih atas doa dan restu yang diberikan 🤍
        </p>
      </div>
    </Screen>
  );
};
