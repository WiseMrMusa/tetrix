import { Controller } from "@/components/controller";
import { Game } from "@/components/game";
import { Life } from "@/components/life";
import { SidePanel } from "@/components/side-panel";
import { TopPanel } from "@/components/top-panel";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col" style={{
      opacity: 1,
      willChange: 'auto'
    }}>
      <div className="text-[#848484] px-10 grid place-content-center flex-1">

        <div className="">
          <div className="w-[712px] bg-[#111] rounded-[19.774px] border-[0.412px] border-[#242424] p-[10px] flex gap-[10px]">
            <div className="flex-1 flex flex-col">
              <TopPanel />
              <Game />
            </div>
            <SidePanel />
          </div>
          <Controller />
        </div>

      </div>
    </div>
  );
}
