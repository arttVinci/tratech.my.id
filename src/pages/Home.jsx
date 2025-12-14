import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-gray-900"
      >
        Welcome to Traa<span className="text-blue-600">Dev</span>
      </motion.h1>
      <p className="text-gray-500 mt-4">
        Website Portofolio dengan React + Golang
      </p>
    </div>
  );
};

export default Home;
