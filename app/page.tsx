import PixelButton from "@/components/PixelButton";
import StageCard from "@/components/StageCard";
import { STAGES } from "@/lib/stages";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      {/* ---------- HERO ---------- */}
      <section className="flex flex-col items-center gap-7 pt-8 text-center sm:pt-16">
        <span className="font-arcade text-[9px] tracking-[0.3em] text-neutral-500">
          1 PLAYER · LEVEL UP YOUR CLI
        </span>

        <h1 className="text-gradient-title animate-flicker font-arcade text-3xl leading-[1.4] sm:text-5xl sm:leading-[1.35]">
          CLAUDE
          <br />
          CODE
          <br />
          ARCADE
        </h1>

        <p className="max-w-md text-base text-neutral-300 sm:text-lg">
          &quot;~해줘&quot; 말고,{" "}
          <span className="text-neon-yellow">제대로 써보자.</span>
        </p>

        <p className="max-w-lg text-sm leading-relaxed text-neutral-500">
          코딩은 할 줄 아는데 Claude Code는 명령어로만 쓰던 너를 위한 공략집.
          레트로 오락실에서 진짜 잘 쓰는 법을 배워라.
        </p>

        <div className="mt-2 font-arcade text-xs text-neon-pink">
          <span className="animate-blink">▶ INSERT COIN TO CONTINUE</span>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
          <PixelButton href="/stages" variant="pink">
            PRESS START
          </PixelButton>
          <PixelButton href="/cheat-sheet" variant="purple">
            CHEAT SHEET
          </PixelButton>
        </div>
      </section>

      {/* ---------- STAGE SELECT ---------- */}
      <section>
        <div className="mb-8 flex items-end justify-between gap-4 border-b border-border pb-4">
          <h2 className="font-arcade text-sm tracking-wider text-white sm:text-base">
            SELECT STAGE
          </h2>
          <span className="font-arcade text-[8px] text-neutral-600">
            {STAGES.length} STAGES
          </span>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {STAGES.map((stage) => (
            <StageCard key={stage.slug} stage={stage} />
          ))}
        </div>
      </section>
    </div>
  );
}
