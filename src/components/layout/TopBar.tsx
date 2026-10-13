import React from 'react';
import { Phone, MapPin, Clock, Award } from 'lucide-react';
import { clinicInfo } from '../../data/staticData';

interface TopBarProps {
  onOpenBooking?: () => void;
}

export const TopBar: React.FC<TopBarProps> = () => {
  return (
    <div className="bg-[#27448a] text-white text-xs border-b border-white/10 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-between gap-6">
          {/* Left: Phone & Clinic Location Links */}
          <div className="flex items-center gap-6">
            <a
              href={`tel:${clinicInfo.rawPhones[0]}`}
              className="flex items-center gap-1.5 text-white/90 hover:text-[#4ecdc4] transition-colors whitespace-nowrap group"
              title="Call Vadodara Clinic Hotline"
            >
              <Phone className="w-3.5 h-3.5 text-[#4ecdc4] group-hover:scale-110 transition-transform" />
              <span className="font-semibold">Vadodara Hotline: {clinicInfo.phones[0]}</span>
            </a>

            <a
              href={clinicInfo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-white/80 hover:text-[#4ecdc4] transition-colors whitespace-nowrap group"
              title="View clinic on Google Maps"
            >
              <MapPin className="w-3.5 h-3.5 text-[#4ecdc4] group-hover:scale-110 transition-transform" />
              <span>Sunpharma Road, Vadodara (Marvel Square)</span>
            </a>
          </div>

          {/* Right: Working Hours & Credentials */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 text-white/80 whitespace-nowrap">
              <Clock className="w-3.5 h-3.5 text-[#4ecdc4]" />
              <span>{clinicInfo.workingHours}</span>
            </div>

            <div className="flex items-center gap-1.5 text-white/85 whitespace-nowrap hidden lg:flex">
              <Award className="w-3.5 h-3.5 text-[#4ecdc4]" />
              <span className="text-[#4ecdc4] font-medium">India's 1st Certified Trichologists</span>
              <span className="text-white/50">· Since 1986</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
