import {
  Car,
  Wrench,
  Gauge,
  Disc,
  Settings,
  Filter,
  Sparkles,
} from "lucide-react";

export default function CategoriesMenu() {
  const iconStroke = 2.5; // grossura do ícone
  const iconSize = 20; // tamanho do ícone 

  const categories = [
    { label: "CATEGORIAS", icon: Car },
    { label: "SUSPENSÃO", icon: Wrench },
    { label: "MOTOR", icon: Gauge },
    { label: "DIREÇÃO", icon: Settings },
    { label: "FREIO", icon: Disc },
    { label: "TRANSMISSÃO", icon: Settings },
    { label: "FILTROS", icon: Filter },
    { label: "IGINIÇÃO", icon: Sparkles },
  ];

  return (
    <div className="relative w-full bg-gray-800 shadow-md flex justify-center border-t border-gray-700">
      <div className="flex gap-16 py-3"> {/* MUITO espaçamento entre os itens */}
        {categories.map((cat, index) => {
          const Icon = cat.icon;

          return (
            <div key={index} className="group relative">
              <button className="flex items-center flex-row gap-2 px-2 py-2 text-white hover:text-yellow-600 transition">
                <Icon size={iconSize} strokeWidth={iconStroke} />
                <span className="text-sm font-semibold">{cat.label}</span>
              </button>

              {/* DROPDOWN */}
              <div
  className={`
    absolute mt-3 
    hidden group-hover:flex group-hover:opacity-100 opacity-0
    transition-all duration-200

    ${index === 0 ? "left-0" : ""} 
    ${index === categories.length - 1 ? "right-0" : ""} 
    ${index !== 0 && index !== categories.length - 1 ? "left-1/2 -translate-x-1/2" : ""}
  `}
>
                <div className="bg-white shadow-xl p-8 rounded-md flex gap-16 w-[900px]">

                  {/* COLUNA 1 */}
                  <div className="flex flex-col gap-2 w-48">
                    <h3 className="font-semibold text-gray-900">Direção Hidráulica</h3>
                    <span className="text-gray-500 text-sm">Reservatório</span>
                    <span className="text-gray-500 text-sm">Caixa Hidráulica</span>
                    <span className="text-gray-500 text-sm">Bomba Hidráulica</span>
                    <span className="text-gray-500 text-sm">Polia Hidráulica</span>
                    <span className="text-gray-500 text-sm">Kit Rotativo</span>
                    <span className="text-gray-500 text-sm">Sensor Hidráulico</span>
                    <span className="text-gray-500 text-sm">Barra Axial</span>
                    <h3 className="font-semibold text-gray-900 mt-3">Direção Mecânica</h3>
                    <span className="text-gray-500 text-sm">Caixa Mecânica</span>
                  </div>

                  {/* COLUNA 2 */}
                  <div className="flex flex-col gap-2 w-48">
                    <h3 className="font-semibold text-gray-900">Direção Elétrica</h3>
                    <span className="text-gray-500 text-sm">Caixa Elétrica</span>
                    <span className="text-gray-500 text-sm">Coluna Elétrica</span>
                    <span className="text-gray-500 text-sm">Articulador da Coluna</span>

                    <h3 className="font-semibold text-gray-900 mt-3">Mangueiras Hidráulicas</h3>
                    <span className="text-gray-500 text-sm">Mangueira de Pressão</span>
                    <span className="text-gray-500 text-sm">Mangueira de Retorno</span>
                    <span className="text-gray-500 text-sm">Mangueira de Alimentação</span>
                  </div>

                  {/* COLUNA 3 */}
                  <div className="flex flex-col gap-2 w-48">
                    <h3 className="font-semibold text-gray-900">Kit de Reparo</h3>
                    <span className="text-gray-500 text-sm">Reparo de Bomba</span>
                    <span className="text-gray-500 text-sm">Reparo de Caixa</span>

                    <h3 className="font-semibold text-gray-900 mt-3">Rolamento</h3>
                    <span className="text-gray-500 text-sm">Rolamento de Direção</span>
                  </div>

                </div>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}