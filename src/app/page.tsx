// src/components/App.tsx
import MindMapSection from '@/components/MindMapSection';

export default function Home() {
  return (
    <div className="showcase w-full h-full">
      <h2 className="text-black text-3xl p-4 font-bold">Mind Map con IA en Streaming</h2>
      <MindMapSection />
    </div>
  );
}
