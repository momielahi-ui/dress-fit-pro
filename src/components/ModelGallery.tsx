import { motion } from "framer-motion";
import { User } from "lucide-react";
import modelMale from "@/assets/model-male.jpg";
import modelFemale from "@/assets/model-female.jpg";
import modelAlt from "@/assets/model-alt.jpg";

const models = [
  { id: "male", label: "Model A", src: modelMale },
  { id: "female", label: "Model B", src: modelFemale },
  { id: "alt", label: "Model C", src: modelAlt },
];

interface ModelGalleryProps {
  selected: string | null;
  onSelect: (src: string) => void | Promise<void>;
}

export function ModelGallery({ selected, onSelect }: ModelGalleryProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-display font-medium text-muted-foreground uppercase tracking-wider flex items-center gap-2">
        <User size={14} />
        Choose a Model
      </h3>
      <div className="grid grid-cols-3 gap-3">
        {models.map((model) => (
          <motion.button
            key={model.id}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              void onSelect(model.src);
            }}
            className={`relative overflow-hidden rounded-lg glass glass-hover transition-all ${
              selected === model.src ? "ring-2 ring-primary glow-primary" : ""
            }`}
          >
            <img
              src={model.src}
              alt={model.label}
              className="w-full aspect-[3/4] object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-background/90 to-transparent p-2">
              <span className="text-xs font-display font-medium text-foreground">{model.label}</span>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
