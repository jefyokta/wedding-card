import { toast } from "sonner";
import { Screen } from "./screen";
import { CreditCard, MapPin, Gift as GiftIcon, QrCode } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./../components/ui/dialog";
import qris from "@/assets/qr.png"

export const Gift = () => {
  const copyRekening = async () => {
    if (typeof window === "undefined") return;

    await navigator.clipboard.writeText(
     `
     AKMAL LAHIA
Bank BRI
066801035872507

AKMAL LAHIA
Bank Mandiri
1090023173388
     `
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
          <h1 className="text-white text-5xl tangerine-bold tracking-wide">
            Send a Gift
          </h1>

          <div className="w-10/12 h-px bg-white/40 mx-auto" />

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
                  <QrCode className="w-5 h-5" />
                  <span>Qris</span>
                </button>
              </DialogTrigger>

              <DialogContent className="rounded-2xl">
                <DialogHeader>
                  <DialogTitle className="text-center">
                   Scan Kode QR
                  </DialogTitle>

                  <DialogDescription className="text-center space-y-4 pt-4">
        
                <img src={qris} alt="" className="w-full" />
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
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


                    <p className="text-sm text-slate-600 leading-relaxed">
                      Apabila Anda berkenan mengirimkan kado secara fisik,
                      dapat dikirimkan ke alamat berikut:
                    </p>

                    <div className="rounded-xl bg-slate-100 px-4 py-3 text-sm font-medium text-slate-700">
                      Jalan Proklamasi Lk III, RT.2/RW.1, <br />Desa Sungai Jering,<br /> Kec. Kuantan Tengah, Kabupaten Kuantan Singingi, Riau
                     
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
