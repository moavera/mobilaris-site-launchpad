import logo from "@/assets/site-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-[#121214] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-start">
          <img 
            src={logo} 
            alt="Mobilaris logo" 
            className="h-12 mb-4"
          />
          <p className="text-white/80 text-sm">
            Real-time positioning and 3D-visualization of your site
          </p>
        </div>
      </div>
    </footer>
  );
};
