import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

export default function RotateIcon({ children }: Props) {
  return (
    <motion.div
      whileTap={{ scale: 0.9, rotate: 360 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
    >
      {children}
    </motion.div>
  );
}
