import React from 'react';
import { Award, Users, Home, Globe } from 'lucide-react';

const PillarCard = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-2">
    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
      <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
    </div>
    
    <h3 className="text-neutral-400 font-semibold text-sm mb-3 leading-tight">
      {title}
    </h3>
    
    <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
      {description}
    </p>
  </div>
);

export default function ChooseSurfCamp() {
  const pillars = [
    {
      icon: Award,
      title: "5★ Tripadvisor Travelers' Choice Award",
      description: "Recognized globally for excellence in surf experiences and service."
    },
    {
      icon: Users,
      title: "Certified Local Coaches",
      description: "Trained surfing from the region who know the waves better than anyone."
    },
    {
      icon: Home,
      title: "Beachfront Locations",
      description: "Wake up to the waves in both Sri Lanka and Morocco."
    },
    {
      icon: Globe,
      title: "Global Surf Community",
      description: "Join a tribe of surfers from over 60 countries."
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-400 mb-2">
            Why Choose The Surfer Surf Camps?
          </h2>
          <p className="text-neutral-400 text-lg">
            4 Key Pillars You Can Use:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <div key={index} className="transform transition-transform duration-300 hover:scale-105">
              <PillarCard
                icon={pillar.icon}
                title={pillar.title}
                description={pillar.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}