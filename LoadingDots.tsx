export default function LoadingDots() {
  return (
    <div className="flex space-x-2 justify-center items-center">
      <span className="w-3 h-3 bg-pink-500 rounded-full animate-bounce"></span>
      <span className="w-3 h-3 bg-white rounded-full animate-bounce delay-150"></span>
      <span className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce delay-300"></span>
    </div>
  );
}
