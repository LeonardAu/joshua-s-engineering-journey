import { motion } from 'framer-motion';

interface ReflectionBoxProps {
  text: string;
}

const ReflectionBox = ({ text }: ReflectionBoxProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="mt-6 p-6 bg-muted/50 rounded-lg border-l-4 border-primary"
    >
      <h4 className="font-serif text-lg font-semibold text-primary mb-3 flex items-center gap-2">
        <span className="text-2xl">✦</span> Reflection
      </h4>
      <p className="text-foreground/80 leading-relaxed italic">{text}</p>
    </motion.div>
  );
};

export default ReflectionBox;
