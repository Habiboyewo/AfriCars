"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Monitor } from "lucide-react"; // icons

export default function ThemeButton() {
    const { theme, setTheme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Fix hydration mismatch
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    // Cycle themes: system → light → dark → system
    const cycleTheme = () => {
        if (theme === "system") {
            setTheme("light");
        } else if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("system");
        }
    };

    // Decide label + icon
    let label, icon;
    if (theme === "system") {
        label = "Auto";
        icon = <Monitor size={16} />;
    } else if (theme === "light") {
        label = "Light";
        icon = <Sun size={16} className="text-yellow-500" />;
    } else {
        label = "Dark";
        icon = <Moon size={16} className="text-blue-400" />;
    }

    return (
        <button
            onClick={cycleTheme}
            className="flex items-center gap-2 px-3 py-1.5 border border-gray-300 rounded-xl px-4 py-1 font-semibold
                 dark:border-gray-600   text-sm"
            title={`Theme: ${label} ${theme === "system" ? `(${systemTheme})` : ""
                }`}
        >
            {icon}
            {label}
        </button>
    );
}
