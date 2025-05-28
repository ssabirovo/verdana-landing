const PhoneBtn = () => {
  return (
    <div className="fixed right-6 bottom-6 z-50">
      <div className="relative h-16 w-16">
        <div className="bg-primary absolute inset-0 animate-ping rounded-full opacity-75"></div>
        <button className="bg-primary relative z-10 h-16 w-16 rounded-full text-white shadow-lg transition-transform hover:scale-105">
          📞
        </button>
      </div>
    </div>
  );
};

export default PhoneBtn;
