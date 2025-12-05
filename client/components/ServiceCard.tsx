import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  shortText: string;
  fullText: string;
  image: string;
  slug: string;
}

export const ServiceCard = ({ title, shortText, fullText, image, slug }: ServiceCardProps) => {
  return (
    <div className="group relative h-80 rounded-xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-110 group-hover:contrast-110"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80 transition-all duration-500 ease-in-out group-hover:from-black/40 group-hover:via-black/60 group-hover:to-black/90" />

      {/* Text Overlay */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
        {/* Static Content */}
        <div className="mb-4">
          {/* <p className="text-sm font-medium text-white/80 mb-2 tracking-wider">SERVICE</p> */}
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
        </div>

        {/* Hover Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        >
          <p className="text-sm mb-4 leading-relaxed">{fullText}</p>
          <Link to={`/services/${slug}`}>
            <button className="inline-flex items-center gap-2 text-sm font-semibold bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/30 transition-all duration-300">
              Learn More →
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};