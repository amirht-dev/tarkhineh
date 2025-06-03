import type { EmblaCarouselType } from "embla-carousel";

export type SnapObject = {
  value: number;
  index: number;
};

export function getSlideIndexesBySnap(
  api: EmblaCarouselType,
  snapIndex: number,
) {
  const engine = api.internalEngine();

  return engine.slideRegistry[snapIndex];
}

export function getSlideElementsBySnap(
  api: EmblaCarouselType,
  snapIndex: number,
) {
  const slides = api.slideNodes();

  return getSlideIndexesBySnap(api, snapIndex).map(
    (slideIndex) => slides[slideIndex],
  );
}

/**
 * @description used for map snap points to corresponding slides that are exists in that snap point
 * @returns array of slide index list
 */
export function mapSnapListToSlideList(api: EmblaCarouselType) {
  return api.scrollSnapList().map((_, idx) => getSlideIndexesBySnap(api, idx));
}

/**
 * @description returns array of snap points that are currently in view
 * @returns array of snap points
 */
export function getSnapsInView(api: EmblaCarouselType) {
  const slidesInView = api.slidesInView();

  return api
    .scrollSnapList()
    .map<SnapObject>((value, index) => ({ value, index }))
    .filter(({ index }) =>
      getSlideIndexesBySnap(api, index).every((slideIndex) =>
        slidesInView.includes(slideIndex),
      ),
    );
}

export function getSlideElement<T extends HTMLElement = HTMLElement>(
  api: EmblaCarouselType,
  slideIndex: number,
) {
  return api.slideNodes()[slideIndex] as T;
}

export function getSlideElements<T extends HTMLElement = HTMLElement>(
  api: EmblaCarouselType,
  slideIndexes: number[],
) {
  const slideNodes = api.slideNodes();

  return slideIndexes.map((slideIndex) => slideNodes[slideIndex] as T);
}

export function getSlideElementsInView(api: EmblaCarouselType) {
  return getSlideElements(api, api.slidesInView());
}

export function getSnapOfSlide(
  api: EmblaCarouselType,
  slideIndex: number,
): SnapObject {
  const snapIndex = mapSnapListToSlideList(api).findIndex((slideIndexList) =>
    slideIndexList.includes(slideIndex),
  );

  return {
    value: api.scrollSnapList()[snapIndex],
    index: snapIndex,
  };
}

export function mapSlideNodesToSelector<T extends HTMLElement = HTMLElement>(
  api: EmblaCarouselType,
  selector: string,
) {
  return api.slideNodes().map((slide) => slide.querySelector(selector) as T);
}

export function getSnapDiffToTarget(api: EmblaCarouselType, snapIndex: number) {
  const engine = api.internalEngine();
  const snap = api.scrollSnapList()[snapIndex];
  const scrollProgress = api.scrollProgress();

  let diffToTarget = snap - scrollProgress;

  const snapSlides = getSlideIndexesBySnap(api, snapIndex);

  if (engine.options.loop) {
    engine.slideLooper.loopPoints.forEach((loopItems) => {
      const target = loopItems.target();

      if (target !== 0 && snapSlides.includes(loopItems.index)) {
        const sign = Math.sign(target);

        if (sign === 1) {
          diffToTarget = snap + 1 - scrollProgress;
        }
        if (sign === -1) {
          diffToTarget = snap - 1 - scrollProgress;
        }
      }
    });
  }

  return diffToTarget;
}
