"use client"

import Link from "next/link"
import { useEffect } from "react"

export default function Home() {
  // Registra a função de conversão no window
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.gtag_report_conversion = function (url) {
        var callback = function () {
          if (typeof url !== "undefined") {
            window.open(url, "_blank")
          }
        }

        if (typeof window.gtag !== "undefined") {
          window.gtag("event", "conversion", {
            send_to: "AW-17677069576/SzhsCIiDhrMbEIjaiu1B",
            value: 1.0,
            currency: "BRL",
            event_callback: callback,
          })
        } else {
          // Se o gtag não carregou ainda, abre direto
          window.open(url, "_blank")
        }

        return false
      }
    }
  }, [])

  const whatsLink =
    "https://wa.me/+55553197447667?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."

  return (
    <div className="min-h-screen flex flex-col bg-black text-white font-sans">
      <header className="bg-white py-2.5 px-4 flex items-center justify-center gap-2 border-b border-yellow-500/20">
        <img src="/logolikeface.png" alt="LikeFace Logo" className="h-[75px] w-auto object-contain" />
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-8 py-12 text-center">
        <p className="text-xl md:text-[1.3rem] font-normal mb-8 opacity-95 text-white">
          Conecte-se agora com a equipe da LikeFace e<br className="hidden md:block" /> continue seu agendamento com
          segurança.
        </p>

        <h2 className="text-[1.75rem] md:text-[2.8rem] font-bold leading-tight mb-10 max-w-[800px] text-white">
          Clique no botão abaixo para prosseguir seu atendimento
        </h2>

        {/* Botão com conversão */}
        <button
          onClick={() => window.gtag_report_conversion(whatsLink)}
          className="relative inline-flex items-center gap-3 bg-[#42ac69] text-white px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:bg-[#20b955] hover:scale-105 animate-pulse-custom"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          Entrar em contato
          <span className="absolute -top-1 right-3 bg-red-600 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center shadow-[0_0_0_2px_#25D366]">
            3
          </span>
        </button>
      </main>

      <footer className="py-8 px-8 text-center bg-white text-gray-800 flex items-center justify-center gap-2 text-sm">
        <span>LikeFace ® Todos direitos reservados.</span>
      </footer>

      <style jsx>{`
        @keyframes pulse-custom {
          0% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.6);
          }
          70% {
            transform: scale(1.05);
            box-shadow: 0 0 0 10px rgba(37, 211, 102, 0);
          }
          100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
          }
        }
        .animate-pulse-custom {
          animation: pulse-custom 2s infinite ease-in-out;
        }
      `}</style>
    </div>
  )
}
