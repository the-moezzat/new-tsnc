import { useRef, useState } from "react";
import { useClickAway } from "react-use";
import {Info} from "lucide-react";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";

export default function MoreInfo({ children }: { children: React.ReactNode }) {
    const ref = useRef(null);
    const [open, setOpen] = useState(false);
    useClickAway(ref, () => {
        setOpen(false);
    });

    return (
        <TooltipProvider delayDuration={150}>
            <Tooltip open={open}>
                <div ref={ref}>
                    <TooltipTrigger
                        onClick={() => setOpen((state) => !state)}
                        type="button"
                        className={'text-[#F3F3F3]'}
                    >
                        <Info fill={'#3A962A'} />
                    </TooltipTrigger>
                    <TooltipContent className="w-72 bg-white">{children}</TooltipContent>
                </div>
            </Tooltip>
        </TooltipProvider>
    );
}