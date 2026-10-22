import React, { useState } from "react";
import { 
  X, 
  Download, 
  Calendar, 
  Clock, 
  MapPin, 
  Award, 
  Phone, 
  Globe, 
  ExternalLink,
  Users,
  CheckCircle2
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
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="w-full max-w-4xl bg-slate-950 border border-white/15 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] animate-in zoom-in-95">
        
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-900 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
              <Award className="w-5 h-5" />
            </span>
            <div>
              <h3 className="font-bold text-white text-base">ZENTRA '26 Event Dossier</h3>
              <p className="text-xs text-slate-400 font-mono">Department of CSBS & AIML • MKCE</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="px-6 py-2.5 bg-slate-900/40 border-b border-white/5 flex gap-2">
          <button
            onClick={() => setActiveTab("poster")}
            className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition cursor-pointer ${
              activeTab === "poster"
                ? "bg-cyan-500 text-slate-950 font-bold"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Official Poster
          </button>
          <button
            onClick={() => setActiveTab("speakers")}
            className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition cursor-pointer ${
              activeTab === "speakers"
                ? "bg-cyan-500 text-slate-950 font-bold"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Resource Persons
          </button>
          <button
            onClick={() => setActiveTab("schedule")}
            className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition cursor-pointer ${
              activeTab === "schedule"
                ? "bg-cyan-500 text-slate-950 font-bold"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Full Day Schedule
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {activeTab === "poster" && (
            <div className="space-y-4 flex flex-col items-center">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl max-w-lg bg-slate-900">
                <img 
                  src="/poster.png" 
                  alt="ZENTRA '26 Official Poster - M. Kumarasamy College of Engineering" 
                  className="w-full h-auto object-contain"
                  onError={(e) => {
                    // Fallback to absolute or placeholder if needed
                    (e.target as HTMLElement).style.display = "none";
                  }}
                />
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs text-slate-400 font-mono">
                <span>Sir C V Raman Hall</span>
                <span>•</span>
                <span>23rd October 2026</span>
                <span>•</span>
                <span>9.00 AM - 4.30 PM</span>
              </div>
            </div>
          )}

          {activeTab === "speakers" && (
            <div className="space-y-6">
              <div className="text-center max-w-lg mx-auto">
                <span className="text-xs font-mono uppercase text-cyan-400">Distinguished Alumni & Engineers</span>
                <h4 className="text-xl font-black text-white mt-1">Resource Persons</h4>
                <p className="text-xs text-slate-400 mt-1">
                  Guiding 1st-year students from theory to production chatbots.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {eventDetails.resourcePersons.map((speaker, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-slate-900/90 border border-cyan-500/30 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg">
                        {speaker.name[0]}
                      </div>
                      <div>
                        <h5 className="font-bold text-white text-base">{speaker.name}</h5>
                        <p className="text-xs text-cyan-300 font-medium">{speaker.role} at {speaker.company}</p>
                      </div>
                    </div>
                    <div className="pt-2 border-t border-white/5 space-y-1 text-xs text-slate-300">
                      <p><span className="text-slate-500">Department:</span> {speaker.department}</p>
                      <p><span className="text-slate-500">Alumni Batch:</span> {speaker.batch}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Student Coordinator */}
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/10 flex items-center justify-between text-xs">
                <div>
                  <span className="text-slate-400 uppercase font-mono text-[10px] block">Student Coordinator:</span>
                  <span className="text-white font-bold text-sm">{eventDetails.studentCoordinator.name}</span>
                </div>
                <a 
                  href={`tel:${eventDetails.studentCoordinator.phone}`}
                  className="px-3 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-mono flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  {eventDetails.studentCoordinator.phone}
                </a>
              </div>
            </div>
          )}

          {activeTab === "schedule" && (
            <div className="space-y-4">
              <div className="text-center max-w-lg mx-auto mb-4">
                <h4 className="text-lg font-bold text-white">Event Itinerary & Timeline</h4>
                <p className="text-xs text-slate-400">23rd October 2026 • Sir C V Raman Hall</p>
              </div>

              <div className="space-y-3">
                {scheduleTimeline.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-900/80 border border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                    <div className="space-y-1">
                      <span className="font-mono text-cyan-400 font-semibold">{item.time}</span>
                      <h5 className="text-sm font-bold text-white">{item.title}</h5>
                      <p className="text-slate-400">{item.desc}</p>
                    </div>
                    <span className="w-5 h-5 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center font-mono text-[11px] shrink-0">
                      {idx + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-900 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span>{eventDetails.college}</span>
            <span>•</span>
            <a 
              href={`https://${eventDetails.website}`} 
              target="_blank" 
              rel="noreferrer" 
              className="text-cyan-400 hover:underline flex items-center gap-1"
            >
              {eventDetails.website}
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
