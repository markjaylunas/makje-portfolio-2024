import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

export default function FlipIcon({ children }: Props) {
  return (
    <motion.div
      whileTap={{ rotateX: 180 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
    >
      {children}
    </motion.div>
  );
}
