import type { AllHTMLAttributes, HTMLAttributes, PropsWithChildren } from "react";

export const Screen: React.FC<PropsWithChildren & { className?: string } & HTMLAttributes<HTMLDivElement>
> = (props) => <div {...props} className={`w-full max-w-106.25 h-screen border overflow-hidden bg-[#000035] ${props.className && props.className}`}>{props.children}
</div>