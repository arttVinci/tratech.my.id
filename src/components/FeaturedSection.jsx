import { LayoutGrid, User, Award, MessageCircle, Wrench } from "lucide-react";
import GlowCard from "./GlowCard";

export default function FeaturedSection() {
  return (
    <section className="mt-7 pb-3">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-white flex items-center gap-2 font-mono tracking-tight">
          <LayoutGrid className="w-7 h-7 text-cyan-400" />
          Featured
        </h3>
        <p className="text-gray-400 mt-1 font-sans text-md">
          Highlighted sections of my work & profile
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[180px] gap-6">
        <GlowCard className="md:col-span-7 md:row-span-2 overflow-hidden group">
          <div className="flex flex-col md:flex-row h-full justify-between">
            <div className="p-2 flex flex-col justify-start md:w-[40%] shrink-0 relative z-10 font-inter">
              <LayoutGrid className="w-7 h-7 text-white mb-3" />

              <h4 className="text-lg font-medium text-white tracking-tight">
                Projects Showcase
              </h4>
              <p className="text-gray-400 text-base">
                A selection of real apps built to solve real problems.
              </p>
            </div>

            <div className="relative flex md:pl-0 flex-col gap-5 overflow-hidden">
              <div className="w-45 aspect-video rounded-xl border border-white/10 overflow-hidden shrink-0 shadow-lg shadow-black/20 ">
                <img
                  src="/images/projects/dekatku/project1.png"
                  className="w-full h-full object-cover"
                  alt="Project Dekatku"
                />
              </div>

              <div className="w-45 aspect-video rounded-xl border border-white/10 overflow-hidden shrink-0 shadow-lg shadow-black/20 ">
                <img
                  src="/images/projects/dekatku/project1.png"
                  className="w-full h-full object-cover"
                  alt="Project Dekatku"
                />
              </div>

              <div className="w-45 aspect-video rounded-xl border border-white/10 overflow-hidden shrink-0 shadow-lg shadow-black/20 ">
                <img
                  src="/images/projects/dekatku/project1.png"
                  className="w-full h-full object-cover"
                  alt="Project Dekatku"
                />
              </div>
            </div>
          </div>
        </GlowCard>

        <GlowCard className="col-span-5">
          <Award className="w-7 h-7 text-white/80" />
          <div>
            <h4 className="text-lg font-semibold text-white mt-4">
              Achievements
            </h4>
            <p className="text-sm text-zinc-400">Milestones & recognitions.</p>
          </div>
        </GlowCard>

        <GlowCard className="col-span-5">
          <Wrench className="w-7 h-7 text-white/80" />
          <div>
            <h4 className="text-lg font-semibold text-white mt-4">Services</h4>
            <p className="text-sm text-zinc-400">
              Fullstack development & system design.
            </p>
          </div>
        </GlowCard>
      </div>
    </section>
  );
}
