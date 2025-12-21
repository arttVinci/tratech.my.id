import React, { useState } from "react";
import { GraduationCap, Briefcase } from "lucide-react";
import ExperienceCard from "./ExperienceCard";

export default function CareerCard({ experiences, type }) {
  return (
    <section className="mt-7 pb-3">
      {type === "edu" ? (
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white flex items-center gap-2 font-mono tracking-tight">
            <GraduationCap className="w-7 h-7 text-cyan-400" />
            Education
          </h3>
          <p className="text-gray-400 mt-1 font-sans text-sm">
            My educational journey.
          </p>
        </div>
      ) : null}

      {type === "work" ? (
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white flex items-center gap-2 font-mono tracking-tight">
            <Briefcase className="w-7 h-7 text-cyan-400" />
            Work Experience
          </h3>
          <p className="text-gray-400 mt-1 font-sans text-sm">
            My professional journey.
          </p>
        </div>
      ) : null}

      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <ExperienceCard key={exp.id} experience={exp} index={index} />
        ))}
      </div>
    </section>
  );
}
