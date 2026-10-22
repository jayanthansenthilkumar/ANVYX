import React, { useState } from "react";
import { 
  X, 
  Award, 
  Phone, 
  ExternalLink
} from "lucide-react";
import { eventDetails, scheduleTimeline } from "../data/eventData";

interface EventPosterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EventPosterModal: React.FC<EventPosterModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<"poster" | "schedule" | "speakers">("poster");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#111111]/85 backdrop-blur-none flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="w-full max-w-4xl bg-[#FFFFFF] brutal-border brutal-shadow-xl overflow-hidden flex flex-col max-h-[92vh] animate-in zoom-in-95">
        
        {/* Modal Header */}
        <div className="px-6 py-4 bg-[#111111] text-[#FFFFFF] brutal-border-b flex items-center justify-between font-mono text-xs">
          <div className="flex items-center gap-3">
            <span className="p-1.5 bg-[#C8FF00] text-[#111111] brutal-border flex items-center justify-center">
              <Award className="w-4 h-4" />
            </span>
            <div>
              <h3 className="font-bold text-base text-[#FFFFFF]">ZENTRA '26 EVENT DOSSIER</h3>
              <p className="text-[10px] text-[#888888]">DEPT OF CSBS × AIML // M. KUMARASAMY COLLEGE OF ENGINEERING</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 brutal-border bg-[#FFFFFF] text-[#111111] hover:bg-[#FF3E00] hover:text-[#FFFFFF] transition cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Controls */}
        <div className="px-6 py-2.5 bg-[#F4F2EB] brutal-border-b flex gap-1 font-mono text-xs">
          <button
            onClick={() => setActiveTab("poster")}
            className={`px-3 py-1 font-bold brutal-border transition cursor-pointer ${
              activeTab === "poster"
                ? "bg-[#111111] text-[#C8FF00]"
                : "bg-[#FFFFFF] text-[#111111] hover:bg-[#E8E5DC]"
            }`}
          >
            OFFICIAL FLYER
          </button>
          <button
            onClick={() => setActiveTab("speakers")}
            className={`px-3 py-1 font-bold brutal-border transition cursor-pointer ${
              activeTab === "speakers"
                ? "bg-[#111111] text-[#C8FF00]"
                : "bg-[#FFFFFF] text-[#111111] hover:bg-[#E8E5DC]"
            }`}
          >
            RESOURCE PERSONS
          </button>
          <button
            onClick={() => setActiveTab("schedule")}
            className={`px-3 py-1 font-bold brutal-border transition cursor-pointer ${
              activeTab === "schedule"
                ? "bg-[#111111] text-[#C8FF00]"
                : "bg-[#FFFFFF] text-[#111111] hover:bg-[#E8E5DC]"
            }`}
          >
            FULL SCHEDULE
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-[#F4F2EB]">
          {activeTab === "poster" && (
            <div className="space-y-4 flex flex-col items-center">
              <div className="relative brutal-border brutal-shadow-lg max-w-lg bg-[#FFFFFF] p-2">
                <img 
                  src="/poster.png" 
                  alt="ZENTRA '26 Official Poster - M. Kumarasamy College of Engineering" 
                  className="w-full h-auto object-contain brutal-border-thin"
                />
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2 pt-1 text-xs font-mono font-bold text-[#111111]">
                <span className="bg-[#FFFFFF] px-2 py-0.5 brutal-border-thin">SIR C V RAMAN HALL</span>
                <span>//</span>
                <span className="bg-[#FFFFFF] px-2 py-0.5 brutal-border-thin">23RD OCTOBER 2026</span>
                <span>//</span>
                <span className="bg-[#C8FF00] px-2 py-0.5 brutal-border-thin">9.00 AM - 4.30 PM</span>
              </div>
            </div>
          )}

          {activeTab === "speakers" && (
            <div className="space-y-6">
              <div className="max-w-lg">
                <span className="text-xs font-mono font-bold uppercase text-[#555555]">
                  // ALUMNI INDUSTRY SPEAKERS
                </span>
                <h4 className="font-display font-black text-2xl text-[#111111] mt-0.5">
                  RESOURCE PERSONS
                </h4>
                <p className="text-xs font-mono text-[#555555]">
                  Guiding 1st-year students from foundational theory to working chatbots.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {eventDetails.resourcePersons.map((speaker, idx) => (
                  <div key={idx} className="p-5 brutal-card bg-[#FFFFFF] space-y-3">
                    <div className="flex items-center gap-3 pb-3 border-b border-[#000000]">
                      <div className="w-10 h-10 bg-[#111111] text-[#C8FF00] brutal-border flex items-center justify-center font-display font-black text-lg">
                        {speaker.name[0]}
                      </div>
                      <div>
                        <h5 className="font-display font-black text-base text-[#111111]">{speaker.name}</h5>
                        <p className="text-xs font-mono text-[#0038FF] font-bold">{speaker.role} at {speaker.company}</p>
                      </div>
                    </div>
                    <div className="space-y-1 text-xs font-mono text-[#444444]">
                      <p><span className="font-bold text-[#111111]">DEPT:</span> {speaker.department}</p>
                      <p><span className="font-bold text-[#111111]">BATCH:</span> {speaker.batch}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Student Coordinator */}
              <div className="p-4 bg-[#FFFFFF] brutal-border flex items-center justify-between text-xs font-mono">
                <div>
                  <span className="text-[#555555] uppercase font-bold block text-[10px]">STUDENT COORDINATOR:</span>
                  <span className="text-[#111111] font-display font-black text-base">{eventDetails.studentCoordinator.name}</span>
                </div>
                <a 
                  href={`tel:${eventDetails.studentCoordinator.phone}`}
                  className="px-3 py-1.5 bg-[#C8FF00] text-[#111111] brutal-border-thin font-bold flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  {eventDetails.studentCoordinator.phone}
                </a>
              </div>
            </div>
          )}

          {activeTab === "schedule" && (
            <div className="space-y-4">
              <div className="max-w-lg mb-2">
                <span className="text-xs font-mono font-bold uppercase text-[#555555]">
                  // EVENT ITINERARY
                </span>
                <h4 className="font-display font-black text-2xl text-[#111111] mt-0.5">
                  TIMELINE SCHEDULE
                </h4>
                <p className="text-xs font-mono text-[#555555]">23rd October 2026 // Sir C V Raman Hall</p>
              </div>

              <div className="space-y-2">
                {scheduleTimeline.map((item, idx) => (
                  <div key={idx} className="p-3.5 bg-[#FFFFFF] brutal-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono">
                    <div className="space-y-0.5">
                      <span className="bg-[#111111] text-[#C8FF00] px-1.5 py-0.2 font-bold">{item.time}</span>
                      <h5 className="font-display font-bold text-sm text-[#111111]">{item.title}</h5>
                      <p className="text-[#555555] font-sans font-medium">{item.desc}</p>
                    </div>
                    <span className="w-6 h-6 bg-[#F4F2EB] brutal-border-thin text-[#111111] font-bold flex items-center justify-center shrink-0">
                      0{idx + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-[#FFFFFF] brutal-border-t flex items-center justify-between text-xs font-mono text-[#555555]">
          <div className="flex items-center gap-2">
            <span>{eventDetails.college}</span>
            <span>//</span>
            <a 
              href={`https://${eventDetails.website}`} 
              target="_blank" 
              rel="noreferrer" 
              className="text-[#0038FF] hover:underline flex items-center gap-1 font-bold"
            >
              {eventDetails.website}
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          <button
            onClick={onClose}
            className="brutal-btn brutal-btn-dark px-4 py-1.5 text-xs font-mono"
          >
            CLOSE
          </button>
        </div>

      </div>
    </div>
  );
};
