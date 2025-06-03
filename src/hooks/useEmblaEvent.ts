import type { OneOrMore } from "@/types/utils";
import type { EmblaCarouselType, EmblaEventType } from "embla-carousel";
import { useEffect } from "react";

export type UseEmblaEventType = OneOrMore<EmblaEventType>;

function useEmblaEvent(
  api: EmblaCarouselType | undefined,
  event: UseEmblaEventType,
  cb: (api: EmblaCarouselType) => void,
) {
  useEffect(() => {
    if (!api) return;

    (Array.isArray(event) ? event : [event]).forEach((e) => {
      api.on(e, cb);
    });

    return () => {
      (Array.isArray(event) ? event : [event]).forEach((e) => {
        api.off(e, cb);
      });
    };
  }, [api, event, cb]);
}

export default useEmblaEvent;
