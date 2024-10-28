// src/components/App.tsx
import MindMapSection from '@/components/MindMapSection';

export default function Home() {
  return (
    <div className="showcase w-full h-full min-h-screen flex items-center justify-center flex-col">
      {/* <img src="https://cdn-icons-png.flaticon.com/512/2620/2620449.png" className="w-32 h-32" alt="" /> */}
      <h2 className="text-black text-3xl p-4 font-bold">Mind Map con IA</h2>
      <MindMapSection />
    </div>
  );
}
