import { Button } from "@/components/ui/button";
import { CTA_SCHEDULE_HREF, CTA_SCHEDULE_LABEL } from "@/components/layout/nav.config";

/**
 * MobileBottomCTA — CTA persistente fixo no rodapé (Story 1.3 AC3, só mobile).
 * No desktop, o CTA persistente vive no Header. Z-index abaixo do Dialog do menu
 * (90 < 100/200 do header e overlay) para não competir com o overlay do menu.
 */
export function MobileBottomCTA() {
  return (
    <div className="fixed inset-x-md bottom-md z-[90] md:hidden">
      <Button
        asChild
        className="w-full shadow-[var(--shadow-elevated)]"
        variant="primary"
        size="lg"
      >
        <a href={CTA_SCHEDULE_HREF} data-cta="schedule-mobile-fixed">
          {CTA_SCHEDULE_LABEL}
        </a>
      </Button>
    </div>
  );
}
