export default function EditorPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Smart Doc Editor</h1>
      {/* Editor UI will go here */}
      <textarea className="w-full h-96 border rounded p-2" placeholder="Start writing your documentation..." />
    </div>
  );
}
