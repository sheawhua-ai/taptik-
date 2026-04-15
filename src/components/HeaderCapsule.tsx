import { MoreHorizontal, CircleDot } from 'lucide-react';

export default function HeaderCapsule({ dark = false }: { dark?: boolean }) {
  return (
    <div className={`flex items-center border rounded-full h-8 px-1 backdrop-blur-md ${dark ? 'border-white/20 bg-black/20' : 'border-black/10 bg-white/60'}`}>
      <div className={`px-2 border-r flex items-center justify-center ${dark ? 'border-white/20' : 'border-black/10'}`}>
        <MoreHorizontal size={18} strokeWidth={2} className={dark ? 'text-white' : 'text-black'} />
      </div>
      <div className="px-2 flex items-center justify-center">
        <CircleDot size={18} strokeWidth={2} className={dark ? 'text-white' : 'text-black'} />
      </div>
    </div>
  );
}
