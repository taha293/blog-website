import { useTheme } from 'next-themes';
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import React, { useEffect, useState } from 'react';



function ThemeToogle() {
    const { theme, setTheme, systemTheme } = useTheme()
    const [isEnabled, setIsEnabled] = useState(false)
    useEffect(() => {
        const currentTheme = theme === "system" ? systemTheme : theme;
        setIsEnabled(currentTheme === "dark");
    }, [theme, systemTheme]);

    return (
        <div className='flex items-center gap-2'>
            <Switch 
                id="dark-mode"
                checked={isEnabled}
                onCheckedChange={(checked) => {
                    setIsEnabled(checked);
                    setTheme(checked ? "dark" : "light");

                    
                }}
                className={`
                    data-[state=checked]:bg-[#1087FF] 
                    transition-colors
                  `}
                
            />
            <Label htmlFor="dark-mode" className='lg:text-[16px] font-semibold text-[#2F353B] dark:text-[#f6f7f8]'>Dark Mode</Label>
        </div>
    )

}

export default ThemeToogle