import { handleDataframes } from "./analytics/actions";
import Message from "./analytics/components/message";
import DashboardComponentsNavbar from "./analytics/components/navbar";
import Realod from "./analytics/components/reload";
import Time from "./analytics/components/time";
export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { lowerThanAvarageCount } = await handleDataframes();
  return (
    <section className="flex flex-col h-screen w-full">
      <div className="flex gap-6 lg:flex-row md:flex-row sm:flex-row xs:flex-col flex-col lg:items-center md:items-center sm:items-center xs:items-start px-4 py-4 h-screen relative">
        <DashboardComponentsNavbar />
        <div className="flex flex-col justify-start items-start gap-4 h-full w-full py-4 overflow-auto px-2">
          <div className="flex lg:flex-row md:flex-row sm:flex-row flex-col lg:items-end md:items-end sm:items-end items-center w-full gap-4">
            <Time />
            <Realod />
          </div>
          <Message
            message={`
            Prezado usuário até o momento ${lowerThanAvarageCount["M/LT"]} postos estão abaixo da M/LT médio da Rede.
            ${lowerThanAvarageCount["TMP"]} postos estão com
            TMP abaixo da média da Rede.
            `}
            variant="warning"
            position="center"
          />
          {children}
        </div>
      </div>
    </section>
  );
}
