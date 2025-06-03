import {
  getSlideElementsBySnap,
  getSnapDiffToTarget,
  getSnapsInView,
  SnapObject,
} from "@/utils/embla";
import { EmblaCarouselType } from "embla-carousel";
import useEmblaEvent, { UseEmblaEventType } from "./useEmblaEvent";

export type EmblaEffectCallbackContext = {
  diffToTarget: number;
  snap: SnapObject;
  api: EmblaCarouselType;
};

export type UseEmblaEffectCallback = (
  context: EmblaEffectCallbackContext,
) => void;

export type EmblaEffectOptions = {
  onlyInView: boolean;
  eventTargets: UseEmblaEventType;
};

export default function useEmblaEffect(
  api: EmblaCarouselType | undefined,
  callback: UseEmblaEffectCallback,
  {
    onlyInView = true,
    eventTargets = ["scroll", "init", "reInit"],
  }: Partial<EmblaEffectOptions> = {},
) {
  useEmblaEvent(api, eventTargets, (api) => {
    const snapList = onlyInView
      ? getSnapsInView(api)
      : api
          .scrollSnapList()
          .map<SnapObject>((value, index) => ({ value, index }));

    snapList.forEach((snap) => {
      callback({
        diffToTarget: getSnapDiffToTarget(api, snap.index),
        snap,
        api,
      });
    });
  });
}

export type EmblaScaleTargetContext = {
  scale: number;
  slide: HTMLElement;
  wrapperSlide: HTMLElement;
};

export type EmblaScaleEffectOptions = {
  factor: number;
  wrapperSlideSelector: string;
  min: number;
  target:
    | (typeof EMBLA_SCALE_EFFECT_TARGETS)[number]
    | ((context: EmblaScaleTargetContext) => void);
};

export const EMBLA_SCALE_EFFECT_TARGETS = ["transform", "CSSvariable"] as const;

export function scaleEffect({
  factor = 1,
  wrapperSlideSelector = "div",
  min = 0,
}: Partial<EmblaScaleEffectOptions> = {}): UseEmblaEffectCallback {
  return ({ diffToTarget, snap, api }) => {
    const snapSlidesElements = getSlideElementsBySnap(api, snap.index);

    snapSlidesElements.forEach((slideElement) => {
      const scale = Math.max(1 - Math.abs(diffToTarget) * factor, min);

      (
        slideElement.querySelector(wrapperSlideSelector) as HTMLElement
      ).style.transform = `scale(${scale})`;
    });
  };
}
