import { LayoutGrid, User, Award, MessageCircle, Wrench } from "lucide-react";
import GlowCard from "./GlowCard";

export default function FeaturedSection() {
  return (
    <section className="mt-7 pb-3">
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-white flex items-center gap-2">
          <LayoutGrid className="w-5 h-5 text-cyan-400" />
          Featured
        </h3>
        <p className="text-gray-400 text-sm mt-1">
          Highlighted sections of my work & profile
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[180px] gap-6">
        <GlowCard className="row-span-2">
          <LayoutGrid className="w-7 h-7 text-white/80" />
          <div>
            <h4 className="text-lg font-semibold text-white mt-4">
              Projects Showcase
            </h4>
            <p className="text-sm text-zinc-400 mt-1">
              Real-world applications and experiments I’ve built.
            </p>
          </div>
        </GlowCard>

        <GlowCard>
          <User className="w-7 h-7 text-white/80" />
          <div>
            <h4 className="text-lg font-semibold text-white mt-4">About Me</h4>
            <p className="text-sm text-zinc-400">Background & journey.</p>
          </div>
        </GlowCard>

        <GlowCard>
          <Wrench className="w-7 h-7 text-white/80" />
          <div>
            <h4 className="text-lg font-semibold text-white mt-4">
              Skills & Tools
            </h4>
            <p className="text-sm text-zinc-400">Stack I use professionally.</p>
          </div>
        </GlowCard>

        <GlowCard>
          <Award className="w-7 h-7 text-white/80" />
          <div>
            <h4 className="text-lg font-semibold text-white mt-4">
              Achievements
            </h4>
            <p className="text-sm text-zinc-400">Milestones & recognitions.</p>
          </div>
        </GlowCard>

        <GlowCard>
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
