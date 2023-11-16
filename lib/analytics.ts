export enum EventType {
  Link = 'link',
  Navigate = 'navigate',
}

type TrackEvent = (
  event_value: string,
  event_type?: { [key: string]: string | number } & {
    type: keyof typeof EventType
  },
  url?: string | undefined,
  website_id?: string | undefined
) => void

export const trackEvent: TrackEvent = (...args) => {
  const umami = (window as any).umami
  if (umami && typeof umami.trackEvent === 'function') {
    umami.trackEvent(...args)
  }
}
