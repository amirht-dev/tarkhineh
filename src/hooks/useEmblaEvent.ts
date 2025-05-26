import type { OneOrMore } from "@/types/utils";
import { useEffect } from "react";
import type { EmblaCarouselType, EmblaEventType } from "embla-carousel";

function useEmblaEvent(
  api: EmblaCarouselType | undefined,
  event: OneOrMore<EmblaEventType>,
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
