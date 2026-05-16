const Input = ({ icon: Icon, ...props }) => {
  return (
    <div className="relative mb-6">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Icon className="size-5 text-green-400" />
      </div>
      <input
        {...props}
        className="w-full pl-10 pr-3 py-3 bg-white/5 backdrop-blur-md rounded-lg border border-white/10 hover:border-green-400/20 focus:border-green-400 focus:ring-2 focus:ring-green-400/40 text-white placeholder:text-gray-400 transition-all duration-300 outline-none shadow-lg shadow-black/20"
      />
    </div>
  );
};
export default Input;
