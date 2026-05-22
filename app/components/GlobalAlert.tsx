"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useAlert } from "../context/AlertContext";
import { Icon } from "./Icons";

export default function GlobalAlert() {
  const { alert, clearAlert } = useAlert();

  return (
    <AnimatePresence>
      {alert && (
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 20, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed top-24 right-4 md:right-8 z-[100] w-full max-w-sm"
        >
          <div
            className={`flex items-start gap-3 px-4 py-4 rounded-xl shadow-lg border ${
              alert.type === "success"
                ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                : alert.type === "error"
                ? "bg-red-50 border-red-200 text-red-800"
                : "bg-blue-50 border-blue-200 text-blue-800"
            }`}
          >
            {alert.type === "success" && <Icon.Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />}
            {alert.type === "error" && <Icon.X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />}
            {alert.type === "info" && <Icon.ArrowRight className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />}

            <p className="flex-1 font-outfit text-sm font-semibold leading-relaxed">
              {alert.message}
            </p>

            <button
              onClick={clearAlert}
              className="p-1 hover:bg-black/5 rounded-full transition-colors shrink-0 mt-0.5"
            >
              <Icon.X className="w-4 h-4 opacity-50 hover:opacity-100" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
